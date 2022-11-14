import {useForm} from 'react-hook-form'
import {useTranslation} from 'react-i18next'

import Button from '../../components/Button'
import FormError from '../../components/FormError'
import {useAppDispatch, useAppSelector} from '../../store/hook'
import {setRegisterVisible} from '../../store/reducers/uiSlice'
import {
  FatBee,
  FBIcon,
  GoogleIcon,
  RegisterForm,
  RegisterFormWrap,
  RegisterTitle,
  RegisterTitleWrap,
  ThirdPartyWrap,
  RegisterContainer,
} from '../../styled/Auth'
import {LogoVertical} from '../../styled/Component'
import {Close, Mask} from '../../styled/Modal'

const Register = () => {
  const dispatch = useAppDispatch()
  const {t} = useTranslation()
  const {modals} = useAppSelector((state) => state.ui)
  const visible = modals.registerVisible
  const close = () => {
    dispatch(setRegisterVisible(false))
  }
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  return (
    <>
      <Mask visible={visible} />
      <RegisterContainer visible={visible}>
        <RegisterTitleWrap>
          <LogoVertical />
          <RegisterTitle>{t('titles.register')}</RegisterTitle>
        </RegisterTitleWrap>
        <RegisterFormWrap onSubmit={handleSubmit((data) => console.log(data))}>
          <RegisterForm
            placeholder={t('placeholders.email')!}
            {...register('email', {required: true})}
          />
          <FormError msg={'Email is required.'} visible={!!errors.email} />
          <RegisterForm
            placeholder={t('placeholders.password')!}
            {...register('password', {required: true})}
          />
          <FormError
            msg={'Password is required.'}
            visible={!!errors.password}
          />
          <RegisterForm
            placeholder={t('placeholders.confirm_password')!}
            {...register('confirmPassword', {required: true})}
          />
          <FormError
            msg={'Confirm password is required.'}
            visible={!!errors.confirmPassword}
          />
          <Button
            content={t('buttons.registerImmediately')}
            padding='10px 130px'
          />
        </RegisterFormWrap>
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
