import React from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { navigate } from "gatsby";
import nasdaq from "../../assets/brands/nasdaq.svg";
import yahoo from "../../assets/brands/yahoo.svg";
import coindesk from "../../assets/brands/coin-desk.svg";
import cointelegraph from "../../assets/brands/coin-telegraph.svg";
import amazon from "../../assets/brands/amazon.svg";
import { Button } from "../../components/buttons/cta-button.component";
import { Spacer } from "../../components/utilities/spacer.component";
import { Text } from "../../components/utilities/text.component";
import { FlexCenterDiv } from "../../components/utilities/flex-center-div.component";
import { PaddedDiv } from "../../components/utilities/padded-div.component";
import { FlexDiv } from "../../components/utilities/flex-div.component";
import Lottie from "react-lottie";
import animationData from "../../assets/animation/Banner1.mp4.lottie.json";
import animationMobileData from "../../assets/animation/Banner1Mobile.mp4.lottie.json";

const Home1 = () => {
  const theme = useTheme();
  const isBigDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultMobileOptions = {
    loop: true,
    autoplay: true,
    animationData: animationMobileData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <PaddedDiv y={!isDesktop && "6"}>
      <FlexCenterDiv bg={theme.colors.brand.primary} br={theme.borderSizes[1]}>
        {isDesktop && (
          <Lottie
            options={defaultOptions}
            height={1000}
            width="96%"
            isStopped={false}
            isPaused={false}
            style={{
              borderRadius: theme.borderSizes[1],
              position: "absolute",
              zIndex: 0,
              top: theme.space[3],
              right: theme.space[3],
            }}
          />
        )}

        {!isDesktop && (
          <Lottie
            options={defaultMobileOptions}
            width="92%"
            isStopped={false}
            isPaused={false}
            style={{
              borderRadius: theme.borderSizes[1],
              position: "absolute",
              zIndex: 0,
              top: theme.space[6],
            }}
          />
        )}
        <PaddedDiv x="0" y="7">
          {!isDesktop && (
            <FlexCenterDiv
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              <Text variant="h3" color={theme.colors.text.white} bold="true">
                The Future of
              </Text>
              <Text variant="h1" color={theme.colors.text.white} bold="true">
                Privacy
              </Text>
              <Text variant="h3" color={theme.colors.text.white} bold="true">
                is Here.
              </Text>
              <Spacer position="top" size="xLarge" />
              <FlexCenterDiv width="60">
                <Text variant="caption" color={theme.colors.text.white}>
                  Our privacy-focused technology and infrastructure ensures that
                  your activity on the Firo blockchain stays out of sight.
                </Text>
              </FlexCenterDiv>
              <Spacer position="top" size="xxLarge" />
              <Button onClick={() => navigate("/about")}>Learn More</Button>
            </FlexCenterDiv>
          )}

          {isDesktop && (
            <FlexDiv
              style={{
                position: "relative",
                zIndex: 1,
                right: isBigDesktop ? "25%" : isTablet ? "4%" : "13%",
              }}
            >
              <div
                style={{
                  position: "relative",
                  top: "3em",
                  left: "8em",
                }}
              >
                <Text
                  style={{
                    fontSize: "5em",
                  }}
                  color={theme.colors.text.white}
                  bold="true"
                >
                  The Future of
                </Text>
              </div>
              <div>
                <Text
                  style={{ fontSize: isTablet ? "8em" : "9em" }}
                  color={theme.colors.text.white}
                  bold="true"
                >
                  {`Privacy${" "}`}
                </Text>
                <Text
                  style={{
                    fontSize: "5em",
                  }}
                  color={theme.colors.text.white}
                  bold="true"
                >
                  is Here.
                </Text>
              </div>
              <Spacer />
              <FlexCenterDiv dir="row">
                <FlexCenterDiv
                  width={isTablet ? "60" : "50"}
                  style={{ textAlign: "justify", lineHeight: "1.5" }}
                >
                  <Text
                    variant="label"
                    color={theme.colors.text.white}
                    fontFamily={theme.fontFamily.ssp}
                  >
                    Our privacy-focused technology and infrastructure ensures
                    that your activity on the Firo blockchain stays out of
                    sight.
                  </Text>
                </FlexCenterDiv>
                <Spacer position="left" size="xLarge" />
                <Button onClick={() => navigate("/about")}>Learn More</Button>
              </FlexCenterDiv>
            </FlexDiv>
          )}
        </PaddedDiv>

        <FlexCenterDiv
          bg={theme.colors.bg.secondary}
          br={theme.borderSizes[1]}
          width="100"
          style={{ postion: "relative", zIndex: 1 }}
        >
          <PaddedDiv x="0" y="5">
            <Text
              variant="label"
              color={theme.colors.text.white}
              fontFamily={theme.fontFamily.ssp}
            >
              As seen on
            </Text>
            <Spacer />
            <FlexCenterDiv
              dir="row"
              style={{ gap: theme.space[4], flexWrap: "wrap" }}
            >
              <img src={nasdaq} alt={nasdaq} width={isDesktop && "150px"} />
              <img src={yahoo} alt={yahoo} width={isDesktop && "150px"} />
              <img src={amazon} alt={amazon} width={isDesktop && "150px"} />
              <img
                src={cointelegraph}
                alt={cointelegraph}
                width={isDesktop && "150px"}
              />
              <img src={coindesk} alt={coindesk} width={isDesktop && "150px"} />
            </FlexCenterDiv>
          </PaddedDiv>
        </FlexCenterDiv>
      </FlexCenterDiv>
    </PaddedDiv>
  );
};

export default Home1;
