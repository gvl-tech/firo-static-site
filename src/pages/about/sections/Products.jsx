import React from "react"
import elysium from "../../../assets/about/elysium.svg"
import dotOracle from "../../../assets/about/dotOracle.svg"
import dandelion from "../../../assets/about/dandelion.svg"
import lelantusSpark from "../../../assets/about/lelantusSpark.svg"
import aura from "../../../assets/about/aura.svg"
import faster from "../../../assets/about/faster.svg"
import errorFree from "../../../assets/about/errorFree.svg"
import mobile from "../../../assets/about/mobile.svg"
import anonymous from "../../../assets/about/anonymous.svg"
import lowCost from "../../../assets/about/lowCost.svg"
import tamperFree from "../../../assets/about/tamperFree.svg"
import nasdaq from "../../../assets/about/nasdaq.svg"
import yahoo from "../../../assets/about/yahoo.svg"
import altCoinBuzz from "../../../assets/about/altCoinBuzz.svg"

import { useTheme } from "styled-components"
import { useMediaQuery } from "react-responsive"
import { FlexCenterDiv } from "../../../components/utilities/flex-center-div.component"
import { Text } from "../../../components/utilities/text.component"
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component"
import { PaddedDiv } from "../../../components/utilities/padded-div.component"
import { Spacer } from "../../../components/utilities/spacer.component"
import { Button } from "../../../components/buttons/cta-button.component"
import { GridDiv } from "../../../components/utilities/grid-div.component"
import { FlexSpaceBetweenDiv } from "../../../components/utilities/flex-space-between-div.component"

