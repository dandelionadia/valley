import React from "react"
import { Box } from "atomic-layout"
import styled from "styled-components"

const StyledBox = styled.div`
  box-sizing: border-box;
`

export const Grid = ({ children, fluid }) => {
  const maxWidths = fluid
    ? { width: "1400px" }
    : { widthSm: "540px", widthMd: "1200px" }

  return (
    <Box
      as={StyledBox}
      maxWidth="100%"
      {...maxWidths}
      marginHorizontal="auto"
      paddingHorizontal="var(--spacing-12)"
    >
      {children}
    </Box>
  )
}
