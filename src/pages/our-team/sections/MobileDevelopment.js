import React from "react";
import zorayr from "../../../assets/team/zorayr.png";
import hakob from "../../../assets/team/hakob.png";
import hayk from "../../../assets/team/hayk.png";
import armine from "../../../assets/team/armine.png";

import { useMediaQuery } from "react-responsive";
import { Text } from "../../../components/utilities/text.component";
import { PaddedDiv } from "../../../components/utilities/padded-div.component";
import { Spacer } from "../../../components/utilities/spacer.component";
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component";
import BoxTeam from "../components/BoxTeam";
import { GridDiv } from "../../../components/utilities/grid-div.component";

const MobileDevelopment = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  return (
    <div>
      <PaddedDiv style={{ padding: "5%" }}>
        <FlexStartDiv style={{ alignItems: isDesktop ? "start" : "center" }}>
          <Text bold="true" variant={isDesktop ? "h2" : "h4"}>
            Mobile Development
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
            image={zorayr}
            name="Zorayr Zakaryan"
            position="Mobile Project Manager"
            description="Zorayr is a software backend developer with more than 14 years of experience. Specialized in managing engineering teams and establishing proper development processes. Loves anything related to algorithms, cryptocurrencies and video games."
          />
          <BoxTeam
            inverse="true"
            image={hakob}
            name="Hakob Kanoyan"
            position="Mobile Developer"
            description="Hakob has more than 10 years of experience as a mobile, backend and game developer. He has a strong mathematical background including cryptography. Hakob is leading the technical development of Firo mobile wallet."
          />
          <BoxTeam
            inverse="true"
            image={hayk}
            name="Hayk Zakaryan"
            position="Mobile Developer"
            description="With 11+ years of experience in software engineering, including 7+ years of native and cross-platform mobile development, Hayk joined the Firo team as a part time mobile engineer."
          />
          <BoxTeam
            inverse="true"
            image={armine}
            name="Armine Zakaryan"
            position="UI/UX Designer"
            description="A UX / UI designer with 5+ years of experience. She is a self-educated designer full of enthusiasm and motivation to create innovative, user-friendly experiences and creative user interfaces. Currently working on mostly B2B SAAS product designs."
          />
        </GridDiv>
      </PaddedDiv>
    </div>
  );
};

export default MobileDevelopment;
