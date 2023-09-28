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

const mockUrl_0_0_0_2 = "https://yapi.shuinfo.tech/mock/1024" as any
const devUrl_0_0_0_2 = "" as any
const prodUrl_0_0_0_2 = "" as any
const dataKey_0_0_0_2 = "data" as any

/**
 * 接口 [获取角色详情↗](https://yapi.shuinfo.tech/project/1024/interface/api/280664) 的 **请求类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `GET /iam/roles/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface GetIamRolesIdRequest {
  id: string
}

/**
 * 接口 [获取角色详情↗](https://yapi.shuinfo.tech/project/1024/interface/api/280664) 的 **返回类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `GET /iam/roles/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface GetIamRolesIdResponse {
  /**
   * 主键ID
   */
  id?: number
  /**
   * 角色名称
   */
  name?: string
  /**
   * 描述
   */
  description?: string
  /**
   * 资源列表
   */
  resources?: {
    /**
     * 权限ID
     */
    resourceId?: number
    /**
     * 菜单/页面是否隐藏（false-不隐藏，true-隐藏）
     */
    hidden?: boolean
  }[]
}

/**
 * 接口 [获取角色详情↗](https://yapi.shuinfo.tech/project/1024/interface/api/280664) 的 **请求配置的类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `GET /iam/roles/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
type GetIamRolesIdRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/roles/{id}", "data", "id", string, false>
>

/**
 * 接口 [获取角色详情↗](https://yapi.shuinfo.tech/project/1024/interface/api/280664) 的 **请求配置**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `GET /iam/roles/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
const getIamRolesIdRequestConfig: GetIamRolesIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: "/iam/roles/{id}",
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: ["id"],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "getIamRolesId",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [获取角色详情↗](https://yapi.shuinfo.tech/project/1024/interface/api/280664) 的 **请求函数**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `GET /iam/roles/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const getIamRolesId = /*#__PURE__*/ (requestData: GetIamRolesIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetIamRolesIdResponse>(prepare(getIamRolesIdRequestConfig, requestData), ...args)
}

getIamRolesId.requestConfig = getIamRolesIdRequestConfig

/**
 * 接口 [更新角色↗](https://yapi.shuinfo.tech/project/1024/interface/api/280671) 的 **请求类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `PUT /iam/roles/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface PutIamRolesIdRequest {
  /**
   * 名称
   */
  name: string
  /**
   * 描述
   */
  description?: string
  id: string
}

/**
 * 接口 [更新角色↗](https://yapi.shuinfo.tech/project/1024/interface/api/280671) 的 **返回类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `PUT /iam/roles/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export type PutIamRolesIdResponse = number

/**
 * 接口 [更新角色↗](https://yapi.shuinfo.tech/project/1024/interface/api/280671) 的 **请求配置的类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `PUT /iam/roles/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
type PutIamRolesIdRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/roles/{id}", "data", "id", string, false>
>

/**
 * 接口 [更新角色↗](https://yapi.shuinfo.tech/project/1024/interface/api/280671) 的 **请求配置**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `PUT /iam/roles/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
const putIamRolesIdRequestConfig: PutIamRolesIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: "/iam/roles/{id}",
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: ["id"],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "putIamRolesId",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [更新角色↗](https://yapi.shuinfo.tech/project/1024/interface/api/280671) 的 **请求函数**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `PUT /iam/roles/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const putIamRolesId = /*#__PURE__*/ (requestData: PutIamRolesIdRequest, ...args: UserRequestRestArgs) => {
  return request<PutIamRolesIdResponse>(prepare(putIamRolesIdRequestConfig, requestData), ...args)
}

putIamRolesId.requestConfig = putIamRolesIdRequestConfig

