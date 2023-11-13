import React from "react"
import {
  doctorInfoTableColumns,
  doctorInfoRowKeys,
} from "./doctorInfoTableUtility"
import MuiTable from "./muiTable"

const DoctorInfoTable = ({ isTableView, onActionClick, doctors }) => {
  const rows = doctors.map((doctor) => {
    return {
      ...doctor,
      key: doctor.id,
    }
  })
  return (
    isTableView && (
      <MuiTable
        rows={rows}
        columns={doctorInfoTableColumns}
        rowKeys={doctorInfoRowKeys}
        onActionClick={onActionClick}
        actionText={"Get appointment"}
      ></MuiTable>
    )
  )
}

export default DoctorInfoTable
