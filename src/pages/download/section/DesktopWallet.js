import React from "react"
import backup from "../../../assets/download/backup.svg"
import verify from "../../../assets/download/verify.svg"
import guide from "../../../assets/download/guide.svg"

import { useTheme } from "styled-components"
import { useMediaQuery } from "react-responsive"
import { Text } from "../../../components/utilities/text.component"
import { PaddedDiv } from "../../../components/utilities/padded-div.component"
import { Spacer } from "../../../components/utilities/spacer.component"
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component"
import { FlexDiv } from "../../../components/utilities/flex-div.component"
import { GridDiv } from "../../../components/utilities/grid-div.component"
import BoxDesktopWallet from "../components/BoxDesktopWallet"

const DesktopWallet = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
  // const isMediumDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  // const isBigDesktop = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTablet = useMediaQuery({ query: "(width: 768px)" })

  return (
    <div>
      <PaddedDiv style={{ padding: "5%" }}>
        <FlexStartDiv style={{ alignItems: isDesktop ? "start" : "center" }}>
          <Text bold="true" variant="h4">
            Desktop Wallets
          </Text>
          <Spacer />
          <Text variant="caption">
            Want to spend your Firo? Here are some places you can do so! This is
            a non-exhaustive list of places that accept Firo! If you have a
            business that would like to be featured here, let us know!
          </Text>
        </FlexStartDiv>
        <Spacer size="xxLarge" />

        {/* Mobile */}
        {!isDesktop && (
          <div>
            <FlexDiv>
              <img src={backup} alt={backup} />
              <Spacer />
              <Text
                variant="label"
                fontFamily={theme.fontFamily.ssp}
                bold={true}
                style={{ width: "65%", textAlign: "center" }}
              >
                Back up your wallet prior to updating
              </Text>
            </FlexDiv>
            <Spacer size="xxLarge" />

            <FlexDiv>
              <img src={verify} alt={verify} />
              <Spacer />
              <div style={{ width: "65%", textAlign: "center" }}>
                <Text
                  variant="label"
                  bold="true"
                  fontFamily={theme.fontFamily.ssp}
                >
                  Verify hashes using{" "}
                </Text>
                <a
                  href="https://github.com/firoorg/firo/blob/master/reuben.asc"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Text
                    variant="label"
                    color={theme.colors.brand.primary}
                    bold="true"
                    fontFamily={theme.fontFamily.ssp}
                  >
                    this public key
                  </Text>
                </a>
              </div>
            </FlexDiv>
            <Spacer size="xxLarge" />

            <FlexDiv>
              <img src={guide} alt={guide} />
              <Spacer />
              <div style={{ width: "100%", textAlign: "center" }}>
                <Text
                  variant="label"
                  bold="true"
                  fontFamily={theme.fontFamily.ssp}
                >
                  Use this official{" "}
                </Text>
                <a
                  href="/guides/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Text
                    variant="label"
                    color={theme.colors.brand.primary}
                    bold="true"
                    fontFamily={theme.fontFamily.ssp}
                  >
                    wallet installation and usage guide
                  </Text>
                </a>
              </div>
            </FlexDiv>
          </div>
        )}

        {/* Desktop */}
        {isDesktop && (
          <GridDiv y="repeat(3, 1fr)" gap="5">
            <FlexDiv x="0" dir="row">
              <img src={backup} alt={backup} />
              <Spacer position="right" />
              <Text
                variant="label"
                fontFamily={theme.fontFamily.ssp}
                bold={true}
              >
                Back up your wallet prior to updating
              </Text>
            </FlexDiv>

            <FlexDiv x="0" dir="row">
              <img src={verify} alt={verify} />
              <Spacer position="right" />
              <div>
                <Text
                  variant="label"
                  bold="true"
                  fontFamily={theme.fontFamily.ssp}
                >
                  Verify hashes using{" "}
                </Text>
                <a
                  href="https://github.com/firoorg/firo/blob/master/reuben.asc"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Text
                    variant="label"
                    color={theme.colors.brand.primary}
                    bold="true"
                    fontFamily={theme.fontFamily.ssp}
                  >
                    this public key
                  </Text>
                </a>
              </div>
            </FlexDiv>

            <FlexDiv x="0" dir="row">
              <img src={guide} alt={guide} />
              <Spacer position="right" />
              <div>
                <Text
                  variant="label"
                  bold="true"
                  fontFamily={theme.fontFamily.ssp}
                >
                  Use this official{" "}
                </Text>
                <a
                  href="/guides/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Text
                    variant="label"
                    color={theme.colors.brand.primary}
                    bold="true"
                    fontFamily={theme.fontFamily.ssp}
                  >
                    wallet installation and usage guide
                  </Text>
                </a>
              </div>
            </FlexDiv>
          </GridDiv>
        )}

        <Spacer size="xLarge" />
        <GridDiv
          y={isTablet ? "auto" : isDesktop ? "repeat(3, 1fr)" : "auto"}
          gap="5"
        >
          <BoxDesktopWallet
            header="THE HIGH SECURITY OPTION"
            title="QT Wallet"
            version="v0.14.12.1"
            changelog={true}
            changelogUrl="https://github.com/firoorg/firo/releases/tag/v0.14.12.1"
            windowsUrl="https://github.com/firoorg/firo/releases/download/v0.14.12.1/firo-0.14.12.1-win64-setup.exe"
            windowsHashes="9296632824c3b6e4a9416ea6708648cfe480a6d5189088faee800c53bda42353"
            macUrl="https://github.com/firoorg/firo/releases/download/v0.14.12.1/firo-0.14.12.1-macos.dmg"
            macHashes="c6d25c8a4a6c5263e64a4f35a3f9bfc4d5a546ec8f3cd09ddaa5888d7f057b3d"
            linuxUrl="https://github.com/firoorg/firo/releases/download/v0.14.12.1/firo-0.14.12.1-linux64.tar.gz"
            linuxHashes="942f856d30a2d5948d222831482ba10c32314dadcb9f66d495b29db80de8eebc"
            githubUrl="https://github.com/firoorg/firo"
          />
          <BoxDesktopWallet
            header="THE USER FRIENDLY OPTION"
            title="Electron"
            version="3.0.1"
            changelog={true}
            changelogUrl="https://github.com/firoorg/firo-client/releases/latest"
            windowsUrl="https://github.com/firoorg/firo-client/releases/download/v3.0.1/Firo-Client-3.0.1.exe"
            windowsHashes="8bf4c55ee68c4ad871f2031d1f0401ba805582cca07e947f47c27a8afdabca00"
            macUrl="https://github.com/firoorg/firo-client/releases/download/v3.0.1/Firo-Client-3.0.1.dmg"
            macHashes="20819718fbc194c56dfa07186f94eac176fe1a0294479076d83c529ebf900c5f"
            linuxUrl="https://github.com/firoorg/firo-client/releases/download/v3.0.1/Firo-Client-3.0.1.AppImage"
            linuxHashes="76cc4cca7b8922a606a351b0343bcc440551dd341529e24611031fe3b0d73b6e"
            githubUrl="https://github.com/firoorg/firo-client"
          />
          <BoxDesktopWallet
            header="THE FAST, LIGHTWEIGHT OPTION"
            title="Electrum"
            version="4.1.5.2"
            changelog={true}
            changelogUrl="https://github.com/firoorg/electrum-firo/releases/latest"
            windowsUrl="https://github.com/firoorg/electrum-firo/releases/download/4.1.5.2/Firo-Electrum-4.1.5.2-setup-win64.exe"
            windowsHashes="bf33d4f0c02c30fd498812821fa0c23f4f9965d18ea446509eedf43e57dbc76e"
            macUrl="https://github.com/firoorg/electrum-firo/releases/download/4.1.5.2/Firo-Electrum-4.1.5.2-macosx.dmg"
            macHashes="dfac5ba20767e023282283fe98057cd0095071acbfe299ab7f1c7bf8797acca0"
            linuxUrl="https://github.com/firoorg/electrum-firo/releases/download/4.1.5.2/Firo-Electrum-4.1.5.2-x86_64.AppImage"
            linuxHashes="e2ec9b882559abc6132658bc8e047ac9c0006450128bed0da9b542f8403e7520"
            githubUrl="https://github.com/firoorg/electrum-firo"
          />
        </GridDiv>
      </PaddedDiv>
    </div>
  )
}

export default DesktopWallet
