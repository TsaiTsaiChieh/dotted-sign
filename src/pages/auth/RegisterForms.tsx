import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'
import {useTranslation} from 'react-i18next'
import * as yup from 'yup'

import Button from '../../components/Button'
import FormError from '../../components/FormError'
import {RegisterFormWrap, RegisterForm} from '../../styled/Auth'

const RegisterForms = () => {
  const {t} = useTranslation()
  const schema = yup.object().shape({
    email: yup.string().required(t('warnings.field_should_fill')!),
    password: yup
      .string()
      .required(t('warnings.field_should_fill')!)
      .min(4, t('warnings.min_password')!)
      .max(16, t('warnings.max_password')!),
    cPassword: yup
      .string()
      .required(t('warnings.field_should_fill')!)
      .oneOf([yup.ref('password'), null], t('warnings.c_password_not_match')!),
  })
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({resolver: yupResolver(schema)})
  const onSubmit = (data: any) => {
    console.log(data)
    reset()
  }
  return (
    <RegisterFormWrap onSubmit={handleSubmit(onSubmit)}>
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
      />
      <FormError
        msg={errors.password?.message as string}
        visible={!!errors.password}
      />
      <RegisterForm
        placeholder={t('placeholders.c_password')!}
        {...register('cPassword')}
      />
      <FormError
        msg={errors.cPassword?.message as string}
        visible={!!errors.cPassword}
      />
      <Button content={t('buttons.registerImmediately')} padding='10px 130px' />
    </RegisterFormWrap>
  )
}

export default RegisterForms
