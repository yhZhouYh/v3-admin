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

const mockUrl_0_0_0_1 = "https://yapi.shuinfo.tech/mock/1024" as any
const devUrl_0_0_0_1 = "" as any
const prodUrl_0_0_0_1 = "" as any
const dataKey_0_0_0_1 = "data" as any

/**
 * 接口 [登录\/创建 AccessToken↗](https://yapi.shuinfo.tech/project/1024/interface/api/280755) 的 **请求类型**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/token`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface PostIamAuthTokenRequest {
  account: string
  password: string
}

/**
 * 接口 [登录\/创建 AccessToken↗](https://yapi.shuinfo.tech/project/1024/interface/api/280755) 的 **返回类型**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/token`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface PostIamAuthTokenResponse {
  accessToken?: string
  tokenType?: string
  refreshToken?: string
  expiresIn?: number
  expiresTime?: number
}

/**
 * 接口 [登录\/创建 AccessToken↗](https://yapi.shuinfo.tech/project/1024/interface/api/280755) 的 **请求配置的类型**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/token`
 * @更新时间 `2023-09-04 14:20:01`
 */
type PostIamAuthTokenRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/auth/token", "data", string, string, false>
>

/**
 * 接口 [登录\/创建 AccessToken↗](https://yapi.shuinfo.tech/project/1024/interface/api/280755) 的 **请求配置**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/token`
 * @更新时间 `2023-09-04 14:20:01`
 */
const postIamAuthTokenRequestConfig: PostIamAuthTokenRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: "/iam/auth/token",
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "postIamAuthToken",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [登录\/创建 AccessToken↗](https://yapi.shuinfo.tech/project/1024/interface/api/280755) 的 **请求函数**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/token`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const postIamAuthToken = /*#__PURE__*/ (requestData: PostIamAuthTokenRequest, ...args: UserRequestRestArgs) => {
  return request<PostIamAuthTokenResponse>(prepare(postIamAuthTokenRequestConfig, requestData), ...args)
}

postIamAuthToken.requestConfig = postIamAuthTokenRequestConfig

/**
 * 接口 [刷新 AccessToken↗](https://yapi.shuinfo.tech/project/1024/interface/api/280762) 的 **请求类型**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/refresh`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface PostIamAuthRefreshRequest {
  refreshToken: string
}

/**
 * 接口 [刷新 AccessToken↗](https://yapi.shuinfo.tech/project/1024/interface/api/280762) 的 **返回类型**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/refresh`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface PostIamAuthRefreshResponse {
  accessToken?: string
  tokenType?: string
  refreshToken?: string
  expiresIn?: number
  expiresTime?: number
}

/**
 * 接口 [刷新 AccessToken↗](https://yapi.shuinfo.tech/project/1024/interface/api/280762) 的 **请求配置的类型**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/refresh`
 * @更新时间 `2023-09-04 14:20:01`
 */
type PostIamAuthRefreshRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/auth/refresh", "data", string, string, false>
>

/**
 * 接口 [刷新 AccessToken↗](https://yapi.shuinfo.tech/project/1024/interface/api/280762) 的 **请求配置**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/refresh`
 * @更新时间 `2023-09-04 14:20:01`
 */
const postIamAuthRefreshRequestConfig: PostIamAuthRefreshRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: "/iam/auth/refresh",
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "postIamAuthRefresh",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [刷新 AccessToken↗](https://yapi.shuinfo.tech/project/1024/interface/api/280762) 的 **请求函数**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/refresh`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const postIamAuthRefresh = /*#__PURE__*/ (
  requestData: PostIamAuthRefreshRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostIamAuthRefreshResponse>(prepare(postIamAuthRefreshRequestConfig, requestData), ...args)
}

postIamAuthRefresh.requestConfig = postIamAuthRefreshRequestConfig

/**
 * 接口 [退出登录↗](https://yapi.shuinfo.tech/project/1024/interface/api/280769) 的 **请求类型**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/logout`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface PostIamAuthLogoutRequest {}

/**
 * 接口 [退出登录↗](https://yapi.shuinfo.tech/project/1024/interface/api/280769) 的 **返回类型**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/logout`
 * @更新时间 `2023-09-04 14:20:01`
 */
export type PostIamAuthLogoutResponse = boolean

/**
 * 接口 [退出登录↗](https://yapi.shuinfo.tech/project/1024/interface/api/280769) 的 **请求配置的类型**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/logout`
 * @更新时间 `2023-09-04 14:20:01`
 */
type PostIamAuthLogoutRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/auth/logout", "data", string, string, true>
>

/**
 * 接口 [退出登录↗](https://yapi.shuinfo.tech/project/1024/interface/api/280769) 的 **请求配置**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/logout`
 * @更新时间 `2023-09-04 14:20:01`
 */
const postIamAuthLogoutRequestConfig: PostIamAuthLogoutRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: "/iam/auth/logout",
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "postIamAuthLogout",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [退出登录↗](https://yapi.shuinfo.tech/project/1024/interface/api/280769) 的 **请求函数**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/logout`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const postIamAuthLogout = /*#__PURE__*/ (
  requestData?: PostIamAuthLogoutRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostIamAuthLogoutResponse>(prepare(postIamAuthLogoutRequestConfig, requestData), ...args)
}

postIamAuthLogout.requestConfig = postIamAuthLogoutRequestConfig

/**
 * 接口 [微信登录↗](https://yapi.shuinfo.tech/project/1024/interface/api/296031) 的 **请求类型**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/wx/token`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface PostIamAuthWxTokenRequest {
  code: string
}

/**
 * 接口 [微信登录↗](https://yapi.shuinfo.tech/project/1024/interface/api/296031) 的 **返回类型**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/wx/token`
 * @更新时间 `2023-09-04 14:20:01`
 */
export interface PostIamAuthWxTokenResponse {
  accessToken?: string
  tokenType?: string
  refreshToken?: string
  expiresIn?: number
  expiresTime?: number
}

/**
 * 接口 [微信登录↗](https://yapi.shuinfo.tech/project/1024/interface/api/296031) 的 **请求配置的类型**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/wx/token`
 * @更新时间 `2023-09-04 14:20:01`
 */
type PostIamAuthWxTokenRequestConfig = Readonly<
  RequestConfig<"https://yapi.shuinfo.tech/mock/1024", "", "", "/iam/auth/wx/token", "data", string, string, false>
>

/**
 * 接口 [微信登录↗](https://yapi.shuinfo.tech/project/1024/interface/api/296031) 的 **请求配置**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/wx/token`
 * @更新时间 `2023-09-04 14:20:01`
 */
const postIamAuthWxTokenRequestConfig: PostIamAuthWxTokenRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: "/iam/auth/wx/token",
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: "postIamAuthWxToken",
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {}
}

/**
 * 接口 [微信登录↗](https://yapi.shuinfo.tech/project/1024/interface/api/296031) 的 **请求函数**
 *
 * @分类 [auth↗](https://yapi.shuinfo.tech/project/1024/interface/api/cat_12052)
 * @标签 `auth`
 * @请求头 `POST /iam/auth/wx/token`
 * @更新时间 `2023-09-04 14:20:01`
 */
export const postIamAuthWxToken = /*#__PURE__*/ (
  requestData: PostIamAuthWxTokenRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostIamAuthWxTokenResponse>(prepare(postIamAuthWxTokenRequestConfig, requestData), ...args)
}

postIamAuthWxToken.requestConfig = postIamAuthWxTokenRequestConfig

/* prettier-ignore-end */
