import Loading from './components/Loading'
import AbandonConfirm from './components/modals/AbandonConfirm'
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
      <AbandonConfirm />
      {isAuth ? null : <Auth />}
      <View />
    </>
  )
}

export default App
