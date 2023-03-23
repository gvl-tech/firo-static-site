import React from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "../../infrastructure/layouts/Layout";
import { theme } from "../../infrastructure/theme";
import "../../styles/global.css";
import DesktopWallet from "./section/DesktopWallet";
import FiroWallet from "./section/FiroWallet";
import MobileWallet from "./section/MobileWallet";
import ThirdWallet from "./section/ThirdWallet";

const DownloadFiro = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <FiroWallet />
        <DesktopWallet />
        <MobileWallet />
        <ThirdWallet />
      </Layout>
    </ThemeProvider>
  );
};

export default DownloadFiro;
