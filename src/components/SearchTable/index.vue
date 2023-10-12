<script lang="tsx" setup>
import { ElFormItem, ElTable, ElTableColumn } from 'element-plus'
import type { FunctionalComponent } from 'vue'
import type { ModalMode, MyTableProps } from './types'
import { GetComp, RenderFilter } from './components'
import EditModal from './components/editModal.vue'
import { usePage } from '@/hooks/usePage'

const props = withDefaults(defineProps<MyTableProps>(), {
  columns: () => [],
  isShowFilter: true,
  isShowTable: true,
  isShowPage: true,
})

const emits = defineEmits(['onEdit', 'onDelete', 'onNew'])

const showEditModal = ref(false)
const currentId = ref('')
const editMode = ref<ModalMode>('edit')

const filterItems = props?.columns?.filter(item => item.filterOptions && item.filterOptions.isShowInSearch !== false) || []
const editItems = props?.columns?.filter(item => item.filterOptions && item.filterOptions.isShowInEdit !== false) || []

const searchParams = ref(filterItems.reduce((prev, next) => {
  const obj = next.prop ? { [next.prop]: null } : {}
  return { ...prev, ...obj }
}, {}))

const { page, size, total, list, getMorePage, resetPage, loading: tableLoading } = usePage(props.listRequest)

getMorePage(searchParams.value)

const Table: FunctionalComponent = (_, { attrs, slots }) => <ElTable v-loading={tableLoading.value} data={list.value as []} {...attrs}>
    {
      props?.columns?.filter(item => item.isShowInTable || item.isShowInTable === undefined)?.map(item =>
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
  showEditModal.value = true
  currentId.value = row.id
  editMode.value = 'edit'
  emits('onEdit', index, row)
}

function handleNew() {
  showEditModal.value = true
  editMode.value = 'new'
  emits('onNew')
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
      class="px-16px pt-16px mb-16px v3-bg"
    >
      <ElRow
        :gutter="16"
      >
        <ElCol
          v-for="(item, index) in filterItems"
          :key="index"
          :span="8"
          :xl="4"
          :lg="6"
          :xs="24"
        >
          <template v-if="item.filterOptions.renderFn">
            <ElFormItem
              :label="item.label"
            >
              <RenderFilter
                :fn="item.filterOptions.renderFn"
                :data="searchParams"
              />
            </ElFormItem>
          </template>
          <template v-else>
            <ElFormItem
              :label="item.label"
            >
              <GetComp
                v-model="searchParams[item.prop as string]"
                :name="item?.filterOptions?.type"
                :placeholder="`请输入${item.label}`"
                :options="item?.filterOptions?.enums"
              />
            </ElFormItem>
          </template>
        </ElCol>
        <ElCol
          :span="8"
          :xl="4"
          :lg="6"
          :xs="24"
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
            <ElButton
              :disabled="tableLoading"
              @click="handleNew"
            >
              新建
            </ElButton>
          </ElFormItem>
        </ElCol>
      </ElRow>
    </ElForm>
    <div class="flex-1 pb-16px overflow-auto v3-bg">
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
    <div class="footer pb-16px px-16px v3-bg">
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
    <EditModal
      v-model="showEditModal"
      :mode="editMode"
      :edit-items="editItems"
      :detail-request="() => currentId && detailRequest ? detailRequest(currentId) : null"
    />
  </div>
</template>

<style scoped lang="scss">
.el-select{
  width: 100%;

}
</style>
