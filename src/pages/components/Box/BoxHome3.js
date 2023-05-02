import React from "react"
import shadow from "../../../assets/home3/shadow.svg"
import { Text } from "../../../components/utilities/text.component"
import { useTheme } from "styled-components"
import { BoxDiv } from "../../../components/utilities/box-container.component"
import { useMediaQuery } from "react-responsive"
import { FlexDiv } from "../../../components/utilities/flex-div.component"
import { Button } from "../../../components/buttons/cta-button.component"
import { Spacer } from "../../../components/utilities/spacer.component"

const BoxHome3 = ({ title, highlight, image, subtitle, url, setIsOpen }) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" })
  const isTablet = useMediaQuery({ query: "(width: 768px)" })

  return (
    <BoxDiv
      x={isTablet ? "0" : "2"}
      style={{
        flexDirection: isDesktop ? "column-reverse" : "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      onClick={() => !isDesktop && (url ? window.open(url) : setIsOpen(true))}
    >
      {isDesktop && (
        <Button
          y="2"
          x="4"
          style={{
            color: `${theme.colors.text.primary}`,
            border: `2px solid ${theme.colors.text.primary}`,
            position: "relative",
            bottom: `${theme.space[5]}px`,
          }}
          onClick={() => (url ? window.open(url) : setIsOpen(true))}
        >
          More
        </Button>
      )}

      <FlexDiv>
        <img
          width={isDesktop ? "150px" : "90px"}
          src={image}
          alt={image}
          style={{ zIndex: "1" }}
        />
        {isDesktop && (
          <img
            src={shadow}
            alt="shadow"
            style={{
              display: "flex",
              position: "relative",
              bottom: `${theme.space[5]}px`,
              zIndex: "0",
            }}
          />
        )}
      </FlexDiv>

      <div style={{ textAlign: "center" }}>
        <Text variant="h5" bold="true">
          {title}{" "}
        </Text>
        <Text variant="h5" bold="true" color={theme.colors.brand.primary}>
          {highlight}
        </Text>

        {isDesktop && (
          <Text
            variant="body"
            color={theme.colors.text.secondary}
            style={{ width: "70%", textAlign: "center", lineHeight: "1.5" }}
          >
            <Spacer />
            {subtitle}
          </Text>
        )}
      </div>
    </BoxDiv>
  )
}

export default BoxHome3
