import React from "react"

import windowsRed from "../../assets/download/windowsRed.svg"
import windowsWhite from "../../assets/download/windowsWhite.svg"
import amazonMusic from "../../assets/home4/amazon-music.svg"
import appStore from "../../assets/home4/app-store-red.svg"
import appStoreWhite from "../../assets/home4/app-store-white.svg"
import apple from "../../assets/home4/apple.svg"
import appleWhite from "../../assets/home4/appleWhite.svg"
import bscNews from "../../assets/home4/bsc-news.svg"
import media1 from "../../assets/home4/featured-media-1.svg"
import media2 from "../../assets/home4/featured-media-2.svg"
import media3 from "../../assets/home4/featured-media-3.svg"
import firoLogo from "../../assets/home4/firo-logo.svg"
import nasdaq from "../../assets/home4/nasdaq.svg"
import phones from "../../assets/home4/phones.svg"
import playStoreWhite from "../../assets/home4/play-store-white.svg"
import playStore from "../../assets/home4/play-store.svg"
import redBGDesktop from "../../assets/home4/red-bg-desktop.svg"
import redBG from "../../assets/home4/red-bg.svg"

import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useMediaQuery } from "react-responsive"
import { useTheme } from "styled-components"
import { Button } from "../../components/buttons/cta-button.component"
import { FlexCenterDiv } from "../../components/utilities/flex-center-div.component"
import { FlexDiv } from "../../components/utilities/flex-div.component"
import { FlexSpaceBetweenDiv } from "../../components/utilities/flex-space-between-div.component"
import { FlexEvenlyDiv } from "../../components/utilities/flex-space-evenly.component"
import { FlexStartDiv } from "../../components/utilities/flex-start-div.component"
import { GridDiv } from "../../components/utilities/grid-div.component"
import { PaddedDiv } from "../../components/utilities/padded-div.component.js"
import { Spacer } from "../../components/utilities/spacer.component"
import { Text } from "../../components/utilities/text.component"
import BoxHome4 from "../components/Box/BoxHome4"

