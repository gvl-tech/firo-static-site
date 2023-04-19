import React, { useState } from "react"
import mac from "../../../assets/download/mac.svg"
import android from "../../../assets/download/android.svg"
import github from "../../../assets/download/github.svg"

import { FlexCenterDiv } from "../../../components/utilities/flex-center-div.component"
import { useTheme } from "styled-components"
import { Text } from "../../../components/utilities/text.component"
import { Spacer } from "../../../components/utilities/spacer.component"
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component"
import { FlexDiv } from "../../../components/utilities/flex-div.component"

const BoxMobileWallet = ({
  header,
  title,
  version,
  changelog,
  changelogUrl,
  isGithub,
  isAndroid,
  androidUrl,
  androidText,
  androidDescription,
  androidsHashes,
  isMac,
  macUrl,
  macText,
  githubUrl,
}) => {
  const theme = useTheme()
  const [showAndroidHashes, setShowAndroidHashes] = useState(false)
  const toggleAndroidHashes = () => {
    setShowAndroidHashes(!showAndroidHashes)
  }
  return (
    <div>
      <FlexCenterDiv
        y="4"
        x="2"
        bg={theme.colors.text.primary}
        style={{
          borderTopLeftRadius: theme.space[4],
          borderTopRightRadius: theme.space[4],
        }}
      >
        <Text fontFamily={theme.fontFamily.ssp} color={theme.colors.text.white}>
          {header}
        </Text>
      </FlexCenterDiv>

      <FlexCenterDiv
        y="5"
        x="4"
        style={{
          borderBottomLeftRadius: theme.space[4],
          borderBottomRightRadius: theme.space[4],
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
          height: "60%",
          justifyContent: "start",
        }}
      >
        <Text variant="h3" bold="true">
          {title}
        </Text>
        <Spacer />
        <Text variant="caption" color={theme.colors.text.secondary}>
          {version}
        </Text>
        <Spacer size="small" />

        {changelog && (
          <a
            href={changelogUrl}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Text
              variant="caption"
              color={theme.colors.brand.primary}
              style={{ cursor: "pointer" }}
            >
              View changelog
            </Text>
          </a>
        )}
        <Spacer size="xLarge" />

        <FlexStartDiv>
          {isAndroid && (
            <FlexDiv
              x="0"
              y="0"
              dir="row"
              style={{ alignItems: androidDescription ? "start" : null }}
            >
              <img src={android} alt={android} width="50px" />
              <Spacer position="right" />
              <FlexStartDiv style={{ textAlign: "start" }}>
                <a
                  href={androidUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Text
                    bold={true}
                    color={theme.colors.brand.primary}
                    fontFamily={theme.fontFamily.ssp}
                    style={{ cursor: "pointer" }}
                  >
                    {androidText}
                  </Text>
                </a>
                {androidDescription && (
                  <Text
                    variant="caption"
                    style={{ cursor: "pointer" }}
                    onClick={toggleAndroidHashes}
                  >
                    {showAndroidHashes
                      ? `- ${androidDescription}`
                      : `+ ${androidDescription}`}
                  </Text>
                )}
                {showAndroidHashes && (
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: theme.colors.bg.tertiary,
                      inlineSize: "13.5rem",
                      overflowWrap: "break-word",
                    }}
                  >
                    <Text variant="caption">{androidsHashes}</Text>
                  </div>
                )}
              </FlexStartDiv>
            </FlexDiv>
          )}

          <Spacer size="xLarge" />

          {isMac && (
            <FlexDiv x="0" y="0" dir="row">
              <img src={mac} alt={mac} width="50px" />
              <Spacer position="right" />
              <FlexStartDiv style={{ textAlign: "start" }}>
                <a
                  href={macUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Text
                    bold={true}
                    color={theme.colors.brand.primary}
                    fontFamily={theme.fontFamily.ssp}
                    style={{ cursor: "pointer" }}
                  >
                    {macText}
                  </Text>
                </a>
              </FlexStartDiv>
            </FlexDiv>
          )}
        </FlexStartDiv>

        <Spacer size="xLarge" />
        {isGithub && (
          <FlexCenterDiv dir="row">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <img src={github} alt={github} style={{ cursor: "pointer" }} />
            </a>
          </FlexCenterDiv>
        )}
      </FlexCenterDiv>
    </div>
  )
}

export default BoxMobileWallet
