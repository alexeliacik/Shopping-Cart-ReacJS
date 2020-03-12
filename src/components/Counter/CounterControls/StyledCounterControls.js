import styled, { keyframes } from "styled-components"

export const counterDigitAnimation = keyframes`
  from{opacity:0; background-color: red;}
  to{opacity:1; background-color: yellow;}
`

const StyledCounterControls = styled.div`
  grid-area: controls;

  display: flex;
  flex-direction: column;
  background-color: white;

  .MuiButtonBase-root {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    position: relative;
    z-index: 1;
    text-align: center;

    font-size: 6rem;
    padding: 0;
    color: white;
    background-color: rgba(156, 136, 255, 0.5);
    cursor: pointer;
    border: none;
    transition: all 0.1s;

    &:hover {
      background-color: rgba(156, 136, 255, 0.7);
    }

    &:focus {
      outline: none;
    }

    &:disabled {
      color: white;
      background-color: rgba(156, 136, 255, 0.2);
      pointer-events: auto;
      cursor: not-allowed;

      &:hover {
        background-color: rgba(156, 136, 255, 0.2);
      }
    }
  }
`

export default StyledCounterControls
