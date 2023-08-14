import * as React from "react";
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
export default function PLOs_view() {
  const { university, currentProgram, currentPeo } =
    React.useContext(AppContext);
  console.log({ currentPeo });
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
            <h3
              style={{
                textAlign: "center",
                marginBottom: "40px",
                fontWeight: "bold",
                color: "#346448",
              }}
            >
              {" "}
              Program Education Objectives{" "}
            </h3>
          </div>
          <div>
            <Link to="/Dashboard/Edit_PEOs">
              <EditIcon style={{ color: "#346448" }} />
            </Link>
          </div>
        </div>

        <p style={{ marginBottom: "30px" }}>
          Program Educational Objectives (PEOs) are the attributes and abilities
          that the graduates are expected to demonstrate within four to five
          years of graduation. The PEOs are direct translation of program
          mission and are aligned with university mission and program mission.
          The PEOs stipulate the high-level program objectives and provide a
          broad framework to design program learning outcomes, curriculum and
          its provision.{" "}
        </p>

        <p>The following are the approved PEOs:</p>
        <ol>
          <li>
            Are competent, employable and demonstrate sound knowledge and skills
            meeting needs of the modern computing practice and software
            industry.
          </li>

          <li>
            Are effective in communication and interpersonal skills with high
            professional and ethical standards.
          </li>

          <li>
            Are engaged in continuous pursuit of knowledge through research,
            continuous education and/or professional development.
          </li>
        </ol>

        <h5 style={{ fontWeight: "bold", color: "#346448" }}>
          Mapping of PEOs to Vision and Mission of University and Program
          Mission{" "}
        </h5>

        <div className="table-responsive" style={{ textAlign: "center" }}>
          <table className="table table-bordered">
            <thead
              style={{
                backgroundColor: "#346448",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <tr>
                <td rowspan="2" colSpan={2}>
                  {" "}
                  University and Program Mission{" "}
                </td>
                <td colSpan={currentPeo ? currentPeo.keywords.length : 1}>
                  {" "}
                  Program Education Objectives (PEOs)
                </td>
              </tr>
              <tr>
                {currentPeo &&
                  currentPeo.keywords.map((keyword) => <td>{keyword.name}</td>)}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>University Vision </td>
                <td>{university && university.vision.statement}</td>
                {currentPeo &&
                  currentPeo.keywords.map((keyword) => (
                    <td>
                      {university.vision.keywords.includes(
                        keyword.universityVision
                      )
                        ? "X"
                        : "-"}
                    </td>
                  ))}
              </tr>

              <tr>
                <td>University Mission </td>
                <td>{university && university.mission.statement}</td>
                {currentPeo &&
                  currentPeo.keywords.map((keyword) => (
                    <td>
                      {university.mission.keywords.includes(
                        keyword.universityMission
                      )
                        ? "X"
                        : "-"}
                    </td>
                  ))}
              </tr>

              <tr>
                <td>Program Mission </td>
                <td>{currentProgram && currentProgram.mission}</td>
                {currentPeo &&
                  currentPeo.keywords.map((keyword) => (
                    <td>
                      {currentProgram.keywords.find(
                        (programKeyword) =>
                          programKeyword.programMission ===
                          keyword.programMission
                      )
                        ? "X"
                        : "-"}
                    </td>
                  ))}
              </tr>

              <tr></tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
