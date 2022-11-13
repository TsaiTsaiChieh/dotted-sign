import {Color} from '../constants/Variables'
import {BTN} from '../styled/Component'

interface Props {
  style?: string
  content: string
  padding?: string
  fz?: number
}
const Button = ({style = 'main', content, padding, fz}: Props) => {
  let bg: string = Color.primary[50]
  let color: string = Color.black[100]
  if (style === 'main-reverse') color = Color.black[50] as string
  if (style === 'white') {
    bg = Color.white[50]
    color = Color.secondary[50]
  }
  return (
    <BTN bg={bg} color={color} padding={padding} fz={fz}>
      {content}
    </BTN>
  )
}

export default Button
