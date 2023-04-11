const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const createPaginatedPages = require("gatsby-paginate")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-index-template.js`)
  const tagTemplate = path.resolve(`./src/templates/tags-index-template.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        posts: allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          limit: 1000
        ) {
          nodes {
            id
            excerpt
            fields {
              slug
            }
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
        tags: allMarkdownRemark(limit: 2000) {
          group(field: { frontmatter: { tags: SELECT } }) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  // Extract blog post data from query
  const posts = result.data.posts.nodes

  createPaginatedPages({
    edges: posts,
    createPage,
    pageTemplate: "src/templates/blog-index-template.js",
    pageLength: 1,
    pathPrefix: "latest-updates",
  })
  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  // Extract tag data from query
  const tags = result.data.tags.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tag/${tag.fieldValue}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
