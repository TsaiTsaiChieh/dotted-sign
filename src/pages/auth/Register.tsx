import {Trans, useTranslation} from 'react-i18next'

import {useAppDispatch, useAppSelector} from '../../store/hook'
import {
  setLoginVisible,
  setRegisterVisible,
} from '../../store/reducers/uiSlice'
import {
  FatBee,
  FBIcon,
  RegisterTitle,
  RegisterTitleWrap,
  ThirdPartyWrap,
  RegisterContainer,
  ChangeModal,
} from '../../styled/Auth'
import {LogoVertical} from '../../styled/Component'
import {Close, Mask} from '../../styled/Modal'
import GoogleLogin from './GoogleLogin'
import RegisterForms from './RegisterForms'

const Register = () => {
  const dispatch = useAppDispatch()
  const {t} = useTranslation()
  const {modals} = useAppSelector((state) => state.ui)
  const visible = modals.registerVisible
  const close = () => {
    dispatch(setRegisterVisible(false))
  }
  const openLogin = () => {
    dispatch(setRegisterVisible(false))
    dispatch(setLoginVisible(true))
  }

  return (
    <>
      <Mask visible={visible} />
      <RegisterContainer visible={visible}>
        <RegisterTitleWrap>
          <LogoVertical />
          <RegisterTitle>{t('titles.register')}</RegisterTitle>
        </RegisterTitleWrap>
        <RegisterForms />
        <ChangeModal>
          <Trans
            i18nKey='hints.already_login'
            components={{1: <span onClick={openLogin} />}}
          />
        </ChangeModal>
        <ThirdPartyWrap>
          <GoogleLogin />
          <FBIcon />
        </ThirdPartyWrap>
        <FatBee />
        <Close onClick={close} />
      </RegisterContainer>
    </>
  )
}

export default Register
