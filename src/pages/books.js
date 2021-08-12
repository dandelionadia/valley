import * as React from "react"
import { Link, graphql } from "gatsby"
import { Composition, Box } from "atomic-layout"
import { DefaultLayout } from "../components/DefaultLayout"
import { Grid } from "../components/Grid"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Books = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <DefaultLayout>
      <Grid>
        <Layout location={location} title={siteTitle}>
          <SEO title="All posts" />
          <Composition
            as="ul"
            style={{ listStyle: `none` }}
            templateCols="1fr"
            templateColsMd="1fr 1fr"
            templateColsLg="1fr 1fr 1fr"
            gap="40px"
          >
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <li key={post.fields.slug}>
                  <header>
                    <img
                      width="100%"
                      src="https://images-na.ssl-images-amazon.com/images/I/71bVROhrJKL.jpg"
                    />
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                </li>
              )
            })}
          </Composition>
        </Layout>
      </Grid>
    </DefaultLayout>
  )
}

export default Books

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  }
`
