import React from "react"
import { Layout } from "../../infrastructure/layouts/Layout"
import AboutFiro from "./sections/AboutFiro"
import Products from "./sections/Products"
import Technologies from "./sections/Technologies"
import "../../styles/global.css"

const About = () => {
  return (
    <Layout>
      <AboutFiro />
      <Technologies />
      <Products />
    </Layout>
  )
}

export default About
