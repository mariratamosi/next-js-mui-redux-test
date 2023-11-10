"use client";

import React from "react";
import AppNavBar from "./components/main/nav";
import DoctorsHomePage from "./components/main/doctorsHomePage/doctorsHomePageWrapper";
import { ThemeProvider } from "@emotion/react";
import AppTheme from "./Utility/theme";
import CssBaseline from "@mui/material/CssBaseline";

const HomeWrapper = ({ doctorsInfo }) => {
  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <header className="">
        <AppNavBar />
      </header>
      <DoctorsHomePage doctorsInfo={doctorsInfo} />
    </ThemeProvider>
  );
};

export default HomeWrapper;
