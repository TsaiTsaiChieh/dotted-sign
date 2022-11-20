import {useTranslation} from 'react-i18next'

import {InteractCard, TitleWrap, Title, SubTitle} from '../../../styled/Main'
import Preview from './Preview'

const Download = () => {
  const {t} = useTranslation()
  return (
    <InteractCard>
      <TitleWrap>
        <Title>{t('titles.sign_it')}</Title>
        <SubTitle>{t('titles.move_sign')}</SubTitle>
      </TitleWrap>
      <Preview />
    </InteractCard>
  )
}

export default Download
