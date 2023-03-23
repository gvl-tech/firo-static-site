import React from "react";
import anwar from "../../../assets/team/anwar.png";
import ajaydono from "../../../assets/team/ajaydono.png";
import lucas from "../../../assets/team/lucas.png";
import michael from "../../../assets/team/michael.png";
import sebastian from "../../../assets/team/sebastian.png";
import lemar from "../../../assets/team/lemar.png";

import BoxTeam from "../components/BoxTeam";
import { useMediaQuery } from "react-responsive";
import { Text } from "../../../components/utilities/text.component";
import { PaddedDiv } from "../../../components/utilities/padded-div.component";
import { Spacer } from "../../../components/utilities/spacer.component";
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component";
import { GridDiv } from "../../../components/utilities/grid-div.component";

const Community = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  return (
    <div>
      <PaddedDiv style={{ padding: "5%" }}>
        <FlexStartDiv style={{ alignItems: isDesktop ? "start" : "center" }}>
          <Text bold="true" variant={isDesktop ? "h2" : "h4"}>
            Community
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
            image={anwar}
            name="Anwar P."
            position="Senior Support"
            description="Anwar majored in electrical and electronics engineering, with several years of experience of technical support at an IT company. He handles support queries, documentation, developer support and also assists the Project Steward with day to day matters."
          />
          <BoxTeam
            inverse="true"
            image={ajaydono}
            name="Ajaydono"
            position="Support"
            description="Ajay assists the Project Steward in day-to-day operations as well as support enquiries. He has a Diploma in Information Technology majoring in Database Administration and has several years of experience of IT technical support."
          />
          <BoxTeam
            inverse="true"
            image={lucas}
            name="Lucas Fullam"
            position="Community Manager"
            description="Lucas Fullam has a history of working customer focused jobs in the past ranging from customer service representative to event setups at venues and conferences. He first heard about cryptocurrency back in 2012, but did not truly delve into until well into 2017 when one of his friends brought him deeper into the world of crypto where he finally got to see how much potential there was. One thing led to another and finally he found Firo and the rest is history."
          />
          <BoxTeam
            inverse="true"
            image={michael}
            name="Michael ‘Muggles’ Bernhardt"
            position="Community Manager"
            description="A programmer by trade, he is running his own business to manage water projects via an online portal with installations throughout Africa. Michael has been consumed by crypto since 2013 and has a strong passion for privacy and freedom."
          />
          <BoxTeam
            inverse="true"
            image={sebastian}
            name="Sebastian Bausch"
            position="Asian Operations"
            description="Sebastian Bausch is a Bangkok-based angel investor and has been passionate about cryptocurrencies since 2011. He studied Mandarin at Xiamen University and holds a postgraduate degree from the University of Nottingham. He supports the team’s operations in the region and coordinates translations and meet-ups."
          />
          <BoxTeam
            inverse="true"
            image={lemar}
            name="Lemar “Luke” Briones"
            position="Filipino Community Manager"
            description="An Information Technology graduate from the Philippines, Lemar has been a cryptocurrency enthusiast since 2017 and is dedicated to spreading awareness of Firo across the Philippines."
          />
        </GridDiv>
      </PaddedDiv>
    </div>
  );
};

export default Community;
