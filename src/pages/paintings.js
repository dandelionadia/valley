import * as React from "react"
import { graphql } from "gatsby"
import { DefaultLayout } from "../layouts/DefaultLayout"
import PaintingsLayout from "../layouts/PaintingsLayout"

const paintings = ({ data }) => {
  console.log(data)
  return (
    <DefaultLayout>
      <PaintingsLayout>
        <div>
          {data.paintings.nodes.map(painting => {
            return <img src={painting.frontmatter.imageUrl} />
          })}
        </div>
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
