import * as comps from './autoDefine'

console.log(comps, 'xxx')

export function RenderFilter(props: any) {
  return props?.fn(props.data)
}

export const GetComp = {
  props: {
    name: {
      type: String,
    },
  },
  setup(props, { attrs, slots }) {
    const componentName = Object.keys(comps).find((item) => {
      return item.toLowerCase() === props.name.toLowerCase()
    })
    return componentName ? () => h(comps[componentName], { ...attrs }, slots) : null
  },
}