/**
 * 接口 [删除角色↗](https://yapi.shuinfo.tech/project/1024/interface/api/280678) 的 **请求类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `DELETE /iam/roles/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface DeleteIamRolesIdRequest {
  id: string
}

/**
 * 接口 [删除角色↗](https://yapi.shuinfo.tech/project/1024/interface/api/280678) 的 **返回类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `DELETE /iam/roles/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export type DeleteIamRolesIdResponse = boolean

/**
 * 接口 [删除角色↗](https://yapi.shuinfo.tech/project/1024/interface/api/280678) 的 **请求配置的类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `DELETE /iam/roles/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
type DeleteIamRolesIdRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/roles/{id}", "data", "id", string, false>
>

/**
 * 接口 [删除角色↗](https://yapi.shuinfo.tech/project/1024/interface/api/280678) 的 **请求配置**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `DELETE /iam/roles/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
const deleteIamRolesIdRequestConfig: DeleteIamRolesIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: "/iam/roles/{id}",
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: ["id"],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "deleteIamRolesId",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [删除角色↗](https://yapi.shuinfo.tech/project/1024/interface/api/280678) 的 **请求函数**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `DELETE /iam/roles/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const deleteIamRolesId = /*#__PURE__*/ (requestData: DeleteIamRolesIdRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteIamRolesIdResponse>(prepare(deleteIamRolesIdRequestConfig, requestData), ...args)
}

deleteIamRolesId.requestConfig = deleteIamRolesIdRequestConfig

/**
 * 接口 [更新角色权限↗](https://yapi.shuinfo.tech/project/1024/interface/api/280685) 的 **请求类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `PUT /iam/roles/{id}/resources`
 * @更新时间 `2023-09-04 14:20:01`
 */
export type PutIamRolesIdResourcesRequest = {
  list?: {
    /**
     * 权限ID
     */
    resourceId: number
    /**
     * 菜单/页面是否隐藏（false-不隐藏，true-隐藏）
     */
    hidden: boolean
  }[]
  empty?: boolean
  id: string
  [k: string]: unknown
} & unknown[]

/**
 * 接口 [更新角色权限↗](https://yapi.shuinfo.tech/project/1024/interface/api/280685) 的 **返回类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `PUT /iam/roles/{id}/resources`
 * @更新时间 `2023-09-04 14:20:01`
 */
export type PutIamRolesIdResourcesResponse = number

/**
 * 接口 [更新角色权限↗](https://yapi.shuinfo.tech/project/1024/interface/api/280685) 的 **请求配置的类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `PUT /iam/roles/{id}/resources`
 * @更新时间 `2023-09-04 14:20:01`
 */
type PutIamRolesIdResourcesRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/roles/{id}/resources", "data", "id", string, false>
>

/**
 * 接口 [更新角色权限↗](https://yapi.shuinfo.tech/project/1024/interface/api/280685) 的 **请求配置**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `PUT /iam/roles/{id}/resources`
 * @更新时间 `2023-09-04 14:20:01`
 */
const putIamRolesIdResourcesRequestConfig: PutIamRolesIdResourcesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: "/iam/roles/{id}/resources",
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: ["id"],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "putIamRolesIdResources",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [更新角色权限↗](https://yapi.shuinfo.tech/project/1024/interface/api/280685) 的 **请求函数**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `PUT /iam/roles/{id}/resources`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const putIamRolesIdResources = /*#__PURE__*/ (
  requestData: PutIamRolesIdResourcesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutIamRolesIdResourcesResponse>(prepare(putIamRolesIdResourcesRequestConfig, requestData), ...args)
}

putIamRolesIdResources.requestConfig = putIamRolesIdResourcesRequestConfig

/**
 * 接口 [获取角色分页列表↗](https://yapi.shuinfo.tech/project/1024/interface/api/280727) 的 **请求类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `GET /iam/roles`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface GetIamRolesRequest {
  page: string
}

/**
 * 接口 [获取角色分页列表↗](https://yapi.shuinfo.tech/project/1024/interface/api/280727) 的 **返回类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `GET /iam/roles`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface GetIamRolesResponse {
  /**
   * 数据总量
   */
  total?: number
  /**
   * 当前页数据
   */
  list?: {
    /**
     * 主键ID
     */
    id?: number
    /**
     * 角色名称
     */
    name?: string
    /**
     * 描述
     */
    description?: string
  }[]
}

/**
 * 接口 [获取角色分页列表↗](https://yapi.shuinfo.tech/project/1024/interface/api/280727) 的 **请求配置的类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `GET /iam/roles`
 * @更新时间 `2023-09-04 14:20:01`
 */
type GetIamRolesRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/roles", "data", string, "page", false>
>

