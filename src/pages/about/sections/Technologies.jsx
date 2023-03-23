import React, { useState } from "react";
import incognito from "../../../assets/about/incognito.svg";
import address from "../../../assets/about/address.svg";
import upgradeability from "../../../assets/about/upgradeability.svg";
import chainlocks from "../../../assets/about/chainlocks.svg";
import firoInstantSend from "../../../assets/about/firoInstantSend.svg";

import { FlexCenterDiv } from "../../../components/utilities/flex-center-div.component";
import { Text } from "../../../components/utilities/text.component";
import { useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { PaddedDiv } from "../../../components/utilities/padded-div.component";
import { Spacer } from "../../../components/utilities/spacer.component";
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component";
import { BubbleDiv } from "../../../components/buttons/bubble-text.component";
import { BoxDiv } from "../../../components/utilities/box-container.component";
import { GridDiv } from "../../../components/utilities/grid-div.component";
import { ScrollDiv } from "../../../components/utilities/scroll-hidden.component";

const Technologies = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });
  const isTablet = useMediaQuery({ query: "(width: 768px)" });

  const [isLelantusSpark, setLelantusSpark] = useState(true);
  const [isChainlocks, setChainlocks] = useState(false);
  const [isFiroInstantSend, setFiroInstantSend] = useState(false);

  return (
    <div>
      <FlexCenterDiv bg={theme.colors.bg.blue} x="4" y="5">
        <Text
          variant={isDesktop ? "h1" : "h3"}
          color={theme.colors.text.primary}
          bold="true"
        >
          Technologies
        </Text>
        <Spacer />
        <Text
          variant={isDesktop ? "label" : "caption"}
          fontFamily={theme.fontFamily.ssp}
          color={theme.colors.text.primary}
          style={{ width: "70%", lineHeight: "1.5" }}
        >
          Discover the technologies powering our blockchain and products.
        </Text>
      </FlexCenterDiv>

      {!isDesktop && (
        <PaddedDiv
          y="5"
          x="0"
          bg={theme.colors.bg.grey}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ScrollDiv>
            <Spacer position="right" />

            <BubbleDiv
              bg={
                isLelantusSpark
                  ? theme.colors.brand.primary
                  : theme.colors.text.secondary
              }
              padding={`${theme.space[2]}px ${theme.space[4]}px`}
              style={{ opacity: isLelantusSpark ? 1 : 0.2, cursor: "pointer" }}
              onClick={() => {
                setFiroInstantSend(false);
                setChainlocks(false);
                setLelantusSpark(true);
              }}
            >
              <Text
                color={
                  isLelantusSpark
                    ? theme.colors.text.white
                    : theme.colors.text.primary
                }
                bold="true"
              >
                Lelantus Spark
              </Text>
            </BubbleDiv>
            <BubbleDiv
              bg={
                isChainlocks
                  ? theme.colors.brand.primary
                  : theme.colors.text.secondary
              }
              padding={`${theme.space[2]}px ${theme.space[4]}px`}
              style={{ opacity: isChainlocks ? 1 : 0.2, cursor: "pointer" }}
              onClick={() => {
                setFiroInstantSend(false);
                setChainlocks(true);
                setLelantusSpark(false);
              }}
            >
              <Text
                color={
                  isChainlocks
                    ? theme.colors.text.white
                    : theme.colors.text.primary
                }
                bold="true"
              >
                Chainlocks
              </Text>
            </BubbleDiv>
            <BubbleDiv
              bg={
                isFiroInstantSend
                  ? theme.colors.brand.primary
                  : theme.colors.text.secondary
              }
              padding={`${theme.space[2]}px ${theme.space[4]}px`}
              style={{
                opacity: isFiroInstantSend ? 1 : 0.2,
                cursor: "pointer",
              }}
              onClick={() => {
                setFiroInstantSend(true);
                setChainlocks(false);
                setLelantusSpark(false);
              }}
            >
              <Text
                color={
                  isFiroInstantSend
                    ? theme.colors.text.white
                    : theme.colors.text.primary
                }
                bold="true"
              >
                Firo Instant Send
              </Text>
            </BubbleDiv>
            <Spacer position="right" />
          </ScrollDiv>
        </PaddedDiv>
      )}

      {!isDesktop && (
        <PaddedDiv y="5" x="4" bg={theme.colors.bg.grey}>
          {/* Lelantus Spark */}
          {isLelantusSpark && (
            <div>
              <BoxDiv bg={theme.colors.text.white}>
                <FlexCenterDiv>
                  <img src={incognito} alt={incognito} />
                  <Spacer />
                  <Text variant="h4" bold="true">
                    Private
                  </Text>
                  <Spacer />
                  <Text
                    variant="caption"
                    color={theme.colors.text.secondary}
                    style={{ width: "80%", lineHeight: "1.5" }}
                  >
                    Our Lelantus Spark privacy protocol ensures that all funds
                    sent and received by you stayed hidden.
                  </Text>
                </FlexCenterDiv>
              </BoxDiv>
              <Spacer size="xLarge" />
              <BoxDiv bg={theme.colors.text.white}>
                <FlexCenterDiv>
                  <img src={address} alt={address} />
                  <Spacer />
                  <Text variant="h4" bold="true">
                    Spark Addresses
                  </Text>
                  <Spacer />
                  <Text
                    variant="caption"
                    color={theme.colors.text.secondary}
                    style={{ width: "80%", lineHeight: "1.5" }}
                  >
                    Share your receiving address without the fear of it being
                    searchable on the blockchain.
                  </Text>
                </FlexCenterDiv>
              </BoxDiv>
              <Spacer size="xLarge" />
              <BoxDiv bg={theme.colors.text.white}>
                <FlexCenterDiv>
                  <img src={upgradeability} alt={upgradeability} />
                  <Spacer />
                  <Text variant="h4" bold="true">
                    Upgradeability
                  </Text>
                  <Spacer />
                  <Text
                    variant="caption"
                    color={theme.colors.text.secondary}
                    style={{ width: "80%", lineHeight: "1.5" }}
                  >
                    Modular and easily upgraded, Lelantus Spark has a no trusted
                    setup and is built based on well established cryptographic
                    assumptions.
                  </Text>
                </FlexCenterDiv>
              </BoxDiv>
            </div>
          )}

          {/* Chainlocks */}
          {isChainlocks && (
            <div>
              <BoxDiv bg={theme.colors.text.white}>
                <FlexCenterDiv>
                  <img src={chainlocks} alt={chainlocks} />
                  <Spacer />
                  <Text variant="h4" bold="true">
                    Chainlocks
                  </Text>
                  <Spacer />
                  <Text
                    variant="caption"
                    color={theme.colors.text.secondary}
                    style={{ width: "80%", lineHeight: "1.5" }}
                  >
                    ChainLocks is a secondary validation layer that keeps Firo's
                    network safe from 51% attacks.
                    <br />
                    <br />
                    Firo's masternode network form quorums that are recreated
                    periodically.
                    <br />
                    <br />
                    Each masternode member of the quorum is required to sign the
                    first valid block it sees. Once more than 60% of the members
                    sign the block, it will be confirmed and no reorganization
                    below this block height is allowed.
                  </Text>
                </FlexCenterDiv>
              </BoxDiv>
            </div>
          )}

          {/* Firo Instant Send */}
          {isFiroInstantSend && (
            <div>
              <BoxDiv bg={theme.colors.text.white}>
                <FlexCenterDiv>
                  <img src={firoInstantSend} alt={firoInstantSend} />
                  <Spacer />

                  <Text variant="h4" bold="true">
                    Firo Instant Send
                  </Text>
                  <Spacer />

                  <Text
                    variant="caption"
                    color={theme.colors.text.secondary}
                    style={{ width: "80%", lineHeight: "1.5" }}
                  >
                    Firo Instant Send allows transactions to happen within
                    seconds. The result? Firo can be used as a currency for
                    day-to-day transactions.
                  </Text>
                </FlexCenterDiv>
              </BoxDiv>
            </div>
          )}
        </PaddedDiv>
      )}

      {isDesktop && (
        <PaddedDiv x="6" y="5">
          <FlexStartDiv dir="row" style={{ justifyContent: "center" }}>
            <div>
              <BubbleDiv
                bg={
                  isLelantusSpark
                    ? theme.colors.brand.primary
                    : theme.colors.text.secondary
                }
                padding={`${theme.space[2]}px ${theme.space[4]}px`}
                style={{
                  opacity: isLelantusSpark ? 1 : 0.2,
                  cursor: "pointer",
                }}
                onClick={() => {
                  setFiroInstantSend(false);
                  setChainlocks(false);
                  setLelantusSpark(true);
                }}
              >
                <Text
                  variant="h4"
                  color={
                    isLelantusSpark
                      ? theme.colors.text.white
                      : theme.colors.text.primary
                  }
                  bold="true"
                >
                  Lelantus Spark
                </Text>
              </BubbleDiv>
              <Spacer size="xLarge" />
              <BubbleDiv
                bg={
                  isChainlocks
                    ? theme.colors.brand.primary
                    : theme.colors.text.secondary
                }
                padding={`${theme.space[2]}px ${theme.space[4]}px`}
                style={{ opacity: isChainlocks ? 1 : 0.2, cursor: "pointer" }}
                onClick={() => {
                  setFiroInstantSend(false);
                  setChainlocks(true);
                  setLelantusSpark(false);
                }}
              >
                <Text
                  variant="h4"
                  color={
                    isChainlocks
                      ? theme.colors.text.white
                      : theme.colors.text.primary
                  }
                  bold="true"
                >
                  Chainlocks
                </Text>
              </BubbleDiv>
              <Spacer size="xLarge" />

              <BubbleDiv
                bg={
                  isFiroInstantSend
                    ? theme.colors.brand.primary
                    : theme.colors.text.secondary
                }
                padding={`${theme.space[2]}px ${theme.space[4]}px`}
                style={{
                  opacity: isFiroInstantSend ? 1 : 0.2,
                  cursor: "pointer",
                }}
                onClick={() => {
                  setFiroInstantSend(true);
                  setChainlocks(false);
                  setLelantusSpark(false);
                }}
              >
                <Text
                  variant="h4"
                  color={
                    isFiroInstantSend
                      ? theme.colors.text.white
                      : theme.colors.text.primary
                  }
                  bold="true"
                >
                  Firo Instant Send
                </Text>
              </BubbleDiv>
            </div>

            <Spacer position="right" size={isTablet ? "large" : "xxxLarge"} />

            <FlexStartDiv>
              {/* Private */}
              {isLelantusSpark && (
                <div>
                  <BoxDiv
                    y="4"
                    x="4"
                    bg={theme.colors.text.white}
                    style={{ maxWidth: "1000px" }}
                  >
                    <GridDiv y="150px 1fr" gap="3">
                      <img
                        src={incognito}
                        alt={incognito}
                        style={{ alignSelf: "center", justifySelf: "center" }}
                      />

                      <FlexStartDiv>
                        <Text variant="h4" bold="true">
                          Private
                        </Text>
                        <Spacer />
                        <Text
                          variant="caption"
                          color={theme.colors.text.secondary}
                          style={{ width: "100%", lineHeight: "1.5" }}
                        >
                          Our Lelantus Spark privacy protocol ensures that all
                          funds sent and received by you stayed hidden.
                        </Text>
                      </FlexStartDiv>
                    </GridDiv>
                  </BoxDiv>
                  <Spacer />
                  <BoxDiv
                    y="4"
                    x="4"
                    bg={theme.colors.text.white}
                    style={{ maxWidth: "1000px" }}
                  >
                    <GridDiv y="150px 1fr" gap="3">
                      <img
                        src={address}
                        alt={address}
                        style={{ alignSelf: "center", justifySelf: "center" }}
                      />

                      <FlexStartDiv>
                        <Text variant="h4" bold="true">
                          Spark Addresses
                        </Text>
                        <Spacer />

                        <Text
                          variant="caption"
                          color={theme.colors.text.secondary}
                          style={{ width: "100%", lineHeight: "1.5" }}
                        >
                          Share your receiving address without the fear of it
                          being searchable on the blockchain.
                        </Text>
                      </FlexStartDiv>
                    </GridDiv>
                  </BoxDiv>
                  <Spacer />
                  <BoxDiv
                    y="4"
                    x="4"
                    bg={theme.colors.text.white}
                    style={{ maxWidth: "1000px" }}
                  >
                    <GridDiv y="150px 1fr" gap="3">
                      <img
                        src={upgradeability}
                        alt={upgradeability}
                        style={{ alignSelf: "center", justifySelf: "center" }}
                      />

                      <FlexStartDiv>
                        <Text variant="h4" bold="true">
                          Upgradeability
                        </Text>
                        <Spacer />

                        <Text
                          variant="caption"
                          color={theme.colors.text.secondary}
                          style={{ width: "100%", lineHeight: "1.5" }}
                        >
                          Modular and easily upgraded, Lelantus Spark has a no
                          trusted setup and is built based on well established
                          cryptographic assumptions.
                        </Text>
                      </FlexStartDiv>
                    </GridDiv>
                  </BoxDiv>
                </div>
              )}
              {/* Chainlocks */}
              {isChainlocks && (
                <div>
                  <BoxDiv
                    y="4"
                    x="4"
                    bg={theme.colors.text.white}
                    style={{ maxWidth: "1000px" }}
                  >
                    <GridDiv y="150px 1fr" gap="3">
                      <img
                        src={chainlocks}
                        alt={chainlocks}
                        style={{ alignSelf: "center", justifySelf: "center" }}
                      />

                      <FlexStartDiv>
                        <Text variant="h4" bold="true">
                          Chainlocks
                        </Text>
                        <Spacer />

                        <Text
                          variant="caption"
                          color={theme.colors.text.secondary}
                          style={{ width: "100%", lineHeight: "1.5" }}
                        >
                          ChainLocks is a secondary validation layer that keeps
                          Firo's network safe from 51% attacks.
                          <br />
                          <br />
                          Firo's masternode network form quorums that are
                          recreated periodically.
                          <br />
                          <br />
                          Each masternode member of the quorum is required to
                          sign the first valid block it sees. Once more than 60%
                          of the members sign the block, it will be confirmed
                          and no reorganization below this block height is
                          allowed.
                        </Text>
                      </FlexStartDiv>
                    </GridDiv>
                  </BoxDiv>
                </div>
              )}
              {/* Firo Instant Send */}
              {isFiroInstantSend && (
                <div>
                  <BoxDiv
                    y="4"
                    x="4"
                    bg={theme.colors.text.white}
                    style={{ maxWidth: "1000px" }}
                  >
                    <GridDiv y="150px 1fr" gap="3">
                      <img
                        src={firoInstantSend}
                        alt={firoInstantSend}
                        style={{ alignSelf: "center", justifySelf: "center" }}
                      />

                      <FlexStartDiv>
                        <Text variant="h4" bold="true">
                          Firo Instant Send
                        </Text>
                        <Spacer />

                        <Text
                          variant="caption"
                          color={theme.colors.text.secondary}
                          style={{ width: "100%", lineHeight: "1.5" }}
                        >
                          Firo Instant Send allows transactions to happen within
                          seconds. The result? Firo can be used as a currency
                          for day-to-day transactions.
                        </Text>
                      </FlexStartDiv>
                    </GridDiv>
                  </BoxDiv>
                </div>
              )}
            </FlexStartDiv>
          </FlexStartDiv>
        </PaddedDiv>
      )}
    </div>
  );
};

export default Technologies;
