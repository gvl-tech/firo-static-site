import React from "react"
import { useMediaQuery } from "react-responsive"
import { Text } from "../../../components/utilities/text.component"
import { PaddedDiv } from "../../../components/utilities/padded-div.component"
import { Spacer } from "../../../components/utilities/spacer.component"
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component"
import { GridDiv } from "../../../components/utilities/grid-div.component"
import BoxMobileWallet from "../components/BoxMobileWallet"
const MobileWallet = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
  const isTablet = useMediaQuery({ query: "(width: 768px)" })
  return (
    <div>
      <PaddedDiv style={{ padding: "5%" }}>
        <FlexStartDiv style={{ alignItems: isDesktop ? "start" : "center" }}>
          <Text bold="true" variant="h4">
            Mobile Wallets
          </Text>
        </FlexStartDiv>
        <Spacer size="xxLarge" />
        <GridDiv
          y={isTablet ? "auto" : isDesktop ? "repeat(3, 1fr)" : "auto"}
          gap="5"
        >
          <BoxMobileWallet
            header="ANDROID"
            title="Android Wallet"
            version="v0.1.23"
            changelog={true}
            changelogUrl="https://github.com/firoorg/mobile/releases/latest"
            isAndroid={true}
            androidUrl="https://github.com/firoorg/mobile/releases/latest"
            androidText="Download Wallet"
            androidDescription="Show SHA256 hashes for Android"
            androidsHashes="b48f82597299a649558fc46d59b548408b4c57407efa547b50f8bb9bf89a3287"
            isGithub={true}
            githubUrl="https://github.com/firoorg/mobile"
          />
          <BoxMobileWallet
            header="ANDROID & IOS"
            title="Stack Wallet"
            isAndroid={true}
            androidUrl="https://play.google.com/store/apps/details?id=com.cypherstack.stackwallet"
            androidText="Download for Android"
            isMac={true}
            macUrl="https://apps.apple.com/us/app/stack-wallet-by-cypher-stack/id1634811534"
            macText="Download for iOS"
            isGithub={true}
            githubUrl="https://github.com/cypherstack/stack_wallet/"
          />
          <BoxMobileWallet
            header="ANDROID & IOS"
            title="Campfire Wallet"
            isAndroid={true}
            androidUrl="https://play.google.com/store/apps/details?id=com.cypherstack.campfire"
            androidText="Download for Android"
            isMac={true}
            macUrl="https://apps.apple.com/us/app/campfire-firo-wallet/id1613267898"
            macText="Download for iOS"
            isGithub={true}
            githubUrl="https://github.com/cypherstack/Campfire/releases"
          />
        </GridDiv>
      </PaddedDiv>
    </div>
  )
}

export default MobileWallet
