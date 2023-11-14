import AppWrapper from "./appWrapper"
import { Typography } from "@mui/material"

export default async function Home() {
  //const doctorsInfo = await getData()

  return (
    <main className="flex min-h-screen flex-col font-medium">
      <AppWrapper>
        <Typography variant="h6" color="inherit" component="div">
          Hello populate
        </Typography>
      </AppWrapper>
    </main>
  )
}

async function getData() {
  const response = await fetch(
    "https://api.slingacademy.com/v1/sample-data/users",
  )

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  const doctorsInfo = await response.json()

  return doctorsInfo
}
