import type { RenderFunction } from 'vue'
import type { FormRules, TableColumnCtx } from 'element-plus'
import type { AnyFn } from '@vueuse/core'

interface SelectOptions {
  label: string
  value: any
}

export interface FilterOptions {
  labelName: 'input' | 'date' | 'select'
  newLabelName?: 'input' | 'date' | 'select' // 新建时可能得不一样type
  enums?: SelectOptions[]
  rules?: FormRules
  renderFn?: ((p: any) => RenderFunction)
  isShowInSearch?: boolean
  isShowInEdit?: boolean
}

export interface Columns extends TableColumnCtx<any> {
  filterOptions?: FilterOptions
  isAction?: boolean
  isShowInTable: boolean
}

export interface MyTableProps {
  columns: Columns[] | any
  isShowTable?: boolean
  isShowFilter?: boolean
  isShowPage?: boolean
  // hasTableAction: true
  listRequest?: AnyFn
  detailRequest?: AnyFn
  deleteRequest?: AnyFn
  editRequest?: AnyFn
  newRequest?: AnyFn
}

export enum ModalModeEnum {
  'detail' = '详情',
  'edit' = '编辑',
  'new' = '新建',
}

export type ModalMode = keyof typeof ModalModeEnum
