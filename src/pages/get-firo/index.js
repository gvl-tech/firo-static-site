import React from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "../../infrastructure/layouts/Layout";
import { theme } from "../../infrastructure/theme";
import Available from "./section/Available";
import FiroToken from "./section/FiroToken";
import Transact from "./section/Transact";
import "../../styles/global.css";

const GetFiro = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout inverse={true} mobileInverse={true}>
        <FiroToken />
        <Available />
        <Transact />
      </Layout>
    </ThemeProvider>
  );
};

export default GetFiro;
