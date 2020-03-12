import React, { useState, useEffect } from "react"
import { CSSTransition } from "react-transition-group"

import StyledCounter, { TotalPrice } from "./StyledCounter"
import CounterControls from "./CounterControls/CounterControls"
import CounterForm from "./CounterForm/CounterForm"
import CounterTable from "./CounterTable/CounterTable"
import Snackbar from "./SnackBar/Snackbar"

import uuid from "react-uuid"

const Counter = () => {
  const [count, setCount] = useState(0)
  const [isCountUp, setIsCountUp] = useState(null)
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [totalPrice, setTotalPrice] = useState(0)
  const [items, setItems] = useState([])
  const [snackbarMessage, setSnackbarMessage] = useState("")
  const [showSnackbar, setShowSnackbar] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSnackbar(false)
    }, 5000)

    return () => clearTimeout(timer)
  })

  const countUpHandler = () => {
    setIsCountUp(true)
    setCount(prevState => prevState + 1)
  }
  const countDownHandler = () => {
    setIsCountUp(false)
    setCount(prevState => prevState - 1)
  }

  const nameChangeHandler = e => {
    setName(e.target.value)
  }
  const priceChangeHandler = e => {
    setPrice(e.target.value)
  }

  const saveItemHandler = e => {
    e.preventDefault()
    if (name.trim() && price > 0 && count > 0) {
      const newItem = { id: uuid(), name: name, price: price, count: count }
      const updatedItems = [...items, newItem]
      setItems(updatedItems)
      totalPriceHandler(updatedItems)
      setCount(0)
      snackbarMessageHandler(`You've successfully added the '${name}' to the list.`)
      setShowSnackbar(true)
      setName("")
      setPrice("")
    } else {
      snackbarMessageHandler("Name, price and/or count is not valid!")
      setShowSnackbar(true)
    }
  }

  const deleteItemHandler = (id, name) => {
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems)
    totalPriceHandler(updatedItems)
    snackbarMessageHandler(`You've successfully deleted the '${name}' from the list.`)
    setShowSnackbar(true)
  }

  const snackbarMessageHandler = message => {
    setSnackbarMessage(message)
  }

  const closeSnackbarHandler = () => {
    setShowSnackbar(false)
  }

  const totalPriceHandler = updatedItems => {
    let total = 0
    const calculateTotalPrice = updatedItems.map(item => (total += item.price * item.count))
    setTotalPrice(total)
  }
  return (
    <>
      <StyledCounter>
        <CounterControls count={count} isCountUp={isCountUp} countUpHandler={countUpHandler} countDownHandler={countDownHandler} />
        <CounterForm saveItemHandler={saveItemHandler} nameChangeHandler={nameChangeHandler} priceChangeHandler={priceChangeHandler} name={name} price={price} />
        <CounterTable items={items} deleteItemHandler={deleteItemHandler} />
        <CSSTransition in={showSnackbar} timeout={300} classNames='snackbarFade' mountOnEnter unmountOnExit>
          <Snackbar key={snackbarMessage} snackbarMessage={snackbarMessage} closeSnackbarHandler={closeSnackbarHandler} />
        </CSSTransition>
      </StyledCounter>
      {totalPrice > 0 && (
        <TotalPrice>
          <span>Total: ${totalPrice.toFixed(2)}</span>
        </TotalPrice>
      )}
    </>
  )
}

export default Counter
