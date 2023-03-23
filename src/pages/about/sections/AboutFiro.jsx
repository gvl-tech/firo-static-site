import React from "react";
import about from "../../../assets/about/about.jpeg";
import { useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";

import { FlexDiv } from "../../../components/utilities/flex-div.component";
import { Text } from "../../../components/utilities/text.component";
import { PaddedDiv } from "../../../components/utilities/padded-div.component";
import { Spacer } from "../../../components/utilities/spacer.component";
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component";
import { FlexEvenlyDiv } from "../../../components/utilities/flex-space-evenly.component";

const AboutFiro = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isBigDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <div>
      <PaddedDiv y="6">
        {isDesktop ? (
          <FlexEvenlyDiv dir="row">
            <FlexStartDiv
              width={isBigDesktop ? "35" : "50"}
              style={{ justifyContent: "center" }}
            >
              <div>
                <Text variant="h1" bold="true">
                  About{" "}
                </Text>
                <Text
                  variant="h1"
                  color={theme.colors.brand.primary}
                  bold="true"
                >
                  Firo
                </Text>
              </div>
              <Spacer />
              <div>
                <Text
                  variant="label"
                  fontFamily={theme.fontFamily.ssp}
                  color={theme.colors.text.secondary}
                  style={{ lineHeight: "1.5" }}
                >
                  A blockchain built around privacy and adaptability, our goal
                  is to develop products to meet the demands of the constantly
                  changing and fast-paced market.
                </Text>
              </div>
            </FlexStartDiv>

            <div>
              <img src={about} alt={about} width={isBigDesktop && "450px"} />
            </div>
          </FlexEvenlyDiv>
        ) : (
          <FlexDiv>
            <div>
              <Text variant="h3" bold="true">
                About{" "}
              </Text>
              <Text variant="h3" color={theme.colors.brand.primary} bold="true">
                Firo
              </Text>
            </div>
            <PaddedDiv y="6" x="0">
              <img src={about} alt={about} width="300px" />
            </PaddedDiv>
            <Text
              color={theme.colors.text.secondary}
              style={{ width: "90%", lineHeight: "1.5" }}
            >
              A blockchain built around privacy and adaptability, our goal is to
              develop products to meet the demands of the constantly changing
              and fast-paced market.
            </Text>
          </FlexDiv>
        )}
      </PaddedDiv>
    </div>
  );
};

export default AboutFiro;
