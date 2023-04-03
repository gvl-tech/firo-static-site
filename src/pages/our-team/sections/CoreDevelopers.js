import React from "react"
import peter from "../../../assets/team/peter.png"
import levon from "../../../assets/team/levon.png"
import gevorg from "../../../assets/team/gevorg.png"
import lc from "../../../assets/team/lc.png"
import levon2 from "../../../assets/team/levon2.png"

import { useMediaQuery } from "react-responsive"
import { Text } from "../../../components/utilities/text.component"
import { PaddedDiv } from "../../../components/utilities/padded-div.component"
import { Spacer } from "../../../components/utilities/spacer.component"
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component"
import BoxTeam from "../components/BoxTeam"
import { GridDiv } from "../../../components/utilities/grid-div.component"

const CoreDevelopers = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  })
  return (
    <div>
      <PaddedDiv style={{ padding: "5%" }}>
        <FlexStartDiv style={{ alignItems: isDesktop ? "start" : "center" }}>
          <Text bold="true" variant={isDesktop ? "h2" : "h4"}>
            Core Developers
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
            image={peter}
            name="Peter Shugalev"
            position="Lead Developer"
            description="Peter is a highly skilled programmer and software architect with 20+ years of experience. He lives in Moscow, Russia, and graduated from Moscow State University magna cum laude with a Master's Degree in Computer Science and Mathematics. He has created network and security-related services, and has even created his own programming language and a crossplatform compiler for a signature-based intrusion detection system. His rare combination of cryptographic knowledge and programming has helped Firo stay at the forefront of on-chain privacy."
          />
          <BoxTeam
            inverse="true"
            image={levon}
            name="Levon Petrosyan"
            position="Developer"
            description="Levon is a software engineer with Master's degrees in both Computing Sciences and Economics from the American University of Armenia. His background is in C++ programming and cryptography. He is one of Firo's most prolific contributors having coded huge portions of Firo's Lelantus cryptographic library along with optimizations to support large anonymity sets."
          />
          <BoxTeam
            inverse="true"
            image={gevorg}
            name="Gevorg Mirzoyan"
            position="Developer"
            description="Gevorg is a software engineer who graduated from the Faculty of Applied Mathematics and Informatics, Russian- Armenian (Slavonic) University. His tech stack includes C++, Unity and Linux. He has a passion for programming, hiking and games."
          />
          <BoxTeam
            inverse="true"
            image={lc}
            name="LC"
            position="Developer"
            description="LC is an anonymous developer that is interested in the cross-section between government, politics, state power, and technology. Drawing from philosophers like Foucault, Fisher, Ellul, Ranciere, he is interested in individual human freedom, so he naturally gravitates to crypto anarchy. He focuses on computer security, philosophy, and Python software development. He follows the cypherpunk Bitstream Podcast by Frank Braun & Jonathan ‘smuggler’ Logan."
          />
          <BoxTeam
            inverse="true"
            image={levon2}
            name="Levon Hovhannisyan"
            position="Developer"
            description="Levon Hovhannisyan has over 6 years of professional experience, specifically in C++, algorithms and data structures. His tech stack includes but is not limited to the latest C++ standards, Python, Lua, Windows/Linux. During his professional career, Levon has also had experience in games and backend development. He graduated from Russian-Armenian (Slavonic) University and while studying Levon was involved in the competitive programming contests, including ACM ICPC, and the knowledge gained from them has helped him to become a professional lecturer and learning courses creator. He is also passionate about learning new technologies and software development practices, problem-solving and video games."
          />
        </GridDiv>
      </PaddedDiv>
    </div>
  )
}

export default CoreDevelopers
