import {ErrorMsg, FormErrorIcon, FormErrorWrap} from '../styled/Component'

interface Props {
  visible?: boolean
  msg: string
}
const FormError = ({visible = false, msg}: Props) => {
  return (
    <FormErrorWrap visible={visible}>
      <FormErrorIcon />
      <ErrorMsg>{msg}</ErrorMsg>
    </FormErrorWrap>
  )
}

export default FormError
