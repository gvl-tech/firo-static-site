import React from "react"

import divider from "../../../assets/download/divider.svg"
import androidWhite from "../../../assets/download/androidWhite.svg"
import macWhite from "../../../assets/download/macWhite.svg"
import pcWhite from "../../../assets/download/pcWhite.svg"
import webWhite from "../../../assets/download/webWhite.svg"

import { FlexCenterDiv } from "../../../components/utilities/flex-center-div.component"
import { useTheme } from "styled-components"
import { Text } from "../../../components/utilities/text.component"
import { Spacer } from "../../../components/utilities/spacer.component"

const BoxThirdWallet = ({
  logo,
  title,
  divider1,
  divider2,
  divider3,
  isAndroid,
  androidUrl,
  isMac,
  macUrl,
  isPC,
  PCUrl,
  isWeb,
  WebUrl,
}) => {
  const theme = useTheme()

  return (
    <div>
      <FlexCenterDiv
        y="5"
        x="4"
        style={{
          borderTopLeftRadius: theme.space[4],
          borderTopRightRadius: theme.space[4],
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
          height: "50%",
        }}
      >
        <img src={logo} alt={logo} width={110} />
        <Spacer />
        <Text variant="h3" bold={true}>
          {title}
        </Text>
      </FlexCenterDiv>
      <FlexCenterDiv
        dir="row"
        y="4"
        x="2"
        bg={theme.colors.bg.blue}
        style={{
          borderBottomLeftRadius: theme.space[4],
          borderBottomRightRadius: theme.space[4],
        }}
      >
        {isAndroid && (
          <a
            href={androidUrl}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img src={androidWhite} alt={androidWhite} width="40px" />
          </a>
        )}
        {divider1 && <img src={divider} alt={divider} />}
        {isMac && (
          <a
            href={macUrl}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img src={macWhite} alt={macWhite} width="40px" />
          </a>
        )}
        {divider2 && <img src={divider} alt={divider} />}
        {isPC && (
          <a
            href={PCUrl}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img src={pcWhite} alt={pcWhite} width="45px" />
          </a>
        )}
        {divider3 && <img src={divider} alt={divider} />}
        {isWeb && (
          <a
            href={WebUrl}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img src={webWhite} alt={webWhite} width="40px" />
          </a>
        )}
      </FlexCenterDiv>
    </div>
  )
}

export default BoxThirdWallet
