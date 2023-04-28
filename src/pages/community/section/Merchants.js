import React, { useState } from "react"
import apparel from "../../../assets/community/merchants/apparel.svg"
import dating from "../../../assets/community/merchants/dating.svg"
import donation from "../../../assets/community/merchants/donation.svg"
import freelancing from "../../../assets/community/merchants/freelancing.svg"
import gaming from "../../../assets/community/merchants/gaming.svg"
import health from "../../../assets/community/merchants/health.svg"
import hosting from "../../../assets/community/merchants/hosting.svg"
import legal from "../../../assets/community/merchants/legal.svg"
import online from "../../../assets/community/merchants/online.svg"
import p2p from "../../../assets/community/merchants/p2p.svg"
import payment from "../../../assets/community/merchants/payment.svg"
import software from "../../../assets/community/merchants/software.svg"
import travel from "../../../assets/community/merchants/travel.svg"
import vpn from "../../../assets/community/merchants/vpn.svg"

import cypher from "../../../assets/community/merchants/cypher.svg"
import short from "../../../assets/community/merchants/short.svg"
import besmitten from "../../../assets/community/merchants/besmitten-logo.png"
import freeross from "../../../assets/community/merchants/freross-logo.png"
import vedabase from "../../../assets/community/merchants/vedabase-logo.png"
import cn from "../../../assets/community/merchants/cn-logo.png"
import prinses from "../../../assets/community/merchants/prinses-logo.png"
import maddyice from "../../../assets/community/merchants/maddyice-logo.png"
import cryptotask from "../../../assets/community/merchants/cryptotask-logo.png"
import hyve from "../../../assets/community/merchants/hyve-logo-dark.png"
import timcasino from "../../../assets/community/merchants/timcasino-logo.png"
import drapis from "../../../assets/community/merchants/drapis-logo.png"
import allnodes from "../../../assets/community/merchants/allnodes-logo.png"
import nownodes from "../../../assets/community/merchants/nownodes-logo.png"
import jk from "../../../assets/community/merchants/jk-logo.png"
import iking from "../../../assets/community/merchants/iking-logo.png"
import shopping from "../../../assets/community/merchants/shopping-io-logo.png"
import particl from "../../../assets/community/merchants/particl-logo.png"
import myconstant from "../../../assets/community/merchants/myconstant-logo.png"
import coinrabbit from "../../../assets/community/merchants/coinrabbit-logo.png"
import nowpayments from "../../../assets/community/merchants/nowpayments-logo.png"
import coinpayments from "../../../assets/community/merchants/coinpayments-logo.png"
import polispay from "../../../assets/community/merchants/polispay-logo.png"
import guardarian from "../../../assets/community/merchants/guardarian-logo.png"
import plusbit from "../../../assets/community/merchants/plusbit-logo.png"
import rocketbot from "../../../assets/community/merchants/rocketbot-logo.png"
import paytomat from "../../../assets/community/merchants/paytomat-logo.png"
import thisapp from "../../../assets/community/merchants/thisapp-logo.png"
import arcadia from "../../../assets/community/merchants/arcadia-logo.png"
import cypherstack from "../../../assets/community/merchants/cypherstack-logo.png"
import travala from "../../../assets/community/merchants/travala-logo.png"
import locktrip from "../../../assets/community/merchants/locktrip-logo.png"
import bolehvpn from "../../../assets/community/merchants/bolehvpn-logo.png"

import { useTheme } from "styled-components"
import { useMediaQuery } from "react-responsive"
import { Text } from "../../../components/utilities/text.component"
import { PaddedDiv } from "../../../components/utilities/padded-div.component"
import { Spacer } from "../../../components/utilities/spacer.component"
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component"
import { GridDiv } from "../../../components/utilities/grid-div.component"
import BoxMerchants from "../components/BoxMerchants"

