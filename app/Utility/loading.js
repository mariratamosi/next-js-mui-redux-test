import * as React from "react"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        zIndex: 1300,
      }}
    >
      <CircularProgress />
    </Box>
  )
}
