import React from "react"
import StyledHeader from "./StyledHeader"
import Container from "../../components/UI/StyledComponents/Container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FontAwesomeIcon icon={faShoppingCart} />
        Shopping Cart
      </Container>
    </StyledHeader>
  )
}

export default Header
