import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type RouteRecordRaw } from 'vue-router'
import { useRouter } from 'vue-router'
import { usePermissionStore } from './permission'
import { useTagsViewStore } from './tags-view'
import { useSettingsStore } from './settings'
import store from '@/store'
import { getToken, removeToken, setToken } from '@/utils/cache/cookies'
import { type PostIamAuthTokenRequest } from '@/api/auth'
import asyncRouteSettings from '@/config/async-route'
import { postIamAuthToken } from '@/api/auth'
import { getIamUsersId } from '@/api/users'
import { resetRouter } from '@/router'

export const useUserStore = defineStore('user', () => {
  const token = ref<string>(getToken() || '')
  const roles = ref<string[]>([])
  const username = ref<string>('')

  const permissionStore = usePermissionStore()
  const tagsViewStore = useTagsViewStore()
  const settingsStore = useSettingsStore()

  /** 设置角色数组 */
  const setRoles = (value: string[]) => {
    roles.value = value
  }
  /** 登录 */
  const login = async ({ account, password }: PostIamAuthTokenRequest) => {
    const { accessToken } = await postIamAuthToken({ account, password })
    if (!accessToken) return
    setToken(accessToken)
    token.value = accessToken
    // token.value = data.token
  }
  /** 获取用户详情 */
  const getInfo = async () => {
    // const { data } = await getIamUsersId({id: 1})
    const data = {
      username: 'admin',
      roles: [],
    }
    username.value = data.username
    // 验证返回的 roles 是否为一个非空数组，否则塞入一个没有任何作用的默认角色，防止路由守卫逻辑进入无限循环
    roles.value = data.roles?.length > 0 ? data.roles : asyncRouteSettings.defaultRoles
  }

  /** 重置 Visited Views 和 Cached Views */
  const _resetTagsView = () => {
    if (!settingsStore.cacheTagsView) {
      tagsViewStore.delAllVisitedViews()
      tagsViewStore.delAllCachedViews()
    }
  }
  /** 切换角色 */
  const changeRoles = async (role: string) => {
    const router = useRouter()
    const newToken = `token-${role}`
    token.value = newToken
    setToken(newToken)
    await getInfo()
    permissionStore.setRoutes(roles.value)
    resetRouter()
    permissionStore.dynamicRoutes.forEach((item: RouteRecordRaw) => {
      router.addRoute(item)
    })
    _resetTagsView()
  }
  /** 登出 */
  const logout = () => {
    removeToken()
    token.value = ''
    roles.value = []
    resetRouter()
    _resetTagsView()
  }
  /** 重置 Token */
  const resetToken = () => {
    removeToken()
    token.value = ''
    roles.value = []
  }

  return { token, roles, username, setRoles, login, getInfo, changeRoles, logout, resetToken }
})

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store)
}
