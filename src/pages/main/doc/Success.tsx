import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'

import {Navigation} from '../../../routes/Navigation'
import {useAppDispatch} from '../../../store/hook'
import {setFile} from '../../../store/reducers/persistSlice'
import {setStepId} from '../../../store/reducers/uiSlice'
import {DocIcon, SuccessWrap} from '../../../styled/Docs'
import PrevNextBtns from '../PrevNextBtns'

const Success = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {t} = useTranslation()
  const prevAction = () => {
    dispatch(setFile(undefined))
  }
  const nextAction = () => {
    dispatch(setStepId('3'))
    navigate(Navigation[1].path)
  }
  return (
    <SuccessWrap>
      <DocIcon />
      <span>{t('hints.upload_success')}</span>
      <PrevNextBtns prevAction={prevAction} nextAction={nextAction} />
    </SuccessWrap>
  )
}

export default Success
