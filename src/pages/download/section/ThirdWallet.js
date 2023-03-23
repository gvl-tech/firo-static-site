import React from "react";
import zelcore from "../../../assets/download/zelcore.svg";
import guarda from "../../../assets/download/guarda.svg";
import trust from "../../../assets/download/trust.svg";
import coinomi from "../../../assets/download/coinomi.svg";
import edge from "../../../assets/download/edge.svg";
import midas from "../../../assets/download/midas.svg";
import cobo from "../../../assets/download/cobo.svg";
import paytomat from "../../../assets/download/paytomat.svg";
import ownbit from "../../../assets/download/ownbit.svg";
import magnum from "../../../assets/download/magnum.svg";
import dove from "../../../assets/download/dove.svg";

import { useMediaQuery } from "react-responsive";
import { Text } from "../../../components/utilities/text.component";
import { PaddedDiv } from "../../../components/utilities/padded-div.component";
import { Spacer } from "../../../components/utilities/spacer.component";
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component";
import { GridDiv } from "../../../components/utilities/grid-div.component";
import BoxThirdWallet from "../components/BoxThirdWallet";
const ThirdWallet = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(width: 768px)" });

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
            logo={zelcore}
            title="ZelCore Wallet"
            isAndroid={true}
            isMac={true}
            isPC={true}
            divider1={true}
            divider2={true}
          />
          <BoxThirdWallet
            logo={guarda}
            title="Guarda Wallet"
            isAndroid={true}
            isMac={true}
            isPC={true}
            isWeb={true}
            divider1={true}
            divider2={true}
            divider3={true}
          />
          <BoxThirdWallet
            logo={trust}
            title="Trust Wallet"
            isAndroid={true}
            isMac={true}
            divider1={true}
          />
          <BoxThirdWallet
            logo={coinomi}
            title="Coinomi Wallet"
            isAndroid={true}
            isMac={true}
            isPC={true}
            divider1={true}
            divider2={true}
          />
          <BoxThirdWallet
            logo={edge}
            title="Edge Wallet"
            isAndroid={true}
            isMac={true}
            divider1={true}
          />
          <BoxThirdWallet
            logo={midas}
            title="Midas Protocol Wallet"
            isAndroid={true}
            isMac={true}
            divider1={true}
          />
          <BoxThirdWallet
            logo={cobo}
            title="Cobo Wallet"
            isAndroid={true}
            isMac={true}
            divider1={true}
          />
          <BoxThirdWallet
            logo={paytomat}
            title="Paytomat Wallet"
            isAndroid={true}
            isMac={true}
            divider1={true}
          />
          <BoxThirdWallet
            logo={ownbit}
            title="Ownbit Wallet"
            isAndroid={true}
            isMac={true}
            divider1={true}
          />
          <BoxThirdWallet logo={magnum} title="Magnum Wallet" isWeb={true} />
          <BoxThirdWallet logo={dove} title="Dove Wallet" isWeb={true} />
        </GridDiv>
      </PaddedDiv>
      <Spacer size="xxLarge" />
    </div>
  );
};

export default ThirdWallet;
