import {useTranslation} from 'react-i18next'

import Button from '../../../components/Button'
import {
  Bee,
  InteractCard,
  InteractWrap,
  MainContainer,
  SubTitle,
  Title,
  TitleWrap,
} from '../../../styled/Main'
import UploadForm from './UploadForm'

const Doc = () => {
  const {t} = useTranslation()
  return (
    <MainContainer>
      <Bee />
      <InteractWrap>
        <InteractCard>
          <TitleWrap>
            <Title>{t('titles.upload_file')}</Title>
            <SubTitle>{t('titles.start_to_record')}</SubTitle>
          </TitleWrap>
          <UploadForm />
          <Button content={t('buttons.upload_file')} padding='10px 130px' />
        </InteractCard>
      </InteractWrap>
    </MainContainer>
  )
}

export default Doc
