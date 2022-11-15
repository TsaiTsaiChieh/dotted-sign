import {useTranslation} from 'react-i18next'

import {useAppSelector, useAppDispatch} from '../../store/hook'
import {setLoginVisible} from '../../store/reducers/uiSlice'
import {
  LoginContainer,
  FatBee,
  FBIcon,
  LoginTitle,
  LoginTitleWrap,
  ThirdPartyWrap,
} from '../../styled/Auth'
import {LogoVertical} from '../../styled/Component'
import {Close, Mask} from '../../styled/Modal'
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

  return (
    <>
      <Mask visible={visible} />
      <LoginContainer visible={visible}>
        <LoginTitleWrap>
          <LogoVertical />
          <LoginTitle>{t('titles.login')}</LoginTitle>
        </LoginTitleWrap>
        <LoginForms />
        <ThirdPartyWrap>
          <GoogleLogin />
          <FBIcon />
        </ThirdPartyWrap>
        <FatBee />
        <Close onClick={close} />
      </LoginContainer>
    </>
  )
}

export default Login
