import {BG} from '../../styled/Home'

const Background = () => {
  return (
    <BG>
      <img className='top left' src='/images/bg-top-left.svg' alt='bg' />
      <img className='bottom left' src='/images/bg-bottom-left.svg'
        alt='bg' />
      <img className='bottom right' src='/images/bg-bottom-right.svg'
        alt='bg' />
    </BG>
  )
}

export default Background
