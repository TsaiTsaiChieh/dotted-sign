import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'

import {Navigation} from '../../../routes/Navigation'
import {useAppDispatch} from '../../../store/hook'
import {setSign} from '../../../store/reducers/persistSlice'
import {setStepId} from '../../../store/reducers/uiSlice'
import {SuccessWrap} from '../../../styled/Docs'
import {HappyIcon} from '../../../styled/Sign'
import PrevNextBtns from '../PrevNextBtns'

const Success = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {t} = useTranslation()
  const prevAction = () => {
    dispatch(setSign(undefined))
  }
  const nextAction = () => {
    dispatch(setStepId('5'))
    navigate(Navigation[2].path)
  }
  return (
    <SuccessWrap>
      <HappyIcon />
      <span>{t('hints.upload_success')}</span>
      <PrevNextBtns prevAction={prevAction} nextAction={nextAction} />
    </SuccessWrap>
  )
}

export default Success
