import {useTranslation} from 'react-i18next'

import Button from '../../components/Button'
import {useAppDispatch} from '../../store/hook'
import {setShouldAuthVisible} from '../../store/reducers/uiSlice'
import {
  BannerWrap,
  LeftSide,
  RightSide,
  Title,
  SubTitle,
  Bee,
  BeeWrap,
  Beryl,
} from '../../styled/Home'

const Banner = () => {
  const dispatch = useAppDispatch()
  const {t} = useTranslation()
  const handleEnter = () => {
    dispatch(setShouldAuthVisible(true))
  }

  return (
    <BannerWrap>
      <LeftSide>
        <Title />
        <SubTitle>{t('titles.home')}</SubTitle>
        <Button
          content={t('buttons.enter')}
          fz={44.16}
          padding={'38px 66px'}
          onClick={handleEnter}
        />
      </LeftSide>
      <RightSide>
        <BeeWrap>
          <Bee />
          <Beryl />
        </BeeWrap>
      </RightSide>
    </BannerWrap>
  )
}

export default Banner
