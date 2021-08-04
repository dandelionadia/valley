import * as React from "react"
import { Box } from "atomic-layout"
import styled from "styled-components"

import { Grid } from "../components/Grid"

const Container = styled(Box)`
  background-color: var(--color-heading);
  color: var(--color-gray-light);
`

const Section = ({ children }) => {
  return (
    <Container
      paddingVertical="var(--spacing-12)"
      paddingVerticalMd="var(--spacing-20)"
      paddingVerticalLg="var(--spacing-24)"
    >
      <Grid>{children}</Grid>
    </Container>
  )
}

export default Section
