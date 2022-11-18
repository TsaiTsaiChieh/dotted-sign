import {ChangeEvent, useRef, useState} from 'react'

import {ColorResult, SliderPicker} from 'react-color'
import {useTranslation} from 'react-i18next'
import SignatureCanvas from 'react-signature-canvas'

import Button from '../../../components/Button'
import FormError from '../../../components/FormError'
import {useAppDispatch, useAppSelector} from '../../../store/hook'
import {setSign} from '../../../store/reducers/persistSlice'
import {
  ClearBtnWrap,
  ClearIcon,
  SignatureWrap,
  ThicknessInput,
} from '../../../styled/Sign'
import Success from './Success'

const Canvas = () => {
  const dispatch = useAppDispatch()
  const {signBase64} = useAppSelector((state) => state.persist)
  const ref = useRef<null | SignatureCanvas>(null)
  const [error, setError] = useState<string>('')
  const {t} = useTranslation()
  const [thickness, setThickness] = useState(5)
  const [color, setColor] = useState('#21194D')
  const pickerOnChange = (
    color: ColorResult,
    _: ChangeEvent<HTMLInputElement>,
  ) => {
    setColor(color.hex)
  }
  const thicknessOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setThickness(parseInt(target.value))
  }
  const clearAll = () => {
    ref.current?.clear()
  }
  const uploadSign = () => {
    // base64 result
    const result = ref.current?.toDataURL()
    if (ref.current?.isEmpty()) setError(t('warnings.should_sign')!)
    else {
      setError('')
      dispatch(setSign(result))
    }
  }
  return signBase64 ? <Success /> : (
    <SignatureWrap>
      <SignatureCanvas
        ref={ref}
        canvasProps={{width: 350, height: 200, className: 'signature'}}
        dotSize={thickness}
        penColor={color}
      />
      <SliderPicker color={color} onChange={pickerOnChange} />
      <ThicknessInput
        min={1}
        max={20}
        value={thickness}
        type='range'
        onChange={thicknessOnChange}
      />
      <ClearBtnWrap onClick={clearAll}>
        <ClearIcon />
        <span>{t('buttons.clear_all')}</span>
      </ClearBtnWrap>
      <Button content={t('buttons.upload_sign')} onClick={uploadSign} />
      <FormError msg={error} visible={error !== ''} />
    </SignatureWrap>
  )
}

export default Canvas
