import {HomeContainer} from '../../styled/Home'
import Background from './Background'
import Banner from './Banner'
import Header from './Header'

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Banner />
      <Background />
    </HomeContainer>
  )
}

export default Home
