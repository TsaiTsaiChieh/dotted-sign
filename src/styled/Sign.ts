import styled from 'styled-components'

export const SignatureWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const ColorInput = styled.input``
export const ThicknessInput = styled.input``
export const ClearBtnWrap = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  span {
    font-weight: bold;
  }
`
export const ClearIcon = styled.img`
  content: url("/images/clear.svg");
`
