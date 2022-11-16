import styled from 'styled-components'

export const BTNWrap = styled.div`
  display: flex;
  img {
    width: 100%;
  }
`
// Banner
export const BannerWrap = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
`
export const LeftSide = styled.div`
  width: 35%;
  display: flex;
  padding-left: 15%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Title = styled.img`
  width: 334px;
  height: 104px;
  content: url("/images/word.svg");
  z-index: 10;
`
export const SubTitle = styled.h1`
  color: black;
  font-size: 38.74px;
  margin: 32px 0 48px;
  font-weight: bold;
`
export const RightSide = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`
export const BeeWrap = styled.div`
  position: relative;
`
export const Bee = styled.img`
  width: 100%;
  height: 327px;
  content: url("/images/bee-with-line.svg");
`
export const Beryl = styled.img`
  width: 50%;
  height: 90px;
  content: url("/images/beryl.svg");
  position: absolute;
  top: 85px;
  right: 0;
`
