import React, { useEffect, useState } from "react";
import FullScreenModal from "./fullScreenModal";
import BasicCalendar from "../calender/basicCalendar";
import { Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TimeButtons from "../calender/timePicker";
import { useRouter } from "next/navigation";
import { useUserInfo } from "@/app/customHook/useUserInfo";
import { signIn } from "next-auth/react";

const DoctorsAppointmentModal = ({
  onHideAppointmentClick,
  doctorId,
  open,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [appointmentInfo, setAppointmentInfo] = useState({
    selectedDate: null,
    selectedTime: null,
    doctor: null,
  });

  const userInfo = useUserInfo();

  useEffect(() => {
    if (doctorId === 0) return;

    console.log(doctorId);

    const getDoctorInfoById = async (id) => {
      console.log("getDoctorInfoById", doctorId);

      const response = await fetch(
        `https://api.slingacademy.com/v1/sample-data/users/${id}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const doctorInfo = await response.json();

      setAppointmentInfo((info) => {
        return {
          ...info,
          doctor: doctorInfo.user,
        };
      });
      setIsLoading(false);
    };

    getDoctorInfoById(doctorId);

    return;
  }, [doctorId]);

  const onDateSelected = (selectedDate) => {
    setAppointmentInfo((info) => {
      return {
        ...info,
        selectedDate: selectedDate,
      };
    });
  };

  const onTimeSelected = (selectedTime) => {
    setAppointmentInfo((info) => {
      return {
        ...info,
        selectedTime: selectedTime,
      };
    });
  };

  const onModalHide = () => {
    console.log(onModalHide);
    onHideAppointmentClick();
    setAppointmentInfo({
      selectedDate: null,
      selectedTime: null,
      doctor: null,
    });
    setIsLoading(false);
  };

  const onAppointmentConfirm = () => {
    setIsLoading(true);

    if (!userInfo) {
      let text = "Plese login";
      if (confirm(text) == true) {
        signIn();
      } else {
        onModalHide();
      }
    }
    alert("appointment confirm");
    onModalHide();
  };

  return (
    open && (
      <FullScreenModal
        isOpen={true}
        onHide={onModalHide}
        isLoading={isLoading}
        isSaveDisabled={
          appointmentInfo.doctor === null ||
          appointmentInfo.selectedDate === null ||
          appointmentInfo.selectedTime === null
        }
        onSave={onAppointmentConfirm}
      >
        <div className="flex flex-wrap justify-around h-full">
          <div className="flex-1 md:w-80   border-gray-300 md:border-r md:h-full p-8 pt-10">
            {appointmentInfo.doctor && (
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
                  {appointmentInfo.doctor.first_name}{" "}
                  {appointmentInfo.doctor.last_name}
                </Typography>
                <Typography variant="h5" component="div">
                  {appointmentInfo.doctor.job}
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
            {appointmentInfo.selectedDate && (
              <TimeButtons onTimeClick={onTimeSelected} />
            )}
          </div>
        </div>
      </FullScreenModal>
    )
  );
};

export default DoctorsAppointmentModal;
