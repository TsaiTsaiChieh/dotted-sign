import {Trans, useTranslation} from 'react-i18next'

import {useAppSelector, useAppDispatch} from '../../store/hook'
import {
  setLoginVisible,
  setRegisterVisible,
} from '../../store/reducers/uiSlice'
import {
  LoginContainer,
  FatBee,
  LoginTitle,
  LoginTitleWrap,
  ThirdPartyWrap,
  ChangeModal,
} from '../../styled/Auth'
import {LogoVertical} from '../../styled/Component'
import {Close, Mask} from '../../styled/Modal'
import FbLogin from './FbLogin'
import GoogleLogin from './GoogleLogin'
import LoginForms from './LoginForms'

const Login = () => {
  const dispatch = useAppDispatch()
  const {modals} = useAppSelector((state) => state.ui)
  const visible = modals.loginVisible
  const {t} = useTranslation()
  const close = () => {
    dispatch(setLoginVisible(false))
  }
  const openRegister = () => {
    dispatch(setLoginVisible(false))
    dispatch(setRegisterVisible(true))
  }

  return (
    <>
      <Mask visible={visible} />
      <LoginContainer visible={visible}>
        <LoginTitleWrap>
          <LogoVertical />
          <LoginTitle>{t('titles.login')}</LoginTitle>
        </LoginTitleWrap>
        <LoginForms />
        <ChangeModal>
          <Trans
            i18nKey='hints.should_register'
            components={{1: <span className='blue' onClick={openRegister} />}}
          />
        </ChangeModal>
        <ThirdPartyWrap>
          <GoogleLogin />
          <FbLogin />
        </ThirdPartyWrap>
        <FatBee />
        <Close onClick={close} />
      </LoginContainer>
    </>
  )
}

export default Login
