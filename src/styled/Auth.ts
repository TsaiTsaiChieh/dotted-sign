import styled from 'styled-components'

import {Color} from '../constants/Variables'
import {AuthContainer} from './Modal'

export const RegisterContainer = styled(AuthContainer)`
width:420px;
height:484px;
padding: 40px 84px 210px;
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
gap:8px;
margin: 30px 0 24px;
position: relative;
button {
  margin-top:12px ;
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
content: url('/images/fat-bee-normal.svg');
position: absolute;
width: 100%;
bottom: 0;
`
export const ThirdPartyWrap = styled.div`
display: flex;
gap: 48px;
`
export const GoogleIcon = styled.img`
content: url('/images/google.svg');
cursor: pointer;
`
export const FBIcon = styled.img`
content: url('/images/fb.svg');
cursor: pointer;
`
