import React from "react"
import { graphql, Link } from "gatsby"
import BlogCard from "../pages/blog/components/BlogCard"
import "../styles/blogIndex.less"

const TagsIndexTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMarkdownRemark

  return (
    <div id="blogIndex">
      <section class="page-intro section">
        <div class="row">
          <div class="col">
            <span>Latest </span>
            <span class="red">Updates</span>
          </div>
        </div>
      </section>

      <section class="blog-nav">
        <div class="container">
          <ul class="row">
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

      <section class="page-tag section">
        <div class="row">
          <div class="col">
            <h1>#{tag}</h1>
          </div>
        </div>
      </section>

      {edges.map(post => (
        <BlogCard key={post.node.id} post={post.node} />
      ))}
    </div>
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
