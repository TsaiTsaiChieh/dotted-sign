import {useEffect} from 'react'

import {useTranslation} from 'react-i18next'

import {useAppDispatch, useAppSelector} from '../../store/hook'
import {setStepId} from '../../store/reducers/uiSlice'
import {StepWrap, Progress, StepNameWrap, StepName} from '../../styled/Main'

const Steps = () => {
  const dispatch = useAppDispatch()
  const {stepId} = useAppSelector((state) => state.ui)
  const {docBase64} = useAppSelector((state) => state.persist)
  const {t} = useTranslation()
  const stepNames: string[] = t('steps', {returnObjects: true})
  useEffect(() => {
    dispatch(setStepId('2'))
    if (!docBase64) dispatch(setStepId('1'))
  }, [docBase64])

  return (
    <StepWrap>
      <StepNameWrap>
        {stepNames.map((ele, i) => (<StepName key={i}>{ele}</StepName>))}
      </StepNameWrap>
      <Progress id={stepId} />
    </StepWrap>

  )
}

export default Steps
