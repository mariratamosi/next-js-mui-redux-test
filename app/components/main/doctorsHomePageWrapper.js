"use client";

import React, { useEffect } from "react";
import MuiTable from "../tables/muiTable";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import doctorInfoTableColumns from "../tables/doctorInfoTableColumns";

const DoctorsHomePageWrapper = ({ doctorsInfo }) => {
  const rowKeys = ["first_name", "country", "gender"];

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
        <Button size="small" variant="outlined">
          <FormatListBulletedIcon />
        </Button>
      </header>
      <MuiTable
        rows={rows}
        columns={doctorInfoTableColumns}
        rowKeys={rowKeys}
        onActionClick={onActionClick}
      ></MuiTable>
    </div>
  );
};

export default DoctorsHomePageWrapper;
