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

export default function BasicTable({ patientList, onDetailsClick }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone number</TableCell>
            <TableCell align="center">New patient</TableCell>
            <TableCell align="right">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patientList.map((row) => (
            <TableRow
              key={row.profile.firstName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <span>
                  {row.profile.firstName} {row.profile.lastName}
                </span>
              </TableCell>
              <TableCell>{row.profile.phone}</TableCell>
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
