import React from "react"
import BoxHome3 from "../components/Box/BoxHome3"
import getfiro from "../../assets/home3/get-firo.svg"
import merchant from "../../assets/home3/merchant.svg"
import bountyhunter from "../../assets/home3/bounty-hunter.svg"
import stake from "../../assets/home3/stake.svg"
import discord from "../../assets/home3/social-discord.svg"
import youtube from "../../assets/home3/social-youtube.svg"
import telegram from "../../assets/home3/social-telegram.svg"
import forum from "../../assets/home3/social-forum.svg"
import community from "../../assets/home3/community.svg"
import { useTheme } from "styled-components"
import { useMediaQuery } from "react-responsive"
import { Text } from "../../components/utilities/text.component"
import { Spacer } from "../../components/utilities/spacer.component"
import { FlexDiv } from "../../components/utilities/flex-div.component"
import { GridDiv } from "../../components/utilities/grid-div.component"
import { BoxDiv } from "../../components/utilities/box-container.component"
import { FlexCenterDiv } from "../../components/utilities/flex-center-div.component"
import { FlexEvenlyDiv } from "../../components/utilities/flex-space-evenly.component"

const Home3 = () => {
  const theme = useTheme()
  const isSmallMobile = useMediaQuery({ query: "(max-width: 400px)" })
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1024px)",
  })
  const isBigDesktop = useMediaQuery({ query: "(min-width: 1100px)" })

  return (
    <FlexDiv bg={theme.colors.bg.grey} style={{ padding: "5%" }}>
      <FlexDiv>
        <Text variant={isSmallMobile ? "label" : "h5"}>Be part of the</Text>
        <div>
          <Text
            variant={isSmallMobile ? "h5" : "h4"}
            color={theme.colors.brand.primary}
            bold="true"
          >
            Privacy
          </Text>
          <Text variant={isSmallMobile ? "h5" : "h4"} bold="true">
            {" "}
            Movement
          </Text>
        </div>
      </FlexDiv>

      <Spacer />

      <GridDiv
        y={`repeat(${isBigDesktop ? 4 : 2}, 1fr)`}
        style={{ gap: theme.space[3], width: "100%" }}
      >
        <BoxHome3
          image={getfiro}
          title="Get"
          highlight="Firo"
          subtitle="Make your first purchase of Firo and embark on your journey towards anonymous transactions today."
        />

        <BoxHome3
          image={merchant}
          title="Become a "
          highlight="Merchant"
          subtitle="Keep your business ledgers private and anonymous by allowing payments with Firo."
        />

        <BoxHome3
          image={bountyhunter}
          title="Be a "
          highlight="Bounty Hunter"
          subtitle="Hunt for bugs and receive rewards."
        />
        <BoxHome3
          image={stake}
          title="Earn, Mine &"
          highlight="Stake"
          subtitle="Earn, stake, or contribute to the overall security of the Firo network today."
        />
      </GridDiv>
      <Spacer position="top" size="xLarge" />

      {/* <GridDiv y="1fr"> */}
      <BoxDiv x="0" style={{ width: "100%" }}>
        {!isDesktop && (
          <FlexCenterDiv>
            <div>
              <Text variant="h5" bold="true">
                Join the
              </Text>
              <Text variant="h5" bold="true" color={theme.colors.brand.primary}>
                {" "}
                Community
              </Text>
            </div>
            <Spacer size="xLarge" />

            <GridDiv y="repeat(4, 1fr)" style={{ gap: theme.space[3] }}>
              <FlexCenterDiv>
                <img src={discord} alt={discord} />
                <Text variant="tab" color={theme.colors.brand.primary}>
                  Discord
                </Text>
              </FlexCenterDiv>
              <FlexCenterDiv>
                <img src={youtube} alt={youtube} />
                <Text variant="tab" color={theme.colors.brand.primary}>
                  YouTube
                </Text>
              </FlexCenterDiv>
              <FlexCenterDiv>
                <img src={telegram} alt={telegram} />
                <Text variant="tab" color={theme.colors.brand.primary}>
                  Telegram
                </Text>
              </FlexCenterDiv>
              <FlexCenterDiv>
                <img src={forum} alt={forum} />
                <Text variant="tab" color={theme.colors.brand.primary}>
                  Forum
                </Text>
              </FlexCenterDiv>
            </GridDiv>
          </FlexCenterDiv>
        )}

        {isDesktop && (
          <FlexEvenlyDiv
            dir="row"
            style={{ alignItems: "center" }}
            padding={`${theme.space[2]}px`}
          >
            <FlexDiv style={{ alignItems: "start" }}>
              <div>
                <Text variant="h3" bold="true">
                  Join the
                </Text>
                <Text
                  variant="h3"
                  bold="true"
                  color={theme.colors.brand.primary}
                >
                  {" "}
                  Community
                </Text>
              </div>
              <Spacer size="xLarge" />

              <Text
                color={theme.colors.text.secondary}
                style={{ width: "80%", alignItems: "start", lineHeight: "1.5" }}
              >
                Join a vibrant community and become part of the Firofam today.
              </Text>
              <Spacer size="xLarge" />
              <GridDiv y="repeat(4, 1fr)" gap={isTablet ? "3" : "5"}>
                <FlexCenterDiv>
                  <img src={discord} alt={discord} width={"70px"} />
                  <Text variant="tab" color={theme.colors.brand.primary}>
                    Discord
                  </Text>
                </FlexCenterDiv>
                <FlexCenterDiv>
                  <img src={youtube} alt={youtube} width={"70px"} />
                  <Text variant="tab" color={theme.colors.brand.primary}>
                    YouTube
                  </Text>
                </FlexCenterDiv>
                <FlexCenterDiv>
                  <img src={telegram} alt={telegram} width={"70px"} />
                  <Text variant="tab" color={theme.colors.brand.primary}>
                    Telegram
                  </Text>
                </FlexCenterDiv>
                <FlexCenterDiv>
                  <img src={forum} alt={forum} width={"70px"} />
                  <Text variant="tab" color={theme.colors.brand.primary}>
                    Forum
                  </Text>
                </FlexCenterDiv>
              </GridDiv>
            </FlexDiv>

            <img
              src={community}
              alt={community}
              width={isBigDesktop ? "350px" : "250px"}
            />
          </FlexEvenlyDiv>
        )}
      </BoxDiv>
      {/* </GridDiv> */}
    </FlexDiv>
  )
}

export default Home3
