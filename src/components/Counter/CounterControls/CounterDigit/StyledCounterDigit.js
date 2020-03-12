import styled, { keyframes, css } from "styled-components"

const countUpAnimation = keyframes`
  from{opacity:0; transform: translateY(30%) }
  to{opacity:1; transform: translateY(0)}
`
const countDownAnimation = keyframes`
  from{opacity:0; transform: translateY(-30%) }
  to{opacity:1; transform: translateY(0)}
`

const StyledCounterDigit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;

  font-size: 10rem;
  animation: ${({ isCountUp }) =>
    isCountUp
      ? css`
          ${countUpAnimation} 0.3s ease-out
        `
      : css`
          ${countDownAnimation} 0.3s ease-out
        `};
`

export default StyledCounterDigit
