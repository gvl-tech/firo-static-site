import React from "react"
import arrow from "../../../assets/home2/arrow-button.svg"
import { useTheme } from "styled-components"
import { Spacer } from "../../../components/utilities/spacer.component"
import { Text } from "../../../components/utilities/text.component"
import { FlexDiv } from "../../../components/utilities/flex-div.component"
import { BoxDiv } from "../../../components/utilities/box-container.component"

const BoxHome2 = ({ image, title, subtitle, url }) => {
  const theme = useTheme()
  return (
    <BoxDiv x="4">
      <FlexDiv dir="row">
        <img width="50px" src={image} alt={image} />
        <Spacer position="left" />
        <Text variant="h4" color={theme.colors.brand.primary} bold="true">
          {title}
        </Text>
      </FlexDiv>

      <Spacer position="top" />

      <Text
        variant="body"
        color={theme.colors.text.secondary}
        style={{ lineHeight: "1.5" }}
      >
        {subtitle}
      </Text>
      <Spacer position="top" size="xxLarge" />
      <img
        width="100px"
        src={arrow}
        alt="arrow button"
        style={{ cursor: "pointer" }}
        onClick={() => window.open(url)}
      />
    </BoxDiv>
  )
}

export default BoxHome2
