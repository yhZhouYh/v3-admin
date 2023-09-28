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

const mockUrl_0_0_0_3 = "https://yapi.shuinfo.tech/mock/1024" as any
const devUrl_0_0_0_3 = "" as any
const prodUrl_0_0_0_3 = "" as any
const dataKey_0_0_0_3 = "data" as any

/**
 * 接口 [获取用户详情↗](https://yapi.shuinfo.tech/project/1024/interface/api/280636) 的 **请求类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `GET /iam/users/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface GetIamUsersIdRequest {
  id: string
}

/**
 * 接口 [获取用户详情↗](https://yapi.shuinfo.tech/project/1024/interface/api/280636) 的 **返回类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `GET /iam/users/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface GetIamUsersIdResponse {
  /**
   * 主键ID
   */
  id?: number
  /**
   * 用户名
   */
  username?: string
  /**
   * 手机号（脱敏）
   */
  mobile?: string
  /**
   * 邮箱（脱敏）
   */
  email?: string
  /**
   * 员工编码或ID
   */
  employeeCode?: string
  /**
   * 年龄
   */
  age?: number
  /**
   * 最后登录时间
   */
  lastLoginTime?: string
  /**
   * 是否禁用（0-未禁用，1-禁用）
   */
  disable?: boolean
  /**
   * 角色列表
   */
  roles?: {
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
 * 接口 [获取用户详情↗](https://yapi.shuinfo.tech/project/1024/interface/api/280636) 的 **请求配置的类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `GET /iam/users/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
type GetIamUsersIdRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/users/{id}", "data", "id", string, false>
>

/**
 * 接口 [获取用户详情↗](https://yapi.shuinfo.tech/project/1024/interface/api/280636) 的 **请求配置**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `GET /iam/users/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
const getIamUsersIdRequestConfig: GetIamUsersIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: "/iam/users/{id}",
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: ["id"],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "getIamUsersId",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [获取用户详情↗](https://yapi.shuinfo.tech/project/1024/interface/api/280636) 的 **请求函数**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `GET /iam/users/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const getIamUsersId = /*#__PURE__*/ (requestData: GetIamUsersIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetIamUsersIdResponse>(prepare(getIamUsersIdRequestConfig, requestData), ...args)
}

getIamUsersId.requestConfig = getIamUsersIdRequestConfig

/**
 * 接口 [更新用户↗](https://yapi.shuinfo.tech/project/1024/interface/api/280643) 的 **请求类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `PUT /iam/users/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface PutIamUsersIdRequest {
  /**
   * 手机号
   */
  mobile: string
  /**
   * 邮箱
   */
  email: string
  /**
   * 员工编码或ID
   */
  employeeCode?: string
  /**
   * 年龄
   */
  age?: number
  /**
   * 是否禁用（0-未禁用，1-禁用）
   */
  disable?: boolean
  id: string
}

/**
 * 接口 [更新用户↗](https://yapi.shuinfo.tech/project/1024/interface/api/280643) 的 **返回类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `PUT /iam/users/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export type PutIamUsersIdResponse = number

/**
 * 接口 [更新用户↗](https://yapi.shuinfo.tech/project/1024/interface/api/280643) 的 **请求配置的类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `PUT /iam/users/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
type PutIamUsersIdRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/users/{id}", "data", "id", string, false>
>

/**
 * 接口 [更新用户↗](https://yapi.shuinfo.tech/project/1024/interface/api/280643) 的 **请求配置**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `PUT /iam/users/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
const putIamUsersIdRequestConfig: PutIamUsersIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: "/iam/users/{id}",
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: ["id"],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "putIamUsersId",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [更新用户↗](https://yapi.shuinfo.tech/project/1024/interface/api/280643) 的 **请求函数**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `PUT /iam/users/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const putIamUsersId = /*#__PURE__*/ (requestData: PutIamUsersIdRequest, ...args: UserRequestRestArgs) => {
  return request<PutIamUsersIdResponse>(prepare(putIamUsersIdRequestConfig, requestData), ...args)
}

putIamUsersId.requestConfig = putIamUsersIdRequestConfig

/**
 * 接口 [删除用户↗](https://yapi.shuinfo.tech/project/1024/interface/api/280650) 的 **请求类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `DELETE /iam/users/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface DeleteIamUsersIdRequest {
  id: string
}

/**
 * 接口 [删除用户↗](https://yapi.shuinfo.tech/project/1024/interface/api/280650) 的 **返回类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `DELETE /iam/users/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export type DeleteIamUsersIdResponse = boolean

/**
 * 接口 [删除用户↗](https://yapi.shuinfo.tech/project/1024/interface/api/280650) 的 **请求配置的类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `DELETE /iam/users/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
type DeleteIamUsersIdRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/users/{id}", "data", "id", string, false>
>

/**
 * 接口 [删除用户↗](https://yapi.shuinfo.tech/project/1024/interface/api/280650) 的 **请求配置**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `DELETE /iam/users/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
const deleteIamUsersIdRequestConfig: DeleteIamUsersIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: "/iam/users/{id}",
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: ["id"],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "deleteIamUsersId",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [删除用户↗](https://yapi.shuinfo.tech/project/1024/interface/api/280650) 的 **请求函数**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `DELETE /iam/users/{id}`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const deleteIamUsersId = /*#__PURE__*/ (requestData: DeleteIamUsersIdRequest, ...args: UserRequestRestArgs) => {
  return request<DeleteIamUsersIdResponse>(prepare(deleteIamUsersIdRequestConfig, requestData), ...args)
}

deleteIamUsersId.requestConfig = deleteIamUsersIdRequestConfig

/**
 * 接口 [更新用户密码↗](https://yapi.shuinfo.tech/project/1024/interface/api/280657) 的 **请求类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `PUT /iam/users/{id}/passwd`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface PutIamUsersIdPasswdRequest {
  /**
   * 老密码
   */
  oldPassword?: string
  /**
   * 新密码
   */
  newPassword?: string
  id: string
}

