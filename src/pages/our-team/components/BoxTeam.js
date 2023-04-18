import React from "react"
import twitter from "../../../assets/team/twitter.svg"
import linkedin from "../../../assets/team/linkedin.svg"

import { useTheme } from "styled-components"
import { useMediaQuery } from "react-responsive"
import { FlexCenterDiv } from "../../../components/utilities/flex-center-div.component"
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component"
import { PaddedDiv } from "../../../components/utilities/padded-div.component"
import { Spacer } from "../../../components/utilities/spacer.component"
import { Text } from "../../../components/utilities/text.component"

const BoxTeam = ({
  image,
  social,
  name,
  position,
  description,
  inverse,
  twitterUrl,
  linkedInUrl,
}) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
  const isMediumDesktop = useMediaQuery({ query: "(min-width: 1025px)" })

  return (
    <PaddedDiv
      bg={inverse ? theme.colors.bg.white : theme.colors.brand.primary}
      br="1"
      y="4"
      x="4"
      style={{
        boxShadow: "0px 0px 50px 0px rgba(189,189,189,0.7)",
      }}
    >
      <FlexStartDiv
        dir="row"
        style={{ justifyContent: isDesktop ? "space-between" : "center" }}
      >
        <FlexStartDiv dir="row">
          <img
            width={isMediumDesktop ? "200px" : isDesktop ? "160px" : "90px"}
            height={isMediumDesktop ? "200px" : isDesktop ? "160px" : "90px"}
            src={image}
            alt={image}
            style={{
              position: "relative",
              top: `${isDesktop ? "-110px" : "-80px"}`,
              marginBottom: `${isDesktop ? "-110px" : "-80px"}`,
              border: `5px solid ${
                inverse ? theme.colors.bg.white : theme.colors.brand.primary
              }`,
              borderRadius: `${isDesktop ? "35px" : "20px"}`,
            }}
          />

          {isDesktop && <Spacer position="right" size="xLarge" />}

          {isDesktop && (
            <FlexStartDiv>
              <Text
                variant="h4"
                bold="true"
                color={
                  inverse ? theme.colors.text.primary : theme.colors.text.white
                }
              >
                {name}
              </Text>
              <Spacer />
              <Text
                variant="label"
                fontFamily={theme.fontFamily.ssp}
                color={
                  inverse ? theme.colors.text.primary : theme.colors.text.white
                }
              >
                {position}
              </Text>
            </FlexStartDiv>
          )}
        </FlexStartDiv>

        {social && isDesktop && (
          <FlexStartDiv dir="row" style={{ justifyContent: "flex-end" }}>
            <a href={twitterUrl} target="_blank" rel="noreferrer">
              <img
                src={twitter}
                alt={twitter}
                width={isMediumDesktop ? "30px" : "25px"}
              />
            </a>
            <Spacer position="left" size="medium" />
            <a href={linkedInUrl} target="_blank" rel="noreferrer">
              <img
                src={linkedin}
                alt={linkedin}
                width={isMediumDesktop ? "30px" : "25px"}
              />
            </a>
          </FlexStartDiv>
        )}
      </FlexStartDiv>

      {!isDesktop && (
        <div>
          {social && (
            <FlexStartDiv
              dir="row"
              style={{
                justifyContent: "flex-end",
                position: "relative",
                top: "-30px",
                right: "-10px",
              }}
            >
              <a href={twitterUrl} target="_blank" rel="noreferrer">
                <img src={twitter} alt={twitter} width="25px" />
              </a>
              <Spacer position="left" size="medium" />
              <a href={linkedInUrl} target="_blank" rel="noreferrer">
                <img src={linkedin} alt={linkedin} width="25px" />
              </a>
            </FlexStartDiv>
          )}
          <Spacer size="xLarge" />
          <FlexCenterDiv>
            <Text
              variant="h5"
              bold="true"
              color={
                inverse ? theme.colors.text.primary : theme.colors.text.white
              }
            >
              {name}
            </Text>
            <Spacer />
            <Text
              fontFamily={theme.fontFamily.ssp}
              color={
                inverse ? theme.colors.text.primary : theme.colors.text.white
              }
            >
              {position}
            </Text>
          </FlexCenterDiv>
        </div>
      )}

      <Spacer size="xLarge" />

      <FlexStartDiv>
        <Text
          variant="button"
          fontFamily={theme.fontFamily.ssp}
          color={
            inverse
              ? isDesktop
                ? theme.colors.text.secondary
                : theme.colors.text.primary
              : theme.colors.text.white
          }
          style={{ lineHeight: "1.5" }}
        >
          {description}
        </Text>
      </FlexStartDiv>
    </PaddedDiv>
  )
}

export default BoxTeam
