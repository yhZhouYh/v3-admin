import type { IFnParams, IPageData, PageType } from './types'

/**
 *
 * @param fn
 * @param options page 从第几页开始
 * @description 分页hook
 * @returns
 */
export function usePage(fn: (params: IFnParams) => Promise<IPageData>, options?: PageType) {
  const page = ref(options?.page ?? 1)
  const size = ref(options?.size ?? 20)
  const loading = ref(false)
  const list = ref<unknown>(null)
  const total = ref<unknown>(null)
  function resetPage() {
    // total.value = null
    list.value = null
    page.value = options?.page ?? 1
  }

  async function getMorePage(rest?: Record<string, any>) {
    try {
      loading.value = true
      const res = await fn({
        page: page.value,
        size: size.value,
        ...rest,
      })
      if (!res)
        return

      const data = res?.list || []
      list.value = Array(10).fill(data).flat()
      total.value = res?.total ?? 0
    }
    catch (error) {
      console.error(error)
    }
    finally {
      loading.value = false
    }
  }
  return {
    page,
    size,
    loading,
    list,
    total,
    getMorePage,
    resetPage,
  }
}
