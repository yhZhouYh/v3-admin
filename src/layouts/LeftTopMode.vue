<script lang="ts" setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { AppMain, Logo, NavigationBar, Sidebar, TagsView } from './components'
import { useAppStore } from '@/store/modules/app'
import { useSettingsStore } from '@/store/modules/settings'

const appStore = useAppStore()
const settingsStore = useSettingsStore()

const { showTagsView, showLogo } = storeToRefs(settingsStore)

/** 定义计算属性 layoutClasses，用于控制布局的类名 */
const layoutClasses = computed(() => {
  return {
    hideSidebar: !appStore.sidebar.opened,
  }
})
</script>

<template>
  <div
    :class="layoutClasses"
    class="app-wrapper"
  >
    <!-- 头部导航栏和标签栏 -->
    <div class="layout-header">
      <Logo
        v-if="showLogo"
        :collapse="false"
        class="logo"
      />
      <div class="content">
        <NavigationBar />
        <TagsView v-show="showTagsView" />
      </div>
    </div>
    <!-- 主容器 -->
    <div
      :class="{ hasTagsView: showTagsView }"
      class="main-container"
    >
      <!-- 左侧边栏 -->
      <Sidebar class="sidebar-container" />
      <!-- 页面主体内容 -->
      <AppMain class="app-main" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
$transition-time: 0.35s;

.app-wrapper {
  @include clearfix;
  width: 100%;
  height: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  z-index: 1002;
  width: 100%;
  display: flex;
  .logo {
    width: var(--v3-sidebar-width);
  }
  .content {
    flex: 1;
    position: relative;
  }
}

.layout-header {
  background-color: var(--v3-header-bg-color);
  box-shadow: var(--el-box-shadow-lighter);
}

.main-container {
  height: 100%;
}

.sidebar-container {
  transition: width $transition-time;
  width: var(--v3-sidebar-width) !important;
  height: 100%;
  position: fixed;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  padding-top: var(--v3-navigationbar-height);
}

.app-main {
  transition: padding-left $transition-time;
  padding-left: var(--v3-sidebar-width);
  // overflow: auto;
  // flex: 1;
}

.hideSidebar {
  .sidebar-container {
    width: var(--v3-sidebar-hide-width) !important;
  }
  .app-main {
    padding-left: var(--v3-sidebar-hide-width);
  }
}

.hasTagsView {
  .sidebar-container {
    padding-top: var(--v3-header-height);
  }
}
</style>
