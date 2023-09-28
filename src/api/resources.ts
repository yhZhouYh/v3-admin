/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript'
// @ts-ignore
import request from "../utils/service"

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>

// Request: 目前 React Hooks 功能有用到
export type Request<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult
> = (TRequestConfig["requestDataOptional"] extends true
  ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
  : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
  requestConfig: TRequestConfig
}

const mockUrl_0_0_0_0 = "https://yapi.shuinfo.tech/mock/1024" as any
const devUrl_0_0_0_0 = "" as any
const prodUrl_0_0_0_0 = "" as any
const dataKey_0_0_0_0 = "data" as any

/**
 * 接口 [修改资源↗](https://yapi.shuinfo.tech/project/1024/interface/api/280692) 的 **请求类型**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `PUT /iam/resources/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface PutIamResourcesIdRequest {
  /**
   * 父ID
   */
  parentId: number
  /**
   * 资源类型-枚举值（DIR/PAGE/API）
   */
  type: string
  /**
   * 资源名称
   */
  name: string
  /**
   * 图标
   */
  icon?: string
  /**
   * 接口请求方法
   */
  method?: string
  /**
   * 接口URI
   */
  uri?: string
  /**
   * 页面路由
   */
  path?: string
  /**
   * 权限编码
   */
  permissionCode?: string
  /**
   * API授权类型-枚举值（ANON/LOGIN/AUTH）
   */
  authType?: string
  id: string
}

/**
 * 接口 [修改资源↗](https://yapi.shuinfo.tech/project/1024/interface/api/280692) 的 **返回类型**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `PUT /iam/resources/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export type PutIamResourcesIdResponse = number

/**
 * 接口 [修改资源↗](https://yapi.shuinfo.tech/project/1024/interface/api/280692) 的 **请求配置的类型**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `PUT /iam/resources/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
type PutIamResourcesIdRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/resources/{id}", "data", "id", string, false>
>

/**
 * 接口 [修改资源↗](https://yapi.shuinfo.tech/project/1024/interface/api/280692) 的 **请求配置**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `PUT /iam/resources/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
const putIamResourcesIdRequestConfig: PutIamResourcesIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: "/iam/resources/{id}",
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: ["id"],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "putIamResourcesId",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [修改资源↗](https://yapi.shuinfo.tech/project/1024/interface/api/280692) 的 **请求函数**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `PUT /iam/resources/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const putIamResourcesId = /*#__PURE__*/ (
  requestData: PutIamResourcesIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutIamResourcesIdResponse>(prepare(putIamResourcesIdRequestConfig, requestData), ...args)
}

putIamResourcesId.requestConfig = putIamResourcesIdRequestConfig

/**
 * 接口 [删除资源↗](https://yapi.shuinfo.tech/project/1024/interface/api/280699) 的 **请求类型**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `DELETE /iam/resources/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface DeleteIamResourcesIdRequest {
  id: string
}

/**
 * 接口 [删除资源↗](https://yapi.shuinfo.tech/project/1024/interface/api/280699) 的 **返回类型**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `DELETE /iam/resources/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export type DeleteIamResourcesIdResponse = boolean

/**
 * 接口 [删除资源↗](https://yapi.shuinfo.tech/project/1024/interface/api/280699) 的 **请求配置的类型**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `DELETE /iam/resources/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
type DeleteIamResourcesIdRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/resources/{id}", "data", "id", string, false>
>

/**
 * 接口 [删除资源↗](https://yapi.shuinfo.tech/project/1024/interface/api/280699) 的 **请求配置**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `DELETE /iam/resources/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
const deleteIamResourcesIdRequestConfig: DeleteIamResourcesIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: "/iam/resources/{id}",
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: ["id"],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "deleteIamResourcesId",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [删除资源↗](https://yapi.shuinfo.tech/project/1024/interface/api/280699) 的 **请求函数**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `DELETE /iam/resources/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const deleteIamResourcesId = /*#__PURE__*/ (
  requestData: DeleteIamResourcesIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteIamResourcesIdResponse>(prepare(deleteIamResourcesIdRequestConfig, requestData), ...args)
}

