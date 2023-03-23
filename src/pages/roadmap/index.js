import React from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "../../infrastructure/layouts/Layout";
import { theme } from "../../infrastructure/theme";
import Timeline from "./section/Timeline";
import "../../styles/global.css";

const Roadmap = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Timeline />
      </Layout>
    </ThemeProvider>
  );
};

export default Roadmap;
