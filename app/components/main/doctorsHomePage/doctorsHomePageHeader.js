import React from "react";

import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";

const DoctorsHomePageHeader = ({ cardView, setCardView }) => {
  return (
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
  );
};

export default DoctorsHomePageHeader;
