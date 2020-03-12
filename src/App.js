import React from "react"

import StyledApp, { GlobalStyle } from "./StyledApp"
import Header from "./components/Header/Header"
import Counter from "./components/Counter/Counter"

const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Header />
      <Counter />
    </StyledApp>
  )
}

export default App
