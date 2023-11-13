"use client"

import React from "react"
import ThemeWrapper from "./themeWrapper"
import AppNavBar from "./doctors/components/main/nav"

const AppWrapper = ({ children }) => {
  return (
    <ThemeWrapper>
      <header className="">
        <AppNavBar />
      </header>
      {children}
    </ThemeWrapper>
  )
}

export default AppWrapper
