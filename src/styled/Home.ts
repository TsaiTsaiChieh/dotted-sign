import styled from 'styled-components'

import {Color} from '../constants/Variables'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: ${Color.primary[150]};
  img.bg {
    position: absolute;
    z-index: 1;
  }
`
// Navbar
export const Navbar = styled.nav`
  width: 100%;
  background: ${Color.secondary['50-a70']};
  height: 80px;
  display: flex;
  align-items: center;
  z-index: 10;
  position: fixed;
  div.container {
    width: 100%;
    justify-content: space-between;
    margin: 0 10%;
  }
  div.btns {
    gap: 24px;
  }
`
export const BTNWrap = styled.div`
  display: flex;
  img {
    width: 100%;
  }
`
export const Logo = styled.img`
  width: 220px;
  height: 43px;
  content: url("/images/logo.svg");
`
export const Photo = styled.div<{path?: string}>`
  width: 70px;
  height: 70px;
  background: ${(props) =>
    props.path ? `url(${props.path})` : 'url("/images/photo.svg")'};
  background-size: cover;
  -webkit-mask: url("/images/photo.svg") no-repeat center center;
  mask: url("/images/photo.svg") no-repeat center center;
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
