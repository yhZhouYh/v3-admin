import type { ModalMode } from '../types'

interface IProps {
  mode: ModalMode
}

const props: IProps = {
  mode: 'edit',
}

DetailOrEdit.props = props

export function DetailOrEdit(props: IProps, { slots }) {
  return props.mode === 'edit' || props.mode === 'new' ? <>{slots?.default?.()}</> : <>{slots.detail?.(props.value) || (props.value ?? '-')}</>
}
