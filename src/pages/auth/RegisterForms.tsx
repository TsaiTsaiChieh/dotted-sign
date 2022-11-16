import {useState} from 'react'

import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'
import {useTranslation} from 'react-i18next'

import Button from '../../components/Button'
import FormError from '../../components/FormError'
import {registerSchema} from '../../schemas/auth'
import {createData} from '../../services/curd'
import {nativeRegister} from '../../services/user'
import {useAppDispatch} from '../../store/hook'
import {login} from '../../store/reducers/authSlice'
import {setLoading, setRegisterVisible} from '../../store/reducers/uiSlice'
import {RegisterFormWrap, RegisterForm} from '../../styled/Auth'

const RegisterForms = () => {
  const {t} = useTranslation()
  const dispatch = useAppDispatch()
  const [error, setError] = useState<string>('')
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
    clearErrors,
  } = useForm<RegisterForm>({resolver: yupResolver(registerSchema)})
  const onSubmit = async (data: RegisterForm) => {
    dispatch(setLoading(true))
    try {
      const user = await nativeRegister(data)
      await createData('users', user.email, user)
      dispatch(login(user))
      dispatch(setRegisterVisible(false))
      reset()
    } catch (error: any) {
      setError(t(`errors.${error}`)!)
    }
    dispatch(setLoading(false))
  }
  const clearError = () => {
    setError('')
    clearErrors()
  }
  return (
    <RegisterFormWrap
      onSubmit={handleSubmit(onSubmit)}
      onClick={clearError}
    >
      <RegisterForm
        placeholder={t('placeholders.email')!}
        {...register('email')}
      />
      <FormError
        msg={errors.email?.message as string}
        visible={!!errors.email}
      />
      <RegisterForm
        placeholder={t('placeholders.password')!}
        {...register('password')}
        type='password'
      />
      <FormError
        msg={errors.password?.message as string}
        visible={!!errors.password}
      />
      <RegisterForm
        placeholder={t('placeholders.c_password')!}
        {...register('cPassword')}
        type='password'
      />
      <FormError
        msg={errors.cPassword?.message as string}
        visible={!!errors.cPassword}
      />
      <Button content={t('buttons.registerImmediately')} padding='10px 130px' />
      <FormError msg={error} visible={error !== ''} />
    </RegisterFormWrap>
  )
}

export default RegisterForms
