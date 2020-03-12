import React from "react"
import StyledCounterForm from "./StyledCounterForm"
import Button from "@material-ui/core/Button"
const CounterForm = ({ nameChangeHandler, priceChangeHandler, saveItemHandler, name, price }) => {
  return (
    <StyledCounterForm>
      <form className='form' onSubmit={saveItemHandler}>
        <input id='name' className='input' type='text' placeholder='Name' onChange={nameChangeHandler} autoComplete='off' value={name} />
        <label className='label nameLabel' htmlFor='name'>
          Name
        </label>
        <input id='price' className='input' type='number' placeholder='Price' onChange={priceChangeHandler} autoComplete='off' value={price} />
        <label className='label priceLabel' htmlFor='price'>
          Price
        </label>
      </form>
      <div className='formButton'>
        <Button onClick={saveItemHandler}>ADD</Button>
      </div>
    </StyledCounterForm>
  )
}

export default CounterForm
