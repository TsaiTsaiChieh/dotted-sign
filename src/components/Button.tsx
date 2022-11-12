import {BTN} from '../styled/Component'

interface Props {
  bg?: string
  content: string
}
const Button = ({bg, content}: Props) => {
  return <BTN bg={bg}>{content}</BTN>
}

export default Button