const Products = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" })
  const isTablet = useMediaQuery({ query: "(width: 768px)" })

  return (
    <div>
      <PaddedDiv y="5">
        <FlexCenterDiv>
          <Text variant="h3" bold="true">
            Products
          </Text>
        </FlexCenterDiv>
      </PaddedDiv>

      <GridDiv
        y={isDesktop ? "1fr 1fr" : "auto"}
        style={{ padding: "5%" }}
        gap="4"
      >
        {/* Elysium */}
        <PaddedDiv y="0" x="0">
          <FlexSpaceBetweenDiv
            dir="column"
            height="100"
            y={isDesktop ? "4" : "5"}
            x={isDesktop ? "4" : "3"}
            br="1"
            style={{
              boxShadow: "0px 0px 50px 0px rgba(189,189,189,0.7)",
            }}
          >
            <FlexStartDiv dir="row">
              <img src={elysium} alt={elysium} height="50px" />
              <Spacer position="right" />
              <Text variant="h3" bold="true" color={theme.colors.brand.primary}>
                Elysium
              </Text>
            </FlexStartDiv>

            {/* <Spacer size="xxLarge" /> */}

            <GridDiv
              y={isDesktop ? "1fr 1fr" : undefined}
              gap="3"
              style={
                isDesktop
                  ? {
                      gridTemplateAreas: `'a c' 'a c' 'a d' 'b d'`,
                      justifyItems: "center",
                    }
                  : {}
              }
            >
              <FlexStartDiv
                style={isDesktop ? { gridArea: "a" } : {}}
                width={isDesktop ? "80" : undefined}
                bg={theme.colors.bg.grey}
                padding={theme.space[3]}
                br="1"
              >
                <Text
                  variant="h5"
                  bold="true"
                  color={theme.colors.brand.primary}
                >
                  Modular
                </Text>
                <Spacer />
                <Text variant="caption" style={{ lineHeight: "1.5" }}>
                  Elysium provides you the full flexibility of customising your
                  tokens to suit your needs, while still retaining the privacy
                  features of Lelantus Spark. <br />
                  <br />
                  With a modular protocol, you can benefit from functionality,
                  scalability, freedom and flexibility.
                </Text>
              </FlexStartDiv>

              {/* {!isDesktop && <Spacer />} */}

              <FlexStartDiv
                style={isDesktop ? { gridArea: "c" } : {}}
                width={isDesktop ? "80" : undefined}
                bg={theme.colors.bg.grey}
                padding={theme.space[3]}
                br="1"
              >
                <Text
                  variant="h5"
                  bold="true"
                  color={theme.colors.brand.primary}
                >
                  Completely Decentralised
                </Text>
                <Spacer />
                <Text variant="caption" style={{ lineHeight: "1.5" }}>
                  Elysium relies on decentralised custodians to bridge assets
                  from other chains to Elysium.
                </Text>
              </FlexStartDiv>
              {/* {!isDesktop && <Spacer />} */}

              <FlexStartDiv
                style={isDesktop ? { gridArea: "d" } : {}}
                width={isDesktop ? "80" : undefined}
                bg={theme.colors.bg.grey}
                padding={theme.space[3]}
                br="1"
              >
                <Text
                  variant="h5"
                  bold="true"
                  color={theme.colors.brand.primary}
                >
                  Easy Bridging
                </Text>
                <Spacer />
                <Text variant="caption" style={{ lineHeight: "1.5" }}>
                  Firo has partnered with DotOracle to build a liquidity network
                  layer into Elysium. This allows for easy movement of assets
                  between blockchains like Ethereum, Polkadot, Avalanche, and
                  Moonbeam.
                </Text>
              </FlexStartDiv>

              {!isDesktop && <Spacer />}

              <FlexCenterDiv style={isDesktop ? { gridArea: "b" } : {}}>
                <Text variant="h5">Powered by</Text>
                <FlexCenterDiv
                  dir="row"
                  style={{ flexWrap: "wrap", gap: theme.space[2] }}
                >
                  <img src={dotOracle} alt={dotOracle} />
                  <img src={dandelion} alt={dandelion} />
                  <img src={lelantusSpark} alt={lelantusSpark} />
                </FlexCenterDiv>
              </FlexCenterDiv>
            </GridDiv>

            {/* <Spacer size="xxLarge" /> */}

            <FlexCenterDiv>
              <Button
                inverse="true"
                style={{
                  fontSize: theme.fontSizes.h5,
                  fontFamily: theme.fontFamily.ssc,
                  padding: `${theme.space[2]}px ${theme.space[5]}px`,
                }}
              >
                Find Out More
              </Button>
            </FlexCenterDiv>
          </FlexSpaceBetweenDiv>
        </PaddedDiv>

        {/* Aura */}
        {!isDesktop && <Spacer size="xxxLarge" />}

        <PaddedDiv y="0" x="0">
          <FlexSpaceBetweenDiv
            dir="column"
            height="100"
            bg={theme.colors.bg.blue}
            br="1"
            y={isDesktop ? "4" : "5"}
            x={isDesktop ? "4" : "3"}
          >
            {isDesktop ? (
              <FlexStartDiv dir="column">
                <FlexStartDiv dir="row">
                  <img src={aura} alt={aura} height="50px" />
                  <Spacer position="right" />
                  <Text
                    variant="h3"
                    bold="true"
                    color={theme.colors.text.primary}
                  >
                    Aura
                  </Text>
                </FlexStartDiv>
                <Spacer />
                <Text variant="caption" color={theme.colors.text.primary}>
                  Blockchain-based polling system
                </Text>
              </FlexStartDiv>
            ) : (
              <FlexStartDiv dir="row">
                <img src={aura} alt={aura} width="50px" />
                <Spacer position="right" />
                <FlexStartDiv>
                  <Text
                    variant="h3"
                    bold="true"
                    color={theme.colors.text.primary}
                  >
                    Aura
                  </Text>
                  <Text variant="caption" color={theme.colors.text.primary}>
                    Blockchain-based polling system
                  </Text>
                </FlexStartDiv>
              </FlexStartDiv>
            )}

            {/* <Spacer size="xxLarge" /> */}

            <GridDiv
              x="repeat(3, auto)"
              y="1fr 1fr"
              gap={isTablet ? "2" : isDesktop ? "4" : "3"}
            >
              <FlexCenterDiv
                dir="row"
                bg={theme.colors.bg.white}
                y="3"
                br={theme.borderSizes[1]}
              >
                <img src={faster} alt={faster} />
                <Spacer position="right" size="medium" />
                <Text style={{ fontWeight: theme.fontWeights.medium }}>
                  Faster
                </Text>
              </FlexCenterDiv>
              <FlexCenterDiv
                dir="row"
                bg={theme.colors.bg.white}
                y="3"
                br={theme.borderSizes[1]}
              >
                <img src={errorFree} alt={errorFree} />
                <Spacer position="right" size="medium" />

                <Text style={{ fontWeight: theme.fontWeights.medium }}>
                  Error-free
                </Text>
              </FlexCenterDiv>
              <FlexCenterDiv
                dir="row"
                bg={theme.colors.bg.white}
                y="3"
                br={theme.borderSizes[1]}
              >
                <img src={mobile} alt={mobile} />
                <Spacer position="right" size="medium" />

                <Text style={{ fontWeight: theme.fontWeights.medium }}>
                  Mobile
                </Text>
              </FlexCenterDiv>
              <FlexCenterDiv
                dir="row"
                bg={theme.colors.bg.white}
                y="3"
                br={theme.borderSizes[1]}
              >
                <img src={anonymous} alt={anonymous} />
                <Spacer position="right" size="medium" />

                <Text style={{ fontWeight: theme.fontWeights.medium }}>
                  Anonymous
                </Text>
              </FlexCenterDiv>
              <FlexCenterDiv
                dir="row"
                bg={theme.colors.bg.white}
                y="3"
                br={theme.borderSizes[1]}
              >
                <img src={lowCost} alt={lowCost} />
                <Spacer position="right" size="medium" />

                <Text style={{ fontWeight: theme.fontWeights.medium }}>
                  Low Cost
                </Text>
              </FlexCenterDiv>
              <FlexCenterDiv
                dir="row"
                bg={theme.colors.bg.white}
                y="3"
                br={theme.borderSizes[1]}
              >
                <img src={tamperFree} alt={tamperFree} />
                <Spacer position="right" size="medium" />

                <Text style={{ fontWeight: theme.fontWeights.medium }}>
                  Tamper-free
                </Text>
              </FlexCenterDiv>
            </GridDiv>

            <FlexCenterDiv>
              {isDesktop ? (
                <Text
                  fontFamily={theme.fontFamily.ssp}
                  color={theme.colors.text.primary}
                >
                  by the same team behind the project featured on
                </Text>
              ) : (
                <Text variant="h5" color={theme.colors.text.primary}>
                  As seen on
                </Text>
              )}
              <FlexCenterDiv
                dir="row"
                style={{ flexWrap: "wrap", gap: theme.space[2] }}
              >
                <img src={nasdaq} alt={nasdaq} />
                <img src={yahoo} alt={yahoo} />
                <img src={altCoinBuzz} alt={altCoinBuzz} />
              </FlexCenterDiv>
            </FlexCenterDiv>

            <FlexCenterDiv>
              <Button
                style={{
                  fontSize: theme.fontSizes.h5,
                  fontFamily: theme.fontFamily.ssc,
                  padding: `${theme.space[2]}px ${theme.space[5]}px`,
                }}
              >
                Find Out More
              </Button>
            </FlexCenterDiv>
          </FlexSpaceBetweenDiv>
        </PaddedDiv>
        {!isDesktop && <Spacer size="xxxxLarge" />}
      </GridDiv>
      {isDesktop && <Spacer size="xxxLarge" />}
    </div>
  )
}

export default Products
