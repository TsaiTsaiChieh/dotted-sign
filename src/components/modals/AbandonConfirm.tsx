import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'

import {useAppDispatch, useAppSelector} from '../../store/hook'
import {setFile, setSign} from '../../store/reducers/persistSlice'
import {setAbandonVisible} from '../../store/reducers/uiSlice'
import {
  AbandonBG,
  AbandonContainer,
  AbandonSubTitle,
  AbandonTitle,
  BtnWrap,
  Close,
  ContentWrap,
  MarkIcon,
  Mask,
} from '../../styled/Modal'
import Button from '../Button'

const AbandonConfirm = () => {
  const dispatch = useAppDispatch()
  const {modals} = useAppSelector((state) => state.ui)
  const {t} = useTranslation()
  const visible = modals.abandonVisible
  const navigate = useNavigate()
  const closed = () => {
    dispatch(setAbandonVisible(false))
  }
  const clear = () => {
    dispatch(setSign(undefined))
    dispatch(setFile(undefined))
    navigate('/')
    dispatch(setAbandonVisible(false))
  }

  return (
    <>
      <Mask visible={visible} />
      <AbandonContainer visible={visible}>
        <ContentWrap>
          <MarkIcon />
          <AbandonTitle>{t('titles.abandon')}</AbandonTitle>
          <AbandonSubTitle>{t('titles.abandon_sub')}</AbandonSubTitle>
          <BtnWrap>
            <Button
              content={t('buttons.think_again')}
              style='red'
              padding='15px 40px'
              onClick={closed}
            />
            <Button
              content={t('buttons.abandon_yes')}
              style='red'
              padding='15px 40px'
              onClick={clear}
            />
          </BtnWrap>
        </ContentWrap>
        <AbandonBG className='right' />
        <Close onClick={closed} />
      </AbandonContainer>
    </>
  )
}

export default AbandonConfirm
