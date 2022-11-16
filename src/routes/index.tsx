import {Routes, Route} from 'react-router-dom'

import Home from '../pages/home/Home'
import Main from '../pages/main/Main'
import {Navigation} from './Navigation'
import Protected from './Protected'

const View = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route element={<Protected />}>
        {Navigation.map((ele) => (
          <Route
            key={ele.id}
            path={ele.path}
            element={<Main childElement={ele.childElement} />}
          />
        ))}
      </Route>
    </Routes>
  )
}

export default View
