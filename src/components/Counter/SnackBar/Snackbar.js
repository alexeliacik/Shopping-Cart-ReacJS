import React from "react"

import StyledSnackBar from "./StyledSnackBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

import alertSound from "../../../assets/sounds/alert.wav"

const Snackbar = ({ snackbarMessage, closeSnackbarHandler }) => {
  return (
    <>
      <StyledSnackBar>
        <audio autoPlay src={alertSound}></audio>
        <span className='snackbarContent'>{snackbarMessage}</span>
        <FontAwesomeIcon className='snackbarClose' icon={faTimes} onClick={closeSnackbarHandler} />
      </StyledSnackBar>
    </>
  )
}

export default Snackbar
