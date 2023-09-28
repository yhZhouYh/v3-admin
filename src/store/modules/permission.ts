import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type RouteRecordRaw } from 'vue-router'
import store from '@/store'
import { asyncRoutes, constantRoutes } from '@/router'
import asyncRouteSettings from '@/config/async-route'

function hasPermission(roles: string[], route: RouteRecordRaw) {
  const routeRoles = route.meta?.roles
  return routeRoles ? roles.some(role => routeRoles.includes(role)) : true
}

function filterAsyncRoutes(routes: RouteRecordRaw[], roles: string[]) {
  const res: RouteRecordRaw[] = []
  routes.forEach((route) => {
    const tempRoute = { ...route }
    if (hasPermission(roles, tempRoute)) {
      if (tempRoute.children)
        tempRoute.children = filterAsyncRoutes(tempRoute.children, roles)

      res.push(tempRoute)
    }
  })
  return res
}

export const usePermissionStore = defineStore('permission', () => {
  const routes = ref<RouteRecordRaw[]>([])
  const dynamicRoutes = ref<RouteRecordRaw[]>([])

  const setRoutes = (roles: string[]) => {
    const accessedRoutes = asyncRouteSettings.open ? filterAsyncRoutes(asyncRoutes, roles) : asyncRoutes
    routes.value = constantRoutes.concat(accessedRoutes)
    dynamicRoutes.value = accessedRoutes
  }

  return { routes, dynamicRoutes, setRoutes }
})

/** 在 setup 外使用 */
export function usePermissionStoreHook() {
  return usePermissionStore(store)
}
