import React, { useContext, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Card,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { AppContext } from "../context";

import CancelIcon from '@mui/icons-material/Cancel';
import DoneIcon from '@mui/icons-material/Done';
export default function Mission_SE() {
  const { currentProgram, university } = useContext(AppContext);
  const [program, setProgram] = useState(null);
  const [universityMission, setUniversityMission] = useState(null);
  useEffect(() => {
    currentProgram && setProgram(currentProgram);
    const { mission } = university || {};
    mission && setUniversityMission(mission);
  }, [currentProgram, university]);
  return (
    // <div className="m-5">
    // <Card style={{padding:30}}>
    <div className="m-5">
      <Card style={{ padding: 30 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
              {" "}
              Program Mission{" "}
            </h1>
          </div>
          <div>
            <Link to="/Dashboard/Edit_ProgMission">
              <EditIcon style={{ color: "#346448" }} />
            </Link>
          </div>
        </div>
        <h3
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontWeight: "bold",
          }}
        >
          Mission of {program && program.name} Program
        </h3>
        <h5 style={{ marginBottom: "30px", fontWeight: "bold" }}>
          {program && program.name} Program Mission{" "}
        </h5>
        <p style={{ marginBottom: "30px" }}>{program && program.mission}</p>
        <h5 style={{ marginBottom: "30px", fontWeight: "bold" }}>
          Program Mission Keywords
        </h5>
        <p style={{ marginBottom: "30px" }}>
          Table 1: Mapping of University Mission with Program Mission
        </p>
        <div className="table-responsive" style={{ textAlign: "center" }}>
          <table className="table table-bordered">
            <thead style={{ backgroundColor: "#346448", color: "white" }}>
              <tr>
                <td colspan="6">University Mission</td>
              </tr>
              <tr>
                <td>Program Mission</td>
                {universityMission && universityMission.keywords.map((keyword) => {
                  return <td>{keyword}</td>;
                })}
              </tr>
            </thead>
            {program && program.keywords.map((data) => {
              return <tbody>
                <tr>
                  <td>{data.programMission}</td>
                  {universityMission && universityMission.keywords.map((keyword) => data.programMission === keyword ? <td><DoneIcon/></td> : <td><CancelIcon/></td>)}
                  {/* <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td> */}
                </tr>
                {/* <tr>
                  <td>Problem Solving</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Social Responsibility</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr> */}
              </tbody>
            }
            )}
          </table>
        </div>
      </Card>
    </div>
  );
}