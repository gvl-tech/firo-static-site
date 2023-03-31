import React from "react"
import { useTheme } from "styled-components"
import { useMediaQuery } from "react-responsive"
import { Text } from "../../../components/utilities/text.component"
import { PaddedDiv } from "../../../components/utilities/padded-div.component"
import { Spacer } from "../../../components/utilities/spacer.component"
import { FlexCenterDiv } from "../../../components/utilities/flex-center-div.component"
import { VerticalTimeline } from "react-vertical-timeline-component"
import "./VerticalTimeline.css"
import BoxTimeline from "../components/BoxTimeline"

const Timeline = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })

  return (
    <div>
      <PaddedDiv
        y="6"
        x="4"
        bg={isDesktop ? theme.colors.bg.grey : theme.colors.bg.white}
      >
        <FlexCenterDiv>
          <div>
            <Text variant={isDesktop ? "h1" : "h3"} bold="true">
              Road
            </Text>
            <Text
              variant={isDesktop ? "h1" : "h3"}
              color={theme.colors.brand.primary}
              bold="true"
            >
              map
            </Text>
          </div>
        </FlexCenterDiv>
        <Spacer size="xxLarge" />
        <PaddedDiv y="5" bg={theme.colors.bg.white} br="2">
          <VerticalTimeline
            lineColor={theme.colors.text.secondary}
            className="vertical-timeline-custom-line"
          >
            {/* COMPLETE */}
            <BoxTimeline
              isComplete={true}
              status="COMPLETED"
              title="Deterministic Masternodes"
            />
            <BoxTimeline
              isComplete={true}
              status="COMPLETED"
              title="Long Lived Masternode Quorums"
            />
            <BoxTimeline isComplete={true} status="COMPLETED" title="Rebrand" />
            <BoxTimeline
              isComplete={true}
              status="COMPLETED"
              title="Lelantus Activation"
              description="Lelantus is our next generation privacy protocol that offers the highest levels of practical privacy without trusted setup and only relying on solid cryptographic assumptions. Lelantus supports anonymity sets that are several magnitudes larger than other privacy systems that do not have trusted setup."
            />
            <BoxTimeline
              isComplete={true}
              status="COMPLETED"
              title="Chainlocks"
              description="Chainlocks utilize Firo’s masternode network to protect against 51% attacks. Transactions achieve finality as soon as 1 block is confirmed."
            />
            <BoxTimeline
              isComplete={true}
              status="COMPLETED"
              title="RAP Addresses"
              description="RAP Addresses allow a publicly shareable address that does not allow third parties to see how much or when it has received funds"
            />
            <BoxTimeline
              isComplete={true}
              status="COMPLETED"
              title="FiroPoW"
              description="FiroPoW is a ProgPOW variant that is designed for GPUs and has strong ASIC resistance"
            />
            <BoxTimeline
              isComplete={true}
              status="COMPLETED"
              title="Instant Send"
              description="Instant Send utilizes Firo’s masternode network to allow transactions to be confirmed within a few seconds allowing for practical use as a medium of exchange"
            />
            <BoxTimeline
              isComplete={true}
              status="COMPLETED"
              title="MTP Strip"
              description="MTP stripping reduces the size of Firo’s blockchain from 60GB to 4GB by stripping MTP proofs from older blocks"
            />
            <BoxTimeline
              isComplete={true}
              status="COMPLETED"
              title="FiroDEX"
              description="FiroDEX allows for users to swap to and from Firo using decentralized infrastructure using atomic swap technology"
            />
            <BoxTimeline
              isComplete={true}
              status="COMPLETED"
              title="Mobile Wallet"
              description="A native, private by default mobile wallet that will have full Lelantus transaction support"
            />
            <BoxTimeline
              isComplete={true}
              status="COMPLETED"
              title="Lelantus Spark sub-addressing and payment proofs"
              description="Lelantus Spark will support sub-addresses that allow more efficient scanning and payment proofs that allow users to prove they made a payment"
            />
            <BoxTimeline
              isComplete={true}
              status="COMPLETED"
              title="Spark Assets"
              description="Spark Assets extends the functionality of Spark to hide the asset type being transferred. Spats is planned to be implemented in Elysium v2"
            />

            {/* INCOMPLETE */}
            <BoxTimeline
              status="TESTNET"
              title="Elysium"
              description="Elysium allows token (for e.g. stablecoins, asset backed coins) to be issued on Firo’s network that will benefit from Firo’s privacy technology"
            />
            <BoxTimeline
              status="IN PROGRESS"
              title="Lelantus Spark"
              description="Lelantus Spark allows direct anonymous payments allowing users to transact with each other without revealing amounts, source and recipient. Spark introduces a Spark addresses that will allow users to keep their funds totally hidden along with full view key and threshold multisig support"
            />
            <BoxTimeline
              status="FINALIZING"
              title="Aura Private Voting"
              description="Aura is our private voting mechanism for DAOs inspired by our Lelantus technology that allows anonymous but verifiable voting that also hides ballot progress. We intend to use this as the foundation of moving towards formalized decentralized governance."
            />
            <BoxTimeline
              status="PENDING"
              title="Fast sync clients"
              description="Fast sync clients allow users to sync their wallets rapidly without needing to download the entire blockchain while supporting Lelantus transactions"
            />
            <BoxTimeline
              status="PENDING"
              title="Mixnets"
              description="Tunnelling transactions and node communications into mixnets offer increased metadata protection even against state level adversaries. We are investigating the Meson mixnet that is built on Katzenpost software libraries"
            />
            <BoxTimeline
              status="PENDING"
              title="Cross-chain bridges"
              description="Cross chain bridges will allow tokens from other ecosystems to bridge in and out of Firo’s Elysium token layer to utilize our privacy infrastructure"
            />
            <BoxTimeline
              status="PENDING"
              title="Avalanche"
              description="Avalanche is a consensus algorithm that enables instant transactions, enhanced security and fork-free upgrades. We are exploring Avalanche consensus as a potential replacement our masternodes"
            />
            <BoxTimeline
              status="PENDING"
              title="Elysium v2"
              description="Elysium v2 expands the capabilities of Elysium with easier bridging and DeFi capabilities. Elysium v2 will also implement Spats that will hide the asset type being transferred"
            />
          </VerticalTimeline>
        </PaddedDiv>
      </PaddedDiv>
    </div>
  )
}

export default Timeline
