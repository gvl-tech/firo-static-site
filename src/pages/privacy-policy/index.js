import React from "react"
import { useMediaQuery } from "react-responsive"
import { useTheme } from "styled-components"
import { FlexStartDiv } from "../../components/utilities/flex-start-div.component"
import { PaddedDiv } from "../../components/utilities/padded-div.component"
import { Spacer } from "../../components/utilities/spacer.component"
import { Text } from "../../components/utilities/text.component"
import { Layout } from "../../infrastructure/layouts/Layout"
import "../../styles/blogTemplate.less"

const PrivacyPolicy = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
  const theme = useTheme()

  return (
    <Layout>
      <div id="blogTemplate">
        <PaddedDiv y="6">
          <FlexStartDiv
            width={isDesktop ? "40" : "90"}
            style={{ margin: "0 auto" }}
          >
            <Text bold="true" style={{ lineHeight: 1.3, fontSize: "2.5rem" }}>
              Privacy Policy
            </Text>
            <Spacer />
            <Text color={theme.colors.text.secondary}>
              | Updated November 29, 2020
            </Text>
            <Spacer size="xLarge" />

            <h2>What We Collect</h2>

            <p>We collect standard server logs from our webserver.</p>

            <h2>What We Use the Data For</h2>

            <p>
              Server log data is used to provide statistics on the website and
              help us to improve the content and the information flow. This data
              is also used to analyze errors and diagnose requests to dead
              links. A portion of the server logs are used to gather statistics
              on Firo downloads in order to help us better understand our users'
              needs.
            </p>
          </FlexStartDiv>
        </PaddedDiv>
      </div>
    </Layout>
  )
}

export default PrivacyPolicy
