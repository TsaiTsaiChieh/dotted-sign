import {createData} from '../../services/curd'
import {googleLogin} from '../../services/user'
import {useAppDispatch} from '../../store/hook'
import {login} from '../../store/reducers/authSlice'
import {setLoginVisible, setRegisterVisible} from '../../store/reducers/uiSlice'
import {GoogleIcon} from '../../styled/Auth'

const GoogleLogin = () => {
  const dispatch = useAppDispatch()
  const handleLogin = async () => {
    const user = await googleLogin()
    await createData('users', user.email, user)
    dispatch(login(user))
    dispatch(setLoginVisible(false))
    dispatch(setRegisterVisible(false))
  }

  return (
    <GoogleIcon onClick={handleLogin} />
  )
}

export default GoogleLogin
