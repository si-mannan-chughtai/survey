import { Button, Card, Grid, Radio, RadioGroup } from "@mui/material";
import React from "react";
import profile_user from "../assets/profile_user.jpg";
import "./css/styles.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";

export default function Students_list() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {field: "regno",headerName:"Reg No", flex: 1},
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
              style={{ backgroundColor: "#51BE78" }}
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
    { id: 1, regno: "3865",   name: "Muzamil Aziz", dept: "Computer" },
    { id: 2, regno: "3865",     name: "Muzamil Aziz", dept: "Computer" },
    { id: 3, regno: "3865",     name: "Muzamil Aziz", dept: "Computer" },
    { id: 4, regno: "3865",     name: "Muzamil Aziz", dept: "Computer" },
    { id: 5, regno: "3865",     name: "Muzamil Aziz", dept: "Computer" },
  ];
  return (
    <div className="m-5">
      <Card style={{ padding: 70 }}>
        <div className="row " style={{ marginBottom: 10 }}>
          <div className="col-md-10">
            <h4>Students Enrollment</h4>
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
