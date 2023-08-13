import { Button } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import profile_user from "../assets/profile_user.jpg";
import "./css/styles.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { Padding } from "@mui/icons-material";

const rows = [
  { id: 1, courseName: "AI" },
  { id: 2, courseName: "DBMS" },
  { id: 3, courseName: "AI" },
  { id: 4, courseName: "DBMS" },
  { id: 5, courseName: "AI" },
  { id: 6, courseName: "DBMS" },
  { id: 7, courseName: "AI" },
  { id: 8, courseName: "DBMS" },
];

export default function Attendance() {
  const navigate = useNavigate();
  const rows = [
    { id: 1, courseName: "AI" },
    { id: 2, courseName: "DBMS" },
    { id: 3, courseName: "AI" },
    { id: 4, courseName: "DBMS" },
    { id: 5, courseName: "AI" },
    { id: 6, courseName: "DBMS" },
    { id: 7, courseName: "AI" },
    { id: 8, courseName: "DBMS" },
  ];
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "courseName",
      headerName: "Course Name",
      editable: false,
      flex: 3,
    },

    {
      field: "Add",
      headerName: "Enroll Teacher",
      flex: 1,
      editable: false,
      renderCell: () => {
        return (
          <>
            <Button
              variant="contained"
              size="small"
              style={{ backgroundColor: "#346448" }}
              onClick={() => {
                navigate("/Dashboard/QEC_Dashboard");
              }}
            >
              Enroll Teacher
            </Button>
          </>
        );
      },
    },

    {
      field: "View",
      headerName: "Enroll Students",
      flex: 1,
      editable: false,
      renderCell: () => {
        return (
          <Button
            style={{ backgroundColor: "#346448" }}
            variant="contained"
            size="small"
            onClick={() => {
              navigate("/Dashboard/View_Attendance");
            }}
          >
            Enroll Students
          </Button>
        );
      },
    },
  ];

  return (
    <div>
      <div className="p-4">
        <Card style={{padding:40}}>

        
        <h4> Course Name</h4>
        <DataGrid
          style={{ height: 1000, width: "100%" }}
          rows={rows}
          columns={columns}
          pageSize={12}
          rowsPerPageOptions={[6]}
        />
        </Card>
      </div>
    </div>
  );
}
