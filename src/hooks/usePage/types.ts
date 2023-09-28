export interface IPageData {
  list: []
  total: number
}

export interface PageType {
  page?: number
  size?: number
}

export interface IFnParams extends PageType, Record<string, any> {
}
