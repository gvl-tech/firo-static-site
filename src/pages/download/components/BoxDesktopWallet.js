import React, { useState } from "react"
import windows from "../../../assets/download/windows.svg"
import mac from "../../../assets/download/mac.svg"
import linux from "../../../assets/download/linux.svg"
import github from "../../../assets/download/github.svg"
import sourceforge from "../../../assets/download/sourceforge.svg"

import { FlexCenterDiv } from "../../../components/utilities/flex-center-div.component"
import { useTheme } from "styled-components"
import { Text } from "../../../components/utilities/text.component"
import { Spacer } from "../../../components/utilities/spacer.component"
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component"
import { FlexDiv } from "../../../components/utilities/flex-div.component"

const BoxDesktopWallet = ({
  header,
  title,
  version,
  changelog,
  changelogUrl,
  windowsUrl,
  windowsHashes,
  macUrl,
  macHashes,
  linuxUrl,
  linuxHashes,
  githubUrl,
}) => {
  const theme = useTheme()
  const [showWindowHashes, setShowWindowHashes] = useState(false)
  const [showMacHashes, setShowMacHashes] = useState(false)
  const [showLinuxHashes, setShowLinuxHashes] = useState(false)
  const toggleWindowHashes = () => {
    setShowWindowHashes(!showWindowHashes)
  }
  const toggleMacHashes = () => {
    setShowMacHashes(!showMacHashes)
  }
  const toggleLinuxHashes = () => {
    setShowLinuxHashes(!showLinuxHashes)
  }
  return (
    <div>
      <FlexCenterDiv
        y="4"
        x="2"
        bg={theme.colors.brand.primary}
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
        y="4"
        x="4"
        style={{
          borderBottomLeftRadius: theme.space[4],
          borderBottomRightRadius: theme.space[4],
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
          height: "80%",
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
          <FlexDiv x="0" y="0" dir="row" style={{ alignItems: "start" }}>
            <img src={windows} alt={windows} width="50px" />
            <Spacer position="right" />
            <FlexStartDiv style={{ textAlign: "start" }}>
              <a href={windowsUrl} style={{ textDecoration: "none" }}>
                <Text
                  bold={true}
                  color={theme.colors.brand.primary}
                  fontFamily={theme.fontFamily.ssp}
                >
                  Download QT for Windows
                </Text>
              </a>
              <Text
                variant="caption"
                style={{ cursor: "pointer" }}
                onClick={toggleWindowHashes}
              >
                {showWindowHashes ? "-" : "+"} Show SHA256 hashes for Windows
              </Text>
              {showWindowHashes && (
                <div
                  style={{
                    position: "relative",
                    backgroundColor: theme.colors.bg.tertiary,
                    inlineSize: "14rem",
                    overflowWrap: "break-word",
                  }}
                >
                  <Text variant="caption">{windowsHashes}</Text>
                </div>
              )}
            </FlexStartDiv>
          </FlexDiv>

          <Spacer />
          <FlexDiv y="0" x="0" dir="row" style={{ alignItems: "start" }}>
            <img src={mac} alt={mac} width="50px" />
            <Spacer position="right" />
            <FlexStartDiv style={{ textAlign: "start" }}>
              <a href={macUrl} style={{ textDecoration: "none" }}>
                <Text
                  bold={true}
                  color={theme.colors.brand.primary}
                  fontFamily={theme.fontFamily.ssp}
                >
                  Download QT for MacOS
                </Text>
              </a>
              <Text
                variant="caption"
                style={{ cursor: "pointer" }}
                onClick={toggleMacHashes}
              >
                {showMacHashes ? "-" : "+"} Show SHA256 hashes for MacOS
              </Text>
              {showMacHashes && (
                <div
                  style={{
                    position: "relative",
                    backgroundColor: theme.colors.bg.tertiary,
                    inlineSize: "14rem",
                    overflowWrap: "break-word",
                  }}
                >
                  <Text variant="caption">{macHashes}</Text>
                </div>
              )}
            </FlexStartDiv>
          </FlexDiv>

          <Spacer />
          <FlexDiv y="0" x="0" dir="row" style={{ alignItems: "start" }}>
            <img src={linux} alt={linux} width="50px" />
            <Spacer position="right" />
            <FlexStartDiv style={{ textAlign: "start" }}>
              <a href={linuxUrl} style={{ textDecoration: "none" }}>
                <Text
                  bold={true}
                  color={theme.colors.brand.primary}
                  fontFamily={theme.fontFamily.ssp}
                >
                  Download QT for Linux
                </Text>
              </a>
              <Text
                variant="caption"
                style={{ cursor: "pointer" }}
                onClick={toggleLinuxHashes}
              >
                {showLinuxHashes ? "-" : "+"}Show SHA256 hashes for Linux
              </Text>
              {showLinuxHashes && (
                <div
                  style={{
                    position: "relative",
                    backgroundColor: theme.colors.bg.tertiary,
                    inlineSize: "14rem",
                    overflowWrap: "break-word",
                  }}
                >
                  <Text variant="caption">{linuxHashes}</Text>
                </div>
              )}
            </FlexStartDiv>
          </FlexDiv>
        </FlexStartDiv>
        <Spacer size="xLarge" />
        <FlexCenterDiv dir="row">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img src={github} alt={github} style={{ cursor: "pointer" }} />
          </a>
          <Spacer position="right" />
          <a
            href="https://sourceforge.net/projects/firoorg/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              src={sourceforge}
              alt={sourceforge}
              style={{
                cursor: "pointer",
              }}
            />
          </a>
        </FlexCenterDiv>
      </FlexCenterDiv>
    </div>
  )
}

export default BoxDesktopWallet
