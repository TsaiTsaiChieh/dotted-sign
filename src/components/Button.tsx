import {Color} from '../constants/Variables'
import {BTN} from '../styled/Component'

interface Props {
  style?: 'main' | 'second' | 'main-yellow' | 'blue-yellow'
  content: string
  padding?: string
  fz?: number
  onClick?: () => void
}
const Button = ({style = 'main', content, padding, fz, onClick}: Props) => {
  let bg: string = Color.primary[50]
  let color: string = Color.black[100]
  let hoverBg: string = Color.secondary[50]
  let hoverColor: string = Color.black[100]
  if (style === 'main') hoverColor = Color.white[50]
  if (style === 'second') {
    bg = Color.white[50]
    color = Color.secondary[50]
    hoverBg = Color.primary[50]
    hoverColor = Color.white[50]
  }
  if (style === 'main-yellow') {
    hoverBg = Color.primary[100]
  }
  if (style === 'blue-yellow') {
    bg = Color.blue[50]
    color = Color.white[50]
    hoverBg = Color.primary[50]
    hoverColor = Color.white[50]
  }
  return (
    <BTN
      bg={bg}
      color={color}
      padding={padding}
      hoverBg={hoverBg}
      hoverColor={hoverColor}
      fz={fz}
      onClick={onClick}
    >
      {content}
    </BTN>
  )
}

export default Button
