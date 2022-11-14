import ShouldAuth from './components/modals/ShouldAuth'
import Home from './pages/home/Home'

const App = () => {
  return (
    <>
      <Home />
      <ShouldAuth visible={false} />
    </>
  )
}

export default App
