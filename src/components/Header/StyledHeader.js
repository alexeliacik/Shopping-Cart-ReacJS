import styled from "styled-components"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  font-size: 2rem;
  height: 6rem;
  background-color: rgba(25, 42, 86, 1);
  color: white;

  & > div > svg {
    margin: 0 2rem;
    color: rgba(251, 197, 49, 1);
  }
`
export default StyledHeader
