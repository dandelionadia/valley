import * as React from "react"
import styled from "styled-components"
import { Composition, Box } from "atomic-layout"

import { Button } from "../components/Button"
import { Grid } from "../components/Grid"
import one from "../images/one.png"
import two from "../images/two.png"
import three from "../images/three.png"
import four from "../images/four.png"

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
  margin-top: var(--spacing-20);
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

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const templateTablet = `
  left centerTop right
  left centerBottom right
  / auto auto auto
`

const Images = () => {
  return (
    <Composition template={templateTablet} gap={20}>
      {Areas => (
        <>
          <Areas.Left>
            <StyledImage src={one} alt="Logo" />
          </Areas.Left>
          <Areas.CenterTop>
            <StyledImage src={three} alt="Logo" />
          </Areas.CenterTop>
          <Areas.CenterBottom>
            <StyledImage src={four} alt="Logo" />
          </Areas.CenterBottom>
          <Areas.Right>
            <StyledImage src={two} alt="Logo" />
          </Areas.Right>
        </>
      )}
    </Composition>
  )
}

const Section = () => {
  return (
    <Container>
      <Grid>
        <Images />
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
      </Grid>
    </Container>
  )
}

export default Section
