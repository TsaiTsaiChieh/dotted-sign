import styled from 'styled-components'

export const CanvasContainer = styled.div<{width: number; height: number}>`
  width: 100%;
  height: ${(props) => (props.height ? `${props.height}px` : '100%')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
  .canvas-container,
  .lower-canvas,
  .upper-canvas {
    width: ${(props) => `${props.width * 0.6}px`} !important;
    height: ${(props) => `${props.height * 0.6}px`} !important;
  }
`
