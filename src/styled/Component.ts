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
  gap: 3px;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`
export const FormErrorIcon = styled.img`
  content: url("/images/warning.svg");
  width: 20px;
`
export const ErrorMsg = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${Color.red[50]};
`
export const LoadingWrap = styled.div<{visible: boolean}>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  width: 100%;
  height: 100vh;
  position: absolute;
  background: ${Color.primary['50-a50']};
  z-index: 1000;
`
export const HexLoading = styled.img`
  content: url("/images/hex-loading.svg");
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  animation: spin 5000ms linear infinite;
`
export const BeeWrap = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
export const BeeLoading = styled.img`
  content: url("/images/bee-loading.svg");
  width: 100%;
  height: 136px;
`
export const TextLoading = styled.span`
  color: ${Color.black[50]};
  font-weight: bold;
  font-size: 28px;
  text-align: center;
`
