import {useState} from 'react'

import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'
import {useTranslation} from 'react-i18next'

import Button from '../../components/Button'
import FormError from '../../components/FormError'
import {loginSchema} from '../../schemas/auth'
import {nativeLogin} from '../../services/user'
import {useAppDispatch} from '../../store/hook/index'
import {login} from '../../store/reducers/authSlice'
import {setLoginVisible} from '../../store/reducers/uiSlice'
import {LoginForm, LoginFormWrap} from '../../styled/Auth'

const LoginForms = () => {
  const dispatch = useAppDispatch()
  const {t} = useTranslation()
  const [error, setError] = useState<string>('')
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<LoginForm>({resolver: yupResolver(loginSchema)})
  const onSubmit = async (data: LoginForm) => {
    try {
      const user = await nativeLogin(data)
      dispatch(login(user))
      dispatch(setLoginVisible(false))
    } catch (error) {
      setError(t(`errors.${error}`)!)
    }
    reset()
  }

  return (
    <LoginFormWrap
      onSubmit={handleSubmit(onSubmit)}
      onClick={() => setError('')}
    >
      <LoginForm
        placeholder={t('placeholders.email')!}
        {...register('email')}
      />
      <FormError
        msg={errors.email?.message as string}
        visible={!!errors.email}
      />
      <LoginForm
        placeholder={t('placeholders.password')!}
        {...register('password')}
        type='password'
      />
      <FormError
        msg={errors.password?.message as string}
        visible={!!errors.password}
      />
      <Button
        content={t('buttons.login')}
        style='blue-yellow'
        padding='10px 130px'
      />
      <FormError msg={error} visible={error !== ''} />
    </LoginFormWrap>
  )
}

export default LoginForms