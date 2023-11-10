import React, { useEffect, useState } from "react";
import FullScreenModal from "../../modals/fullScreenModal";

const DoctorsAppointmentModal = ({
  onHideAppointmentClick,
  doctorId,
  open,
}) => {
  const [isLoading, setIsLoading] = useState(true);

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
      />
    )
  );
};

export default DoctorsAppointmentModal;
