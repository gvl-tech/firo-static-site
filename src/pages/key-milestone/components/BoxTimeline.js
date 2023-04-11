import React from "react"
import completed from "../../../assets/roadmap/completed.svg"
import incomplete from "../../../assets/roadmap/incomplete.svg"

import { VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { useTheme } from "styled-components"
import { useMediaQuery } from "react-responsive"
import { Spacer } from "../../../components/utilities/spacer.component"
import { Text } from "../../../components/utilities/text.component"

const BoxTimeline = ({ isComplete, status, title, description }) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
  const isBigDesktop = useMediaQuery({ query: "(min-width: 1824px)" })
  const isTablet = useMediaQuery({ query: "(width: 768px)" })

  return (
    <VerticalTimelineElement
      contentStyle={{
        WebkitBoxShadow: "none",
        padding: `${theme.space[isDesktop ? 3 : 0]}px ${
          theme.space[isTablet ? 4 : isDesktop ? 5 : isBigDesktop ? 6 : 0]
        }px`,
        //tablet:4 mobile:0 bigDesktop:6 else:5
      }}
      iconStyle={{
        background: isComplete
          ? theme.colors.brand.primary
          : theme.colors.text.secondary,
        scale: "0.6",
        border: `10px solid ${
          isComplete ? theme.colors.brand.primary : theme.colors.text.secondary
        }`,
        boxShadow: isComplete ? "0px 0px 30px 10px #ed5f73" : "none",
      }}
    >
      <img
        src={isComplete ? completed : incomplete}
        alt={isComplete ? completed : incomplete}
        className="vertical-timeline-element-status"
      />

      <Text
        variant={isDesktop ? "label" : "h4"}
        fontFamily={isDesktop ? theme.fontFamily.s : theme.fontFamily.ssc}
        bold={isDesktop ? false : true}
        style={{ fontWeight: theme.fontWeights.medium }}
        color={
          isComplete ? theme.colors.brand.primary : theme.colors.text.secondary
        }
      >
        {status}
      </Text>

      <Spacer />
      <Text
        variant={isDesktop ? "label" : "body"}
        fontFamily={isDesktop ? theme.fontFamily.s : theme.fontFamily.ssp}
        style={{ fontWeight: theme.fontWeights.medium }}
      >
        {title}
      </Text>
      <Spacer />
      <Text fontFamily={theme.fontFamily.ssp} style={{ lineHeight: "1.5" }}>
        {description}
      </Text>
      <Spacer />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="2"
        viewBox="0 0 72 2"
      >
        <line
          id="Line_90"
          data-name="Line 90"
          x1="70"
          transform="translate(1 1)"
          fill="none"
          stroke="#9b1c2e"
          stroke-linecap="round"
          stroke-width="2"
        />
      </svg>
    </VerticalTimelineElement>
  )
}

export default BoxTimeline
