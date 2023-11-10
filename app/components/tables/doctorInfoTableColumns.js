const doctorInfoTableColumns = [
  { field: "first_name", headerName: "Name", width: 150, key: "first_name" },
  { field: "country", headerName: "Country", width: 150, key: "country" },
  { field: "gender", headerName: "Gender", width: 150, key: "gender" },
  {
    headerName: "",
    width: 300,
    renderCell: (params) => (
      <Button
        variant="text"
        color="primary"
        data-id={params.row.id}
        key={params.row.id}
      >
        Get appointment
      </Button>
    ),
    key: "Action",
  },
];

export default doctorInfoTableColumns;
