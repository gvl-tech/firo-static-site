import React, { useState } from "react"
import logoDark from "../../assets/header/firo-logo-dark.svg"
import logoLight from "../../assets/header/firo-logo-light.svg"
import android from "../../assets/header/android.svg"
import apple from "../../assets/header/apple.svg"
import divider from "../../assets/header/divider.svg"
import dividerMobile from "../../assets/header/divider-mobile.svg"

import { useTheme } from "styled-components"
import { FaBars } from "react-icons/fa"
import { useMediaQuery } from "react-responsive"
import { Link } from "gatsby"
import { Button } from "../../components/buttons/cta-button.component"
import { FlexSpaceBetweenDiv } from "../../components/utilities/flex-space-between-div.component"
import { FlexCenterDiv } from "../../components/utilities/flex-center-div.component"
import { Spacer } from "../../components/utilities/spacer.component"
import { BoxDiv } from "../../components/utilities/box-container.component"
import { Text } from "../../components/utilities/text.component"
import { FlexStartDiv } from "../../components/utilities/flex-start-div.component"
import { FlexDiv } from "../../components/utilities/flex-div.component"

export const Header = ({ inverse, mobileInverse }) => {
  const theme = useTheme()
  const isBigDesktop = useMediaQuery({ query: "(min-width: 1824px)" })
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
  const isTablet = useMediaQuery({ query: "(width: 768px)" })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)

  return (
    <FlexSpaceBetweenDiv
      width="90"
      style={
        isDesktop
          ? {
              position: "absolute",
              top: theme.space[4],
              left: "5%",
              zIndex: 10,
            }
          : {
              position: "absolute",
              padding: ` ${theme.space[3]}px ${theme.space[3]}px`,
              zIndex: 10,
            }
      }
    >
      <Link to="/">
        <img
          width={isBigDesktop ? "200px" : "120px"}
          src={
            isDesktop
              ? inverse
                ? logoDark
                : logoLight
              : mobileInverse
              ? logoDark
              : logoLight
          }
          alt="firo-logo"
        />
      </Link>

      {!isDesktop && (
        <FlexCenterDiv dir="row">
          <Button
            y="2"
            inverse={mobileInverse ? false : true}
            onClick={() => {
              setIsModalOpen(!isModalOpen)
            }}
          >
            Get Firo
          </Button>
          {isModalOpen && (
            <FlexStartDiv
              dir="row-reverse"
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 11,
              }}
            >
              <BoxDiv
                bg={theme.colors.bg.white}
                x="3"
                y="3"
                style={{
                  position: "relative",
                  width: "fit-content",
                  height: "fit-content",
                  top: "80px",
                  right: "3%",
                  textAlign: "start",
                  gap: theme.space[2],
                }}
                onClick={e => e.stopPropagation()}
              >
                <Link
                  style={{
                    color: theme.colors.text.secondary,
                    textDecoration: "none",
                    fontFamily: theme.fontFamily.s,
                  }}
                  to="/get-firo"
                >
                  GET FIRO
                </Link>
                <Link
                  style={{
                    color: theme.colors.text.secondary,
                    textDecoration: "none",
                    fontFamily: theme.fontFamily.s,
                  }}
                  to="/download"
                >
                  DOWNLOAD A WALLET
                </Link>

                <img src={dividerMobile} alt={dividerMobile} />

                <FlexDiv dir="row" x="0" y="0">
                  <Text fontFamily={theme.fontFamily.s}>
                    Official Firo Wallet
                  </Text>
                  <Spacer position="right" />
                  <a
                    href="https://play.google.com/store/apps/details?id=com.cypherstack.campfire"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={android} alt={android} />
                  </a>
                  <Spacer position="right" />

                  <a
                    href="https://apps.apple.com/us/app/campfire-firo-wallet/id1613267898"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={apple} alt={apple} />
                  </a>
                </FlexDiv>
                <Text fontFamily={theme.fontFamily.s}>Other Wallets</Text>
              </BoxDiv>
            </FlexStartDiv>
          )}
          <Spacer position="left" size="large" />

          <FaBars
            style={{
              color: mobileInverse
                ? theme.colors.bg.white
                : theme.colors.brand.primary,
              fontSize: theme.sizes[2],
            }}
            onClick={() => {
              setIsBurgerOpen(!isBurgerOpen)
            }}
          />

          {isBurgerOpen && (
            <FlexStartDiv
              dir="row-reverse"
              onClick={() => setIsBurgerOpen(false)}
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 11,
              }}
            >
              <BoxDiv
                bg={theme.colors.bg.white}
                x="3"
                y="3"
                style={{
                  position: "relative",
                  width: "fit-content",
                  height: "fit-content",
                  top: "80px",
                  right: "3%",
                  textAlign: "start",
                  gap: theme.space[2],
                }}
                onClick={e => e.stopPropagation()}
              >
                <Link
                  activeStyle={{ color: theme.colors.brand.primary }}
                  style={{
                    color: theme.colors.text.secondary,
                    textDecoration: "none",
                    fontFamily: theme.fontFamily.s,
                    fontSize: theme.fontSizes.body,
                  }}
                  to="/about"
                >
                  About
                </Link>
                <Link
                  activeStyle={{ color: theme.colors.brand.primary }}
                  style={{
                    color: theme.colors.text.secondary,
                    textDecoration: "none",
                    fontFamily: theme.fontFamily.s,
                    fontSize: theme.fontSizes.body,
                  }}
                  to="/latest-updates"
                >
                  Latest Updates
                </Link>
                <Link
                  activeStyle={{ color: theme.colors.brand.primary }}
                  style={{
                    color: theme.colors.text.secondary,
                    textDecoration: "none",
                    fontFamily: theme.fontFamily.s,
                    fontSize: theme.fontSizes.body,
                  }}
                  to="/key-milestone"
                >
                  Key Milestone
                </Link>
                <Link
                  activeStyle={{ color: theme.colors.brand.primary }}
                  style={{
                    color: theme.colors.text.secondary,
                    textDecoration: "none",
                    fontFamily: theme.fontFamily.s,
                    fontSize: theme.fontSizes.body,
                  }}
                  to="/community"
                >
                  Community
                </Link>
                <Link
                  activeStyle={{ color: theme.colors.brand.primary }}
                  style={{
                    color: theme.colors.text.secondary,
                    textDecoration: "none",
                    fontFamily: theme.fontFamily.s,
                    fontSize: theme.fontSizes.body,
                  }}
                  to="/our-team"
                >
                  Our Team
                </Link>
                <Link
                  activeStyle={{ color: theme.colors.brand.primary }}
                  style={{
                    color: theme.colors.text.secondary,
                    textDecoration: "none",
                    fontFamily: theme.fontFamily.s,
                    fontSize: theme.fontSizes.body,
                  }}
                  to="/guides"
                >
                  Guides
                </Link>
                <Link
                  activeStyle={{ color: theme.colors.brand.primary }}
                  style={{
                    color: theme.colors.text.secondary,
                    textDecoration: "none",
                    fontFamily: theme.fontFamily.s,
                    fontSize: theme.fontSizes.body,
                  }}
                  to="/faq"
                >
                  FAQ
                </Link>
              </BoxDiv>
            </FlexStartDiv>
          )}
        </FlexCenterDiv>
      )}

      {isDesktop && (
        <FlexCenterDiv dir="row">
          <ul style={{ display: "flex", gap: "2em", listStyle: "none" }}>
            <li>
              <Link
                activeStyle={{ color: theme.colors.brand.primary }}
                style={{
                  color: inverse
                    ? theme.colors.text.white
                    : theme.colors.text.secondary,
                  textDecoration: "none",
                  fontFamily: theme.fontFamily.s,
                  fontSize: isTablet
                    ? theme.fontSizes.tab
                    : theme.fontSizes.body,
                }}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeStyle={{ color: theme.colors.brand.primary }}
                style={{
                  color: inverse
                    ? theme.colors.text.white
                    : theme.colors.text.secondary,
                  textDecoration: "none",
                  fontFamily: theme.fontFamily.s,
                  fontSize: isTablet
                    ? theme.fontSizes.tab
                    : theme.fontSizes.body,
                }}
                to="/latest-updates"
              >
                Latest Updates
              </Link>
            </li>
            <li>
              <Link
                activeStyle={{ color: theme.colors.brand.primary }}
                style={{
                  color: inverse
                    ? theme.colors.text.white
                    : theme.colors.text.secondary,
                  textDecoration: "none",
                  fontFamily: theme.fontFamily.s,
                  fontSize: isTablet
                    ? theme.fontSizes.tab
                    : theme.fontSizes.body,
                }}
                to="/key-milestone"
              >
                Key Milestone
              </Link>
            </li>
            <li>
              <Link
                activeStyle={{ color: theme.colors.brand.primary }}
                style={{
                  color: inverse
                    ? theme.colors.text.white
                    : theme.colors.text.secondary,
                  textDecoration: "none",
                  fontFamily: theme.fontFamily.s,
                  fontSize: isTablet
                    ? theme.fontSizes.tab
                    : theme.fontSizes.body,
                }}
                to="/community"
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                activeStyle={{ color: theme.colors.brand.primary }}
                style={{
                  color: inverse
                    ? theme.colors.text.white
                    : theme.colors.text.secondary,
                  textDecoration: "none",
                  fontFamily: theme.fontFamily.s,
                  fontSize: isTablet
                    ? theme.fontSizes.tab
                    : theme.fontSizes.body,
                }}
                to="/our-team"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                activeStyle={{ color: theme.colors.brand.primary }}
                style={{
                  color: inverse
                    ? theme.colors.text.white
                    : theme.colors.text.secondary,
                  textDecoration: "none",
                  fontFamily: theme.fontFamily.s,
                  fontSize: isTablet
                    ? theme.fontSizes.tab
                    : theme.fontSizes.body,
                }}
                to="/guides"
              >
                Guides
              </Link>
            </li>
            <li>
              <Link
                activeStyle={{ color: theme.colors.brand.primary }}
                style={{
                  color: inverse
                    ? theme.colors.text.white
                    : theme.colors.text.secondary,
                  textDecoration: "none",
                  fontFamily: theme.fontFamily.s,
                  fontSize: isTablet
                    ? theme.fontSizes.tab
                    : theme.fontSizes.body,
                }}
                to="/faq"
              >
                FAQ
              </Link>
            </li>
          </ul>
          <Spacer position="left" size="large" />
          <Button
            y="2"
            x="4"
            inverse={isDesktop ? (inverse ? false : true) : true}
            style={{
              fontSize: `${isTablet && theme.fontSizes.tab}px`,
              fontWeight: theme.fontWeights.medium,
            }}
            onClick={() => {
              setIsModalOpen(!isModalOpen)
            }}
          >
            Get Firo
          </Button>
          {isModalOpen && (
            <FlexStartDiv
              dir="row-reverse"
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 11,
              }}
            >
              <BoxDiv
                bg={theme.colors.bg.white}
                x="5"
                y="4"
                style={{
                  position: "relative",
                  width: "fit-content",
                  height: "fit-content",
                  top: "100px",
                  right: "5%",
                  textAlign: "start",
                  gap: theme.space[2],
                }}
                onClick={e => e.stopPropagation()}
              >
                <Link
                  style={{
                    color: theme.colors.text.secondary,
                    textDecoration: "none",
                    fontFamily: theme.fontFamily.s,
                  }}
                  to="/get-firo"
                >
                  GET FIRO
                </Link>
                <Link
                  style={{
                    color: theme.colors.text.secondary,
                    textDecoration: "none",
                    fontFamily: theme.fontFamily.s,
                  }}
                  to="/download"
                >
                  DOWNLOAD A WALLET
                </Link>

                <img src={divider} alt={divider} />

                <FlexDiv dir="row" x="0" y="0">
                  <Text fontFamily={theme.fontFamily.s}>
                    Official Firo Wallet
                  </Text>
                  <Spacer position="right" />
                  <a
                    href="https://play.google.com/store/apps/details?id=com.cypherstack.campfire"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={android} alt={android} />
                  </a>
                  <Spacer position="right" />
                  <a
                    href="https://apps.apple.com/us/app/campfire-firo-wallet/id1613267898"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={apple} alt={apple} />
                  </a>
                </FlexDiv>
                <Text fontFamily={theme.fontFamily.s}>Other Wallets</Text>
              </BoxDiv>
            </FlexStartDiv>
          )}
        </FlexCenterDiv>
      )}
    </FlexSpaceBetweenDiv>
  )
}
