import * as React from "react"
import styled from "styled-components"

import { Grid } from "../components/Grid"

const Container = styled.div`
  background-color: var(--color-heading);
  padding: var(--spacing-24);
`

const Section = ({ children }) => {
  return (
    <Container>
      <Grid>{children}</Grid>
    </Container>
  )
}

export default Section
