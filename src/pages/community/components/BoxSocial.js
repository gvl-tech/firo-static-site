import React from "react"
import { FlexCenterDiv } from "../../../components/utilities/flex-center-div.component"
import { PaddedDiv } from "../../../components/utilities/padded-div.component"
import { Text } from "../../../components/utilities/text.component"
import { useTheme } from "styled-components"
import { useMediaQuery } from "react-responsive"
import { Spacer } from "../../../components/utilities/spacer.component"

const BoxSocial = ({ logo, name, url }) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })

  return (
    <PaddedDiv
      y="4"
      bg={theme.colors.bg.blue}
      br="2"
      style={{ cursor: " pointer" }}
      onClick={() => window.open(url)}
    >
      <FlexCenterDiv>
        <img src={logo} alt={logo} width={isDesktop ? "120px" : "60px"} />
        <Spacer />
        <Text variant="caption" style={{ whiteSpace: "nowrap" }}>
          {name}
        </Text>
      </FlexCenterDiv>
    </PaddedDiv>
  )
}

export default BoxSocial
