"use client"

import React, { useEffect, useState } from "react"
import BasicTable from "./BasicTable"
import PageLoading from "../Utility/pageLoading"

const PatientList = () => {
  const [patientList, setPatientList] = useState(null)

  useEffect(() => {
    const fetchPatientList = async () => {
      const response = await fetch(
        " https://62ed1f1ba785760e6764cb98.mockapi.io/patients",
      )
      const patientList = await response.json()
      console.log(patientList)
      setPatientList(patientList)
    }

    fetchPatientList()
  }, [])

  if (patientList === null) return <PageLoading />

  const onDetailsClick = (patientId) => {
    console.log(patientId)
  }

  return (
    <div className="p-20">
      <BasicTable patientList={patientList} onDetailsClick={onDetailsClick} />
    </div>
  )
}

export default PatientList
