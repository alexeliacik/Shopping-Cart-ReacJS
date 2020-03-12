import React from "react"
import StyledCounterDigit from "./StyledCounterDigit"

const CounterDigit = ({ count, isCountUp }) => {
  return <StyledCounterDigit isCountUp={isCountUp}>{count}</StyledCounterDigit>
}

export default CounterDigit
