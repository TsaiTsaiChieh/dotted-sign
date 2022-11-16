interface Props {
  loose?: boolean
}
const Background = ({loose = false}: Props) => {
  return (
    <>
      <img className='bg top left' src='/images/bg-top-left.svg' alt='bg' />
      <img
        className='bg bottom left'
        src={`/images/bg-bottom-left${loose ? '-empty' : ''}.svg`}
        alt='bg'
      />
      {loose ? null : (
        <img
          className='bg bottom right'
          src='/images/bg-bottom-right.svg'
          alt='bg'
        />
      )}
    </>
  )
}

export default Background
