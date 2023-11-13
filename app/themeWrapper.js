"use client"

import React from "react"
import { ThemeProvider } from "@emotion/react"
import AppTheme from "./Utility/theme"
import CssBaseline from "@mui/material/CssBaseline"

const ThemeWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default ThemeWrapper
