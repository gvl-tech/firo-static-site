import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../infrastructure/theme"
import "../styles/global.css"

function index() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <p style={{ color: theme.colors.brand.primary }}>
            Hello world with assets!
          </p>
        </div>
      </ThemeProvider>
    </>
  )
}

export default index
