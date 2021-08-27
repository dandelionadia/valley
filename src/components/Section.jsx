import * as React from "react"
import { Box } from "atomic-layout"
import styled from "styled-components"

const Container = styled(Box)`
  background-color: ${props => (props.dark ? "var(--color-heading)" : "#FFF")};
  color: ${props =>
    props.light ? "var(--color-gray-light)" : "var(--color-text)"};
`

const Section = ({ children, dark, light }) => {
  return (
    <Container
      dark={dark}
      light={light}
      paddingVertical="var(--spacing-12)"
      paddingVerticalMd="var(--spacing-20)"
      paddingVerticalLg="var(--spacing-24)"
    >
      {children}
    </Container>
  )
}

export default Section
