import React from "react";
import windows from "../../../assets/download/windows.svg";
import mac from "../../../assets/download/mac.svg";
import linux from "../../../assets/download/linux.svg";
import github from "../../../assets/download/github.svg";
import sourceforge from "../../../assets/download/sourceforge.svg";

import { FlexCenterDiv } from "../../../components/utilities/flex-center-div.component";
import { useTheme } from "styled-components";
import { Text } from "../../../components/utilities/text.component";
import { Spacer } from "../../../components/utilities/spacer.component";
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component";
import { FlexDiv } from "../../../components/utilities/flex-div.component";

const BoxDesktopWallet = ({ header, title, version, changelog }) => {
  const theme = useTheme();
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
          <Text
            variant="caption"
            color={theme.colors.brand.primary}
            style={{ cursor: "pointer" }}
          >
            view changelog
          </Text>
        )}
        <Spacer size="xLarge" />

        <FlexStartDiv>
          <FlexDiv x="0" y="0" dir="row">
            <img src={windows} alt={windows} width="40px" />
            <Spacer position="right" />
            <FlexStartDiv style={{ textAlign: "start" }}>
              <Text
                bold={true}
                color={theme.colors.brand.primary}
                fontFamily={theme.fontFamily.ssp}
                style={{ cursor: "pointer" }}
              >
                Download QT for Windows
              </Text>
              <Text variant="caption">+ Show SHA256 hashes for Windows</Text>
            </FlexStartDiv>
          </FlexDiv>
          <Spacer />
          <FlexDiv y="0" x="0" dir="row">
            <img src={mac} alt={mac} width="40px" />
            <Spacer position="right" />
            <FlexStartDiv style={{ textAlign: "start" }}>
              <Text
                bold={true}
                color={theme.colors.brand.primary}
                fontFamily={theme.fontFamily.ssp}
                style={{ cursor: "pointer" }}
              >
                Download QT for MacOS
              </Text>
              <Text variant="caption">+ Show SHA256 hashes for MacOS</Text>
            </FlexStartDiv>
          </FlexDiv>

          <Spacer />
          <FlexDiv y="0" x="0" dir="row">
            <img src={linux} alt={linux} width="40px" />
            <Spacer position="right" />
            <FlexStartDiv style={{ textAlign: "start" }}>
              <Text
                bold={true}
                color={theme.colors.brand.primary}
                fontFamily={theme.fontFamily.ssp}
                style={{ cursor: "pointer" }}
              >
                Download QT for Linux
              </Text>
              <Text variant="caption">+ Show SHA256 hashes for Linux</Text>
            </FlexStartDiv>
          </FlexDiv>
        </FlexStartDiv>
        <Spacer size="xLarge" />
        <FlexCenterDiv dir="row">
          <img src={github} alt={github} style={{ cursor: "pointer" }} />
          <Spacer position="right" />
          <img
            src={sourceforge}
            alt={sourceforge}
            style={{ cursor: "pointer" }}
          />
        </FlexCenterDiv>
      </FlexCenterDiv>
    </div>
  );
};

export default BoxDesktopWallet;
