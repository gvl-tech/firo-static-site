import React from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "../../infrastructure/layouts/Layout";
import { theme } from "../../infrastructure/theme";
import AboutFiro from "./sections/AboutFiro";
import Products from "./sections/Products";
import Technologies from "./sections/Technologies";
import "../../styles/global.css";

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <AboutFiro />
        <Technologies />
        <Products />
      </Layout>
    </ThemeProvider>
  );
};

export default About;
