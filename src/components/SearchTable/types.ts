import type { RenderFunction } from 'vue'

interface Options {
  label: string
  value: any
}

export interface FilterOptions {
  type: 'input' | 'date' | 'select'
  enums?: Options[]
}

export interface Columns extends Record<string, any> {
  filterOptions?: FilterOptions | ((p: any) => RenderFunction)
  isAction?: boolean
}

export interface MyTableProps {
  columns: Columns[]
  isShowTable?: boolean
  isShowFilter?: boolean
  isShowPage?: boolean
  // hasTableAction: true
  request: () => Promise<any>
}
