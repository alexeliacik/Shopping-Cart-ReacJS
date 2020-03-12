import React from "react"
import StyledCounterTable, { NoData } from "./StyledCounterTable"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { CSSTransition, TransitionGroup } from "react-transition-group"

const CounterTable = ({ items, deleteItemHandler }) => {
  return (
    <>
      {items.length === 0 && <NoData>No item available!</NoData>}
      <CSSTransition in={items.length > 0} timeout={300} mountOnEnter unmountOnExit classNames='tableFade'>
        <StyledCounterTable>
          <table className='table'>
            <thead className='tableHead'>
              <tr className='tableRowHead'>
                <th className='tableHead'>Name</th>
                <th className='tableHead'>Price</th>
                <th className='tableHead'>Count</th>
                <th className='tableHead'></th>
              </tr>
            </thead>
            <TransitionGroup className='tableBody' component='tbody'>
              {items.map(item => (
                <CSSTransition key={item.id} classNames='tableRowFade' timeout={300}>
                  <tr className='tableRow'>
                    <td className='tableData'>{item.name}</td>
                    <td className='tableData'>${item.price}</td>
                    <td className='tableData'>{item.count}</td>
                    <td className='tableData'>
                      <FontAwesomeIcon className='closeIcon' icon={faTimes} onClick={() => deleteItemHandler(item.id, item.name)} />
                    </td>
                  </tr>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </table>
        </StyledCounterTable>
      </CSSTransition>
    </>
  )
}

export default CounterTable
