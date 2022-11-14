import {
  Close,
  Mask,
  Oops,
  SadBee,
  ShouldAuthContainer,
  ShouldAuthWarning,
} from '../../styled/Modal'
import Button from '../Button'

interface Props {
  visible: boolean
}
const ShouldAuth = ({visible}: Props) => {
  return (
    <>
      <Mask visible={visible} />
      <ShouldAuthContainer visible={visible}>
        <Oops />
        <ShouldAuthWarning>
          您尚未申請進入家園的許可證請先去找點點‘’註冊‘’報到喔！
        </ShouldAuthWarning>
        <Button content='點我註冊' style='main-yellow' />
        <SadBee />
        <Close />
      </ShouldAuthContainer>
    </>
  )
}

export default ShouldAuth
