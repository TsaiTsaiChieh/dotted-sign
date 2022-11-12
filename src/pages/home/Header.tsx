import Button from '../../components/Button'
import {Logo, Navbar} from '../../styled/Home'

const Header = () => {
  return (
    <Navbar>
      <div className='flex container'>
        <Logo />
        <div className='flex btns'>
          <Button content='登入/註冊' />
          <Button content='歷史紀錄' />
        </div>
      </div>
    </Navbar>
  )
}

export default Header
