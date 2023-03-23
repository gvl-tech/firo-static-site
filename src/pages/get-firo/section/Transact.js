import React from "react";
import transactBG from "../../../assets/getfiro/transactBG.svg";
import transactBGMobile from "../../../assets/getfiro/transactBGMobile.svg";
import cypher from "../../../assets/getfiro/cypher.svg";
import cryptotask from "../../../assets/getfiro/cryptotask.svg";
import besmitten from "../../../assets/getfiro/besmitten.svg";
import causenetwork from "../../../assets/getfiro/causenetwork.svg";
import coinrabbit from "../../../assets/getfiro/coinrabbit.svg";
import allnodes from "../../../assets/getfiro/allnodes.svg";
import bolehvpn from "../../../assets/getfiro/bolehvpn.svg";

import { useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Text } from "../../../components/utilities/text.component";
import { PaddedDiv } from "../../../components/utilities/padded-div.component";
import { Spacer } from "../../../components/utilities/spacer.component";
import { FlexCenterDiv } from "../../../components/utilities/flex-center-div.component";
import { BoxDiv } from "../../../components/utilities/box-container.component";
import { FlexWrapDiv } from "../../../components/utilities/flex-wrap.component";

const Transact = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isSmallDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMediumDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  const isBigDesktop = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTablet = useMediaQuery({ query: "(width: 768px)" });

  return (
    <div>
      <img
        src={
          isTablet
            ? transactBGMobile
            : isDesktop
            ? transactBG
            : transactBGMobile
        }
        alt={isDesktop ? transactBG : transactBGMobile}
        width="100%"
        style={{ position: "absolute", zIndex: -1 }}
      />

      <PaddedDiv y="6" x={isBigDesktop ? "6" : isMediumDesktop ? "5" : "3"}>
        <FlexCenterDiv>
          <div>
            <Text variant="h4" bold="true">
              Transact with{" "}
            </Text>
            <Text variant="h4" bold="true" color={theme.colors.brand.primary}>
              Firo
            </Text>
          </div>
        </FlexCenterDiv>
        <Spacer />
        <FlexCenterDiv>
          <Text
            fontFamily={theme.fontFamily.ssp}
            style={{
              lineHeight: "1.5",
              textAlign: isDesktop ? "center" : "start",
              width: isBigDesktop
                ? "30%"
                : isMediumDesktop
                ? "40%"
                : isDesktop
                ? "50%"
                : "100%",
            }}
          >
            Spend Firo at any of the supporting merchants. We aim to expand the
            Firo merchant even further as days go by.
          </Text>
        </FlexCenterDiv>
        <Spacer size="xxLarge" />
        <FlexWrapDiv
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: isDesktop ? "row" : "column",
          }}
        >
          <BoxDiv
            y="3"
            bg={theme.colors.bg.white}
            style={{
              margin: theme.space[3],
              justifyContent: "center",
              width: isTablet ? "30%" : isSmallDesktop ? "20%" : "80%",
            }}
          >
            <img width="100%" src={cypher} alt={cypher} />
          </BoxDiv>
          <BoxDiv
            y="3"
            bg={theme.colors.bg.white}
            style={{
              margin: theme.space[3],
              justifyContent: "center",
              width: isTablet ? "30%" : isSmallDesktop ? "20%" : "80%",
            }}
          >
            <img width="100%" src={cryptotask} alt={cryptotask} />
          </BoxDiv>

          <BoxDiv
            y="3"
            bg={theme.colors.bg.white}
            style={{
              margin: theme.space[3],
              justifyContent: "center",
              width: isTablet ? "30%" : isSmallDesktop ? "20%" : "80%",
            }}
          >
            <img width="100%" src={besmitten} alt={besmitten} />
          </BoxDiv>

          <BoxDiv
            y="3"
            bg={theme.colors.bg.white}
            style={{
              margin: theme.space[3],
              justifyContent: "center",
              width: isTablet ? "30%" : isSmallDesktop ? "20%" : "80%",
            }}
          >
            <img width="100%" src={causenetwork} alt={causenetwork} />
          </BoxDiv>

          <BoxDiv
            y="3"
            bg={theme.colors.bg.white}
            style={{
              margin: theme.space[3],
              justifyContent: "center",
              width: isTablet ? "30%" : isSmallDesktop ? "20%" : "80%",
            }}
          >
            <img width="100%" src={coinrabbit} alt={coinrabbit} />
          </BoxDiv>

          <BoxDiv
            y="3"
            bg={theme.colors.bg.white}
            style={{
              margin: theme.space[3],
              justifyContent: "center",
              width: isTablet ? "30%" : isSmallDesktop ? "20%" : "80%",
            }}
          >
            <img width="100%" src={allnodes} alt={allnodes} />
          </BoxDiv>

          <BoxDiv
            y="3"
            bg={theme.colors.bg.white}
            style={{
              margin: theme.space[3],
              justifyContent: "center",
              width: isTablet ? "30%" : isSmallDesktop ? "20%" : "80%",
            }}
          >
            <img width="100%" src={bolehvpn} alt={bolehvpn} />
          </BoxDiv>
        </FlexWrapDiv>
        <Spacer size="xxLarge" />
        <FlexCenterDiv>
          <Text
            fontFamily={theme.fontFamily.ssp}
            color={theme.colors.brand.primary}
            style={{ cursor: "pointer" }}
          >
            View More Merchants
          </Text>
        </FlexCenterDiv>
      </PaddedDiv>
      {isBigDesktop && <Spacer size="xxxLarge" />}
    </div>
  );
};

export default Transact;
