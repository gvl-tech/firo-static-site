import React from "react";
import binance from "../../../assets/getfiro/binance.svg";
import gate from "../../../assets/getfiro/gate.svg";
import huobi from "../../../assets/getfiro/huobi.svg";
import bittrex from "../../../assets/getfiro/bittrex.svg";
import mexc from "../../../assets/getfiro/mexc.svg";
import bitmart from "../../../assets/getfiro/bitmart.svg";
import tokocrypto from "../../../assets/getfiro/tokocrpyto.svg";
import tradeogre from "../../../assets/getfiro/tradeogre.svg";
import wazirx from "../../../assets/getfiro/wazirx.svg";
import bkex from "../../../assets/getfiro/bkex.svg";
import indodax from "../../../assets/getfiro/indodax.svg";
import coinex from "../../../assets/getfiro/coinex.svg";
import hitbtc from "../../../assets/getfiro/hitbtc.svg";
import earnFiro from "../../../assets/getfiro/earnFiro.svg";
import storeFiro from "../../../assets/getfiro/storeFiro.svg";

import { useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Text } from "../../../components/utilities/text.component";
import { PaddedDiv } from "../../../components/utilities/padded-div.component";
import { Spacer } from "../../../components/utilities/spacer.component";
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component";
import { GridDiv } from "../../../components/utilities/grid-div.component";
import { FlexCenterDiv } from "../../../components/utilities/flex-center-div.component";
import { ScrollDiv } from "../../../components/utilities/scroll-hidden.component";
import { BoxDiv } from "../../../components/utilities/box-container.component";

