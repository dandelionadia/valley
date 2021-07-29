import * as React from "react"
import styled from "styled-components"
import { Box } from "atomic-layout"

import { Button } from "../components/Button"

const Container = styled.div`
  background-color: var(--color-heading);
  padding: var(--spacing-24);
  display: grid;
  gap: 5rem;
`

const StyledBox = styled.div`
  text-transform: uppercase;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`

const StyledTitle = styled.h3`
  color: var(--color-white);
  font-size: var(--fontSize-3);
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-3);
  margin-top: 0;
`

const StyledText = styled.span`
  color: var(--color-text-light);
  font-size: var(--fontSize-1);
  text-transform: capitalize;
`

const Section = () => {
  return (
    <Container>
      <Box>images</Box>
      <StyledBox>
        <Box>
          <StyledTitle>defined by art</StyledTitle>
          <StyledText>
            lorem this button component has a primary state that changes its
            color. When setting the primary prop to true, we are swapping out
            its background and text color.
          </StyledText>
        </Box>
        <Box flex justifyContent="flex-end">
          <Button primary>follow me</Button>
        </Box>
      </StyledBox>
    </Container>
  )
}

export default Section
