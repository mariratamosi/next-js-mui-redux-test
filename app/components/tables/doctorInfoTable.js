import React from "react";
import {
  doctorInfoTableColumns,
  doctorInfoRowKeys,
} from "../tables/doctorInfoTableUtility";

const doctorInfoTable = ({ isTableView }) => {
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
  );
};

export default doctorInfoTable;
