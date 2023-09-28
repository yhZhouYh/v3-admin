<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTagsViewStore } from '@/store/modules/tags-view'

const route = useRoute()
const tagsViewStore = useTagsViewStore()

const key = computed(() => {
  // 返回 route.path 和 route.fullPath 有着不同的效果，大多数时候 path 更通用
  return route.path
})
</script>

<template>
  <section class="app-main p-16px">
    <div class="app-scrollbar">
      <router-view v-slot="{ Component }">
        <transition
          name="el-fade-in"
          mode="out-in"
        >
          <keep-alive :include="tagsViewStore.cachedViews">
            <component
              :is="Component"
              :key="key"
            />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.app-main {
  width: 100%;
  background-color: var(--v3-body-bg-color);
}

.app-scrollbar {
  height: 100%;
  border-radius: 4px;
  border: 1px solid var(--el-border-color-light, #fff);
  // background-color: var(--el-fill-color-blank, #fff);
}
</style>
