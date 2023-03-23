import React from "react";
import poramin from "../../../assets/team/poramin.png";
import reuben from "../../../assets/team/reuben.png";
import firoBG from "../../../assets/team/firoBG.png";

import { useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Text } from "../../../components/utilities/text.component";
import { PaddedDiv } from "../../../components/utilities/padded-div.component";
import { Spacer } from "../../../components/utilities/spacer.component";
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component";
import { FlexCenterDiv } from "../../../components/utilities/flex-center-div.component";
import BoxTeam from "../components/BoxTeam";
import { GridDiv } from "../../../components/utilities/grid-div.component";

const Founders = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });

  return (
    <div>
      {isDesktop && (
        <FlexStartDiv
          dir="row"
          style={{ justifyContent: "flex-end", overflow: "hidden" }}
        >
          <img
            src={firoBG}
            alt={firoBG}
            style={{
              position: "fixed",
              zIndex: "-1",
              width: "100%",
              maxWidth: "1000px",
              top: "-10%",
              right: " -15%",
            }}
          />
        </FlexStartDiv>
      )}
      <PaddedDiv y="6">
        <FlexCenterDiv>
          <div>
            <Text variant={isDesktop ? "h1" : "h3"} bold="true">
              Our{" "}
            </Text>
            <Text
              variant={isDesktop ? "h1" : "h3"}
              color={theme.colors.brand.primary}
              bold="true"
            >
              Team
            </Text>
          </div>
        </FlexCenterDiv>
      </PaddedDiv>

      <PaddedDiv style={{ padding: "5%" }}>
        <FlexStartDiv style={{ alignItems: isDesktop ? "start" : "center" }}>
          <Text bold="true" variant={isDesktop ? "h2" : "h4"}>
            Founders
          </Text>
        </FlexStartDiv>
        <Spacer size="xxxLarge" />
        <GridDiv
          // y={isDesktop ? "repeat(2,1fr)" : "auto"}
          y={isTablet ? "auto" : isDesktop ? "repeat(2,1fr)" : "auto"}
          gap={isTablet ? "6" : isDesktop ? "3" : "5"}
        >
          <BoxTeam
            image={poramin}
            social={true}
            name="Poramin Insom"
            position="Co-Founder"
            description="Poramin Insom founded Zcoin (now Firo) in 2016, seeking to provide financial privacy and also more inclusive mining via ASIC resistant proof of work. He earned a masters degree in Information Security from Johns Hopkins University where he wrote a paper on a proposed practical implementation of the Zerocoin protocol. He laid the foundations of Zcoin's (now Firo) technology from coding the world's first implementation of Zerocoin and also pushing for the research and development into the MTP mining algorithm. Poramin has been focused on pushing for the adoption of Firo into the real world especially in his involvement in facilitating the Thai Democrat Party to conduct its primary elections to elect its party leader on Firo's blockchain in 2018 which is the world's first large scale political election on a blockchain."
          />
          <BoxTeam
            image={reuben}
            social={true}
            name="Reuben Yap"
            position="Co-Founder"
            description="Reuben Yap has led the project in its overall strategy, development goals and research efforts for the past few years. He now remains part of the core team managing the core team's development and research teams. Joining the team shortly after its inception, he has played a pivotal role in shaping Firo to where it is today. Reuben has been a vocal advocate of online and
            financial privacy having founded one of SE Asia's earliest VPN services to combat his country's censorship and is a well respected speaker on the topic, with featured interviews and commentary in BBC, Nasdaq Tradetalks, Forbes, Coindesk, Reuters and Cheddar News, among others. Prior to joining Firo, Reuben was a partner at a law firm with over ten years of practicing experience having specialized in doing advisory work in legal and institutional frameworks."
          />
        </GridDiv>
      </PaddedDiv>
    </div>
  );
};

export default Founders;
