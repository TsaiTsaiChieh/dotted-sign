import {Navigate, Outlet} from 'react-router-dom'

import {useAppSelector} from '../store/hook'

const Protected = () => {
  const {isAuth} = useAppSelector((state) => state.auth)

  return (
    isAuth ? <Outlet /> : (<Navigate to='/' />)
  )
}

export default Protected
