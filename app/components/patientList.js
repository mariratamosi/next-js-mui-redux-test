"use client"

import React, { useEffect, useState } from "react"
import BasicTable from "./BasicTable"
import PageLoading from "../Utility/pageLoading"
import { useRouter } from "next/navigation"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { TextField } from "@mui/material"

const PatientList = () => {
  const [patientList, setPatientList] = useState(null)
  const [search, setSearch] = useState("")
  const router = useRouter()

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
    let patient = patientList.filter((patient) => patient.id === patientId)[0]
    console.log(patient)
    router.push(
      `/patientDetails?id=${patientId}&name=${patient.profile.firstName}&img=${patient.profile.image}`,
    )
  }

  return (
    <div className="p-20">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Your patients
        </Typography>

        <TextField
          label="Search"
          variant="outlined"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
      </Box>
      <BasicTable
        patientList={patientList.filter((patient) => {
          return (
            patient.profile.firstName
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            patient.profile.lastName
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            patient.profile.phone.toLowerCase().includes(search.toLowerCase())
          )
        })}
        onDetailsClick={onDetailsClick}
      />
    </div>
  )
}

export default PatientList
