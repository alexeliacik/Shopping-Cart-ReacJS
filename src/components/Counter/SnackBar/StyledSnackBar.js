import styled, { keyframes } from "styled-components"

const snackbarAnimation = keyframes`
  from{opacity:0; transform: scale(0.9) translateY(1rem)}
  to{opacity:1; transform: translateY(0)}
`

const StyledSnackBar = styled.main`
  grid-area: snack;

  display: flex;
  align-items: flex-start;
  position: relative;
  text-align: center;

  @media (max-width: 40rem) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  .snackbarContent {
    width: 100%;
    padding: 2rem 0;
    font-size: 1.4rem;
    color: rgba(47, 54, 64, 1);
    background-color: rgba(251, 197, 49, 1);
    animation: ${snackbarAnimation} 0.3s;

    @media (max-width: 40rem) {
      padding: 2.5rem;
      font-size: 1.46rem;
    }
  }

  .snackbarClose {
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    font-size: 1.8rem;
    cursor: pointer;
    animation: ${snackbarAnimation} 0.3s;
  }
`

export default StyledSnackBar
