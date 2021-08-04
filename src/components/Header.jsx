import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Composition, Box } from "atomic-layout"
import { ReactComponent as Logo } from "../images/logo.svg"

const StyledLogo = styled.div`
  margin-bottom: var(--spacing-6);
`

const Container = styled.div`
  padding: var(--spacing-16);
  padding-bottom: var(--spacing-12);
`

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: var(--spacing-8);
  margin: 0;
`

const StyledLi = styled.li`
  margin: 0;

  a {
    display: block;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: var(--letter-spacing-2);

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
        <Container>
          <Areas.Logo>
            <Box as={StyledLogo} flex justifyContent="center">
              <Logo width={48} />
            </Box>
          </Areas.Logo>
          <Areas.Menu>
            <StyledUl>
              <StyledLi>
                <Link to={"/about"} itemProp="url">
                  <div itemProp="headline">about me</div>
                </Link>
              </StyledLi>
              <StyledLi>
                <Link to={"/paintings"} itemProp="url">
                  <div itemProp="headline">paintings</div>
                </Link>
              </StyledLi>
              <StyledLi>
                <Link to={"/code"} itemProp="url">
                  <div itemProp="headline">code</div>
                </Link>
              </StyledLi>
              <StyledLi>
                <Link to={"/books"} itemProp="url">
                  <div itemProp="headline">books</div>
                </Link>
              </StyledLi>
              <StyledLi>
                <Link to={"/photos"} itemProp="url">
                  <div itemProp="headline">photos</div>
                </Link>
              </StyledLi>
            </StyledUl>
          </Areas.Menu>
        </Container>
      )}
    </Composition>
  )
}

export default Header
