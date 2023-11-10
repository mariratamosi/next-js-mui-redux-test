import React from "react";
import BasicCard from "./basicCard";
import Button from "@mui/material/Button";

const DoctorsInfoCard = ({ cardView, doctorsList, onActionClick }) => {
  return (
    cardView && (
      <div className="flex flex-wrap w-full justify-between">
        {doctorsList.map((doctor) => {
          return (
            <BasicCard
              sx={{ marginBottom: 20 }}
              imgUrl={doctor.profile_picture}
              imgAltText={doctor.first_name}
              header={doctor.first_name}
              subheader={doctor.country}
              key={doctor.id}
            >
              <Button
                size="medium"
                variant="outlined"
                color="primary"
                onClick={() => {
                  onActionClick(doctor.id);
                }}
              >
                Get appointment
              </Button>
            </BasicCard>
          );
        })}
      </div>
    )
  );
};

export default DoctorsInfoCard;
