import styled from "styled-components"

const StyledCounterTable = styled.div`
  grid-area: table;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(245, 246, 250, 1);
  }

  .table {
    width: 100%;
    text-align: center;
    font-size: 1.6rem;
    border-collapse: collapse;
    table-layout: fixed;
  }

  .tableRowHead {
    background-color: rgba(194, 54, 22, 1);
  }

  .tableHead {
    padding: 0.5rem 0;
    color: white;
    border-bottom: 1px solid rgba(25, 42, 86, 1);
    width: 17rem;

    &:not(:first-child) {
      width: 5rem;
    }

    &:last-child {
      width: 2rem;
    }
  }

  .tableRow {
    &:nth-child(2n + 1) {
      background-color: rgba(220, 221, 225, 0.8);
    }
    &:nth-child(2n) {
      background-color: #eee;
    }
  }

  .tableData {
    padding: 0.5rem 0;
    width: 50%;
  }

  .closeIcon {
    cursor: pointer;
  }

  .tableRowFade-enter-active {
    opacity: 0;
  }
  .tableRowFade-enter-done {
    opacity: 1;
    transition: all 0.3s;
  }
  .tableRowFade-exit-active {
    opacity: 0;
    transition: all 0.3s;
  }

  .totalPrice {
    position: fixed;
    top: 0;
  }
`

export const NoData = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 6rem;
  font-size: 1.8rem;
  border-radius: 5px;
  color: rgba(47, 54, 64, 1);
  border: 4px solid rgba(251, 197, 49, 1);
`

export default StyledCounterTable