/**
 * 接口 [获取角色分页列表↗](https://yapi.shuinfo.tech/project/1024/interface/api/280727) 的 **请求配置**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `GET /iam/roles`
 * @更新时间 `2023-09-04 14:20:01`
 */
const getIamRolesRequestConfig: GetIamRolesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: "/iam/roles",
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: ["page"],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "getIamRoles",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [获取角色分页列表↗](https://yapi.shuinfo.tech/project/1024/interface/api/280727) 的 **请求函数**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `GET /iam/roles`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const getIamRoles = /*#__PURE__*/ (requestData: GetIamRolesRequest, ...args: UserRequestRestArgs) => {
  return request<GetIamRolesResponse>(prepare(getIamRolesRequestConfig, requestData), ...args)
}

getIamRoles.requestConfig = getIamRolesRequestConfig

/**
 * 接口 [创建角色↗](https://yapi.shuinfo.tech/project/1024/interface/api/280734) 的 **请求类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `POST /iam/roles`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface PostIamRolesRequest {
  /**
   * 名称
   */
  name: string
  /**
   * 描述
   */
  description?: string
}

/**
 * 接口 [创建角色↗](https://yapi.shuinfo.tech/project/1024/interface/api/280734) 的 **返回类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `POST /iam/roles`
 * @更新时间 `2023-09-04 14:20:01`
 */
export type PostIamRolesResponse = number

/**
 * 接口 [创建角色↗](https://yapi.shuinfo.tech/project/1024/interface/api/280734) 的 **请求配置的类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `POST /iam/roles`
 * @更新时间 `2023-09-04 14:20:01`
 */
type PostIamRolesRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/roles", "data", string, string, false>
>

/**
 * 接口 [创建角色↗](https://yapi.shuinfo.tech/project/1024/interface/api/280734) 的 **请求配置**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `POST /iam/roles`
 * @更新时间 `2023-09-04 14:20:01`
 */
const postIamRolesRequestConfig: PostIamRolesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: "/iam/roles",
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "postIamRoles",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [创建角色↗](https://yapi.shuinfo.tech/project/1024/interface/api/280734) 的 **请求函数**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `POST /iam/roles`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const postIamRoles = /*#__PURE__*/ (requestData: PostIamRolesRequest, ...args: UserRequestRestArgs) => {
  return request<PostIamRolesResponse>(prepare(postIamRolesRequestConfig, requestData), ...args)
}

postIamRoles.requestConfig = postIamRolesRequestConfig

/**
 * 接口 [获取角色名称下拉列表（全量）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280783) 的 **请求类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `GET /iam/roles/names`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface GetIamRolesNamesRequest {
  keywords: string
}

/**
 * 接口 [获取角色名称下拉列表（全量）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280783) 的 **返回类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `GET /iam/roles/names`
 * @更新时间 `2023-09-04 14:20:01`
 */
export type GetIamRolesNamesResponse = {
  id?: number
  name?: string
}[]

/**
 * 接口 [获取角色名称下拉列表（全量）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280783) 的 **请求配置的类型**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `GET /iam/roles/names`
 * @更新时间 `2023-09-04 14:20:01`
 */
type GetIamRolesNamesRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/roles/names", "data", string, "keywords", false>
>

/**
 * 接口 [获取角色名称下拉列表（全量）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280783) 的 **请求配置**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `GET /iam/roles/names`
 * @更新时间 `2023-09-04 14:20:01`
 */
const getIamRolesNamesRequestConfig: GetIamRolesNamesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: "/iam/roles/names",
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: ["keywords"],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "getIamRolesNames",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [获取角色名称下拉列表（全量）↗](https://yapi.shuinfo.tech/project/1024/interface/api/280783) 的 **请求函数**
 *
 * @分类 [roles↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12054)
 * @标签 `roles`
 * @请求头 `GET /iam/roles/names`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const getIamRolesNames = /*#__PURE__*/ (requestData: GetIamRolesNamesRequest, ...args: UserRequestRestArgs) => {
  return request<GetIamRolesNamesResponse>(prepare(getIamRolesNamesRequestConfig, requestData), ...args)
}

getIamRolesNames.requestConfig = getIamRolesNamesRequestConfig

/* prettier-ignore-end */
