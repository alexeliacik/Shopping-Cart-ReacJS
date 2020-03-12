import React from "react"

import StyledCounterControls from "./StyledCounterControls"
import Button from "@material-ui/core/Button"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import CounterDigit from "./CounterDigit/CounterDigit"

const CounterControls = ({ count, countUpHandler, countDownHandler, isCountUp }) => {
  return (
    <StyledCounterControls>
      <Button variant='contained' onClick={countUpHandler}>
        <FontAwesomeIcon icon={faChevronUp} />
      </Button>

      <CounterDigit key={count} count={count} isCountUp={isCountUp} />

      <Button variant='contained' onClick={countDownHandler} disabled={count <= 0}>
        <FontAwesomeIcon icon={faChevronDown} />
      </Button>
    </StyledCounterControls>
  )
}

export default CounterControls
