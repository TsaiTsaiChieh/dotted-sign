import {NextIcon, PrevIcon, PrevNextWrap} from '../../styled/Main'

interface Props {
  prevAction: () => void
  nextAction: () => void
}
const PrevNextBtns = ({prevAction, nextAction}: Props) => {
  return (
    <PrevNextWrap>
      <PrevIcon onClick={prevAction} />
      <NextIcon onClick={nextAction} />
    </PrevNextWrap >
  )
}

export default PrevNextBtns
