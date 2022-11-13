import styled from 'styled-components'

export const BTN = styled.button<{
  bg: string
  color: string
  padding?: string
  fz?: number
}>`
  padding: ${(props) => (props.padding ? `${props.padding}` : '21px 72px')};
  font-size: ${(props) => (props.fz ? `${props.fz}px` : '24px')};
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  border-radius: 3px;
  font-weight: bold;
`