/**
 * 接口 [更新用户密码↗](https://yapi.shuinfo.tech/project/1024/interface/api/280657) 的 **返回类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `PUT /iam/users/{id}/passwd`
 * @更新时间 `2023-09-04 14:20:01`
 */
export type PutIamUsersIdPasswdResponse = number

/**
 * 接口 [更新用户密码↗](https://yapi.shuinfo.tech/project/1024/interface/api/280657) 的 **请求配置的类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `PUT /iam/users/{id}/passwd`
 * @更新时间 `2023-09-04 14:20:01`
 */
type PutIamUsersIdPasswdRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/users/{id}/passwd", "data", "id", string, false>
>

/**
 * 接口 [更新用户密码↗](https://yapi.shuinfo.tech/project/1024/interface/api/280657) 的 **请求配置**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `PUT /iam/users/{id}/passwd`
 * @更新时间 `2023-09-04 14:20:01`
 */
const putIamUsersIdPasswdRequestConfig: PutIamUsersIdPasswdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: "/iam/users/{id}/passwd",
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: ["id"],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "putIamUsersIdPasswd",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [更新用户密码↗](https://yapi.shuinfo.tech/project/1024/interface/api/280657) 的 **请求函数**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `PUT /iam/users/{id}/passwd`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const putIamUsersIdPasswd = /*#__PURE__*/ (
  requestData: PutIamUsersIdPasswdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutIamUsersIdPasswdResponse>(prepare(putIamUsersIdPasswdRequestConfig, requestData), ...args)
}

putIamUsersIdPasswd.requestConfig = putIamUsersIdPasswdRequestConfig

/**
 * 接口 [获取用户分页列表↗](https://yapi.shuinfo.tech/project/1024/interface/api/280713) 的 **请求类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `GET /iam/users`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface GetIamUsersRequest {
  page: string
}

/**
 * 接口 [获取用户分页列表↗](https://yapi.shuinfo.tech/project/1024/interface/api/280713) 的 **返回类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `GET /iam/users`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface GetIamUsersResponse {
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
     * 用户名
     */
    username?: string
    /**
     * 手机号（脱敏）
     */
    mobile?: string
    /**
     * 邮箱（脱敏）
     */
    email?: string
    /**
     * 员工编码或ID
     */
    employeeCode?: string
    /**
     * 年龄
     */
    age?: number
    /**
     * 最后登录时间
     */
    lastLoginTime?: string
    /**
     * 是否禁用（0-未禁用，1-禁用）
     */
    disable?: boolean
  }[]
}

/**
 * 接口 [获取用户分页列表↗](https://yapi.shuinfo.tech/project/1024/interface/api/280713) 的 **请求配置的类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `GET /iam/users`
 * @更新时间 `2023-09-04 14:20:01`
 */
type GetIamUsersRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/users", "data", string, "page", false>
>

/**
 * 接口 [获取用户分页列表↗](https://yapi.shuinfo.tech/project/1024/interface/api/280713) 的 **请求配置**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `GET /iam/users`
 * @更新时间 `2023-09-04 14:20:01`
 */
