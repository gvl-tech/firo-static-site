import React from "react"
import arrow from "../../../assets/community/merchants/arrow.svg"
import arrowup from "../../../assets/community/merchants/arrowup.svg"

import { FlexCenterDiv } from "../../../components/utilities/flex-center-div.component"
import { Text } from "../../../components/utilities/text.component"
import { useTheme } from "styled-components"
import { useMediaQuery } from "react-responsive"
import { BoxDiv } from "../../../components/utilities/box-container.component"
import { Spacer } from "../../../components/utilities/spacer.component"
import { FlexStartDiv } from "../../../components/utilities/flex-start-div.component"

const BoxMerchants = ({ logo, title, companies, id, show, onShow }) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
  const isMediumDesktop = useMediaQuery({ query: "(min-width: 1440px)" })
  const isBigDesktop = useMediaQuery({ query: "(min-width: 2000px)" })
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  })

  const handleShow = () => {
    onShow && onShow(id)
  }

  const calcMarginLeft = value => {
    if (isDesktop) {
      if (isBigDesktop) {
        if (value === 2 || value === 8 || value === 14) {
          return "-110.8%"
        } else if (value === 3 || value === 9) {
          return "-221.3%"
        } else if (value === 4 || value === 10) {
          return "-332%"
        } else if (value === 5 || value === 11) {
          return "-442.8%"
        } else if (value === 6 || value === 12) {
          return "-553.5%"
        } else {
          return "0%"
        }
      } else if (isMediumDesktop) {
        if (value === 2 || value === 6 || value === 10 || value === 14) {
          return "-110.8%"
        } else if (value === 3 || value === 7 || value === 11) {
          return "-221.3%"
        } else if (value === 4 || value === 8 || value === 12) {
          return "-332%"
        } else {
          return "0%"
        }
      } else if (isTablet) {
        if (
          value === 2 ||
          value === 4 ||
          value === 6 ||
          value === 8 ||
          value === 10 ||
          value === 12 ||
          value === 14
        ) {
          return "-110.8%"
        }
      } else {
        if (
          value === 2 ||
          value === 5 ||
          value === 8 ||
          value === 11 ||
          value === 14
        ) {
          return "-110.8%"
        } else if (value === 3 || value === 6 || value === 9 || value === 12) {
          return "-221.3%"
        } else {
          return "0%"
        }
      }
    } else {
      return "0%"
    }
  }

  return (
    <div>
      <BoxDiv
        style={{ cursor: "pointer" }}
        onClick={handleShow}
        bg={show ? theme.colors.brand.primary : theme.colors.bg.white}
      >
        <FlexCenterDiv>
          <FlexCenterDiv style={{ position: "relative" }}>
            <svg>
              <path
                id="Path_8103"
                data-name="Path 8103"
                d="M67.661,0A67.661,67.661,0,1,1,0,67.661,67.661,67.661,0,0,1,67.661,0Z"
                transform="translate(80)"
                fill={show ? "#640F1B" : "#f4f4f4"}
              />
            </svg>
            <img src={logo} alt={logo} style={{ position: "absolute" }} />
          </FlexCenterDiv>

          <Spacer />
          <Text
            variant="h5"
            color={show ? theme.colors.text.white : theme.colors.text.primary}
            fontFamily={theme.fontFamily.ssp}
            style={{ whiteSpace: "nowrap" }}
          >
            {title}
          </Text>
          <Spacer size="xLarge" />

          <img src={show ? arrowup : arrow} alt={arrow} />
        </FlexCenterDiv>
      </BoxDiv>

      <Spacer size="xLarge" />

      {show && (
        <BoxDiv
          style={{
            marginLeft: calcMarginLeft(id),
            minWidth: isDesktop
              ? isBigDesktop
                ? "1945px"
                : isMediumDesktop
                ? "1280px"
                : isTablet
                ? "620px"
                : "950px"
              : "90%",
            minHeight: "100px",
          }}
        >
          <FlexStartDiv
            dir={isDesktop ? "row" : "column"}
            style={{
              gap: theme.space[5],
              alignItems: "center",
              flexWrap: "wrap",
              zIndex: "0",
            }}
          >
            {companies
              ? companies.map(company => (
                  <img
                    src={company.img}
                    alt={company.img}
                    key={company.img}
                    width="270"
                    style={{ cursor: "pointer" }}
                    onClick={() => window.open(company.url)}
                  />
                ))
              : null}
          </FlexStartDiv>
        </BoxDiv>
      )}
    </div>
  )
}

export default BoxMerchants
