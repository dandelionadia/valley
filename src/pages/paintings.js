import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { DefaultLayout } from "../layouts/DefaultLayout"
import PaintingsLayout from "../layouts/PaintingsLayout"

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: masonry;
  gap: var(--spacing-5);
  grid-auto-flow: dense;
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${props =>
    props.imageIndex &&
    `
      grid-column: span 2;
      grid-row: span 2;

      @media (max-width: 768px) {
        grid-column: span 1;
      }
    `}
`

const paintings = ({ data }) => {
  return (
    <DefaultLayout>
      <PaintingsLayout>
        <StyledGallery>
          {data.paintings.nodes.map((painting, index) => {
            const imageIndex = (index + 1) % 3 === 0
            return (
              <StyledImage
                src={painting.frontmatter.imageUrl}
                imageIndex={imageIndex}
              />
            )
          })}
        </StyledGallery>
      </PaintingsLayout>
    </DefaultLayout>
  )
}

export default paintings

export const pageQuery = graphql`
  query {
    paintings: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/content/paintings/*" } }
    ) {
      nodes {
        frontmatter {
          title
          description
          imageUrl
        }
      }
    }
  }
`
