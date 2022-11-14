import Button from '../../components/Button'
import {
  BannerWrap,
  LeftSide,
  RightSide,
  Title,
  SubTitle,
  Bee,
  BeeWrap,
  Beryl,
} from '../../styled/Home'

const Banner = () => {
  return (
    <BannerWrap>
      <LeftSide>
        <Title />
        <SubTitle>記錄你的點點滴滴</SubTitle>
        <Button content='點我進入' fz={44.16} padding={'38px 66px'} />
      </LeftSide>
      <RightSide>
        <BeeWrap>
          <Bee />
          <Beryl />
        </BeeWrap>
      </RightSide>
    </BannerWrap>
  )
}

export default Banner
