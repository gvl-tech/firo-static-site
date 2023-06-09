import * as React from "react"
import { useMediaQuery } from "react-responsive"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { PaddedDiv } from "../../components/utilities/padded-div.component"
import { Text } from "../../components/utilities/text.component"
import { FlexStartDiv } from "../../components/utilities/flex-start-div.component"
import { useTheme } from "styled-components"
import { Spacer } from "../../components/utilities/spacer.component"
import { Layout } from "../../infrastructure/layouts/Layout"
import "../../styles/blogTemplate.less"

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const theme = useTheme()
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
  let featuredImg = getImage(frontmatter.img?.childImageSharp?.gatsbyImageData)

  return (
    <Layout>
      <div id="blogTemplate">
        <PaddedDiv y="6">
          <FlexStartDiv
            width={isDesktop ? "40" : "90"}
            style={{ margin: "0 auto" }}
          >
            <Text bold="true" style={{ lineHeight: 1.3, fontSize: "2.5rem" }}>
              {frontmatter.title}
            </Text>
            <Text
              color={theme.colors.text.secondary}
              style={{ fontSize: "1.2rem" }}
            >
              {frontmatter.summary}
            </Text>
            <Spacer />
            <Text color={theme.colors.text.secondary}>
              {frontmatter.date} | {frontmatter.author}
            </Text>
            <Spacer size="xLarge" />
            <GatsbyImage image={featuredImg} alt="blog-banner" />
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </FlexStartDiv>
        </PaddedDiv>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        summary
        author
        layout
        img {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`
