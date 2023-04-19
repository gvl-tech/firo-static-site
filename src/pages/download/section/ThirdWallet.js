import React from "react"
import cobo from "../../../assets/download/cobo.svg"
import coinomi from "../../../assets/download/coinomi.svg"
import edge from "../../../assets/download/edge.svg"
import guarda from "../../../assets/download/guarda.svg"
import now from "../../../assets/download/now.webp"
import ownbit from "../../../assets/download/ownbit.svg"
import trust from "../../../assets/download/trust.svg"
import zelcore from "../../../assets/download/zelcore.svg"

import { useMediaQuery } from "react-responsive"
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component"
import { GridDiv } from "../../../components/utilities/grid-div.component"
import { PaddedDiv } from "../../../components/utilities/padded-div.component"
import { Spacer } from "../../../components/utilities/spacer.component"
import { Text } from "../../../components/utilities/text.component"
import BoxThirdWallet from "../components/BoxThirdWallet"
const ThirdWallet = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
  const isTablet = useMediaQuery({ query: "(width: 768px)" })

  return (
    <div>
      <PaddedDiv style={{ padding: "5%" }}>
        <FlexStartDiv style={{ alignItems: isDesktop ? "start" : "center" }}>
          <Text bold="true" variant="h4">
            Third-party wallets
          </Text>
        </FlexStartDiv>
        <Spacer size="xxLarge" />
        <GridDiv
          y={
            isTablet
              ? "repeat(auto-fill, 310px)"
              : isDesktop
              ? "repeat(auto-fill, 380px)"
              : "auto"
          }
          gap="5"
          style={{ justifyContent: isDesktop ? "space-between" : "center" }}
        >
          <BoxThirdWallet
            logo={now}
            title="NOW Wallet"
            isAndroid={true}
            androidUrl="https://play.google.com/store/apps/details?id=com.nowwallet"
            isMac={true}
            macUrl="https://apps.apple.com/app/now-wallet-bitcoin-crypto/id1591216386"
            divider1={true}
          />
          <BoxThirdWallet
            logo={zelcore}
            title="ZelCore Wallet"
            isAndroid={true}
            androidUrl="https://play.google.com/store/apps/details?id=com.zelcash.zelcore"
            isMac={true}
            macUrl="https://itunes.apple.com/us/app/zelcore/id1436296839?mt=8"
            isPC={true}
            PCUrl="https://zel.network/zelcore"
            divider1={true}
            divider2={true}
          />
          <BoxThirdWallet
            logo={guarda}
            title="Guarda Wallet"
            isAndroid={true}
            androidUrl="https://play.google.com/store/apps/details?id=com.crypto.multiwallet&hl=ru&ah=lGdAjI0WLmNFP29e2FB3-G6hW6I"
            isMac={true}
            macUrl="https://itunes.apple.com/app/apple-store/id1442083982?pt=118900606&ct=frommainpage&mt=8"
            isPC={true}
            PCUrl="https://guarda.com/desktop"
            isWeb={true}
            WebUrl="https://guarda.com/web-wallet"
            divider1={true}
            divider2={true}
            divider3={true}
          />
          <BoxThirdWallet
            logo={trust}
            title="Trust Wallet"
            isAndroid={true}
            androidUrl="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp&hl=en"
            isMac={true}
            macUrl="https://itunes.apple.com/us/app/trust-ethereum-wallet/id1288339409"
            divider1={true}
          />
          <BoxThirdWallet
            logo={coinomi}
            title="Coinomi Wallet"
            isAndroid={true}
            androidUrl="https://play.google.com/store/apps/details?id=com.coinomi.wallet"
            isMac={true}
            macUrl="https://itunes.apple.com/us/app/coinomi-wallet/id1333588809"
            isPC={true}
            PCUrl="https://www.coinomi.com/en/downloads/"
            divider1={true}
            divider2={true}
          />
          <BoxThirdWallet
            logo={edge}
            title="Edge Wallet"
            isAndroid={true}
            androidUrl="https://play.google.com/store/apps/details?id=co.edgesecure.app"
            isMac={true}
            macUrl="https://itunes.apple.com/us/app/edge-bitcoin-wallet/id1344400091?mt=8"
            divider1={true}
          />
          <BoxThirdWallet
            logo={cobo}
            title="Cobo Wallet"
            isAndroid={true}
            androidUrl="https://play.google.com/store/apps/details?id=cobo.wallet"
            isMac={true}
            macUrl="https://apps.apple.com/us/app/cobo-crypto-portfolio-wallet/id1406282615"
            divider1={true}
          />
          <BoxThirdWallet
            logo={ownbit}
            title="Ownbit Wallet"
            isAndroid={true}
            androidUrl="https://play.google.com/store/apps/details?id=com.bitbill.www&hl=en"
            isMac={true}
            macUrl="https://itunes.apple.com/us/app/bitbill-blockchain-wallet/id1321798216?mt=8"
            divider1={true}
          />
        </GridDiv>
      </PaddedDiv>
      <Spacer size="xxLarge" />
    </div>
  )
}

export default ThirdWallet
