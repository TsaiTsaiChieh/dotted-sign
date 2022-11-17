import {useTranslation} from 'react-i18next'

import {InteractCard, SubTitle, Title, TitleWrap} from '../../../styled/Main'

const Sign = () => {
  const {t} = useTranslation()

  // should detect docFile64
  return (
    <InteractCard>
      <TitleWrap>
        <Title>{t('titles.upload_sign')}</Title>
        <SubTitle>{t('titles.start_to_sign')}</SubTitle>
      </TitleWrap>
    </InteractCard>
  )
}

export default Sign
