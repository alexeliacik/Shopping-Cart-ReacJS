import styled from "styled-components"

const StyledCounter = styled.main`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 17.5rem 6rem 6rem;
  grid-template-areas:
    "controls table"
    "controls table"
    "form snack";

  padding: 1rem;

  @media (max-width: 40em) {
    grid-gap: 3rem;
    grid-template-columns: 1fr;
    grid-template-rows: 10rem 10rem 7rem 5rem 1fr;
    grid-template-areas:
      "controls"
      "controls"
      "form"
      "table"
      "table";
  }

  .snackbarFade-enter-active {
    opacity: 0;
    transform: scale(0.9) translateY(1rem);
  }
  .snackbarFade-enter-done {
    opacity: 1;
    transform: translateY(0);

    transition: all 0.3s;
  }
  .snackbarFade-exit-active {
    opacity: 0;
    transition: all 0.3s;
  }

  .tableFade-enter-active {
    opacity: 0;
    transform: scale(0.9) translateY(-1rem);
  }
  .tableFade-enter-done {
    opacity: 1;
    transform: translateY(0);

    transition: all 0.3s;
  }
  .tableFade-exit-active {
    display: none;
  }
`

export const TotalPrice = styled.div`
  text-align: right;
  padding-bottom: 1rem;

  & > span {
    margin-right: 1rem;
    padding: 0.25rem;
    color: rgba(194, 54, 22, 1);
    font-size: 2rem;
    font-weight: bold;
    border: 1px solid rgba(47, 54, 64, 1);
    box-shadow: 0 0.3rem 1rem rgba(232, 65, 24, 0.5);
    border-radius: 3px;
    letter-spacing: 2px;

    @media (max-width: 40rem) {
      margin-right: 2rem;
    }
  }
`

export default StyledCounter
