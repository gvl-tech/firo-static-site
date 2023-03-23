import React from "react";
import backup from "../../../assets/download/backup.svg";
import verify from "../../../assets/download/verify.svg";
import guide from "../../../assets/download/guide.svg";

import { useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Text } from "../../../components/utilities/text.component";
import { PaddedDiv } from "../../../components/utilities/padded-div.component";
import { Spacer } from "../../../components/utilities/spacer.component";
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component";
import { FlexDiv } from "../../../components/utilities/flex-div.component";
import { GridDiv } from "../../../components/utilities/grid-div.component";
import BoxDesktopWallet from "../components/BoxDesktopWallet";

const DesktopWallet = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  // const isMediumDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  // const isBigDesktop = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTablet = useMediaQuery({ query: "(width: 768px)" });

  return (
    <div>
      <PaddedDiv style={{ padding: "5%" }}>
        <FlexStartDiv style={{ alignItems: isDesktop ? "start" : "center" }}>
          <Text bold="true" variant="h4">
            Desktop Wallets
          </Text>
          <Spacer />
          <Text variant="caption">
            Want to spend your Firo? Here are some places you can do so! This is
            a non-exhaustive list of places that accept Firo! If you have a
            business that would like to be featured here, let us know!
          </Text>
        </FlexStartDiv>
        <Spacer size="xxLarge" />

        {/* Mobile */}
        {!isDesktop && (
          <div>
            <FlexDiv>
              <img src={backup} alt={backup} />
              <Spacer />
              <Text
                variant="label"
                fontFamily={theme.fontFamily.ssp}
                bold={true}
                style={{ width: "65%", textAlign: "center" }}
              >
                Back up your wallet prior to updating
              </Text>
            </FlexDiv>
            <Spacer size="xxLarge" />

            <FlexDiv>
              <img src={verify} alt={verify} />
              <Spacer />
              <div style={{ width: "65%", textAlign: "center" }}>
                <Text
                  variant="label"
                  bold="true"
                  fontFamily={theme.fontFamily.ssp}
                >
                  Verify hashes using{" "}
                </Text>
                <Text
                  variant="label"
                  color={theme.colors.brand.primary}
                  bold="true"
                  fontFamily={theme.fontFamily.ssp}
                >
                  this public key
                </Text>
              </div>
            </FlexDiv>
            <Spacer size="xxLarge" />

            <FlexDiv>
              <img src={guide} alt={guide} />
              <Spacer />
              <div style={{ width: "100%", textAlign: "center" }}>
                <Text
                  variant="label"
                  bold="true"
                  fontFamily={theme.fontFamily.ssp}
                >
                  Use this official{" "}
                </Text>
                <Text
                  variant="label"
                  color={theme.colors.brand.primary}
                  bold="true"
                  fontFamily={theme.fontFamily.ssp}
                >
                  wallet installation{" "}
                </Text>
                <Text
                  variant="label"
                  bold="true"
                  fontFamily={theme.fontFamily.ssp}
                >
                  and{" "}
                </Text>
                <Text
                  variant="label"
                  color={theme.colors.brand.primary}
                  bold="true"
                  fontFamily={theme.fontFamily.ssp}
                >
                  usage guide
                </Text>
              </div>
            </FlexDiv>
          </div>
        )}

        {/* Desktop */}
        {isDesktop && (
          <GridDiv y="repeat(3, 1fr)" gap="5">
            <FlexDiv x="0" dir="row">
              <img src={backup} alt={backup} />
              <Spacer position="right" />
              <Text
                variant="label"
                fontFamily={theme.fontFamily.ssp}
                bold={true}
              >
                Back up your wallet prior to updating
              </Text>
            </FlexDiv>

            <FlexDiv x="0" dir="row">
              <img src={verify} alt={verify} />
              <Spacer position="right" />
              <div>
                <Text
                  variant="label"
                  bold="true"
                  fontFamily={theme.fontFamily.ssp}
                >
                  Verify hashes using{" "}
                </Text>
                <Text
                  variant="label"
                  color={theme.colors.brand.primary}
                  bold="true"
                  fontFamily={theme.fontFamily.ssp}
                >
                  this public key
                </Text>
              </div>
            </FlexDiv>

            <FlexDiv x="0" dir="row">
              <img src={guide} alt={guide} />
              <Spacer position="right" />
              <div>
                <Text
                  variant="label"
                  bold="true"
                  fontFamily={theme.fontFamily.ssp}
                >
                  Use this official{" "}
                </Text>
                <Text
                  variant="label"
                  color={theme.colors.brand.primary}
                  bold="true"
                  fontFamily={theme.fontFamily.ssp}
                >
                  wallet installation{" "}
                </Text>
                <Text
                  variant="label"
                  bold="true"
                  fontFamily={theme.fontFamily.ssp}
                >
                  and{" "}
                </Text>
                <Text
                  variant="label"
                  color={theme.colors.brand.primary}
                  bold="true"
                  fontFamily={theme.fontFamily.ssp}
                >
                  usage guide
                </Text>
              </div>
            </FlexDiv>
          </GridDiv>
        )}

        <Spacer size="xLarge" />
        <GridDiv
          y={isTablet ? "auto" : isDesktop ? "repeat(3, 1fr)" : "auto"}
          gap="5"
        >
          <BoxDesktopWallet
            header="THE HIGH SECURITY OPTION"
            title="QT Wallet"
            version="v0.14.11.0"
            changelog={true}
          />
          <BoxDesktopWallet
            header="THE USER FRIENDLY OPTION"
            title="Electron"
            version="2.2.1"
            changelog={true}
          />
          <BoxDesktopWallet
            header="THE FAST, LIGHTWEIGHT OPTION"
            title="Electrum"
            version="4.1.5.1"
            changelog={true}
          />
        </GridDiv>
      </PaddedDiv>
    </div>
  );
};

export default DesktopWallet;
