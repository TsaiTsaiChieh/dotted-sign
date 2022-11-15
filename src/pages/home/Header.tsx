import {useTranslation} from 'react-i18next'

import Button from '../../components/Button'
import {Logo, Navbar} from '../../styled/Home'

const Header = () => {
  const {t} = useTranslation()
  return (
    <Navbar>
      <div className='flex container'>
        <Logo />
        <div className='flex btns'>
          <Button content={t('buttons.login_or_register')} style='second'
            padding='10px 16px' />
          <Button content={t('buttons.history')} style='second'
            padding='10px 21px' />
        </div>
      </div>
    </Navbar>
  )
}

export default Header
