import styled from 'styled-components'

import {Color} from '../constants/Variables'

export const UploadFormWrap = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
export const HiddenInputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 50px;
`
export const UploadInput = styled.input`
  width: 107px;
  height: 107px;
  cursor: pointer;
`
export const UploadPDFIcon = styled.img`
  width: 107px;
  height: 107px;
  cursor: pointer;
  content: url("/images/upload-pdf.svg");
`
export const SuccessWrap = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin-top: 20px;
    font-size: 32px;
    font-weight: bold;
    color: ${Color.primary[50]};
  }
`
export const DocIcon = styled.img`
  content: url("/images/doc.svg");
`
