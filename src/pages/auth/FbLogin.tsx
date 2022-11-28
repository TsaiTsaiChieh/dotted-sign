import {createData} from '../../services/curd'
import {fbLogin} from '../../services/user'
import {useAppDispatch} from '../../store/hook/index'
import {login} from '../../store/reducers/authSlice'
import {
  setLoading,
  setLoginVisible,
  setRegisterVisible,
} from '../../store/reducers/uiSlice'
import {FBIcon} from '../../styled/Auth'

const FbLogin = () => {
  const dispatch = useAppDispatch()
  const handleLogin = async () => {
    const user = await fbLogin()
    dispatch(setLoading(true))
    await createData('users', user.email, user)
    dispatch(login(user))
    dispatch(setLoginVisible(false))
    dispatch(setRegisterVisible(false))
    dispatch(setLoading(false))
  }
  return (
    <FBIcon onClick={handleLogin} />
  )
}

export default FbLogin