const Merchants = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
  const isMediumDesktop = useMediaQuery({ query: "(min-width: 1440px)" })
  const isBigDesktop = useMediaQuery({ query: "(min-width: 2000px)" })
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  })
  const [showId, setShowId] = useState()

  const handleShow = id => {
    setShowId(showId !== id ? id : null)
  }

  return (
    <div>
      <PaddedDiv
        // y="5" x={isBigDesktop ? "6" : "4"}
        style={{ padding: "5%" }}
      >
        <FlexStartDiv style={{ alignItems: isDesktop ? "start" : "center" }}>
          <Text bold="true" variant="h4" color={theme.colors.brand.primary}>
            Merchants
          </Text>
          <Spacer />
          <Text variant="caption">
            Want to spend your Firo? Here are some places you can do so! This is
            a non-exhaustive list of places that accept Firo! If you have a
            business that would like to be featured here, let us know!
          </Text>
        </FlexStartDiv>
        <Spacer size="xxLarge" />

        <GridDiv
          y={
            isDesktop
              ? `repeat(${
                  isBigDesktop
                    ? "6"
                    : isMediumDesktop
                    ? "4"
                    : isTablet
                    ? "2"
                    : "3"
                }, 300px)`
              : "auto"
          }
          gap="4"
          style={{ justifyContent: "center" }}
        >
          <BoxMerchants
            title="Apparel"
            logo={apparel}
            companies={[
              { img: cypher, url: "https://www.cyphermarket.com/firo/" },
              {
                img: short,
                url: "https://shorthebanks.com/collections/firo-merch",
              },
            ]}
            id={1}
            show={showId === 1}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Dating"
            logo={dating}
            companies={[{ img: besmitten, url: "https://besmitten.com/" }]}
            id={2}
            show={showId === 2}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Donation"
            logo={donation}
            companies={[
              { img: freeross, url: "https://freeross.org/donate/" },
              { img: vedabase, url: "https://vedabase.io/en/donate/" },
              { img: cn, url: "https://www.causenetwork.org/crypto" },
              {
                img: prinses,
                url: "https://www.maximaalinactie.nl/actie/willem-de-boer?locale=en",
              },
              { img: maddyice, url: "https://maddyice.com/donate/" },
            ]}
            id={3}
            show={showId === 3}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Freelancing"
            logo={freelancing}
            companies={[
              { img: cryptotask, url: "https://www.cryptotask.org/en" },
              {
                img: hyve,
                url: "https://hyve.works/",
              },
            ]}
            id={4}
            show={showId === 4}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Gaming"
            logo={gaming}
            companies={[
              { img: timcasino, url: "https://timcasino.com/?ref=546" },
            ]}
            id={5}
            show={showId === 5}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Health Products"
            logo={health}
            companies={[{ img: drapis, url: "https://drapis.com/" }]}
            id={6}
            show={showId === 6}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Hosting"
            logo={hosting}
            companies={[
              {
                img: allnodes,
                url: "https://www.allnodes.com/firo/host?utm_source=mbuzz&utm_medium=hosting&utm_campaign=firo",
              },
              {
                img: nownodes,
                url: "http://bit.do/nownodes-firo",
              },
            ]}
            id={7}
            show={showId === 7}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Legal Services"
            logo={legal}
            companies={[{ img: jk, url: "https://www.jkleiman.com/" }]}
            id={8}
            show={showId === 8}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Online Marketplaces"
            logo={online}
            companies={[
              { img: iking, url: "https://iking.io/" },
              {
                img: shopping,
                url: "https://shopping.io/",
              },
              {
                img: particl,
                url: "https://particl.io/",
              },
            ]}
            id={9}
            show={showId === 9}
            onShow={handleShow}
          />
          <BoxMerchants
            title="P2P Lending"
            logo={p2p}
            companies={[
              {
                img: myconstant,
                url: "https://www.myconstant.com/sign-up?r=Q6JX4Z782D",
              },
              {
                img: coinrabbit,
                url: "https://coinrabbit.io/",
              },
            ]}
            id={10}
            show={showId === 10}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Payment Solutions"
            logo={payment}
            companies={[
              { img: nowpayments, url: "https://nowpayments.io/" },
              {
                img: coinpayments,
                url: "https://coinpayments.net/",
              },

              {
                img: polispay,
                url: "https://polispay.com/",
              },
              { img: guardarian, url: "https://guardarian.com/" },
              {
                img: plusbit,
                url: "https://plusbit.tech/pos/",
              },
              {
                img: rocketbot,
                url: "https://rocketbot.pro/",
              },
              {
                img: paytomat,
                url: "https://paytomat.com/en/",
              },
              {
                img: thisapp,
                url: "https://thisapp.io/",
              },
            ]}
            id={11}
            show={showId === 11}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Software"
            logo={software}
            companies={[
              {
                img: arcadia,
                url: "https://arcadiamgroup.com/",
              },
              {
                img: cypherstack,
                url: "https://cypherstack.com/",
              },
            ]}
            id={12}
            show={showId === 12}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Travel"
            logo={travel}
            companies={[
              {
                img: travala,
                url: "https://www.travala.com/",
              },
              {
                img: locktrip,
                url: "https://locktrip.com/",
              },
            ]}
            id={13}
            show={showId === 13}
            onShow={handleShow}
          />
          <BoxMerchants
            title="VPN"
            logo={vpn}
            companies={[
              {
                img: bolehvpn,
                url: "https://www.bolehvpn.net/",
              },
            ]}
            id={14}
            show={showId === 14}
            onShow={handleShow}
          />
        </GridDiv>

        <Spacer size="xxLarge" />
        <FlexStartDiv>
          <Text
            variant="h5"
            fontFamily={theme.fontFamily.ssp}
            color={theme.colors.text.secondary}
          >
            Disclaimer
          </Text>
          <Spacer />
          <Text variant="caption" color={theme.colors.text.secondary}>
            Some of these links contain referral links whereby we may receive
            compensation when you sign-up or use their products/services. These
            do not constitute an endorsement of the product/service.
          </Text>
        </FlexStartDiv>
        <Spacer size="xxLarge" />
      </PaddedDiv>
    </div>
  )
}

export default Merchants
