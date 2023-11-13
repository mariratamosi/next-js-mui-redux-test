"use client"

import React from "react"
import DoctorsHomePage from "./doctors/components/main/doctorsHomePage/doctorsHomePageWrapper"
import AppWrapper from "./appWrapper"

const HomeWrapper = ({ doctorsInfo }) => {
  //page-homewrapper-AppWrapper-themeWrapper
  return (
    <AppWrapper>
      <DoctorsHomePage doctorsInfo={doctorsInfo} />
    </AppWrapper>
  )
}

export default HomeWrapper
