import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../../../styles/blogCard.less"

const BlogCard = ({ post }) => {
  let featuredImg = getImage(
    post.frontmatter.img?.childImageSharp?.gatsbyImageData
  )

  return (
    <div id="blogCard">
      <section class="blog-section">
        <div class="container">
          <div class="row">
            <div class="col post-section">
              <div class="post-meta">
                <p class="post-date">{post.frontmatter.date}</p>
                <p class="post-author">by {post.frontmatter.author}</p>
              </div>

              <Link to={`/blog${post.frontmatter.slug}`} class="post-link">
                <GatsbyImage image={featuredImg} alt={post.frontmatter.title} />
                <h2>{post.frontmatter.title}</h2>
                <p>{post.frontmatter.summary}</p>
              </Link>
              <p class="post-tag">
                {post.frontmatter.tags.map(tag => (
                  <Link to={`/tag/${tag}`}>#{tag}</Link>
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
