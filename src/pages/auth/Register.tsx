import {useTranslation} from 'react-i18next'

import {useAppDispatch, useAppSelector} from '../../store/hook'
import {setRegisterVisible} from '../../store/reducers/uiSlice'
import {
  RegisterFormWrap,
  RegisterTitle,
  RegisterTitleWrap,
} from '../../styled/Auth'
import {LogoVertical} from '../../styled/Component'
import {AuthContainer, Close, Mask} from '../../styled/Modal'

const Register = () => {
  const dispatch = useAppDispatch()
  const {t} = useTranslation()
  const {modals} = useAppSelector((state) => state.ui)
  const visible = modals.registerVisible
  const close = () => {
    dispatch(setRegisterVisible(false))
  }

  return (
    <>
      <Mask visible={visible} />
      <AuthContainer visible={visible}>
        <RegisterTitleWrap>
          <LogoVertical />
          <RegisterTitle>{t('titles.register')}</RegisterTitle>
        </RegisterTitleWrap>
        <RegisterFormWrap>
        </RegisterFormWrap>
        <Close onClick={close} />
      </AuthContainer>
    </>
  )
}

export default Register
