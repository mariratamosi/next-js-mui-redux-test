"use client";

import React, { useState } from "react";
import DoctorInfoTable from "../../tables/doctorInfoTable";
import DoctorsHomePageHeader from "./doctorsHomePageHeader";
import DoctorsInfoCard from "../../cards/DoctorsInfoCard";

const DoctorsHomePageWrapper = ({ doctorsInfo }) => {
  const [cardView, setCardView] = useState(true);

  const onActionClick = (rowId) => {
    console.log(rowId);
  };

  return (
    <div className="p-20">
      <DoctorsHomePageHeader cardView={cardView} setCardView={setCardView} />
      <DoctorInfoTable
        isTableView={!cardView}
        onActionClick={onActionClick}
        doctors={doctorsInfo.users}
      />
      <DoctorsInfoCard
        cardView={cardView}
        doctorsList={doctorsInfo.users}
        onActionClick={onActionClick}
      />
    </div>
  );
};

export default DoctorsHomePageWrapper;
