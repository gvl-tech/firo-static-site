import React from "react"
import divider from "../../../assets/getfiro/divider.svg"
import firoMobile from "../../../assets/getfiro/firoMobile.svg"
import firoCoin from "../../../assets/animation/Firo coin.svg"
import { useMediaQuery } from "react-responsive"
import { useTheme } from "styled-components"
import { FlexCenterDiv } from "../../../components/utilities/flex-center-div.component"
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component"
import { GridDiv } from "../../../components/utilities/grid-div.component"
import { PaddedDiv } from "../../../components/utilities/padded-div.component"
import { Spacer } from "../../../components/utilities/spacer.component"
import { Text } from "../../../components/utilities/text.component"
import { FlexDiv } from "../../../components/utilities/flex-div.component"

const FiroToken = () => {
  const theme = useTheme()
  const isBigDesktop = useMediaQuery({ query: "(min-width: 1824px)" })
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
  const isTablet = useMediaQuery({ query: "(width: 768px)" })
  const isSmallMobile = useMediaQuery({ query: "(max-width: 375px)" })

  return (
    <PaddedDiv
      y={isBigDesktop ? "8" : "7"}
      bg={theme.colors.brand.primary}
      style={{ overflow: "hidden" }}
    >
      <FlexStartDiv
        style={{
          position: "relative",
          zIndex: 10,
          alignItems: isDesktop ? "start" : "center",
          marginLeft: "10%",
        }}
      >
        {!isDesktop && (
          <Text variant="h3" color={theme.colors.text.white} bold="true">
            FIRO Token
          </Text>
        )}

        {isDesktop && (
          <Text variant="h1" color={theme.colors.text.white} bold="true">
            Get FIRO
          </Text>
        )}
        <Spacer />
        <Text
          variant={isDesktop ? "label" : "body"}
          fontFamily={theme.fontFamily.ssp}
          color={theme.colors.text.white}
          style={{ width: isDesktop ? "50%" : "100%", lineHeight: "1.5" }}
        >
          Firo is the token powering the Firo network. By transacting with Firo,
          you have the option of keeping your transactons private and away from
          prying eyes.
        </Text>
        {isDesktop && (
          <FlexDiv style={{ position: "relative", top: "-400px", left: "80%" }}>
            <FlexDiv
              style={{
                position: "absolute",
                zIndex: -1,
              }}
            >
              <img src={firoCoin} alt={firoCoin} width={700} />
            </FlexDiv>
          </FlexDiv>
        )}
        <Spacer size="xLarge" />
        {!isDesktop && <img src={firoMobile} alt={firoMobile} width="100%" />}
        {isDesktop && <img src={divider} alt={divider} height="2px" />}
        <Spacer size="xxxLarge" />
      </FlexStartDiv>

      {!isDesktop && (
        <FlexCenterDiv
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <GridDiv
            gap="4"
            y={isTablet ? "auto" : isDesktop ? "2fr 2fr 1fr" : "auto"}
          >
            <PaddedDiv y="4" x="4" br="2" bg={"rgba(255, 255 ,255, 0.2)"}>
              <FlexStartDiv style={{ textAlign: "start" }}>
                <Text variant="caption" color={theme.colors.text.white}>
                  Circulating Supply:
                </Text>
              </FlexStartDiv>
              <Spacer />
              <div
                style={{
                  alignItems: isDesktop ? "flex-start" : "flex-end",
                  display: isDesktop && "flex",
                  flexDirection: "column",
                }}
              >
                <Text
                  variant={isSmallMobile ? "h5" : "h3"}
                  color={theme.colors.text.white}
                  bold={true}
                >
                  11,298,918.87{" "}
                </Text>
                <Text
                  variant="caption"
                  color={theme.colors.text.white}
                  bold={true}
                >
                  Firo
                </Text>
              </div>
            </PaddedDiv>

            <PaddedDiv y="4" x="4" br="2" bg={"rgba(255, 255 ,255, 0.2)"}>
              <FlexStartDiv style={{ textAlign: "start" }}>
                <Text variant="caption" color={theme.colors.text.white}>
                  Market Cap:
                </Text>
              </FlexStartDiv>
              <Spacer />
              <div
                style={{
                  alignItems: isDesktop ? "flex-start" : "flex-end",
                  display: isDesktop && "flex",
                  flexDirection: "column",
                }}
              >
                <Text
                  variant={isSmallMobile ? "h5" : "h3"}
                  color={theme.colors.text.white}
                  bold={true}
                >
                  $31,392,162{" "}
                </Text>
                <Text
                  variant="caption"
                  color={theme.colors.text.white}
                  bold={true}
                >
                  USD
                </Text>
              </div>
            </PaddedDiv>

            <PaddedDiv y="4" x="4" br="2" bg={"rgba(255, 255 ,255, 0.2)"}>
              <FlexStartDiv style={{ textAlign: "start" }}>
                <Text variant="caption" color={theme.colors.text.white}>
                  Current Price:
                </Text>
              </FlexStartDiv>
              <Spacer />
              <div
                style={{
                  alignItems: isDesktop ? "flex-start" : "flex-end",
                  display: isDesktop && "flex",
                  flexDirection: "column",
                }}
              >
                <Text
                  variant={isSmallMobile ? "h5" : "h3"}
                  color={theme.colors.text.white}
                  bold={true}
                >
                  $2.79{" "}
                </Text>
                <Text
                  variant="caption"
                  color={theme.colors.text.white}
                  bold={true}
                >
                  USD
                </Text>
              </div>
            </PaddedDiv>
          </GridDiv>
        </FlexCenterDiv>
      )}
    </PaddedDiv>
  )
}

export default FiroToken
