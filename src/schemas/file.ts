import i18next from 'i18next'
import * as Yup from 'yup'

const SUPPORTED_FORMATS = [
  'image/jpg',
  'image/jpeg',
  'image/png',
  'application/pdf',
]
export const uploadDocSchema = Yup.object().shape({
  file: Yup.mixed()
    .test(
      'required',
      i18next.t('validate.file_required')!,
      (file) => !!file.length,
    )
    .test(
      'fileSize',
      i18next.t('validate.file_too_large')!,
      (file) => file[0] && file[0].size <= 1024 * 1024 * 10,
    )
    .test(
      'format',
      i18next.t('validate.file_format')!,
      (file) => file[0] && SUPPORTED_FORMATS.includes(file[0].type),
    ),
})
