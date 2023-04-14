import React from "react"
import arrow from "../../assets/footer/arrow-button.svg"
import twitter from "../../assets/footer/twitter.svg"
import facebook from "../../assets/footer/facebook.svg"
import instagram from "../../assets/footer/instagram.svg"
import youtube from "../../assets/footer/youtube.svg"
import weibo from "../../assets/footer/weibo.svg"
import language from "../../assets/footer/language.svg"

import { useTheme } from "styled-components"
import { useMediaQuery } from "react-responsive"
import { AiOutlineDown } from "react-icons/ai"
import { Text } from "../../components/utilities/text.component"
import { PaddedDiv } from "../../components/utilities/padded-div.component"
import { FlexStartDiv } from "../../components/utilities/flex-start-div.component"
import { FlexSpaceBetweenDiv } from "../../components/utilities/flex-space-between-div.component"
import { Spacer } from "../../components/utilities/spacer.component"
import { BubbleDiv } from "../../components/buttons/bubble-text.component"
import { GridDiv } from "../../components/utilities/grid-div.component"
import { FlexCenterDiv } from "../../components/utilities/flex-center-div.component"
import { Button } from "../../components/buttons/cta-button.component"

const Footer = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })

  return (
    <FlexStartDiv bg={theme.colors.brand.primary}>
      {/* Mobile */}
      {!isDesktop && (
        <PaddedDiv y="6" x="4">
          {/* Resources Section (Mobile) */}
          <FlexStartDiv>
            <Text
              variant="h5"
              bold="true"
              color={theme.colors.text.white}
              fontFamily={theme.fontFamily.s}
            >
              Resources
            </Text>
            <Spacer />
            <Text
              color={theme.colors.text.white}
              fontFamily={theme.fontFamily.ssp}
            >
              GitHub
            </Text>
            <Spacer />

            <Text
              color={theme.colors.text.white}
              fontFamily={theme.fontFamily.ssp}
            >
              SourceForge
            </Text>
            <Spacer />

            <Text
              color={theme.colors.text.white}
              fontFamily={theme.fontFamily.ssp}
            >
              Branding
            </Text>
            <Spacer />

            <Text
              color={theme.colors.text.white}
              fontFamily={theme.fontFamily.ssp}
            >
              Vulnerability Program
            </Text>
            <Spacer />

            <Text
              color={theme.colors.text.white}
              fontFamily={theme.fontFamily.ssp}
            >
              Be a Bounty Hunter
            </Text>
            <Spacer />

            <Text
              color={theme.colors.text.white}
              fontFamily={theme.fontFamily.ssp}
            >
              Explorer
            </Text>
          </FlexStartDiv>

          <Spacer size="xxLarge" />

          {/* Website Section (Mobile) */}
          <FlexStartDiv>
            <Text
              variant="h5"
              bold="true"
              color={theme.colors.text.white}
              fontFamily={theme.fontFamily.s}
            >
              Website
            </Text>
            <Spacer />
            <Text
              color={theme.colors.text.white}
              fontFamily={theme.fontFamily.ssp}
            >
              Guides
            </Text>
            <Spacer />
            <Text
              color={theme.colors.text.white}
              fontFamily={theme.fontFamily.ssp}
            >
              Careers
            </Text>
            <Spacer />
            <Text
              color={theme.colors.text.white}
              fontFamily={theme.fontFamily.ssp}
            >
              Open Collective
            </Text>
            <Spacer />
            <Text
              color={theme.colors.text.white}
              fontFamily={theme.fontFamily.ssp}
            >
              Private Policy
            </Text>
            <Spacer />
            <Text
              color={theme.colors.text.white}
              fontFamily={theme.fontFamily.ssp}
            >
              Terms of Service
            </Text>
          </FlexStartDiv>

          <Spacer size="xxLarge" />

          {/* News Letter Section (Mobile) */}
          <div>
            <Text
              variant="h5"
              bold="true"
              color={theme.colors.text.white}
              fontFamily={theme.fontFamily.s}
            >
              News Letter
            </Text>
            <Spacer />

            <BubbleDiv
              color={theme.colors.text.secondary}
              bg={theme.colors.bg.white}
              padding={`${theme.space[2]}px ${theme.space[2]}px ${theme.space[2]}px ${theme.space[4]}px`}
            >
              <FlexSpaceBetweenDiv width="100" style={{ alignItems: "center" }}>
                <input
                  type="email"
                  placeholder="Email Address"
                  id="email"
                  style={{
                    width: "80%",
                    fontSize: `${theme.fontSizes.button}px`,
                    border: "none",
                    padding: `${theme.space[2]}px`,
                    outline: "none",
                  }}
                />
                <img src={arrow} alt={arrow} />
              </FlexSpaceBetweenDiv>
            </BubbleDiv>
          </div>

          <Spacer size="xxLarge" />

          {/* Social Section (Mobile) */}
          <div>
            <Text
              variant="h5"
              bold="true"
              color={theme.colors.text.white}
              fontFamily={theme.fontFamily.s}
            >
              Socials
            </Text>
            <Spacer />
            <GridDiv
              y="repeat(5, 1fr)"
              style={{ gap: `${theme.space[2]}px`, alignSelf: "center" }}
            >
              <FlexCenterDiv>
                <img src={twitter} alt={twitter} />
              </FlexCenterDiv>
              <FlexCenterDiv>
                <img src={facebook} alt={facebook} />
              </FlexCenterDiv>
              <FlexCenterDiv>
                <img src={instagram} alt={instagram} />
              </FlexCenterDiv>
              <FlexCenterDiv>
                <img src={youtube} alt={youtube} />
              </FlexCenterDiv>
              <FlexCenterDiv>
                <img src={weibo} alt={weibo} />
              </FlexCenterDiv>
            </GridDiv>
          </div>
        </PaddedDiv>
      )}

      {/* Desktop */}
      {isDesktop && (
        <PaddedDiv style={{ padding: "5%" }}>
          <GridDiv y="0.8fr 0.8fr 1.2fr">
            {/* Resources Section (Desktop) */}
            <FlexStartDiv>
              <Text
                variant="h5"
                bold="true"
                color={theme.colors.text.white}
                fontFamily={theme.fontFamily.s}
              >
                Resources
              </Text>
              <Spacer size="xLarge" />
              <FlexStartDiv style={{ gap: `${theme.space[3]}px` }}>
                <div>
                  <Text
                    variant="label"
                    color={theme.colors.text.white}
                    fontFamily={theme.fontFamily.ssp}
                    style={{ cursor: "pointer" }}
                  >
                    GitHub
                  </Text>
                </div>
                <div>
                  <Text
                    variant="label"
                    color={theme.colors.text.white}
                    fontFamily={theme.fontFamily.ssp}
                    style={{ cursor: "pointer" }}
                  >
                    SourceForge
                  </Text>
                </div>
                <div>
                  <Text
                    variant="label"
                    color={theme.colors.text.white}
                    fontFamily={theme.fontFamily.ssp}
                    style={{ cursor: "pointer" }}
                  >
                    Branding
                  </Text>
                </div>
                <div>
                  <Text
                    variant="label"
                    color={theme.colors.text.white}
                    fontFamily={theme.fontFamily.ssp}
                    style={{ cursor: "pointer" }}
                  >
                    Vulnerability Program
                  </Text>
                </div>

                <div>
                  <Text
                    variant="label"
                    color={theme.colors.text.white}
                    fontFamily={theme.fontFamily.ssp}
                    style={{ cursor: "pointer" }}
                  >
                    Be a Bounty Hunter
                  </Text>
                </div>
                <div>
                  <Text
                    variant="label"
                    color={theme.colors.text.white}
                    fontFamily={theme.fontFamily.ssp}
                    style={{ cursor: "pointer" }}
                  >
                    Explorer
                  </Text>
                </div>
              </FlexStartDiv>
            </FlexStartDiv>

            {/* Website Section (Desktop) */}

            <FlexStartDiv>
              <Text
                variant="h5"
                bold="true"
                color={theme.colors.text.white}
                fontFamily={theme.fontFamily.s}
              >
                Website
              </Text>
              <Spacer size="xLarge" />
              <FlexStartDiv style={{ gap: `${theme.space[3]}px` }}>
                <div>
                  <Text
                    variant="label"
                    color={theme.colors.text.white}
                    fontFamily={theme.fontFamily.ssp}
                    style={{ cursor: "pointer" }}
                  >
                    Guides
                  </Text>
                </div>
                <div>
                  <Text
                    variant="label"
                    color={theme.colors.text.white}
                    fontFamily={theme.fontFamily.ssp}
                    style={{ cursor: "pointer" }}
                  >
                    Careers
                  </Text>
                </div>
                <div>
                  <Text
                    variant="label"
                    color={theme.colors.text.white}
                    fontFamily={theme.fontFamily.ssp}
                    style={{ cursor: "pointer" }}
                  >
                    Open Collective
                  </Text>
                </div>
                <div>
                  <Text
                    variant="label"
                    color={theme.colors.text.white}
                    fontFamily={theme.fontFamily.ssp}
                    style={{ cursor: "pointer" }}
                  >
                    Private Policy
                  </Text>
                </div>
                <div>
                  <Text
                    variant="label"
                    color={theme.colors.text.white}
                    fontFamily={theme.fontFamily.ssp}
                    style={{ cursor: "pointer" }}
                  >
                    Terms of Service
                  </Text>
                </div>
              </FlexStartDiv>
            </FlexStartDiv>

            {/* News Letter Section (Desktop) */}

            <FlexSpaceBetweenDiv dir="column">
              <div>
                <Text
                  variant="label"
                  bold="true"
                  color={theme.colors.text.white}
                  fontFamily={theme.fontFamily.s}
                >
                  News Letter
                </Text>
                <Spacer />

                <BubbleDiv
                  color={theme.colors.text.secondary}
                  bg={theme.colors.bg.white}
                  padding={`${theme.space[2]}px ${theme.space[2]}px ${theme.space[2]}px ${theme.space[4]}px`}
                >
                  <FlexSpaceBetweenDiv
                    width="100"
                    style={{ alignItems: "center" }}
                  >
                    <input
                      type="email"
                      placeholder="Email Address"
                      id="email"
                      style={{
                        width: "80%",
                        fontSize: `${theme.fontSizes.button}px`,
                        border: "none",
                        padding: `${theme.space[2]}px`,
                        outline: "none",
                      }}
                    />

                    <Button
                      inverse="true"
                      style={{ fontWeight: `${theme.fontWeights.medium}` }}
                    >
                      Subscribe
                    </Button>
                  </FlexSpaceBetweenDiv>
                </BubbleDiv>
              </div>

              {/* Social Section (Desktop) */}

              <div>
                <Text
                  variant="label"
                  bold="true"
                  color={theme.colors.text.white}
                  fontFamily={theme.fontFamily.s}
                >
                  Socials
                </Text>
                <Spacer />
                <FlexStartDiv dir="row">
                  <img
                    src={twitter}
                    alt={twitter}
                    style={{ cursor: "pointer" }}
                  />
                  <Spacer size="xLarge" position="right" />
                  <img
                    src={facebook}
                    alt={facebook}
                    style={{ cursor: "pointer" }}
                  />
                  <Spacer size="xLarge" position="right" />
                  <img
                    src={instagram}
                    alt={instagram}
                    style={{ cursor: "pointer" }}
                  />
                  <Spacer size="xLarge" position="right" />
                  <img
                    src={youtube}
                    alt={youtube}
                    style={{ cursor: "pointer" }}
                  />
                  <Spacer size="xLarge" position="right" />
                  <img src={weibo} alt={weibo} style={{ cursor: "pointer" }} />
                </FlexStartDiv>
              </div>
            </FlexSpaceBetweenDiv>
          </GridDiv>
        </PaddedDiv>
      )}
    </FlexStartDiv>
  )
}

export default Footer
