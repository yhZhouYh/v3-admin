<script lang="ts" setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { useTheme } from '@/hooks/useTheme'

// 将 Element Plus 的语言设置为中文

const { initTheme } = useTheme()

/** 初始化主题 */
initTheme()

/** 作者小心思 */
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <router-view />
  </ElConfigProvider>
</template>
