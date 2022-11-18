import {useTranslation} from 'react-i18next'

import {InteractCard, TitleWrap, Title, SubTitle} from '../../../styled/Main'
import Preview1 from './Preview1'

const Download = () => {
  const {t} = useTranslation()
  return (
    <InteractCard>
      <TitleWrap>
        <Title>{t('titles.sign_it')}</Title>
        <SubTitle>{t('titles.move_sign')}</SubTitle>
      </TitleWrap>
      <Preview1 />
    </InteractCard>
  )
}

export default Download
