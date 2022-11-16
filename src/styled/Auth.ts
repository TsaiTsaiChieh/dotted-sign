import styled from 'styled-components'

import {Color} from '../constants/Variables'
import {AuthContainer} from './Modal'

export const RegisterContainer = styled(AuthContainer)`
  width: 420px;
  height: 520px;
  padding: 40px 84px 210px;
  overflow: hidden;
`
export const RegisterTitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 13.75px;
`
export const RegisterTitle = styled.h2`
  font-weight: bold;
  font-size: 36px;
`
export const RegisterFormWrap = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 30px;
  position: relative;
  button {
    margin-top: 10px;
  }
`
export const RegisterForm = styled.input`
  width: 358px;
  height: 42px;
  border: 3px solid ${Color.primary[50]};
  border-radius: 6px;
  text-align: left;
  padding-left: 10px;
  font-size: 16px;
  &::placeholder {
    color: ${Color.primary[50]};
  }
`
export const FatBee = styled.img`
  content: url("/images/fat-bee-normal.svg");
  position: absolute;
  width: 100%;
  bottom: -10px;
`
export const ChangeModal = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0 25px;
  span {
    cursor: pointer;
    font-weight: normal;
    color: ${Color.primary[50]};
    text-decoration: underline;
    &.blue {
      color: ${Color.blue[50]};
    }
  }
`
export const ThirdPartyWrap = styled.div`
  display: flex;
  gap: 48px;
`
export const GoogleIcon = styled.img`
  content: url("/images/google.svg");
  cursor: pointer;
`
export const FBIcon = styled.img`
  content: url("/images/fb.svg");
  cursor: pointer;
`
export const LoginContainer = styled(RegisterContainer)`
  width: 380px;
  height: 528px;
  padding: 32px 104px 210px;
`
export const LoginTitleWrap = styled(RegisterTitleWrap)`
  flex-direction: column;
`
export const LoginTitle = styled(RegisterTitle)``
export const LoginFormWrap = styled(RegisterFormWrap)``
export const LoginForm = styled(RegisterForm)`
  border: 3px solid ${Color.blue[50]};
  &::placeholder {
    color: ${Color.blue[50]};
  }
`
