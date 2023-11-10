"use client";

import React, { useEffect, useState } from "react";
import MuiTable from "../tables/muiTable";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import {
  doctorInfoTableColumns,
  doctorInfoRowKeys,
} from "../tables/doctorInfoTableUtility";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";

const DoctorsHomePageWrapper = ({ doctorsInfo }) => {
  const [cardView, setCardView] = useState(true);
  const rows = doctorsInfo.users.map((doctor) => {
    return {
      ...doctor,
      key: doctor.id,
    };
  });

  useEffect(() => {
    console.log(rows);
  }, []);

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
      {!cardView && (
        <MuiTable
          rows={rows}
          columns={doctorInfoTableColumns}
          rowKeys={doctorInfoRowKeys}
          onActionClick={onActionClick}
          actionText={"Get appointment"}
        ></MuiTable>
      )}
      {cardView && }
    </div>
  );
};

export default DoctorsHomePageWrapper;
