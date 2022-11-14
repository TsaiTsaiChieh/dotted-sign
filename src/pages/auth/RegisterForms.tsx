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
    password: yup.string()
      .min(4, 'Password length should be at least 4 characters')
      .max(12, 'Password cannot exceed more than 12 characters'),
  })
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)})

  return (
    <RegisterFormWrap onSubmit={handleSubmit((data) => console.log(data))}>
      <RegisterForm
        placeholder={t('placeholders.email')!}
        {...register('email', {required: true})}
      />
      <FormError msg={'Email is required.'} visible={!!errors.email} />
      <RegisterForm
        placeholder={t('placeholders.password')!}
        {...register('password')}
      />
      <FormError
        msg={errors.password?.message as string}
        visible={!!errors.password}
      />
      <RegisterForm
        placeholder={t('placeholders.confirm_password')!}
        {...register('confirmPassword', {
          validate: (val: string) => {
            if (watch('password') !== val) {
              return 'Your passwords do no match'
            }
          },
        })}
      />
      <FormError
        msg={errors.confirmPassword?.message as string}
        visible={!!errors.confirmPassword}
      />
      <Button
        content={t('buttons.registerImmediately')}
        padding='10px 130px'
      />
    </RegisterFormWrap>
  )
}

export default RegisterForms
