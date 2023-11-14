"use client"

import React, { useEffect, useState } from "react"
import DoctorInfoTable from "../../tables/doctorInfoTable"
import DoctorsHomePageHeader from "./doctorsHomePageHeader"
import DoctorsInfoCard from "../../cards/doctorsInfoCard"
import DoctorsAppointmentModal from "../../modals/doctorsAppointmentModal"

const DoctorsHomePageWrapper = ({ doctorsInfo }) => {
  const [cardView, setCardView] = useState(true)
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)
  const [selectedDoctorId, setSelectedDoctorId] = useState(0)

  useEffect(() => {
    console.table({
      appointmentModalOpen,
      selectedDoctorId,
    })
  }, [selectedDoctorId, appointmentModalOpen])

  const onGetAppointmentClick = (rowId) => {
    console.log(rowId)
    setSelectedDoctorId(rowId)
    setAppointmentModalOpen(true)
  }

  const onHideAppointmentClick = () => {
    setAppointmentModalOpen(false)
  }

  return (
    <div className="p-20">
      <DoctorsHomePageHeader cardView={cardView} setCardView={setCardView} />
      <DoctorInfoTable
        isTableView={!cardView}
        onActionClick={onGetAppointmentClick}
        doctors={doctorsInfo.users}
      />
      <DoctorsInfoCard
        cardView={cardView}
        doctorsList={doctorsInfo.users}
        onActionClick={onGetAppointmentClick}
      />

      <DoctorsAppointmentModal
        onHideAppointmentClick={onHideAppointmentClick}
        doctorId={selectedDoctorId}
        open={appointmentModalOpen}
      />
    </div>
  )
}

export default DoctorsHomePageWrapper
