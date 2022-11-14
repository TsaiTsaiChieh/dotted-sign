import {Trans, useTranslation} from 'react-i18next'

import {useAppDispatch, useAppSelector} from '../../store/hook'
import {setShouldAuthVisible} from '../../store/reducers/uiSlice'
import {
  AuthContainer,
  Close,
  Mask,
  Oops,
  SadBee,
  ShouldAuthWarning,
} from '../../styled/Modal'
import Button from '../Button'

const ShouldAuth = () => {
  const dispatch = useAppDispatch()
  const {t} = useTranslation()
  const {modals} = useAppSelector((state) => state.ui)
  const close = () => {
    dispatch(setShouldAuthVisible(false))
  }
  return (
    <>
      <Mask visible={modals.shouldAuthVisible} />
      <AuthContainer visible={modals.shouldAuthVisible}>
        <Oops />
        <ShouldAuthWarning>
          <Trans i18nKey='warnings.should_auth' components={{1: <span />}} />
        </ShouldAuthWarning>
        <Button content={t('buttons.register')} style='main-yellow' />
        <SadBee />
        <Close onClick={close} />
      </AuthContainer>
    </>
  )
}

export default ShouldAuth
