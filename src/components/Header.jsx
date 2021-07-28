import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Composition, Box } from "atomic-layout"

const StyledLogo = styled.div`
  padding: var(--spacing-12);
`

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
`

const StyledLi = styled.li`
  margin: 0;

  a {
    display: block;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 2px;

    padding: var(--spacing-4);
    background-image: linear-gradient(125deg, black 50%, red 50% 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200%;
    background-position: 0%;
    transition: background-position 0.8s;

    :hover {
      background-position: 110%;
    }
  }
`

const Header = () => {
  return (
    <Composition
      areas={`
            logo
            menu
          `}
    >
      {Areas => (
        <>
          <Areas.Logo>
            <Box as={StyledLogo} flex justifyContent="center">
              <div>LOGO</div>
            </Box>
          </Areas.Logo>
          <Areas.Menu>
            <StyledUl>
              <StyledLi>
                <Link to={"/home"} itemProp="url">
                  <div itemProp="headline">title</div>
                </Link>
              </StyledLi>
              <StyledLi>
                <Link to={"/foo"} itemProp="url">
                  <div itemProp="headline">title 2</div>
                </Link>
              </StyledLi>
            </StyledUl>
          </Areas.Menu>
        </>
      )}
    </Composition>
  )
}

export default Header
