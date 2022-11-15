import i18next from 'i18next'
import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required(i18next.t('validate.field_should_fill')!)
    .email(i18next.t('validate.email')!),
  password: Yup.string()
    .required(i18next.t('validate.field_should_fill')!)
    .min(6, i18next.t('validate.min_password')!)
    .max(16, i18next.t('validate.max_password')!),
})

export const registerSchema = loginSchema.concat(
  Yup.object().shape({
    cPassword: Yup.string()
      .required(i18next.t('validate.field_should_fill')!)
      .oneOf(
        [Yup.ref('password'), null],
        i18next.t('validate.c_password_not_match')!,
      ),
  }),
)
