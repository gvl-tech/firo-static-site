import React from "react"
import arrow from "../../assets/footer/arrow-button.svg"
import facebook from "../../assets/footer/facebook.svg"
import instagram from "../../assets/footer/instagram.svg"
import twitter from "../../assets/footer/twitter.svg"
import reddit from "../../assets/footer/reddit.svg"
import youtube from "../../assets/footer/youtube.svg"
import discord from "../../assets/footer/discord.svg"
import telegram from "../../assets/footer/telegram.svg"

import { Link } from "gatsby"
import { useMediaQuery } from "react-responsive"
import { useTheme } from "styled-components"
import { BubbleDiv } from "../../components/buttons/bubble-text.component"
import { Button } from "../../components/buttons/cta-button.component"
import { FlexCenterDiv } from "../../components/utilities/flex-center-div.component"
import { FlexSpaceBetweenDiv } from "../../components/utilities/flex-space-between-div.component"
import { FlexStartDiv } from "../../components/utilities/flex-start-div.component"
import { GridDiv } from "../../components/utilities/grid-div.component"
import { PaddedDiv } from "../../components/utilities/padded-div.component"
import { Spacer } from "../../components/utilities/spacer.component"
import { Text } from "../../components/utilities/text.component"

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
            <a
              href="https://github.com/firoorg/firo"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Text
                color={theme.colors.text.white}
                fontFamily={theme.fontFamily.ssp}
              >
                GitHub
              </Text>
            </a>
            <Spacer />
            <a
              href="https://sourceforge.net/projects/firoorg/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Text
                color={theme.colors.text.white}
                fontFamily={theme.fontFamily.ssp}
              >
                SourceForge
              </Text>
            </a>
            <Spacer />
            <Link to="/branding" style={{ textDecoration: "none" }}>
              <Text
                color={theme.colors.text.white}
                fontFamily={theme.fontFamily.ssp}
              >
                Branding
              </Text>
            </Link>
            <Spacer />

            <Link
              to="/blog/2018-07-15-firo-vulnerability-bounty-program/"
              style={{ textDecoration: "none" }}
            >
              <Text
                color={theme.colors.text.white}
                fontFamily={theme.fontFamily.ssp}
              >
                Vulnerability Program
              </Text>
            </Link>

            <Spacer />

            <a
              href="https://explorer.firo.org/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Text
                color={theme.colors.text.white}
                fontFamily={theme.fontFamily.ssp}
              >
                Explorer
              </Text>
            </a>
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
            <Link to="/guides" style={{ textDecoration: "none" }}>
              <Text
                color={theme.colors.text.white}
                fontFamily={theme.fontFamily.ssp}
              >
                Guides
              </Text>
            </Link>
            <Spacer />

            <a
              href="https://opencollective.com/firo"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Text
                color={theme.colors.text.white}
                fontFamily={theme.fontFamily.ssp}
              >
                Open Collective
              </Text>
            </a>
            <Spacer />
            <Link to="/privacy-policy" style={{ textDecoration: "none" }}>
              <Text
                color={theme.colors.text.white}
                fontFamily={theme.fontFamily.ssp}
              >
                Privacy Policy
              </Text>
            </Link>
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
              Newsletter
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
              y="repeat(6, 1fr)"
              style={{ gap: `${theme.space[2]}px`, alignSelf: "center" }}
            >
              <FlexCenterDiv>
                <a
                  href="https://discord.gg/TGZPRbRT3Y"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={discord} alt={discord} />
                </a>
              </FlexCenterDiv>
              <FlexCenterDiv>
                <a href="https://t.me/firoorg" target="_blank" rel="noreferrer">
                  <img src={telegram} alt={telegram} />
                </a>
              </FlexCenterDiv>

              <FlexCenterDiv>
                <a
                  href="https://twitter.com/firoorg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitter} alt={twitter} />
                </a>
              </FlexCenterDiv>
              <FlexCenterDiv>
                <a
                  href="https://www.facebook.com/firoorg/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={facebook} alt={facebook} />
                </a>
              </FlexCenterDiv>

              <FlexCenterDiv>
                <a
                  href="https://www.youtube.com/c/firoorg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={youtube} alt={youtube} />
                </a>
              </FlexCenterDiv>
              <FlexCenterDiv>
                <a
                  href="https://www.reddit.com/r/FiroProject/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={reddit} alt={reddit} />
                </a>
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
                  <a
                    href="https://github.com/firoorg/firo"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      variant="label"
                      color={theme.colors.text.white}
                      fontFamily={theme.fontFamily.ssp}
                    >
                      GitHub
                    </Text>
                  </a>
                </div>
                <div>
                  <a
                    href="https://sourceforge.net/projects/firoorg/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      variant="label"
                      color={theme.colors.text.white}
                      fontFamily={theme.fontFamily.ssp}
                      style={{ cursor: "pointer" }}
                    >
                      SourceForge
                    </Text>
                  </a>
                </div>
                <div>
                  <Link to="/branding" style={{ textDecoration: "none" }}>
                    <Text
                      variant="label"
                      color={theme.colors.text.white}
                      fontFamily={theme.fontFamily.ssp}
                    >
                      Branding
                    </Text>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/blog/2018-07-15-firo-vulnerability-bounty-program/"
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      variant="label"
                      color={theme.colors.text.white}
                      fontFamily={theme.fontFamily.ssp}
                    >
                      Vulnerability Program
                    </Text>
                  </Link>
                </div>

                <div>
                  <a
                    href="https://explorer.firo.org/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      variant="label"
                      color={theme.colors.text.white}
                      fontFamily={theme.fontFamily.ssp}
                    >
                      Explorer
                    </Text>
                  </a>
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
                  <Link to="/guides" style={{ textDecoration: "none" }}>
                    <Text
                      variant="label"
                      color={theme.colors.text.white}
                      fontFamily={theme.fontFamily.ssp}
                    >
                      Guides
                    </Text>
                  </Link>
                </div>

                <div>
                  <a
                    href="https://opencollective.com/firo"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      variant="label"
                      color={theme.colors.text.white}
                      fontFamily={theme.fontFamily.ssp}
                    >
                      Open Collective
                    </Text>
                  </a>
                </div>
                <div>
                  <Link to="/privacy-policy" style={{ textDecoration: "none" }}>
                    <Text
                      variant="label"
                      color={theme.colors.text.white}
                      fontFamily={theme.fontFamily.ssp}
                    >
                      Privacy Policy
                    </Text>
                  </Link>
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
                  Newsletter
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
                <FlexStartDiv dir="row" style={{ alignItems: "center" }}>
                  <a
                    href="https://discord.gg/TGZPRbRT3Y"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={discord} alt={discord} />
                  </a>
                  <Spacer size="xLarge" position="right" />
                  <a
                    href="https://t.me/firoorg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={telegram} alt={telegram} />
                  </a>
                  <Spacer size="xLarge" position="right" />
                  <a
                    href="https://twitter.com/firoorg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={twitter} alt={twitter} />
                  </a>
                  <Spacer size="xLarge" position="right" />

                  <a
                    href="https://www.facebook.com/firoorg/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={facebook} alt={facebook} />
                  </a>
                  <Spacer size="xLarge" position="right" />

                  <a
                    href="https://www.youtube.com/c/firoorg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={youtube} alt={youtube} />
                  </a>
                  <Spacer size="xLarge" position="right" />
                  <a
                    href="https://www.reddit.com/r/FiroProject/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={reddit} alt={reddit} />
                  </a>
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
