import styled from 'styled-components'

import {Color} from '../constants/Variables'

export const SignatureWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const UIWrap = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  span {
    font-weight: bold;
  }
`
export const Thickness = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Color.blue[50]};
  padding: 0 3px;
  border-radius: 6px;
  width: 40px;
  height: 30px;
  color: ${Color.white[50]};
`
export const ThicknessInput = styled.input`
  width: 100%;
`
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const UndoIcon = styled.img`
  content: url("/images/undo.svg");
  width: 20px;
  height: 20px;
  padding: 5px;
  background: ${Color.blue[50]};
  border-radius: 50%;
`
export const ClearIcon = styled(UndoIcon)`
  content: url("/images/clear.svg");
`
export const HappyIcon = styled.img`
  content: url("/images/good.svg");
`
