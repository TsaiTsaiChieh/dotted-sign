import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'
import {useTranslation} from 'react-i18next'

import Button from '../../../components/Button'
import FormError from '../../../components/FormError'
import {uploadDocSchema} from '../../../schemas/file'
import {useAppDispatch, useAppSelector} from '../../../store/hook'
import {setFile} from '../../../store/reducers/persistSlice'
import {
  HiddenInputWrap,
  UploadFormWrap,
  UploadIcon,
  UploadInput,
} from '../../../styled/Docs'
import {getBase64} from '../../../utils/helper'
import Success from './Success'

const UploadDocForm = () => {
  const dispatch = useAppDispatch()
  const {docBase64} = useAppSelector((state) => state.persist)
  const {
    register,
    handleSubmit,
    formState: {errors},
    clearErrors,
  } = useForm<UploadDocFormType>({
    resolver: yupResolver(uploadDocSchema),
  })
  const {t} = useTranslation()

  const onSubmit = async (data: UploadDocFormType) => {
    const result = await getBase64(data.file[0])
    dispatch(setFile(result))
  }
  const clearError = () => {
    clearErrors()
  }

  return docBase64 ? (
    <Success />
  ) : (
    <UploadFormWrap onSubmit={handleSubmit(onSubmit)} onClick={clearError}>
      <HiddenInputWrap>
        <label htmlFor='input'>
          <UploadIcon />
        </label>
        <UploadInput hidden id='input' {...register('file')} type='file' />
      </HiddenInputWrap>
      <Button content={t('buttons.upload_file')} padding='10px 130px' />
      <FormError msg={errors.file?.message as string} visible={!!errors.file} />
    </UploadFormWrap>
  )
}

export default UploadDocForm
