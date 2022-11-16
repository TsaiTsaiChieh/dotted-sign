import Loading from './components/Loading'
import ShouldAuth from './components/modals/ShouldAuth'
import Auth from './pages/auth/Auth'
import View from './routes'
import {useAppSelector} from './store/hook'

const App = () => {
  const {isAuth} = useAppSelector((state) => state.auth)

  return (
    <>
      <Loading />
      <ShouldAuth />
      {isAuth ? null : <Auth />}
      <View />
    </>
  )
}

export default App
