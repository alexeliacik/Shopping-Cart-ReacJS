import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }

  *, 
  *::before, 
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;

    @media (max-width:50em){
      font-size: 53%;
    }
  }

  body {
    font-family: sans-serif;
  }
`

const StyledApp = styled.main`
  max-width: 80rem;
  margin: 2rem auto;
  box-shadow: 0 1rem 2rem rgba(25, 42, 86, 1);

  @media (max-width: 40em) {
    margin: 0 auto;
    min-height: 100vh;
  }
`

export default StyledApp
