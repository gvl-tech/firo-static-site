import React from "react"
import { ThemeProvider } from "styled-components"
import { Layout } from "../infrastructure/layouts/Layout"
import { theme } from "../infrastructure/theme"
import "../styles/global.css"
import Home1 from "./sections/Home1"

function index() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout inverse={true}>
          <Home1 />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default index
