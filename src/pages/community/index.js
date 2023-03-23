import React from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "../../infrastructure/layouts/Layout";
import { theme } from "../../infrastructure/theme";
import "../../styles/global.css";
import Merchants from "./section/Merchants";
import Social from "./section/Social";

const Community = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Social />
        <Merchants />
      </Layout>
    </ThemeProvider>
  );
};

export default Community;
