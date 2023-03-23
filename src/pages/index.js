import React from "react"
import { ThemeProvider } from "styled-components"
import { Layout } from "../infrastructure/layouts/Layout"
import { theme } from "../infrastructure/theme"
import "../styles/global.css"

function index() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout inverse={true}></Layout>
      </ThemeProvider>
    </>
  )
}

export default index
