import React from "react";
import { ThemeProvider } from "styled-components";
import { FlexCenterDiv } from "../components/utilities/flex-center-div.component";
import { Text } from "../components/utilities/text.component";
import { theme } from "../infrastructure/theme";
import "../styles/global.css";

const NotFound = () => {
  return (
    <ThemeProvider theme={theme}>
      <FlexCenterDiv bg={theme.colors.brand.primary} height="100">
        <Text variant="h2" color={theme.colors.text.white} bold="true">
          404
        </Text>
        <Text variant="h3" color={theme.colors.text.white} bold="true">
          Sorry, that page does not exist
        </Text>
      </FlexCenterDiv>
    </ThemeProvider>
  );
};

export default NotFound;
