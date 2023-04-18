import React from "react"
import { graphql, Link } from "gatsby"
import BlogCard from "../pages/blog/components/BlogCard"
import "../styles/blogIndex.less"
import { Layout } from "../infrastructure/layouts/Layout"

const TagsIndexTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <div id="blogIndex">
        <section className="page-intro section">
          <div className="row">
            <div className="col">
              <span>Latest </span>
              <span className="red">Updates</span>
            </div>
          </div>
        </section>

        <section className="blog-nav">
          <div className="container">
            <ul className="row">
              <li>
                <Link
                  to="/latest-updates"
                  activeStyle={{ color: "white", backgroundColor: "#9b1c2e" }}
                >
                  All
                </Link>
              </li>
              <li>
                <Link
                  to="/tag/news"
                  activeStyle={{ color: "white", backgroundColor: "#9b1c2e" }}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/tag/dev"
                  activeStyle={{ color: "white", backgroundColor: "#9b1c2e" }}
                >
                  Dev
                </Link>
              </li>
              <li>
                <Link
                  to="/tag/community"
                  activeStyle={{ color: "white", backgroundColor: "#9b1c2e" }}
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="page-tag">
          <div className="row">
            <div className="col">
              <h1>#{tag}</h1>
            </div>
          </div>
        </section>

        {edges.map(post => (
          <BlogCard key={post.node.id} post={post.node} />
        ))}
      </div>
    </Layout>
  )
}

export default TagsIndexTemplate

export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: 2000
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            summary
            author
            tags
            img {
              childImageSharp {
                gatsbyImageData(width: 800)
              }
            }
          }
        }
      }
    }
  }
`
