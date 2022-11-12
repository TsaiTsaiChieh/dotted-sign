import styled from 'styled-components'

import {Color} from '../constants/Variables'

export const BTN = styled.button<{bg?: string}>`
  width: 138px;
  height: 45px;
  background: white;
  color: ${Color.secondary[50]};
  border-radius: 3px;
  font-size: 24px;
  font-weight: bold;
`
