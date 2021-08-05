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
  }
`

const ArtGallery = ({ children }) => {
  return (
    <Section>
      <Composition
        paddingHorizontal="var(--spacing-12)"
        templateCols="auto auto"
        gap="var(--spacing-24)"
      >
        <Box>
          <Box as="h3" paddingLeft="16px">
            gallery
          </Box>
          <StyledUl>
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
        </Box>
        <Box>{children}</Box>
      </Composition>
    </Section>
  )
}

export default ArtGallery
