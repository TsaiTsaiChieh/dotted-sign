import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'

import {useAppDispatch, useAppSelector} from '../../store/hook'
import {logout} from '../../store/reducers/authSlice'
import {setLoginVisible} from '../../store/reducers/uiSlice'
import {Logo, Navbar, Photo} from '../../styled/Layout'
import Button from '../Button'

const Header = () => {
  const dispatch = useAppDispatch()
  const {t} = useTranslation()
  const {isAuth, userData} = useAppSelector((state) => state.auth)
  const navigate = useNavigate()
  const openLoginModal = () => {
    dispatch(setLoginVisible(true))
  }
  const handleLogout = () => {
    dispatch(logout())
  }
  const goHome = () => {
    navigate('/')
  }
  return (
    <Navbar>
      <div className='flex container'>
        <Logo onClick={goHome} />
        <div className='flex btns'>
          {isAuth ? (
            <Photo
              path={userData!.photo === null ? undefined : userData!.photo}
            />
          ) : (
            <Button
              content={t('buttons.login_or_register')}
              style='second'
              padding='10px 16px'
              onClick={openLoginModal}
            />
          )}
          <Button
            content={t('buttons.logout')}
            style='second'
            padding='10px 43px'
            onClick={handleLogout}
          />
        </div>
      </div>
    </Navbar>
  )
}

export default Header
