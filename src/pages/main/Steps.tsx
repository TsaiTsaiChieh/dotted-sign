import {useTranslation} from 'react-i18next'

import {StepWrap, Progress, StepNameWrap, StepName} from '../../styled/Main'

interface Props {
  id?: string
}
const Steps = ({id = '1'}: Props) => {
  const {t} = useTranslation()
  const stepNames: string[] = t('steps', {returnObjects: true})
  return (

    <StepWrap>
      <StepNameWrap>
        {stepNames.map((ele, i) => (<StepName key={i}>{ele}</StepName>))}
      </StepNameWrap>
      <Progress id={id} />
    </StepWrap>

  )
}

export default Steps