deleteIamResourcesId.requestConfig = deleteIamResourcesIdRequestConfig

/**
 * 接口 [修改资源排序（上移\/下移）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280706) 的 **请求类型**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `PUT /iam/resources/{id}/sort`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface PutIamResourcesIdSortRequest {
  /**
   * 是否上移（true-上移，false-下移）
   */
  moveUp: boolean
  id: string
}

/**
 * 接口 [修改资源排序（上移\/下移）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280706) 的 **返回类型**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `PUT /iam/resources/{id}/sort`
 * @更新时间 `2023-09-04 14:20:01`
 */
export type PutIamResourcesIdSortResponse = number

/**
 * 接口 [修改资源排序（上移\/下移）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280706) 的 **请求配置的类型**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `PUT /iam/resources/{id}/sort`
 * @更新时间 `2023-09-04 14:20:01`
 */
type PutIamResourcesIdSortRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/resources/{id}/sort", "data", "id", string, false>
>

/**
 * 接口 [修改资源排序（上移\/下移）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280706) 的 **请求配置**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `PUT /iam/resources/{id}/sort`
 * @更新时间 `2023-09-04 14:20:01`
 */
const putIamResourcesIdSortRequestConfig: PutIamResourcesIdSortRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: "/iam/resources/{id}/sort",
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: ["id"],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "putIamResourcesIdSort",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [修改资源排序（上移\/下移）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280706) 的 **请求函数**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `PUT /iam/resources/{id}/sort`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const putIamResourcesIdSort = /*#__PURE__*/ (
  requestData: PutIamResourcesIdSortRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutIamResourcesIdSortResponse>(prepare(putIamResourcesIdSortRequestConfig, requestData), ...args)
}

putIamResourcesIdSort.requestConfig = putIamResourcesIdSortRequestConfig

/**
 * 接口 [获取树形资源列表（全量）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280741) 的 **请求类型**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `GET /iam/resources`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface GetIamResourcesRequest {}

/**
 * 接口 [获取树形资源列表（全量）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280741) 的 **返回类型**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `GET /iam/resources`
 * @更新时间 `2023-09-04 14:20:01`
 */
export type GetIamResourcesResponse = {
  /**
   * 主键ID
   */
  id?: number
  /**
   * 父ID
   */
  parentId?: number
  /**
   * 资源类型-枚举值（DIR/PAGE/API）
   */
  type?: string
  /**
   * 资源名称
   */
  name?: string
  /**
   * 接口请求方法
   */
  method?: string
  /**
   * 接口URI
   */
  uri?: string
  /**
   * 页面路由
   */
  path?: string
  /**
   * 权限编码
   */
  permissionCode?: string
  /**
   * API授权类型-枚举值（ANON/LOGIN/AUTH）
   */
  authType?: string
  /**
   * 子节点
   */
  children?: unknown[]
}[]

/**
 * 接口 [获取树形资源列表（全量）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280741) 的 **请求配置的类型**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `GET /iam/resources`
 * @更新时间 `2023-09-04 14:20:01`
 */
type GetIamResourcesRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/resources", "data", string, string, true>
>

/**
 * 接口 [获取树形资源列表（全量）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280741) 的 **请求配置**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `GET /iam/resources`
 * @更新时间 `2023-09-04 14:20:01`
 */
const getIamResourcesRequestConfig: GetIamResourcesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: "/iam/resources",
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "getIamResources",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [获取树形资源列表（全量）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280741) 的 **请求函数**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `GET /iam/resources`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const getIamResources = /*#__PURE__*/ (requestData?: GetIamResourcesRequest, ...args: UserRequestRestArgs) => {
  return request<GetIamResourcesResponse>(prepare(getIamResourcesRequestConfig, requestData), ...args)
}

getIamResources.requestConfig = getIamResourcesRequestConfig

