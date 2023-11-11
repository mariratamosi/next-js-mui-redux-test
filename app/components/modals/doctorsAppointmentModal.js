import React, { useEffect, useState } from "react";
import FullScreenModal from "./fullScreenModal";
import BasicCalendar from "../calender/basicCalendar";
import { Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TimeButtons from "../calender/timePicker";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const DoctorsAppointmentModal = ({
  onHideAppointmentClick,
  doctorId,
  open,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const router = useRouter();


  useEffect(() => {
    if (doctorId === 0) return;
    const getDoctorInfoById = async (id) => {
      const response = await fetch(
        `https://api.slingacademy.com/v1/sample-data/users/${id}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const doctorInfo = await response.json();

      console.log(doctorInfo);
      setDoctor(doctorInfo.user);
      setIsLoading(false);
    };

    getDoctorInfoById(doctorId);

    return;
  }, [doctorId]);

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
      isLoading,
    });
  }, [open]);

  const onDateSelected = (selectedDate) => {
    console.log(selectedDate);
    setSelectedDate(selectedDate);
  };

  const onTimeSelected = (selectedTime) => {
    console.log(selectedTime);
    setSelectedTime(selectedTime);
    //setSelectedDate(selectedTime);
  };

  const onModalHide = () => {
    onHideAppointmentClick();
    setSelectedDate(null);
    setDoctor(null);
    setSelectedTime(null);
  };

  const onAppointmentConfirm = () => {
    console.log("Confirm appointment ", doctorId, selectedDate, selectedTime);
    setIsLoading(true);
    setTimeout(() => {
      console.log("Hi");
      router.push("/login");
    }, 3000);
  };

  return (
    open && (
      <FullScreenModal
        isOpen={true}
        onHide={onModalHide}
        isLoading={isLoading}
        isSaveDisabled={
          doctor === null || selectedDate === null || selectedTime === null
        }
        onSave={onAppointmentConfirm}
      >
        <div className="flex flex-wrap justify-around h-full">
          <div className="flex-1 md:w-80   border-gray-300 md:border-r md:h-full p-8 pt-10">
            {doctor && (
              <div>
                <div className="flex justify-start items-center">
                  <AccessTimeIcon sx={{}} />
                  <Typography
                    variant="subtitle2"
                    sx={{ marginLeft: 0.5, marginBottom: 0 }}
                    gutterBottom
                  >
                    Get appointment
                  </Typography>
                </div>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ marginTop: 1.5 }}
                >
                  {doctor.first_name} {doctor.last_name}
                </Typography>
                <Typography variant="h5" component="div">
                  {doctor.job}
                </Typography>
              </div>
            )}
          </div>
          <div className="flex-1 md:w-80  border-gray-300 md:border-r h-full pt-5">
            <BasicCalendar
              onDateSelected={onDateSelected}
              numberOfAvailableDates={2}
            />
          </div>
          <div className="flex-1 md:w-80  border-gray-300 md:h-full pt-5">
            {selectedDate && <TimeButtons onTimeClick={onTimeSelected} />}
          </div>
        </div>
      </FullScreenModal>
    )
  );
};

export default DoctorsAppointmentModal;
