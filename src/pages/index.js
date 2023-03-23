import React from "react"
import { ThemeProvider } from "styled-components"
import { Layout } from "../infrastructure/layouts/Layout"
import { theme } from "../infrastructure/theme"
import "../styles/global.css"
import Home1 from "./sections/Home1"
import Home2 from "./sections/Home2"
import Home3 from "./sections/Home3"
import Home4 from "./sections/Home4"

function index() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout inverse={true}>
          <Home1 />
          <Home2 />
          <Home3 />
          <Home4 />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default index
