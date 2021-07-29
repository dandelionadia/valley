import styled from "styled-components"

export const Button = styled.button`
  background: ${props => (props.primary ? "#4159de" : "hite")};
  color: ${props => (props.primary ? "white" : "alevioletred")};

  font-size: 14xpx;
  margin: 1em;
  padding: 0.7rem 2em;
  border: none;
  border-radius: 1px;
  text-transform: uppercase;
  box-shadow: 8px 8px 1px 1px rgb(33, 40, 84);
`
