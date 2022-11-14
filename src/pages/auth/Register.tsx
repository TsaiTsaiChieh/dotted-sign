
import {useTranslation} from 'react-i18next'

import {useAppDispatch, useAppSelector} from '../../store/hook'
import {setRegisterVisible} from '../../store/reducers/uiSlice'
import {
  FatBee,
  FBIcon,
  GoogleIcon,
  RegisterTitle,
  RegisterTitleWrap,
  ThirdPartyWrap,
  RegisterContainer,
} from '../../styled/Auth'
import {LogoVertical} from '../../styled/Component'
import {Close, Mask} from '../../styled/Modal'
import RegisterForms from './RegisterForms'

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
      <RegisterContainer visible={visible}>
        <RegisterTitleWrap>
          <LogoVertical />
          <RegisterTitle>{t('titles.register')}</RegisterTitle>
        </RegisterTitleWrap>
        <RegisterForms />
        <ThirdPartyWrap>
          <GoogleIcon />
          <FBIcon />
        </ThirdPartyWrap>
        <FatBee />
        <Close onClick={close} />
      </RegisterContainer>
    </>
  )
}

export default Register
