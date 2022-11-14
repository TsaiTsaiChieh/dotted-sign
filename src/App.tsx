import ShouldAuth from './components/modals/ShouldAuth'
import Auth from './pages/auth/Auth'
import Home from './pages/home/Home'

const App = () => {
  return (
    <>
      <Home />
      <ShouldAuth />
      <Auth />
    </>
  )
}

export default App