const getIamUsersRequestConfig: GetIamUsersRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: "/iam/users",
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: ["page"],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "getIamUsers",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [获取用户分页列表↗](https://yapi.shuinfo.tech/project/1024/interface/api/280713) 的 **请求函数**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `GET /iam/users`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const getIamUsers = /*#__PURE__*/ (requestData: GetIamUsersRequest, ...args: UserRequestRestArgs) => {
  return request<GetIamUsersResponse>(prepare(getIamUsersRequestConfig, requestData), ...args)
}

getIamUsers.requestConfig = getIamUsersRequestConfig

/**
 * 接口 [创建用户↗](https://yapi.shuinfo.tech/project/1024/interface/api/280720) 的 **请求类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `POST /iam/users`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface PostIamUsersRequest {
  /**
   * 用户名
   */
  username: string
  /**
   * 手机号
   */
  mobile: string
  /**
   * 邮箱
   */
  email: string
  /**
   * 密码
   */
  password: string
  /**
   * 员工编码或ID
   */
  employeeCode?: string
  /**
   * 年龄
   */
  age?: number
  /**
   * 用户的角色ID列表
   */
  roleIds: number[]
}

/**
 * 接口 [创建用户↗](https://yapi.shuinfo.tech/project/1024/interface/api/280720) 的 **返回类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `POST /iam/users`
 * @更新时间 `2023-09-04 14:20:01`
 */
export type PostIamUsersResponse = number

/**
 * 接口 [创建用户↗](https://yapi.shuinfo.tech/project/1024/interface/api/280720) 的 **请求配置的类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `POST /iam/users`
 * @更新时间 `2023-09-04 14:20:01`
 */
type PostIamUsersRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/users", "data", string, string, false>
>

/**
 * 接口 [创建用户↗](https://yapi.shuinfo.tech/project/1024/interface/api/280720) 的 **请求配置**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `POST /iam/users`
 * @更新时间 `2023-09-04 14:20:01`
 */
const postIamUsersRequestConfig: PostIamUsersRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: "/iam/users",
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "postIamUsers",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [创建用户↗](https://yapi.shuinfo.tech/project/1024/interface/api/280720) 的 **请求函数**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `POST /iam/users`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const postIamUsers = /*#__PURE__*/ (requestData: PostIamUsersRequest, ...args: UserRequestRestArgs) => {
  return request<PostIamUsersResponse>(prepare(postIamUsersRequestConfig, requestData), ...args)
}

postIamUsers.requestConfig = postIamUsersRequestConfig

/**
 * 接口 [获取用户名称下拉列表(左匹配)↗](https://yapi.shuinfo.tech/project/1024/interface/api/280776) 的 **请求类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `GET /iam/users/names`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface GetIamUsersNamesRequest {
  keywords: string
}

/**
 * 接口 [获取用户名称下拉列表(左匹配)↗](https://yapi.shuinfo.tech/project/1024/interface/api/280776) 的 **返回类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `GET /iam/users/names`
 * @更新时间 `2023-09-04 14:20:01`
 */
export type GetIamUsersNamesResponse = {
  /**
   * 主键ID
   */
  id?: number
  /**
   * 用户名
   */
  name?: string
}[]

/**
 * 接口 [获取用户名称下拉列表(左匹配)↗](https://yapi.shuinfo.tech/project/1024/interface/api/280776) 的 **请求配置的类型**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `GET /iam/users/names`
 * @更新时间 `2023-09-04 14:20:01`
 */
type GetIamUsersNamesRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/users/names", "data", string, "keywords", false>
>

/**
 * 接口 [获取用户名称下拉列表(左匹配)↗](https://yapi.shuinfo.tech/project/1024/interface/api/280776) 的 **请求配置**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `GET /iam/users/names`
 * @更新时间 `2023-09-04 14:20:01`
 */
const getIamUsersNamesRequestConfig: GetIamUsersNamesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: "/iam/users/names",
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: ["keywords"],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "getIamUsersNames",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [获取用户名称下拉列表(左匹配)↗](https://yapi.shuinfo.tech/project/1024/interface/api/280776) 的 **请求函数**
 *
 * @分类 [users↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12056)
 * @标签 `users`
 * @请求头 `GET /iam/users/names`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const getIamUsersNames = /*#__PURE__*/ (requestData: GetIamUsersNamesRequest, ...args: UserRequestRestArgs) => {
  return request<GetIamUsersNamesResponse>(prepare(getIamUsersNamesRequestConfig, requestData), ...args)
}

getIamUsersNames.requestConfig = getIamUsersNamesRequestConfig

/* prettier-ignore-end */
