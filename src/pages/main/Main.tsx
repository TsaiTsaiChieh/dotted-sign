import {ReactNode} from 'react'

import Background from '../../components/layouts/Background'
import Header from '../../components/layouts/Header'
import {Container} from '../../styled/Layout'
import {Bee, InteractWrap, MainContainer} from '../../styled/Main'
import Steps from './Steps'

interface Props {
  childElement: ReactNode
}
const Main = ({childElement}: Props) => {
  return (
    <Container>
      <Header />
      <MainContainer>
        <Bee />
        <InteractWrap>
          <Steps />
          {childElement}
        </InteractWrap>
      </MainContainer>
      <Background loose={true} />
    </Container>
  )
}

export default Main
