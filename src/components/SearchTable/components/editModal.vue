<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints, watchDebounced } from '@vueuse/core'
import { ModalModeEnum } from '../types'
import type { Columns, ModalMode } from '../types'
import { DetailOrEdit } from './detailOrEdit'
import { GetComp, RenderFilter } from '.'

interface IProps {
  mode: ModalMode
  editItems: Columns[]
  detailRequest?: () => Promise<any>
}
const props = withDefaults(defineProps<IProps>(), {
  mode: 'edit',
})

const breakpoints = useBreakpoints(breakpointsTailwind)

const lgAndSmaller = breakpoints.smallerOrEqual('lg')

const editParams = ref(props.editItems.reduce((prev, next) => {
  const obj = next.prop ? { [next.prop]: null } : {}
  return { ...prev, ...obj }
}, {}))

const modal = ref()
const formEl = ref()
const formLoading = ref(false)
const isChanged = ref(false)

let unWatch: any = null
let clonedEditParams: any = null

watch(() => modal.value?.visible, async (nv, ov) => {
  if (nv) {
    if (props.mode === 'edit') {
      try {
        formLoading.value = true
        const res = await props?.detailRequest?.()
        if (!res) return

        Object.keys(editParams.value).forEach((key) => {
          editParams.value[key] = res[key]
        })
        clonedEditParams = Object.entries(editParams.value).toString()
        unWatch = watchDebounced(editParams, (nv) => {
          // 判断是否更改过值
          isChanged.value = Object.entries(nv).toString() !== clonedEditParams
        }, {
          deep: true,
          debounce: 500,
        })
      }
      catch (error) {
        console.error(error)
      }
      finally {
        formLoading.value = false
      }
    }
  }
  else {
    clonedEditParams = null
    unWatch && unWatch() && (unWatch = null)
    isChanged.value = false
  }
  // 重置表单组件
  if (!nv && ov !== undefined) {
    await nextTick()
    resetForm(formEl.value)
  }
})

function hiddenModal() {
  modal.value.visible = false
}

function resetForm(formEl) {
  if (!formEl) return
  formEl.resetFields()
}

function submitForm(formEl) {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    }
    else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<template>
  <el-dialog
    v-bind="$attrs"
    ref="modal"
    class="edit-modal max-h-70vh flex flex-col m-b-15vh!"
    :title="ModalModeEnum[mode]"
    :width="lgAndSmaller ? '90%' : '800px'"
  >
    <ElForm
      ref="formEl"
      v-loading="formLoading"
      :model="editParams"
      class="px-16px pt-16px mb-16px v3-bg"
    >
      <ElFormItem
        v-for="item in editItems"
        :key="item.prop"
        :label="item.label"
        label-width="100px"
        :prop="item.prop"
        :rules="item?.filterOptions?.rules"
      >
        <DetailOrEdit :mode="mode">
          <template v-if="item?.filterOptions?.renderFn">
            <RenderFilter
              :fn="item.filterOptions.renderFn"
              :data="editParams"
            />
          </template>

          <GetComp
            v-else
            v-model="editParams[item.prop as string]"
            :name="mode === 'new' ? item?.filterOptions?.newLabelName || item?.filterOptions?.labelName : item?.filterOptions?.labelName "
            :placeholder="`请输入${item.label}`"
            :options="item?.filterOptions?.enums"
            v-bind="item.filterOptions"
          />
        </DetailOrEdit>
      </ElFormItem>
    </ElForm>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="hiddenModal">取消</el-button>
        <el-button
          type="primary"
          :disabled="!isChanged && mode === 'edit'"
          @click="submitForm(formEl)"
        >
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss">
  .edit-modal {
    .el-dialog__body{
      flex: 1;
      overflow: auto;
      padding: 0;
      padding-right: 16px
    }
  }
</style>
