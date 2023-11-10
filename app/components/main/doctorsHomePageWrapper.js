"use client";

import React, { useState } from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DoctorInfoTable from "../tables/doctorInfoTable";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import DoctorInfoCard from "../cards/doctorInfoCard";

const DoctorsHomePageWrapper = ({ doctorsInfo }) => {
  const [cardView, setCardView] = useState(false);

  const onActionClick = (rowId) => {
    console.log(rowId);
  };

  return (
    <div className="p-20">
      <header className="flex justify-between mb-10 items-center">
        <Typography variant="h3" component="h2">
          Our doctors
        </Typography>
        <Button
          size="small"
          variant="outlined"
          onClick={() => {
            setCardView((state) => !state);
          }}
        >
          {cardView && <FormatListBulletedIcon />}
          {!cardView && <SpaceDashboardIcon />}
        </Button>
      </header>
      <DoctorInfoTable
        isTableView={!cardView}
        onActionClick={onActionClick}
        doctors={doctorsInfo.users}
      />
      <DoctorInfoCard cardView={cardView} />
    </div>
  );
};

export default DoctorsHomePageWrapper;
