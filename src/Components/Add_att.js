import { Button, Card, Grid, Radio, RadioGroup } from "@mui/material";
import React from "react";
import profile_user from "../assets/profile_user.jpg";
import "./css/styles.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";

export default function Add_Attendance() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },

    { field: "name", headerName: "Name", flex: 2 },
    { field: "dept", headerName: "Department", flex: 2 },
    {
      field: "attendance_p",
      headerName: "Action",
      flex: 1,
      renderCell: () => {
        return (
          
          <>
            <Button
              variant="contained"
              size="small"
              style={{ backgroundColor: "#346448" }}
              // onClick={() => {
              //   navigate("/Dashboard/Add_Attendance");
              // }}
            >
              Enroll
            </Button>
          </>
          

          
        );
      },
    },
    

  ];
  const rows = [
    { id: 1,  name: "Sidra Rehman Afridi", dept: "Computer" },
    { id: 2,  name: "Sidra Rehman Afridi", dept: "Computer" },
    { id: 3,  name: "Sidra Rehman Afridi", dept: "Computer" },
    { id: 4,  name: "Sidra Rehman Afridi", dept: "Computer" },
    { id: 5,  name: "Sidra Rehman Afridi", dept: "Computer" },
  ];
  return (
    <div className="m-5">
      <Card style={{ padding: 70 }}>
        <div className="row " style={{ marginBottom: 10 }}>
          <div className="col-md-10">
            <h4>Teacher Enrollment</h4>
            <h10>Artifical Intelligence</h10>
          </div>
        </div>
        <DataGrid
          style={{ height: 450, width: "100%" }}
          rows={rows}
          columns={columns}
          pageSize={30}
          rowsPerPageOptions={[30]}
        />
      </Card>{" "}
    </div>
  );
}
