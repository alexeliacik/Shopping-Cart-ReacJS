import styled from "styled-components"

const StyledCounterForm = styled.div`
  grid-area: form;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 40rem) {
    border-bottom: 1px solid rgba(47, 54, 64, 0.3);
  }

  .form {
    display: flex;
    position: relative;
    flex-grow: 1;
    padding-right: 1rem;
  }

  .input {
    width: 100%;
    height: 4.5rem;
    text-indent: 1rem;
    border: none;
    border-radius: 3px;
    padding: 0 4rem 0 0;
    margin-right: 0.5rem;
    color: white;
    background-color: rgba(25, 42, 86, 1);
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      appearance: none;
      margin: 0;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: white;
    }
  }

  .label {
    position: absolute;
    font-size: 1.4rem;
    visibility: visible;
    opacity: 1;

    top: -40%;
    transition: all 0.2s;
  }

  .nameLabel {
    left: 1%;
  }

  .priceLabel {
    left: 50%;
    appearance: none;
  }

  .input:placeholder-shown + .label {
    top: 30%;
    visibility: hidden;
    opacity: 0;
  }

  .MuiButton-root {
    display: inline-block;
    height: 4.5rem;
    color: white;
    background-color: rgba(25, 42, 86, 1);
    font-size: 1.6rem;
    letter-spacing: 1px;
    padding: 0 4rem;
    transition: all 0.3s;

    &:hover {
      background-color: rgba(25, 42, 86, 0.7);
    }
  }
`
export default StyledCounterForm
