import {useTranslation} from 'react-i18next'

import {useAppSelector} from '../store/hook'
import {
  BeeLoading,
  BeeWrap,
  HexLoading,
  LoadingWrap,
  TextLoading,
} from '../styled/Component'

const Loading = () => {
  const {t} = useTranslation()
  const {loadingVisible} = useAppSelector((state) => state.ui)

  return (
    <LoadingWrap visible={loadingVisible}>
      <HexLoading />
      <BeeWrap>
        <BeeLoading />
        <TextLoading>{t('titles.loading')}</TextLoading>
      </BeeWrap>
    </LoadingWrap>
  )
}

export default Loading
