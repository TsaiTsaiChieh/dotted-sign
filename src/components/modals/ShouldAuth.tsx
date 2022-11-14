import {Trans, useTranslation} from 'react-i18next'

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
  const {t} = useTranslation()

  return (
    <>
      <Mask visible={visible} />
      <ShouldAuthContainer visible={visible}>
        <Oops />
        <ShouldAuthWarning>
          <Trans i18nKey='warnings.should_auth' components={{1: <span />}} />
        </ShouldAuthWarning>
        <Button content={t('buttons.register')} style='main-yellow' />
        <SadBee />
        <Close />
      </ShouldAuthContainer>
    </>
  )
}

export default ShouldAuth
