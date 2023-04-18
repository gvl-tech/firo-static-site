import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../../../styles/blogCard.less"

const BlogCard = ({ post }) => {
  let featuredImg = getImage(
    post?.frontmatter.img?.childImageSharp?.gatsbyImageData
  )
  return (
    <div id="blogCard">
      <section className="blog-section">
        <div className="container">
          <div className="row">
            <div className="col post-section">
              <div className="post-meta">
                <p className="post-date">{post?.frontmatter?.date}</p>
                <p className="post-author">by {post?.frontmatter?.author}</p>
              </div>

              <Link
                to={`/blog${post?.frontmatter?.slug}`}
                className="post-link"
              >
                <GatsbyImage
                  image={featuredImg}
                  alt={post?.frontmatter?.title}
                />
                <h2>{post?.frontmatter?.title}</h2>
                <p>{post?.frontmatter?.summary}</p>
              </Link>
              <p className="post-tag">
                {post?.frontmatter?.tags?.map(tag => (
                  <Link key={tag} to={`/tag/${tag}`}>
                    #{tag}
                  </Link>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogCard
