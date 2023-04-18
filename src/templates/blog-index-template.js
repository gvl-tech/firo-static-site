import React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../infrastructure/layouts/Layout"
import BlogCard from "../pages/blog/components/BlogCard"
import "../styles/blogIndex.less"

const BlogIndexTemplate = ({ pageContext }) => {
  const { pageCount, group, index } = pageContext
  const previousIndex = index - 1
  const nextIndex = index + 1

  const previousPageUrl =
    previousIndex === 1 ? "/latest-updates" : `/latest-updates/${previousIndex}`
  const nextPageUrl = `/latest-updates/${nextIndex}`

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

        {group?.map(post => (
          <li key={post.id}>
            <BlogCard post={post} />
          </li>
        ))}

        <section className="blog-section">
          <div className="container">
            <div className="pagination">
              <div className="text-center page-numbers">
                <p>
                  <Link to={previousPageUrl} className="page-button">
                    &laquo; Prev
                  </Link>
                  {index} of {pageCount}
                  <Link to={nextPageUrl} className="page-button">
                    Next &raquo;
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default BlogIndexTemplate

export const blogListQuery = graphql`
  query blogListQuery {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            layout
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
