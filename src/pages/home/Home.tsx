import Background from '../../components/layouts/Background'
import Header from '../../components/layouts/Header'
import {Container} from '../../styled/Layout'
import Banner from './Banner'

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Background />
    </Container>
  )
}

export default Home
