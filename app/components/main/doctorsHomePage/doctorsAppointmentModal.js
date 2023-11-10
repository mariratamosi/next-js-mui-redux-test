import React, { useEffect, useState } from "react";
import FullScreenModal from "../../modals/fullScreenModal";
import BasicCalendar from "../../calender/basicCalendar";

const DoctorsAppointmentModal = ({
  onHideAppointmentClick,
  doctorId,
  open,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  //get doctors available date
  //disable past date
  //after clicking on date populate time
  //submit the time
  //during submission - check auth

  useEffect(() => {
    console.table({
      onHideAppointmentClick,
      doctorId,
      open,
    });
  }, [open]);

  return (
    open && (
      <FullScreenModal
        isOpen={true}
        onHide={onHideAppointmentClick}
        isLoading={isLoading}
      >
        <div className="flex flex-wrap justify-around h-full">
          <div className="flex-1 md:w-80   border-gray-300 md:border-r md:h-full pt-5">
            Docors info
          </div>
          <div className="flex-1 md:w-80  border-gray-300 md:border-r h-full pt-5">
            <BasicCalendar />
          </div>
          <div className="flex-1 md:w-80  border-gray-300 h-full pt-5">
            Time
          </div>
        </div>
      </FullScreenModal>
    )
  );
};

export default DoctorsAppointmentModal;