/**
 * 接口 [创建资源↗](https://yapi.shuinfo.tech/project/1024/interface/api/280748) 的 **请求类型**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `POST /iam/resources`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface PostIamResourcesRequest {
  /**
   * 父ID
   */
  parentId: number
  /**
   * 资源类型-枚举值（DIR/PAGE/API）
   */
  type: string
  /**
   * 资源名称
   */
  name: string
  /**
   * 图标
   */
  icon?: string
  /**
   * 接口请求方法
   */
  method?: string
  /**
   * 接口URI
   */
  uri?: string
  /**
   * 页面路由
   */
  path?: string
  /**
   * 权限编码
   */
  permissionCode?: string
  /**
   * API授权类型-枚举值（ANON/LOGIN/AUTH）
   */
  authType?: string
}

/**
 * 接口 [创建资源↗](https://yapi.shuinfo.tech/project/1024/interface/api/280748) 的 **返回类型**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `POST /iam/resources`
 * @更新时间 `2023-09-04 14:20:01`
 */
export type PostIamResourcesResponse = number

/**
 * 接口 [创建资源↗](https://yapi.shuinfo.tech/project/1024/interface/api/280748) 的 **请求配置的类型**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `POST /iam/resources`
 * @更新时间 `2023-09-04 14:20:01`
 */
type PostIamResourcesRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/resources", "data", string, string, false>
>

/**
 * 接口 [创建资源↗](https://yapi.shuinfo.tech/project/1024/interface/api/280748) 的 **请求配置**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `POST /iam/resources`
 * @更新时间 `2023-09-04 14:20:01`
 */
const postIamResourcesRequestConfig: PostIamResourcesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: "/iam/resources",
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "postIamResources",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [创建资源↗](https://yapi.shuinfo.tech/project/1024/interface/api/280748) 的 **请求函数**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `POST /iam/resources`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const postIamResources = /*#__PURE__*/ (requestData: PostIamResourcesRequest, ...args: UserRequestRestArgs) => {
  return request<PostIamResourcesResponse>(prepare(postIamResourcesRequestConfig, requestData), ...args)
}

postIamResources.requestConfig = postIamResourcesRequestConfig

/**
 * 接口 [获取树形菜单列表（不包含API和隐藏的菜单）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280790) 的 **请求类型**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `GET /iam/resources/menus`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface GetIamResourcesMenusRequest {}

/**
 * 接口 [获取树形菜单列表（不包含API和隐藏的菜单）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280790) 的 **返回类型**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `GET /iam/resources/menus`
 * @更新时间 `2023-09-04 14:20:01`
 */
export type GetIamResourcesMenusResponse = {
  /**
   * 主键ID
   */
  id?: number
  /**
   * 父ID
   */
  parentId?: number
  /**
   * 资源类型-枚举值（DIR/PAGE/API）
   */
  type?: string
  /**
   * 资源名称
   */
  name?: string
  /**
   * 接口请求方法
   */
  method?: string
  /**
   * 接口URI
   */
  uri?: string
  /**
   * 页面路由
   */
  path?: string
  /**
   * 权限编码
   */
  permissionCode?: string
  /**
   * API授权类型-枚举值（ANON/LOGIN/AUTH）
   */
  authType?: string
  /**
   * 子节点
   */
  children?: unknown[]
}[]

/**
 * 接口 [获取树形菜单列表（不包含API和隐藏的菜单）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280790) 的 **请求配置的类型**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `GET /iam/resources/menus`
 * @更新时间 `2023-09-04 14:20:01`
 */
type GetIamResourcesMenusRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/resources/menus", "data", string, string, true>
>

/**
 * 接口 [获取树形菜单列表（不包含API和隐藏的菜单）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280790) 的 **请求配置**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `GET /iam/resources/menus`
 * @更新时间 `2023-09-04 14:20:01`
 */
const getIamResourcesMenusRequestConfig: GetIamResourcesMenusRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: "/iam/resources/menus",
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "getIamResourcesMenus",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [获取树形菜单列表（不包含API和隐藏的菜单）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280790) 的 **请求函数**
 *
 * @分类 [resources↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12050)
 * @标签 `resources`
 * @请求头 `GET /iam/resources/menus`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const getIamResourcesMenus = /*#__PURE__*/ (
  requestData?: GetIamResourcesMenusRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetIamResourcesMenusResponse>(prepare(getIamResourcesMenusRequestConfig, requestData), ...args)
}

getIamResourcesMenus.requestConfig = getIamResourcesMenusRequestConfig

/* prettier-ignore-end */
