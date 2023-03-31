import React from "react"
import Lottie from "react-lottie"
import animationData from "../../assets/animation/blocks.json"
import BoxHome2 from "../components/Box/BoxHome2"
import build from "../../assets/home2/build.svg"
import poll from "../../assets/home2/poll.svg"
import spend from "../../assets/home2/spend.svg"
import { Link } from "gatsby"
import { useTheme } from "styled-components"
import { useMediaQuery } from "react-responsive"
import { Text } from "../../components/utilities/text.component"
import { Spacer } from "../../components/utilities/spacer.component"
import { FlexWrapDiv } from "../../components/utilities/flex-wrap.component.js"
import { FlexCenterDiv } from "../../components/utilities/flex-center-div.component.js"
import { PaddedDiv } from "../../components/utilities/padded-div.component.js"
import { BubbleDiv } from "../../components/buttons/bubble-text.component.js"
import { FlexEvenlyDiv } from "../../components/utilities/flex-space-evenly.component.js"
import { FlexDiv } from "../../components/utilities/flex-div.component"

const Home2 = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
  const isTablet = useMediaQuery({ query: "(width: 768px)" })
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <>
      <PaddedDiv>
        <FlexEvenlyDiv dir={isDesktop ? "row" : "column"}>
          <FlexEvenlyDiv
            dir={isDesktop ? "column-reverse" : "column"}
            padding={isTablet ? "0" : isDesktop && "5em"}
            width={isDesktop && "50"}
          >
            <FlexCenterDiv>
              <PaddedDiv y="5" x="0">
                <Lottie
                  options={defaultOptions}
                  width={isTablet ? "350px" : isDesktop ? "500px" : "300px"}
                />
              </PaddedDiv>
            </FlexCenterDiv>

            <div>
              <Text variant={isDesktop ? "h1" : "h3"} bold="true">
                Why{" "}
              </Text>
              <Text
                variant={isDesktop ? "h1" : "h3"}
                color={theme.colors.brand.primary}
                bold="true"
              >
                Firo
              </Text>
              <Spacer size={isDesktop ? "xLarge" : "large"} />
              <Text
                variant="label"
                color={theme.colors.text.secondary}
                fontFamily={theme.fontFamily.ssp}
                style={{ lineHeight: "1.5" }}
              >
                Backed by a team of professionals with a proven track record on
                some of the worlds leading privacy protocols, learn how you can
                benefit from Firo today.
              </Text>

              <Spacer size={isDesktop ? "xLarge" : "large"} />

              <FlexWrapDiv style={{ gap: theme.space[2] }}>
                <BubbleDiv
                  bg={theme.colors.bg.tertiary}
                  color={theme.colors.brand.primary}
                  padding={`${theme.space[2]}px ${theme.space[4]}px`}
                >
                  Lelantus Spark
                </BubbleDiv>
                <BubbleDiv
                  bg={theme.colors.bg.tertiary}
                  color={theme.colors.brand.primary}
                  padding={`${theme.space[2]}px ${theme.space[4]}px`}
                >
                  Lelantus
                </BubbleDiv>
                <BubbleDiv
                  bg={theme.colors.bg.tertiary}
                  color={theme.colors.brand.primary}
                  padding={`${theme.space[2]}px ${theme.space[4]}px`}
                >
                  Sigma
                </BubbleDiv>
                <BubbleDiv
                  bg={theme.colors.bg.tertiary}
                  color={theme.colors.brand.primary}
                  padding={`${theme.space[2]}px ${theme.space[4]}px`}
                >
                  Dandelion++
                </BubbleDiv>
                <BubbleDiv
                  bg={theme.colors.bg.tertiary}
                  color={theme.colors.brand.primary}
                  padding={`${theme.space[2]}px ${theme.space[4]}px`}
                >
                  MTP
                </BubbleDiv>
              </FlexWrapDiv>
              <Spacer size={isDesktop ? "xLarge" : "large"} />

              <Link to="/about" style={{ textDecoration: "none" }}>
                <Text variant="caption" color={theme.colors.brand.primary}>
                  Learn More about FIRO {`>`}
                </Text>
              </Link>

              <Spacer position="bottom" size="xxLarge" />
            </div>
          </FlexEvenlyDiv>

          <FlexDiv x="0" width={isTablet ? "40" : isDesktop && "28"}>
            <BoxHome2
              image={build}
              title="Build"
              subtitle="Leverage on Firo's privacy features with Elysium, a fully decentralised and modular infrastructure that allows for easy bridging of tokens."
            />
            <Spacer position="bottom" size="xLarge" />

            <BoxHome2
              image={poll}
              title="Poll"
              subtitle="Experience anonymous, transparent and tamper-free polls with Firo's blockchain polling infrastructure."
            />
            <Spacer position="bottom" size="xLarge" />

            <BoxHome2
              image={spend}
              title="Spend"
              subtitle="Enjoy spending without worrying about prying eyes, whether its cup of coffee, or shopping for your next outfit."
            />
            <Spacer position="bottom" size="xLarge" />
          </FlexDiv>
        </FlexEvenlyDiv>
      </PaddedDiv>
      {isDesktop && (
        <FlexDiv bg={theme.colors.brand.primary}>
          <Spacer />
        </FlexDiv>
      )}
    </>
  )
}

export default Home2
