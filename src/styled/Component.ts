import styled from 'styled-components'

import {Color} from '../constants/Variables'

export const BTN = styled.button<{
  bg: string
  color: string
  hoverBg: string
  hoverColor: string
  padding?: string
  fz?: number
}>`
  padding: ${(props) => (props.padding ? `${props.padding}` : '21px 72px')};
  font-size: ${(props) => (props.fz ? `${props.fz}px` : '24px')};
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  border-radius: 3px;
  font-weight: bold;
  &:hover {
    background: ${(props) => props.hoverBg};
    color: ${(props) => props.hoverColor};
  }
`
export const LogoVertical = styled.img`
  content: url("/images/logo-vertical.svg");
`
export const FormErrorWrap = styled.div<{visible: boolean}>`
display: flex;
align-items: center;
gap:3px;
visibility: ${(props) => props.visible ? 'visible' : 'hidden'};
`
export const FormErrorIcon = styled.img`
content: url('/images/warning.svg');
width: 20px;
`
export const ErrorMsg = styled.span`
font-size:16px ;
font-weight: bold;
color: ${Color.red[50]};
`