const Home4 = () => {
  const theme = useTheme()
  const isSmallMobile = useMediaQuery({ query: "(max-width: 400px)" })
  const isMediumDesktop = useMediaQuery({ query: "(min-width: 1440px)" })
  const isBigDesktop = useMediaQuery({ query: "(min-width: 1824px)" })
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  })
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blogs/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            id
            frontmatter {
              date
              slug
              title
              author
              img {
                childImageSharp {
                  gatsbyImageData(width: 800)
                }
              }
            }
          }
        }
      }
    }
  `)
  let featuredImg1 = getImage(
    data.allMarkdownRemark.edges[0].node.frontmatter.img?.childImageSharp
      ?.gatsbyImageData
  )
  let featuredImg2 = getImage(
    data.allMarkdownRemark.edges[1].node.frontmatter.img?.childImageSharp
      ?.gatsbyImageData
  )

  console.log(data)
  return (
    <div>
      <img
        src={isDesktop ? redBGDesktop : redBG}
        alt={isDesktop ? redBGDesktop : redBG}
        width="100%"
        style={{ position: "absolute", zIndex: -1 }}
      />
      {/* Mobile */}
      {!isDesktop && (
        <FlexCenterDiv x="3" y="3">
          <FlexDiv dir="row">
            <img src={firoLogo} alt={firoLogo} />
            <Spacer position="right" />
            <Text variant="h5" bold="true" color={theme.colors.text.white}>
              Firo Wallet
            </Text>
          </FlexDiv>
          <Spacer />
          <Text variant="h3" bold="true" color={theme.colors.text.white}>
            Download the Firo wallet today.
          </Text>
          <img
            src={phones}
            alt={phones}
            width={isSmallMobile ? "300px" : "400px"}
          />

          {/* First Download Button */}
          <Button
            style={{
              border: `4px solid ${theme.colors.brand.primary}`,
              padding: `${theme.space[0]}`,
              borderRadius: `${theme.borderSizes[3]}px`,
            }}
            onClick={() =>
              window.open(
                "https://apps.apple.com/us/app/campfire-firo-wallet/id1613267898",
                "_blank",
                "noreferrer"
              )
            }
          >
            <FlexDiv dir="row">
              <img src={appStore} alt={appStore} width={30} />
              <Spacer position="right" />
              <Text variant="h5" bold="true" color={theme.colors.brand.primary}>
                Download
              </Text>
            </FlexDiv>
          </Button>
          <Spacer size="xLarge" />

          {/* Second Download Button */}
          <Button
            style={{
              border: `4px solid ${theme.colors.brand.primary}`,
              padding: `${theme.space[0]}`,
              borderRadius: `${theme.borderSizes[3]}px`,
            }}
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.cypherstack.campfire",
                "_blank",
                "noreferrer"
              )
            }
          >
            <FlexDiv dir="row">
              <img src={playStore} alt={playStore} />
              <Spacer position="right" />
              <Text variant="h5" bold="true" color={theme.colors.brand.primary}>
                Download
              </Text>
            </FlexDiv>
          </Button>
          <Spacer size="xLarge" />

          {/* Third Download Button */}
          <Button
            style={{
              border: `4px solid ${theme.colors.brand.primary}`,
              padding: `${theme.space[0]}`,
              borderRadius: `${theme.borderSizes[3]}px`,
            }}
            onClick={() =>
              window.open(
                "https://github.com/firoorg/firo-client/releases/download/v3.0.1/Firo-Client-3.0.1.exe"
              )
            }
          >
            <FlexDiv dir="row">
              <img src={windowsRed} alt={windowsRed} width={25} />
              <Spacer position="right" />
              <Text variant="h5" bold="true" color={theme.colors.brand.primary}>
                Download
              </Text>
            </FlexDiv>
          </Button>
          <Spacer size="xLarge" />

          {/* Fourth Download Button */}
          <Button
            style={{
              border: `4px solid ${theme.colors.brand.primary}`,
              padding: `${theme.space[0]}`,
              borderRadius: `${theme.borderSizes[3]}px`,
            }}
            onClick={() =>
              window.open(
                "https://github.com/firoorg/firo-client/releases/download/v3.0.1/Firo-Client-3.0.1.dmg"
              )
            }
          >
            <FlexDiv dir="row">
              <img src={apple} alt={apple} />
              <Spacer position="right" />
              <Text variant="h5" bold="true" color={theme.colors.brand.primary}>
                Download
              </Text>
            </FlexDiv>
          </Button>
        </FlexCenterDiv>
      )}

      {/* Desktop */}
      {isDesktop && (
        <FlexEvenlyDiv dir="row" padding={theme.space[3]}>
          <img
            src={phones}
            alt={phones}
            width={isTablet ? "450px" : isBigDesktop ? "1500px" : "900px"}
          />

          <FlexDiv style={{ alignItems: "start" }} x="0">
            <Spacer
              size={
                isTablet
                  ? "xLarge"
                  : isBigDesktop
                  ? "xxxxLarge"
                  : isMediumDesktop
                  ? "xxxLarge"
                  : "xxLarge"
              }
            />
            <FlexDiv dir="row">
              <img src={firoLogo} alt={firoLogo} />
              <Spacer position="right" />
              <Text
                variant={isBigDesktop ? "h2" : "h5"}
                bold="true"
                color={theme.colors.text.white}
              >
                Firo Wallet
              </Text>
            </FlexDiv>
            <Spacer />
            <div style={{ width: "90%" }}>
              <Text
                variant={isTablet ? "h4" : isBigDesktop ? "h1" : "h3"}
                bold="true"
                color={theme.colors.text.white}
              >
                Download the Firo wallet today.
              </Text>
            </div>
            <Spacer />

            {/* First Row */}
            <FlexDiv dir="row" x="0" y="0">
              <Button
                inverse={true}
                style={{
                  border: `4px solid ${theme.colors.text.white}`,
                  padding: `${theme.space[0]} ${
                    theme.space[isTablet ? 1 : 4]
                  }px`,
                  borderRadius: `${theme.borderSizes[3]}px`,
                }}
                onClick={() =>
                  window.open(
                    "https://apps.apple.com/us/app/campfire-firo-wallet/id1613267898",
                    "_blank",
                    "noreferrer"
                  )
                }
              >
                <FlexDiv dir="row">
                  <img
                    src={appStoreWhite}
                    alt={appStoreWhite}
                    width={isTablet ? "18px" : isBigDesktop ? "30px" : "25px"}
                  />
                  <Spacer position="right" />
                  <Text
                    variant={isTablet ? "caption" : "h5"}
                    bold="true"
                    color={theme.colors.text.white}
                  >
                    Download
                  </Text>
                </FlexDiv>
              </Button>
              <Spacer position="right" size={isTablet ? "medium" : "xLarge"} />
              <Button
                inverse={true}
                style={{
                  border: `4px solid ${theme.colors.text.white}`,
                  padding: `${theme.space[0]} ${
                    theme.space[isTablet ? 1 : 4]
                  }px`,
                  borderRadius: `${theme.borderSizes[3]}px`,
                }}
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.cypherstack.campfire",
                    "_blank",
                    "noreferrer"
                  )
                }
              >
                <FlexDiv dir="row">
                  <img
                    src={playStoreWhite}
                    alt={playStoreWhite}
                    width={isTablet ? "18px" : isBigDesktop ? "30px" : "25px"}
                  />
                  <Spacer position="right" />
                  <Text
                    variant={isTablet ? "caption" : "h5"}
                    bold="true"
                    color={theme.colors.text.white}
                  >
                    Download
                  </Text>
                </FlexDiv>
              </Button>
            </FlexDiv>

            <Spacer />
            {/* Second row */}
            <FlexDiv dir="row" x="0" y="0">
              <Button
                inverse={true}
                style={{
                  border: `4px solid ${theme.colors.text.white}`,
                  padding: `${theme.space[0]} ${
                    theme.space[isTablet ? 1 : 4]
                  }px`,
                  borderRadius: `${theme.borderSizes[3]}px`,
                }}
                onClick={() =>
                  window.open(
                    "https://github.com/firoorg/firo-client/releases/download/v3.0.1/Firo-Client-3.0.1.exe"
                  )
                }
              >
                <FlexDiv dir="row">
                  <img
                    src={windowsWhite}
                    alt={windowsWhite}
                    width={isTablet ? "18px" : isBigDesktop ? "30px" : "25px"}
                  />
                  <Spacer position="right" />
                  <Text
                    variant={isTablet ? "caption" : "h5"}
                    bold="true"
                    color={theme.colors.text.white}
                  >
                    Download
                  </Text>
                </FlexDiv>
              </Button>
              <Spacer position="right" size={isTablet ? "medium" : "xLarge"} />
              <Button
                inverse={true}
                style={{
                  border: `4px solid ${theme.colors.text.white}`,
                  padding: `${theme.space[0]} ${
                    theme.space[isTablet ? 1 : 4]
                  }px`,
                  borderRadius: `${theme.borderSizes[3]}px`,
                }}
                onClick={() =>
                  window.open(
                    "https://github.com/firoorg/firo-client/releases/download/v3.0.1/Firo-Client-3.0.1.dmg"
                  )
                }
              >
                <FlexDiv dir="row">
                  <img
                    src={appleWhite}
                    alt={appleWhite}
                    width={isTablet ? "18px" : isBigDesktop ? "30px" : "25px"}
                  />
                  <Spacer position="right" />
                  <Text
                    variant={isTablet ? "caption" : "h5"}
                    bold="true"
                    color={theme.colors.text.white}
                  >
                    Download
                  </Text>
                </FlexDiv>
              </Button>
            </FlexDiv>
          </FlexDiv>
        </FlexEvenlyDiv>
      )}

      <PaddedDiv style={{ padding: isDesktop ? "5%" : "20% 5%" }}>
        <Text variant="h4" bold="true">
          Latest News
        </Text>
        <Spacer size="xLarge" />
        <GridDiv
          x={!isDesktop && "1fr 1fr"}
          y={isDesktop && "repeat(auto-fit, minmax(200px, max-content))"}
          style={{ gap: `${theme.space[4]}px` }}
        >
          <FlexStartDiv>
            <Link
              to={`/blog${data.allMarkdownRemark.edges[0].node.frontmatter.slug}`}
              style={{ textDecoration: "none" }}
            >
              <GatsbyImage
                image={featuredImg1}
                style={{
                  borderRadius: `${theme.borderSizes[2]}px`,
                  alignSelf: "center",
                  width: "100%",
                }}
              />
              <Spacer />
              <Text variant="label" bold="true">
                {data.allMarkdownRemark.edges[0].node.frontmatter.title}
              </Text>
              <Spacer />
              <FlexSpaceBetweenDiv dir={isDesktop ? "column" : "row"}>
                <Text variant="caption" color={theme.colors.text.secondary}>
                  {data.allMarkdownRemark.edges[0].node.frontmatter.date} by{" "}
                  {data.allMarkdownRemark.edges[0].node.frontmatter.author}
                </Text>
                <Spacer />

                <Text variant="caption" color={theme.colors.text.secondary}>
                  Read More &gt;
                </Text>
              </FlexSpaceBetweenDiv>
            </Link>
          </FlexStartDiv>
          <FlexStartDiv>
            <Link
              to={`/blog${data.allMarkdownRemark.edges[1].node.frontmatter.slug}`}
              style={{ textDecoration: "none" }}
            >
              <GatsbyImage
                image={featuredImg2}
                style={{
                  borderRadius: `${theme.borderSizes[2]}px`,
                  alignSelf: "center",
                  width: "100%",
                }}
              />
              <Spacer />
              <Text variant="label" bold="true">
                {data.allMarkdownRemark.edges[1].node.frontmatter.title}
              </Text>
              <Spacer />
              <FlexSpaceBetweenDiv dir={isDesktop ? "column" : "row"}>
                <Text variant="caption" color={theme.colors.text.secondary}>
                  {data.allMarkdownRemark.edges[1].node.frontmatter.date} by{" "}
                  {data.allMarkdownRemark.edges[1].node.frontmatter.author}
                </Text>
                <Spacer />

                <Text variant="caption" color={theme.colors.text.secondary}>
                  Read More &gt;
                </Text>
              </FlexSpaceBetweenDiv>
            </Link>
          </FlexStartDiv>
        </GridDiv>
      </PaddedDiv>

      <PaddedDiv
        style={{
          backgroundColor: `${theme.colors.bg.grey}`,
          padding: isDesktop ? "5%" : "20% 5%",
        }}
      >
        <FlexStartDiv
          style={{ alignItems: `${isDesktop ? "center" : "normal"}` }}
        >
          <Text variant="h4" bold="true">
            Featured Media
          </Text>
        </FlexStartDiv>
        <Spacer size="xLarge" />

        <GridDiv
          x={!isDesktop && "1fr 1fr 1fr"}
          y={
            isDesktop && "fit-content(100%) fit-content(100%) fit-content(100%)"
          }
          style={{ gap: `${theme.space[4]}px` }}
        >
          <BoxHome4
            logo={nasdaq}
            thumbnail={media1}
            title="Thailand Uses Blockchain-Supported Electronic Voting System in Primaries"
            date="November 13, 2018"
            more="See"
            url="https://www.nasdaq.com/articles/privacy-coin-firo-in-midst-of-hash-war-with-51-attacker-2021-01-20"
          />
          <BoxHome4
            logo={amazonMusic}
            thumbnail={media2}
            title='"FINANCIAL PRIVACY" - Feat Reuben Yap (FIRO)- The BPSAA Podcast'
            date="April 20, 2021"
            more="See"
            url="https://music.amazon.com/podcasts/3e55883e-d051-42ae-af28-f3ffd303bacd/episodes/69c7f953-4898-41be-acb7-37f861ad9d41/bpsaa-crypto-podcast-financial-privacy---feat-reuben-yap-firo---the-bpsaa-podcast"
          />
          <BoxHome4
            logo={bscNews}
            thumbnail={media3}
            title="Binance Announces Its Support Fort the Firo (FIRO) Network Upgrade & Hard Fork"
            date="June 16, 2022"
            more="See"
            url="https://www.binance.com/en/support/announcement/binance-will-support-the-firo-firo-network-upgrade-hard-fork-6e98d3a9a51247eaa1dd2bdd49e66196"
          />
        </GridDiv>
      </PaddedDiv>
    </div>
  )
}

export default Home4
