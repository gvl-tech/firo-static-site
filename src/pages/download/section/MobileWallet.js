import React from "react";
import { useMediaQuery } from "react-responsive";
import { Text } from "../../../components/utilities/text.component";
import { PaddedDiv } from "../../../components/utilities/padded-div.component";
import { Spacer } from "../../../components/utilities/spacer.component";
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component";
import { GridDiv } from "../../../components/utilities/grid-div.component";
import BoxMobileWallet from "../components/BoxMobileWallet";
const MobileWallet = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(width: 768px)" });
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
            version="v0.1.18"
            changelog={true}
            isAndroid={true}
            androidText="Download Wallet"
            androidDescription="+ Show SHA256 hashes for Android"
            isGithub={true}
          />
          <BoxMobileWallet
            header="IOS"
            title="iOS Wallet"
            version="Coming soon"
          />
          <BoxMobileWallet
            header="ANDROID & IOS"
            title="Campfire Wallet"
            isAndroid={true}
            androidText="Download for Android"
            isMac={true}
            macText="Download for iOS"
            isGithub={true}
          />
        </GridDiv>
      </PaddedDiv>
    </div>
  );
};

export default MobileWallet;
