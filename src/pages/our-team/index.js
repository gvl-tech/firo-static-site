import React from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "../../infrastructure/layouts/Layout";
import { theme } from "../../infrastructure/theme";
import Community from "./sections/Community";
import CoreDevelopers from "./sections/CoreDevelopers";
import Founders from "./sections/Founders";
import MobileDevelopment from "./sections/MobileDevelopment";
import Research from "./sections/Research";
import "../../styles/global.css";

const Team = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Founders />
        <CoreDevelopers />
        <MobileDevelopment />
        <Community />
        <Research />
      </Layout>
    </ThemeProvider>
  );
};

export default Team;
