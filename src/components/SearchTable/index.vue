<script lang="tsx" setup>
import { ElFormItem, ElTable, ElTableColumn } from 'element-plus'
import type { FunctionalComponent } from 'vue'
import type { MyTableProps } from './types'
import { usePage } from '@/hooks/usePage'

const props = withDefaults(defineProps<MyTableProps>(), {
  columns: () => [],
  isShowFilter: true,
  isShowTable: true,
  isShowPage: true,
})

const emits = defineEmits(['onEdit', 'onDelete'])

const filterItems = props?.columns?.filter(item => item.filterOptions)

const searchParams = ref(filterItems.reduce((prev, next) => {
  const obj = next.prop ? { [next.prop]: null } : {}
  return { ...prev, ...obj }
}, {}))

const { page, size, total, list, getMorePage, resetPage, loading: tableLoading } = usePage(props.request)

getMorePage(searchParams.value)

function RenderFilter(props: any) {
  return props?.fn(searchParams)
}

const Table: FunctionalComponent = (_, { attrs, slots }) => <ElTable v-loading={tableLoading.value} data={list.value as []} {...attrs}>
    {
      props?.columns?.map(item =>
        <ElTableColumn {...item} v-slots={{
          default: (scope: any) => item.renderCell?.(scope) ?? scope.row[item?.prop as string] ?? '-',
          header: (scope: any) => item.renderHeader?.(scope) ?? scope.column?.label,
        }}/>,
      )
    }

    {
      !props?.columns.some(item => item.isAction)
        ? <ElTableColumn label='操作' width="250" fixed="right" v-slots={{
          default: (scope: any) => slots?.action?.(scope),
        }} />
        : null
    }
    </ElTable>

function submitFilterForm() {
  getMorePage(searchParams.value)
}

function resetFilterForm() {
  Object.keys(searchParams.value).forEach((key) => {
    searchParams.value[key] = null
  })
  resetPage()
  getMorePage()
}

function handleSizeChange() {

}

function handleCurrentChange(val) {
  page.value = val
  getMorePage(searchParams.value)
}

function handleEdit(index, row) {
  emits('onEdit', index, row)
}

function handleDelete(index, row) {
  emits('onDelete', index, row)
}
</script>

<template>
  <div class="flex flex-col h-full">
    <ElForm
      v-if="isShowFilter"
      :model="searchParams"
      class="px-16px pt-16px mb-16px bg-white"
    >
      <ElRow
        :gutter="16"
      >
        <ElCol
          v-for="(item, index) in filterItems"
          :key="index"
          :span="8"
          :lg="4"
          :md="6"
        >
          <template v-if="typeof item?.filterOptions === 'function'">
            <ElFormItem
              :label="item.label"
            >
              <RenderFilter :fn="item.filterOptions" />
            </ElFormItem>
          </template>
          <template v-else>
            <ElFormItem
              :label="item.label"
            >
              <template v-if="item?.filterOptions?.type === 'input' ">
                <ElInput
                  v-model="searchParams[item.prop as string]"
                  :placeholder="`请输入${item.label}`"
                />
              </template>
              <template v-if="item?.filterOptions?.type === 'select' ">
                <ElSelect
                  v-model="searchParams[item.prop as string]"
                  :placeholder="`请选择${item.label}`"
                >
                  <ElOption
                    v-for="option in item?.filterOptions?.enums"
                    :key="option.value"
                    :label="option?.label"
                    :value="option?.value"
                  />
                </ElSelect>
              </template>
            </ElFormItem>
          </template>
        </ElCol>
        <ElCol
          :span="8"
          :lg="4"
          :md="6"
        >
          <ElFormItem>
            <ElButton
              type="primary"
              :disabled="tableLoading"
              @click="submitFilterForm"
            >
              搜索
            </ElButton>
            <ElButton
              :disabled="tableLoading"
              @click="resetFilterForm"
            >
              重置
            </ElButton>
          </ElFormItem>
        </ElCol>
      </ElRow>
    </ElForm>
    <div class="flex-1 pb-24px overflow-auto bg-white">
      <Table
        v-if="isShowTable"
        v-bind="$attrs"
        height="100%"
      >
        <template #action="scope">
          <slot
            name="action"
            :scope="scope"
          >
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)"
            >
              编辑
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              删除
            </el-button>
          </slot>
        </template>
      </Table>
    </div>
    <!-- <shadow /> -->
    <div class="footer pb-24px px-16px bg-white">
      <ElPagination
        v-if="isShowPage"
        v-model:current-page="page"
        v-model:page-size="size"
        :page-sizes="[20, 40, 60]"
        background
        layout="total, prev, pager, next, jumper"
        :total="total"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.el-select{
  width: 100%;
}
</style>
