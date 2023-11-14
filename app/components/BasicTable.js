import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Button } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CancelIcon from "@mui/icons-material/Cancel"
import Image from "next/image"

export default function BasicTable({ patientList, onDetailsClick }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <span className="text-lg">Patient</span>
            </TableCell>
            <TableCell>
              <span className="text-lg">Phone number</span>
            </TableCell>
            <TableCell align="center">
              <span className="text-lg">New patient</span>
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patientList.map((row) => (
            <TableRow
              key={row.profile.firstName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className="flex items-center">
                  <Image
                    src={row.profile.image}
                    alt={row.profile.firstName}
                    width={40}
                    height={40}
                    className=" rounded-full"
                  />
                  <span className="ml-4 text-lg">
                    {row.profile.firstName} {row.profile.lastName}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-lg">{row.profile.phone}</span>
              </TableCell>
              <TableCell align="center">
                {row.profile.newPatient ? (
                  <CheckCircleIcon color="primary" />
                ) : (
                  <CancelIcon color="primary" />
                )}
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  onClick={() => {
                    onDetailsClick(row.id)
                  }}
                >
                  View details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
