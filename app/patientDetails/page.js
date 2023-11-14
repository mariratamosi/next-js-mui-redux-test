"use client"

import React, { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import PageLoading from "../Utility/pageLoading"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import { Button } from "@mui/material"
import AppWrapper from "../appWrapper"
import Divider from "@mui/material/Divider"
import { useRouter } from "next/navigation"
import Image from "next/image"

const Page = () => {
  const urlParams = useSearchParams()
  const id = urlParams.get("id")
  const name = urlParams.get("name")
  const img = urlParams.get("img")
  const router = useRouter()

  const [patientInfo, setPatientInfo] = useState(null)

  useEffect(() => {
    const fetchPatientInfo = async () => {
      const response = await fetch(
        `https://62ed1f1ba785760e6764cb98.mockapi.io/patients/${id}/evaluations`,
      )
      const patientInfo = await response.json()
      console.log(patientInfo)
      setPatientInfo(patientInfo)
    }

    fetchPatientInfo()
  }, [id])

  if (patientInfo === null) return <PageLoading />

  return (
    <AppWrapper>
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
            Patient details
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              router.push(`/`)
            }}
          >
            Home
          </Button>
        </Box>
        <Card sx={{ width: "100%", padding: 4 }}>
          <div className="">
            <div className="flex items-center">
              <Image
                src={img}
                alt={name}
                width={96}
                height={96}
                className=" rounded-full"
              />
              <div className="ml-4">
                <Typography variant="h5" gutterBottom>
                  {name}
                </Typography>
              </div>
            </div>
            <Divider sx={{ marginTop: 3, marginBottom: 3 }} />

            {patientInfo.map((patient) => (
              <>
                <div className="mb-8">
                  <Typography variant="h5" gutterBottom>
                    Assesment
                  </Typography>
                  {patient.assessment}
                </div>
                <div>
                  <Typography variant="h5" gutterBottom>
                    Previous diagnosis
                  </Typography>
                  {!patient.diagnosis ||
                    (patient.diagnosis.length === 0 && (
                      <div>No prev diagnosis available</div>
                    ))}
                  {patient.diagnosis &&
                    patient.diagnosis.length > 0 &&
                    patient.diagnosis.map((diagnosis, index) => {
                      return (
                        <div className="flex m-4 ml-0" key={index}>
                          <div className="w-6">{index + 1}.</div>{" "}
                          <div>{diagnosis}</div>
                        </div>
                      )
                    })}
                </div>
              </>
            ))}
          </div>
        </Card>
      </div>
    </AppWrapper>
  )
}

export default Page
