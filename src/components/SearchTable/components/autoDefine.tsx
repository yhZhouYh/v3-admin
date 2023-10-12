import { ElDatePicker, ElInput, ElOption, ElSelect, ElSwitch } from 'element-plus'

export const Input = function (_, { attrs }) {
  return <ElInput {...attrs}/>
}

export const Select = function (_, { attrs }) {
  return <ElSelect { ...attrs }>
    {attrs?.options?.map((option) => {
      return <ElOption
      key={option.value}
      label= {option.label}
      value= {option.value}
    />
    })}
</ElSelect>
}

export const DatePicker = function (_, { attrs }) {
  return <ElDatePicker {...attrs} />
}

export const Switch = function (_, { attrs }) {
  return <><ElSwitch {...attrs}
    inline-prompt
    active-text="启用"
    inactive-text="禁用" /></>
}
