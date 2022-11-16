import {ReactNode} from 'react'

import Background from '../../components/layouts/Background'
import Header from '../../components/layouts/Header'
import {Container} from '../../styled/Layout'

interface Props {
  childElement: ReactNode
}
const Main = ({childElement}: Props) => {
  return (
    <Container>
      <Header />
      {childElement}
      <Background />
    </Container>
  )
}

export default Main
