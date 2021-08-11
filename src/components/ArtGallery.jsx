import * as React from "react"
import { Link } from "gatsby"
import { Composition, Box } from "atomic-layout"
import styled from "styled-components"

import Section from "../components/Section"

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  font-size: var(--fontSize-root);
  text-transform: none;
`

const StyledLi = styled.li`
  margin: 0;

  a {
    color: var(--color-text-light);
    display: block;
    border-bottom: 1px solid var(--color-grey);
    padding: var(--spacing-4);

    :hover {
      color: var(--color-light-blue);
      border-bottom: 1px solid var(--color-light-blue);
    }

    .active {
      color: var(--color-light-blue);
      border-bottom: 1px solid var(--color-light-blue);
    }
  }
`

const StyledTitle = styled.h3`
  padding-left: 16px;

  @media (max-width: 992px) {
    text-align: center;
    padding: 0;
  }
`

const Container = styled(Box)`
  @media (min-width: 992px) {
    position: sticky;
    top: 100px;
    height: fit-content;
  }
`

const ArtGallery = ({ children }) => {
  return (
    <Section>
      <Composition
        paddingHorizontal="var(--spacing-12)"
        templateCols="auto"
        templateColsLg="auto auto"
        gap="var(--spacing-6)"
        gapLg="var(--spacing-12)"
      >
        <Container minWidth="200px">
          <StyledTitle as="h3">gallery</StyledTitle>
          <StyledUl activeClassName="active">
            <StyledLi>
              <Link to={"/paintings/concept"} itemProp="url">
                <div itemProp="headline">Concept art</div>
              </Link>
            </StyledLi>
            <StyledLi>
              <Link to={"/paintings/characters"} itemProp="url">
                <div itemProp="headline">Characters</div>
              </Link>
            </StyledLi>
            <StyledLi>
              <Link to={"/paintings/illustrations"} itemProp="url">
                <div itemProp="headline">Illustrations</div>
              </Link>
            </StyledLi>
            <StyledLi>
              <Link to={"/paintings/practice"} itemProp="url">
                <div itemProp="headline">Practice</div>
              </Link>
            </StyledLi>
            <StyledLi>
              <Link to={"/paintings/world-building"} itemProp="url">
                <div itemProp="headline">World-building</div>
              </Link>
            </StyledLi>
          </StyledUl>
        </Container>
        <Box>{children}</Box>
      </Composition>
    </Section>
  )
}

export default ArtGallery
