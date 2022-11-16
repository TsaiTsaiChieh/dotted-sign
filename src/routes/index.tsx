import {Routes, Route} from 'react-router-dom'

import Home from '../pages/home/Home'
import Protected from './Protected'

const View = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route element={<Protected />}>
        <></>
      </Route>
    </Routes>
  )
}

export default View
