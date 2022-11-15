import {createData} from '../../services/curd'
import {googleLogin} from '../../services/user'
import {useAppDispatch} from '../../store/hook'
import {setIsAuth, setUserData} from '../../store/reducers/authSlice'
import {GoogleIcon} from '../../styled/Auth'

const GoogleLogin = () => {
  const dispatch = useAppDispatch()
  const handleLogin = async () => {
    const user = await googleLogin()
    await createData('users', user.email, user)
    dispatch(setIsAuth(true))
    dispatch(setUserData(user))
  }

  return (
    <GoogleIcon onClick={handleLogin} />
  )
}

export default GoogleLogin
