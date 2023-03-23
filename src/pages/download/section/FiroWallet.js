import React from "react";

import greyBG from "../../../assets/download/greyBG.svg";
import greyBGDesktop from "../../../assets/download/greyBGDesktop.svg";
import appStoreWhite from "../../../assets/home4/app-store-white.svg";
import appStore from "../../../assets/home4/app-store.svg";
import firoLogo from "../../../assets/home4/firo-logo.svg";
import phones from "../../../assets/home4/phones.svg";
import playStoreWhite from "../../../assets/home4/play-store-white.svg";
import playStore from "../../../assets/home4/play-store.svg";

import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";
import { Button } from "../../../components/buttons/cta-button.component";
import { FlexCenterDiv } from "../../../components/utilities/flex-center-div.component";
import { FlexDiv } from "../../../components/utilities/flex-div.component";
import { FlexEvenlyDiv } from "../../../components/utilities/flex-space-evenly.component";
import { PaddedDiv } from "../../../components/utilities/padded-div.component";
import { Spacer } from "../../../components/utilities/spacer.component";
import { Text } from "../../../components/utilities/text.component";

const FiroWallet = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isMediumDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  const isBigDesktop = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isSmallMobile = useMediaQuery({ query: "(max-width: 320px)" });

  return (
    <div>
      <PaddedDiv y="6" x="0">
        <FlexCenterDiv>
          <div>
            <Text variant={isDesktop ? "h1" : "h3"} bold="true">
              Download{" "}
            </Text>
            <Text
              variant={isDesktop ? "h1" : "h3"}
              color={theme.colors.brand.primary}
              bold="true"
            >
              a Wallet
            </Text>
          </div>
        </FlexCenterDiv>
        <Spacer size="xxLarge" />
        <div>
          <img
            src={isDesktop ? greyBGDesktop : greyBG}
            alt={isDesktop ? greyBGDesktop : greyBG}
            width="100%"
            style={{ position: "absolute", zIndex: -1 }}
          />
          {/* Mobile */}
          {!isDesktop && (
            <FlexCenterDiv x="3" y="3">
              <FlexDiv dir="row">
                <img src={firoLogo} alt={firoLogo} />
                <Spacer position="right" />
                <Text
                  variant="h5"
                  bold="true"
                  color={theme.colors.brand.primary}
                >
                  Firo Wallet
                </Text>
              </FlexDiv>
              <Spacer />
              <Text variant="h3" bold="true" color={theme.colors.text.white}>
                Download the official Firo wallet.
              </Text>
              <img
                src={phones}
                alt={phones}
                width={isSmallMobile ? "300px" : "400px"}
              />

              {/* First Download Button */}
              <Button
                style={{
                  border: `4px solid ${theme.colors.brand.primary}`,
                  padding: `${theme.space[0]}`,
                  borderRadius: `${theme.borderSizes[3]}px`,
                }}
              >
                <FlexDiv dir="row">
                  <img src={appStore} alt={appStore} />
                  <Spacer position="right" />
                  <Text
                    variant="h5"
                    bold="true"
                    color={theme.colors.brand.primary}
                  >
                    Download
                  </Text>
                </FlexDiv>
              </Button>
              <Spacer size="xLarge" />

              {/* Second Download Button */}
              <Button
                style={{
                  border: `4px solid ${theme.colors.brand.primary}`,
                  padding: `${theme.space[0]}`,
                  borderRadius: `${theme.borderSizes[3]}px`,
                }}
              >
                <FlexDiv dir="row">
                  <img src={playStore} alt={playStore} />
                  <Spacer position="right" />
                  <Text
                    variant="h5"
                    bold="true"
                    color={theme.colors.brand.primary}
                  >
                    Download
                  </Text>
                </FlexDiv>
              </Button>
            </FlexCenterDiv>
          )}

          {/* Desktop */}
          {isDesktop && (
            <FlexEvenlyDiv dir="row" padding={theme.space[3]}>
              <img
                src={phones}
                alt={phones}
                width={isTablet ? "450px" : isBigDesktop ? "1500px" : "900px"}
              />

              <FlexDiv style={{ alignItems: "start" }} x="0">
                <Spacer
                  size={
                    isTablet
                      ? "xLarge"
                      : isBigDesktop
                      ? "xxxxLarge"
                      : isMediumDesktop
                      ? "xxxLarge"
                      : "xxLarge"
                  }
                />
                <FlexDiv dir="row">
                  <img src={firoLogo} alt={firoLogo} />
                  <Spacer position="right" />
                  <Text
                    variant={isBigDesktop ? "h2" : "h5"}
                    bold="true"
                    color={theme.colors.brand.primary}
                  >
                    Firo Wallet
                  </Text>
                </FlexDiv>
                <Spacer />
                <div style={{ width: "90%" }}>
                  <Text
                    variant={isTablet ? "h4" : isBigDesktop ? "h1" : "h3"}
                    bold="true"
                    color={theme.colors.text.white}
                  >
                    Download the official Firo wallet.
                  </Text>
                </div>
                <Spacer />

                <FlexDiv dir="row" x="0" y="0">
                  <Button
                    inverse={true}
                    style={{
                      border: `4px solid ${theme.colors.text.white}`,
                      padding: `${theme.space[0]} ${
                        theme.space[isTablet ? 1 : 4]
                      }px`,
                      borderRadius: `${theme.borderSizes[3]}px`,
                    }}
                  >
                    <FlexDiv dir="row">
                      <img
                        src={appStoreWhite}
                        alt={appStoreWhite}
                        width={
                          isTablet ? "18px" : isBigDesktop ? "30px" : "25px"
                        }
                      />
                      <Spacer position="right" />
                      <Text
                        variant={isTablet ? "caption" : "h5"}
                        bold="true"
                        color={theme.colors.text.white}
                      >
                        Download
                      </Text>
                    </FlexDiv>
                  </Button>
                  <Spacer
                    position="right"
                    size={isTablet ? "medium" : "xLarge"}
                  />
                  <Button
                    inverse={true}
                    style={{
                      border: `4px solid ${theme.colors.text.white}`,
                      padding: `${theme.space[0]} ${
                        theme.space[isTablet ? 1 : 4]
                      }px`,
                      borderRadius: `${theme.borderSizes[3]}px`,
                    }}
                  >
                    <FlexDiv dir="row">
                      <img
                        src={playStoreWhite}
                        alt={playStoreWhite}
                        width={
                          isTablet ? "18px" : isBigDesktop ? "30px" : "25px"
                        }
                      />
                      <Spacer position="right" />
                      <Text
                        variant={isTablet ? "caption" : "h5"}
                        bold="true"
                        color={theme.colors.text.white}
                      >
                        Download
                      </Text>
                    </FlexDiv>
                  </Button>
                </FlexDiv>
              </FlexDiv>
            </FlexEvenlyDiv>
          )}
        </div>
      </PaddedDiv>
    </div>
  );
};

export default FiroWallet;
