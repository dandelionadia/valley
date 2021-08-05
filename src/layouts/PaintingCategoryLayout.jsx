import React from "react"
import { graphql } from "gatsby"

import { DefaultLayout } from "./DefaultLayout"
import PaintingsLayout from "./PaintingsLayout"

const PaintingCategoryLayout = ({ data }) => {
  console.log(data)
  return (
    <DefaultLayout>
      <PaintingsLayout>
        <div>
          {data?.paintings.nodes.map(painting => {
            return <img src={painting.frontmatter.imageUrl} />
          })}
        </div>
      </PaintingsLayout>
    </DefaultLayout>
  )
}

export default PaintingCategoryLayout

export const pageQuery = graphql`
  query GetPainting($category: String) {
    paintings: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { glob: "**/content/paintings/*" }
        frontmatter: { category: { eq: $category } }
      }
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
