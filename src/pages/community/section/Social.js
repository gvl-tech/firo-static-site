import React from "react"
import discord from "../../../assets/community/social/discord.svg"
import forum from "../../../assets/community/social/forum.svg"
import youtube from "../../../assets/community/social/youtube.svg"
import telegram from "../../../assets/community/social/telegram.svg"
import twitter from "../../../assets/community/social/twitter.svg"
import facebook from "../../../assets/community/social/facebook.svg"
import reddit from "../../../assets/community/social/reddit.svg"
import bitcointalk from "../../../assets/community/social/bitcointalk.svg"
import matrix from "../../../assets/community/social/matrix.svg"
import wechat from "../../../assets/community/social/wechat.svg"
import youku from "../../../assets/community/social/youku.svg"
import qq from "../../../assets/community/social/qq.svg"
import instagram from "../../../assets/community/social/instagram.svg"
import weibo from "../../../assets/community/social/weibo.svg"

import { useTheme } from "styled-components"
import { useMediaQuery } from "react-responsive"
import { Text } from "../../../components/utilities/text.component"
import { PaddedDiv } from "../../../components/utilities/padded-div.component"
import { Spacer } from "../../../components/utilities/spacer.component"
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component"
import { FlexCenterDiv } from "../../../components/utilities/flex-center-div.component"
import { GridDiv } from "../../../components/utilities/grid-div.component"
import BoxSocial from "../components/BoxSocial"

const Social = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })

  return (
    <div>
      <PaddedDiv y="6">
        <FlexCenterDiv>
          <Text
            variant={isDesktop ? "h1" : "h3"}
            color={theme.colors.brand.primary}
            bold="true"
          >
            Community
          </Text>
        </FlexCenterDiv>
      </PaddedDiv>

      <PaddedDiv
        // y="5"
        // x={isBigDesktop ? "6" : "4"}
        bg={theme.colors.bg.lightBlue}
        style={{ padding: "5%" }}
      >
        <FlexStartDiv style={{ alignItems: isDesktop ? "start" : "center" }}>
          <Text bold="true" variant="h4" color={theme.colors.text.primary}>
            Social
          </Text>
        </FlexStartDiv>
        <Spacer size="xLarge" />

        <GridDiv
          y={isDesktop ? "repeat(auto-fill, 200px)" : "repeat(2,1fr)"}
          gap="4"
          style={{ justifyContent: "space-between" }}
        >
          <BoxSocial
            logo={discord}
            name="Discord"
            url="https://discord.com/invite/TGZPRbRT3Y"
          />
          <BoxSocial logo={forum} name="Forum" url="https://forum.firo.org/" />
          <BoxSocial
            logo={youtube}
            name="Youtube"
            url="https://www.youtube.com/c/firoorg"
          />
          <BoxSocial
            logo={telegram}
            name="Telegram"
            url="https://t.me/firoorg"
          />
          <BoxSocial
            logo={twitter}
            name="Twitter"
            url="https://twitter.com/firoorg"
          />
          <BoxSocial
            logo={facebook}
            name="Facebook"
            url="https://www.facebook.com/firoorg/"
          />
          <BoxSocial
            logo={reddit}
            name="Reddit"
            url="https://www.reddit.com/r/FiroProject/"
          />
          <BoxSocial
            logo={bitcointalk}
            name="Bitcointalk"
            url="https://bitcointalk.org/index.php?topic=1638450.0"
          />
          <BoxSocial
            logo={matrix}
            name="Matrix (Element)"
            url="https://matrix.to/#/%23firo:matrix.org"
          />
          <BoxSocial
            logo={wechat}
            name="Wechat"
            url="https://zcoin.io/wechat/"
          />
          <BoxSocial
            logo={youku}
            name="Youku"
            url="http://i.youku.com/i/UNDY5NDAzMzgyMA=="
          />
          <BoxSocial
            logo={qq}
            name="QQ"
            url="https://jq.qq.com/?_wv=1027&k=JzGzHApT"
          />
          <BoxSocial
            logo={instagram}
            name="Instagram"
            url="https://www.instagram.com/firoorg/"
          />
          <BoxSocial
            logo={weibo}
            name="Weibo"
            url="https://weibo.com/u/6140252510"
          />
        </GridDiv>
      </PaddedDiv>
    </div>
  )
}

export default Social
