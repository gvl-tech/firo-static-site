import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "./src/infrastructure/theme"

export const wrapPageElement = ({ element }) => (
  <>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </>
)
