import React, { useState } from "react";
import apparel from "../../../assets/community/merchants/apparel.svg";
import dating from "../../../assets/community/merchants/dating.svg";
import donation from "../../../assets/community/merchants/donation.svg";
import freelancing from "../../../assets/community/merchants/freelancing.svg";
import gaming from "../../../assets/community/merchants/gaming.svg";
import health from "../../../assets/community/merchants/health.svg";
import hosting from "../../../assets/community/merchants/hosting.svg";
import legal from "../../../assets/community/merchants/legal.svg";
import online from "../../../assets/community/merchants/online.svg";
import p2p from "../../../assets/community/merchants/p2p.svg";
import payment from "../../../assets/community/merchants/payment.svg";
import software from "../../../assets/community/merchants/software.svg";
import travel from "../../../assets/community/merchants/travel.svg";
import vpn from "../../../assets/community/merchants/vpn.svg";

import cypher from "../../../assets/community/merchants/cypher.svg";
import short from "../../../assets/community/merchants/short.svg";

import { useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Text } from "../../../components/utilities/text.component";
import { PaddedDiv } from "../../../components/utilities/padded-div.component";
import { Spacer } from "../../../components/utilities/spacer.component";
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component";
import { GridDiv } from "../../../components/utilities/grid-div.component";
import BoxMerchants from "../components/BoxMerchants";

const Merchants = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isMediumDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  const isBigDesktop = useMediaQuery({ query: "(min-width: 2000px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const [showId, setShowId] = useState();

  const handleShow = (id) => {
    setShowId(showId !== id ? id : null);
  };

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
            companies={[cypher, short]}
            id={1}
            show={showId === 1}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Dating"
            logo={dating}
            id={2}
            show={showId === 2}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Donation"
            logo={donation}
            id={3}
            show={showId === 3}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Freelancing"
            logo={freelancing}
            id={4}
            show={showId === 4}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Gaming"
            logo={gaming}
            id={5}
            show={showId === 5}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Health Products"
            logo={health}
            id={6}
            show={showId === 6}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Hosting"
            logo={hosting}
            id={7}
            show={showId === 7}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Legal Services"
            logo={legal}
            id={8}
            show={showId === 8}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Online Marketplaces"
            logo={online}
            id={9}
            show={showId === 9}
            onShow={handleShow}
          />
          <BoxMerchants
            title="P2P Lending"
            logo={p2p}
            id={10}
            show={showId === 10}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Payment Solutions"
            logo={payment}
            id={11}
            show={showId === 11}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Software"
            logo={software}
            id={12}
            show={showId === 12}
            onShow={handleShow}
          />
          <BoxMerchants
            title="Travel"
            logo={travel}
            id={13}
            show={showId === 13}
            onShow={handleShow}
          />
          <BoxMerchants
            title="VPN"
            logo={vpn}
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
  );
};

export default Merchants;
