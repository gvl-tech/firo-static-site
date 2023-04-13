import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import * as React from "react"
import { useMediaQuery } from "react-responsive"
import { useTheme } from "styled-components"
import { FlexStartDiv } from "../../components/utilities/flex-start-div.component"
import { PaddedDiv } from "../../components/utilities/padded-div.component"
import { Spacer } from "../../components/utilities/spacer.component"
import { Text } from "../../components/utilities/text.component"
import { Layout } from "../../infrastructure/layouts/Layout"
import "../../styles/blogTemplate.less"

export default function GuidePostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })

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
            <Spacer />
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
        slug
        title
      }
    }
  }
`
