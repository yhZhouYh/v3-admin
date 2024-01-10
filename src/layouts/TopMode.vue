<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { AppMain, Logo, NavigationBar, TagsView } from './components'
import { useSettingsStore } from '@/store/modules/settings'

const settingsStore = useSettingsStore()

const { showTagsView, showLogo } = storeToRefs(settingsStore)
</script>

<template>
  <div class="app-wrapper">
    <!-- 头部导航栏和标签栏 -->
    <div class="layout-header">
      <div class="content">
        <Logo
          v-if="showLogo"
          :collapse="false"
          class="logo"
        />
        <NavigationBar class="navigation-bar" />
      </div>
      <TagsView v-show="showTagsView" />
    </div>
    <!-- 主容器 -->
    <div
      :class="{ hasTagsView: showTagsView }"
      class="main-container"
    >
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
  display: flex;
  flex-direction: column;
}

.fixed-header {
  position: fixed;
  top: 0;
  z-index: 1002;
  width: 100%;
  .logo {
    width: var(--v3-sidebar-width);
  }
}
.content {
  display: flex;
  .navigation-bar {
    background-color: var(--v3-sidebar-menu-bg-color);
    flex: 1;
    min-width: 0;
  }
}

.layout-header {
  background-color: var(--v3-header-bg-color);
  box-shadow: var(--el-box-shadow-lighter);
}

.main-container {
  flex: 1;
}

.app-main {
  transition: padding-left $transition-time;
  // overflow: auto;
  height: 100%;
}

.hasTagsView {
  .app-main {
  }
}
</style>
