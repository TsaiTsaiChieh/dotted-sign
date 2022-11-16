import styled from 'styled-components'

import {Color} from '../constants/Variables'

export const Container = styled.div`
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
export const Logo = styled.img`
  width: 220px;
  height: 43px;
  content: url("/images/logo.svg");
  cursor: pointer;
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
