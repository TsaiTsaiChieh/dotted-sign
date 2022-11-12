import styled from 'styled-components'

import {Color} from '../constants/Variables'

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
`
export const Logo = styled.img`
  width: 220px;
  height: 43px;
  content: url("/images/logo.svg");
`
export const BG = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1;
  position: relative;
  background: ${Color.primary[150]};
  img {
    position: absolute;
  }
`