const Available = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isMediumDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  const isBigDesktop = useMediaQuery({ query: "(min-width: 1824px)" });
  return (
    <div>
      <PaddedDiv y="5" x={isBigDesktop ? "6" : isMediumDesktop ? "5" : "3"}>
        <FlexCenterDiv>
          <Text bold="true" variant="h4">
            Available on
          </Text>
          <Spacer />
        </FlexCenterDiv>
      </PaddedDiv>

      <PaddedDiv
        bg={isDesktop ? theme.colors.bg.grey : "none"}
        style={{ padding: isDesktop ? "2% 5%" : "0" }}
      >
        <ScrollDiv>
          <GridDiv
            y="repeat(13, 1fr)"
            gap={isDesktop ? "5" : "1"}
            style={{ alignItems: "center" }}
          >
            <img
              src={binance}
              alt={binance}
              style={{ scale: isDesktop ? "1" : "0.7" }}
            />
            <img
              src={gate}
              alt={gate}
              style={{ scale: isDesktop ? "1" : "0.7" }}
            />
            <img
              src={huobi}
              alt={huobi}
              style={{ scale: isDesktop ? "1" : "0.7" }}
            />
            <img
              src={bittrex}
              alt={bittrex}
              style={{ scale: isDesktop ? "1" : "0.7" }}
            />
            <img
              src={mexc}
              alt={mexc}
              style={{ scale: isDesktop ? "1" : "0.7" }}
            />
            <img
              src={bitmart}
              alt={bitmart}
              style={{ scale: isDesktop ? "1" : "0.7" }}
            />
            <img
              src={tokocrypto}
              alt={tokocrypto}
              style={{ scale: isDesktop ? "1" : "0.7" }}
            />
            <img
              src={tradeogre}
              alt={tradeogre}
              style={{ scale: isDesktop ? "1" : "0.7" }}
            />
            <img
              src={wazirx}
              alt={wazirx}
              style={{ scale: isDesktop ? "1" : "0.7" }}
            />
            <img
              src={bkex}
              alt={bkex}
              style={{ scale: isDesktop ? "1" : "0.7" }}
            />
            <img
              src={indodax}
              alt={indodax}
              style={{ scale: isDesktop ? "1" : "0.7" }}
            />
            <img
              src={coinex}
              alt={coinex}
              style={{ scale: isDesktop ? "1" : "0.7" }}
            />
            <img
              src={hitbtc}
              alt={hitbtc}
              style={{ scale: isDesktop ? "1" : "0.7" }}
            />
          </GridDiv>
        </ScrollDiv>
      </PaddedDiv>

      {!isDesktop && (
        <PaddedDiv y="6">
          <BoxDiv bg={theme.colors.text.white}>
            <FlexCenterDiv>
              <img src={earnFiro} alt={earnFiro} />
              <Spacer size="xLarge" />
              <div>
                <Text variant="h4" bold="true">
                  Earn{" "}
                </Text>
                <Text
                  variant="h4"
                  bold="true"
                  color={theme.colors.brand.primary}
                >
                  Firo
                </Text>
              </div>
              <Spacer />
              <Text
                variant="caption"
                color={theme.colors.text.secondary}
                style={{ width: "70%" }}
              >
                Contribute to the overall security and stability of the Firo
                network by running a masternode and get rewarded with Firo.
              </Text>
            </FlexCenterDiv>
          </BoxDiv>
          <Spacer size="xxLarge" />
          <BoxDiv bg={theme.colors.text.white}>
            <FlexCenterDiv>
              <img src={storeFiro} alt={storeFiro} />
              <Spacer size="xLarge" />
              <div>
                <Text variant="h4" bold="true">
                  Store{" "}
                </Text>
                <Text
                  variant="h4"
                  bold="true"
                  color={theme.colors.brand.primary}
                >
                  Firo
                </Text>
              </div>
              <Spacer />
              <Text
                variant="caption"
                color={theme.colors.text.secondary}
                style={{ width: "70%" }}
              >
                Store your Firo with our official or supported third party
                wallets today.
              </Text>
            </FlexCenterDiv>
          </BoxDiv>
        </PaddedDiv>
      )}

      {isDesktop && (
        <PaddedDiv style={{ padding: "5%" }}>
          <GridDiv
            gap="4"
            y={
              isDesktop ? "minmax(300px, 1100px) minmax(300px, 1100px)" : "auto"
            }
            style={{ justifyContent: "space-between" }}
          >
            <BoxDiv y="4" x="4" bg={theme.colors.text.white}>
              <GridDiv y="0.4fr 1fr">
                <PaddedDiv style={{ justifySelf: "center" }}>
                  <img src={earnFiro} alt={earnFiro} />
                </PaddedDiv>

                <FlexStartDiv>
                  <Spacer />

                  <div>
                    <Text variant="h4" bold="true">
                      Earn{" "}
                    </Text>
                    <Text
                      variant="h4"
                      bold="true"
                      color={theme.colors.brand.primary}
                    >
                      Firo
                    </Text>
                  </div>
                  <Spacer />

                  <Text
                    variant="caption"
                    color={theme.colors.text.secondary}
                    style={{ width: "100%" }}
                  >
                    Contribute to the overall security and stability of the Firo
                    network by running a masternode and get rewarded with Firo.
                  </Text>
                </FlexStartDiv>
              </GridDiv>
            </BoxDiv>

            <BoxDiv y="4" x="4" bg={theme.colors.text.white}>
              <GridDiv y="0.4fr 1fr">
                <PaddedDiv style={{ justifySelf: "center" }}>
                  <img src={storeFiro} alt={storeFiro} />
                </PaddedDiv>
                <FlexStartDiv>
                  <Spacer />
                  <div>
                    <Text variant="h4" bold="true">
                      Store{" "}
                    </Text>
                    <Text
                      variant="h4"
                      bold="true"
                      color={theme.colors.brand.primary}
                    >
                      Firo
                    </Text>
                  </div>
                  <Spacer />

                  <Text
                    variant="caption"
                    color={theme.colors.text.secondary}
                    style={{ width: "100%" }}
                  >
                    Store your Firo with our official or supported third party
                    wallets today.
                  </Text>
                </FlexStartDiv>
              </GridDiv>
            </BoxDiv>
          </GridDiv>
        </PaddedDiv>
      )}
    </div>
  );
};

export default Available;
