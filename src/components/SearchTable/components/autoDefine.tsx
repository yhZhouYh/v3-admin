import { ElInput, ElOption, ElSelect } from 'element-plus'

export const input = function (_, { attrs }) {
  return <ElInput {...attrs}/>
}

export const select = function (_, { attrs }) {
  return <ElSelect { ...attrs }>
    {attrs?.options.map((option) => {
      return <ElOption
      key={option.value}
      label= {option.label}
      value= {option.value}
    />
    })}
</ElSelect>
}
