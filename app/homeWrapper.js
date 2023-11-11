"use client"

import React from "react"
import AppNavBar from "./components/main/nav"
import DoctorsHomePage from "./components/main/doctorsHomePage/doctorsHomePageWrapper"
import { ThemeProvider } from "@emotion/react"
import AppTheme from "./Utility/theme"
import CssBaseline from "@mui/material/CssBaseline"
import AppWrapper from "./wrapper"

const HomeWrapper = ({ doctorsInfo }) => {
  //appointment_pending = {

  //}
  return (
    <AppWrapper>
      <DoctorsHomePage doctorsInfo={doctorsInfo} />
    </AppWrapper>
  )
}

export default HomeWrapper
