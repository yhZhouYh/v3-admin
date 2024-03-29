<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { UserFilled } from '@element-plus/icons-vue'
import Hamburger from '../Hamburger/index.vue'
import Breadcrumb from '../Breadcrumb/index.vue'
import Sidebar from '../Sidebar/index.vue'
import { useUserStore } from '@/store/modules/user'
import { useSettingsStore } from '@/store/modules/settings'
import { useAppStore } from '@/store/modules/app'
import ThemeSwitch from '@/components/ThemeSwitch/index.vue'
import Screenfull from '@/components/Screenfull/index.vue'
import Notify from '@/components/Notify/index.vue'
import { DeviceEnum } from '@/constants/app-key'

const router = useRouter()
const appStore = useAppStore()
const settingsStore = useSettingsStore()
const userStore = useUserStore()

const { sidebar, device } = storeToRefs(appStore)
const { layoutMode, showNotify, showThemeSwitch, showScreenfull } = storeToRefs(settingsStore)

const isTop = computed(() => layoutMode.value === 'top')
const isMobile = computed(() => device.value === DeviceEnum.Mobile)

/** 切换侧边栏 */
function toggleSidebar() {
  appStore.toggleSidebar(false)
}

/** 登出 */
function logout() {
  userStore.logout()
  router.push('/login')
}
</script>

<template>
  <div class="navigation-bar">
    <Hamburger
      v-if="!isTop || isMobile"
      :is-active="sidebar.opened"
      class="hamburger"
      @toggle-click="toggleSidebar"
    />
    <Breadcrumb
      v-if="!isTop || isMobile"
      class="breadcrumb"
    />
    <Sidebar
      v-if="isTop && !isMobile"
      class="w-full"
    />

    <div class="right-menu">
      <Screenfull
        v-if="showScreenfull"
        class="right-menu-item"
      />
      <ThemeSwitch
        v-if="showThemeSwitch"
        class="right-menu-item"
      />
      <Notify
        v-if="showNotify"
        class="right-menu-item"
      />
      <el-dropdown class="right-menu-item">
        <div class="right-menu-avatar">
          <el-avatar
            :icon="UserFilled"
            :size="30"
          />
          <span>{{ userStore.username }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <a
              target="_blank"
              href="https://juejin.cn/post/7089377403717287972"
            >
              <el-dropdown-item>中文文档</el-dropdown-item>
            </a>
            <a
              target="_blank"
              href="https://github.com/un-pany/v3-admin-vite"
            >
              <el-dropdown-item>GitHub</el-dropdown-item>
            </a>
            <a
              target="_blank"
              href="https://gitee.com/un-pany/v3-admin-vite"
            >
              <el-dropdown-item>Gitee</el-dropdown-item>
            </a>
            <el-dropdown-item
              divided
              @click="logout"
            >
              <span style="display: block">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation-bar {
  height: var(--el-menu-item-height);
  background: var(--v3-header-bg-color);
  display: flex;
  justify-content: space-between;
  .hamburger {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 15px;
    cursor: pointer;
  }
  .breadcrumb {
    flex: 1;
    // 参考 Bootstrap 的响应式设计将宽度设置为 576
    @media screen and (max-width: 576px) {
      display: none;
    }
  }
  .sidebar {
    flex: 1;
    // 设置 min-width 是为了让 Sidebar 里的 el-menu 宽度自适应
    min-width: 0px;
    :deep(.el-menu) {
      background-color: transparent;
    }
  }
  &.app-top {
    .right-menu {
      --el-text-color-regular: var(--el-button-text-color);
      color: var(--el-button-text-color);
    }
  }
  .right-menu {
    --el-text-color-regular: var(--el-color-white);
    margin-right: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    color: var(--el-color-white);
    .right-menu-item {
      padding: 0 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      .right-menu-avatar {
        display: flex;
        align-items: center;
        .el-avatar {
          margin-right: 10px;
        }
        span {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
