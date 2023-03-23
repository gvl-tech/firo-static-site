import React from "react";
import aram from "../../../assets/team/aram.png";
import areg from "../../../assets/team/areg.png";

import { useMediaQuery } from "react-responsive";
import { Text } from "../../../components/utilities/text.component";
import { PaddedDiv } from "../../../components/utilities/padded-div.component";
import { Spacer } from "../../../components/utilities/spacer.component";
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component";
import BoxTeam from "../components/BoxTeam";
import { GridDiv } from "../../../components/utilities/grid-div.component";

const Research = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  return (
    <div>
      <PaddedDiv style={{ padding: "5%" }}>
        <FlexStartDiv style={{ alignItems: isDesktop ? "start" : "center" }}>
          <Text bold="true" variant={isDesktop ? "h2" : "h4"}>
            Research
          </Text>
        </FlexStartDiv>
        <Spacer size="xxxLarge" />
        <GridDiv
          y={isTablet ? "auto" : isDesktop ? "repeat(2,1fr)" : "auto"}
          gap={isTablet ? "6" : isDesktop ? "3" : "5"}
          rg="6"
        >
          <BoxTeam
            inverse="true"
            image={aram}
            name="Aram Jivanyan"
            position="Cryptographer"
            description="Aram is the creator of Firo’s Lelantus and Lelantus Spark privacy protocols which has revived interest in one-out-of-many proofs and inspired other privacy protocols such as Triptych (Monero) and Lelantus-MW (Beam). He is also the founding CEO of Skycryptor, Techstars company pioneering the development of proxy re-encryption algorithms. Before founding Skycryptor, Aram worked as senior cryptography researcher and development team lead at the American University of Armenia where the scientific group conducted cryptography research for Fortune 1000 industrial partners. Aram’s main research interest included white-box cryptography, searchable encryption methods, oblivious transfer protocols and cryptographic e-voting systems."
          />
          <BoxTeam
            inverse="true"
            image={areg}
            name="Areg Vrtanesyan"
            position="Cryptography Researcher / Developer"
            description="Areg is a cryptography engineer in firo and is currently majoring in Cybersecurity at YSU. Has experience in software engineering and back end programming in C++. His current interests are cryptography, information security and music."
          />
        </GridDiv>

        <Spacer size="xxxLarge" />
      </PaddedDiv>
    </div>
  );
};

export default Research;
