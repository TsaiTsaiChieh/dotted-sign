import {useTranslation} from 'react-i18next'

import {
  InteractCard,
  SubTitle,
  Title,
  TitleWrap,
} from '../../../styled/Main'
import UploadDocForm from './UploadDocForm'

const Doc = () => {
  const {t} = useTranslation()

  return (
    <InteractCard>
      <TitleWrap>
        <Title>{t('titles.upload_file')}</Title>
        <SubTitle>{t('titles.start_to_record')}</SubTitle>
      </TitleWrap>
      <UploadDocForm />
    </InteractCard>
  )
}

export default Doc
