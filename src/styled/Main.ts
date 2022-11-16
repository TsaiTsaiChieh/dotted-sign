import styled from 'styled-components'

import {Color} from '../constants/Variables'

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`
export const Bee = styled.img`
  width: 50%;
  height: 327px;
  content: url("/images/bee-normal.svg");
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`
export const InteractWrap = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`
export const InteractCard = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  padding: 85px 40px 265px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  background: ${Color.white[50]};
  box-shadow: 0px 4px 5px 4px ${Color.black['100-p25']};
`
export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
export const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
`
export const SubTitle = styled.h2`
  font-weight: bold;
  font-size: 16px;
`
