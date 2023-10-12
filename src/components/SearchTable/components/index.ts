import * as comps from './autoDefine'

export function RenderFilter(props: any) {
  return props?.fn(props.data)
}

export const GetComp = {
  props: {
    name: {
      type: String,
    },
  },
  setup(props, { attrs }) {
    return () => h(comps[props?.name], { ...attrs }, [])
  },

}
