import React from "react";

import { useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Text } from "../../../components/utilities/text.component";
import { FlexSpaceBetweenDiv } from "../../../components/utilities/flex-space-between-div.component";
import { Spacer } from "../../../components/utilities/spacer.component";
import { BoxDiv } from "../../../components/utilities/box-container.component";

const BoxHome4 = ({ logo, thumbnail, title, date, author, more }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <BoxDiv style={{ alignItems: "start" }} y="4" x="4">
      <img src={logo} alt={logo} height="10%" />
      <Spacer />
      <div
        style={{
          borderRadius: `${theme.borderSizes[2]}px`,
          alignSelf: "center",
        }}
      >
        <img
          src={thumbnail}
          alt="thumbnail"
          width="100%"
          style={{ minWidth: "150px" }}
        />
      </div>
      <Spacer />
      <FlexSpaceBetweenDiv dir="column" width="100" height="100">
        <Text
          variant="label"
          bold="true"
          style={{ width: isDesktop ? "70%" : "100%", lineHeight: "1.5" }}
        >
          {title}
        </Text>
        <FlexSpaceBetweenDiv>
          <div>
            <Text variant="caption" color={theme.colors.text.secondary}>
              {date}
            </Text>
            {author && (
              <Text variant="caption" color={theme.colors.text.secondary}>
                {" "}
                by {author}
              </Text>
            )}
          </div>
          <Text variant="caption" color={theme.colors.text.secondary}>
            {more} More &gt;
          </Text>
        </FlexSpaceBetweenDiv>
      </FlexSpaceBetweenDiv>
    </BoxDiv>
    // </FlexDiv>
  );
};

export default BoxHome4;
