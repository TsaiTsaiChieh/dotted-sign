import styled from 'styled-components'

import {Color} from '../constants/Variables'

export const ShouldAuthContainer = styled.div<{visible: boolean}>`
  width: 558px;
  height: 734px;
  margin: auto;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background: ${Color.white[50]};
  box-shadow: 0px 4px 5px 4px ${Color.black['100-p25']};
  border-radius: 6px;
`
export const Mask = styled.div<{visible: boolean}>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 90;
  background: ${Color.blue['100-a50']};
`
export const Oops = styled.img`
  content: url("/images/oops.svg");
  width: 271px;
  height: 80px;
`
export const ShouldAuthWarning = styled.span`
  font-size: 24px;
  width: 312px;
  font-weight: bold;
  line-height: 29px;
  margin: 32px 0 54px;
  padding: 0 138px;
`
export const SadBee = styled.img`
  content: url("/images/bee-sad.svg");
  width: 100%;
  height: 230px;
  margin-top: 55px;
`
export const Close = styled.img`
  content: url("/images/close.svg");
  width: 30px;
  height: 30px;
  position: absolute;
  padding: 14px;
  top: 32px;
  right: 28px;
  background: ${Color.primary[50]};
  border-radius: 50%;
  &:hover {
    background: ${Color.secondary[50]};
  }
`
