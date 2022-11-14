import Button from '../../components/Button'
import {Logo, Navbar} from '../../styled/Home'

const Header = () => {
  return (
    <Navbar>
      <div className='flex container'>
        <Logo />
        <div className='flex btns'>
          <Button content='登入/註冊' style='second' padding='10px 16px' />
          <Button content='歷史紀錄' style='second' padding='10px 21px' />
        </div>
      </div>
    </Navbar>
  )
}

export default Header
