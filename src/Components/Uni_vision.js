import React, { useContext, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import {
  Avatar,
  Card,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import { AppContext } from "../context";

export default function Uni_vision() {
  const { university } = useContext(AppContext);
  const [vision, setVision] = useState(null);

  useEffect(() => {
    const { vision } = university || {};
    vision && setVision(vision);
  }, [university]);

  return (
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
            {" "}
            <center>
              <h1
                className="justify content-center"
                style={{ marginBottom: "40px" }}
              >
                {" "}
                University Vission{" "}
              </h1>
            </center>
          </div>
          <div>
            <Link to="/Dashboard/Edit_Uni_vision">
              <EditIcon style={{ color: "#346448" }} />
            </Link>
          </div>
        </div>

        <div style={{ paddingLeft: "20px" }}>
          {/* <Link to='/Add_Uni_Mission'><EditIcon/></Link> */}
          <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
            University Vision Statement
          </h3>

          <p>{vision && vision.statement}</p>

          <h3 style={{ marginBottom: "20px" }}>University Vision Keywords</h3>

          <ol>
            {vision && vision.keywords.map((keyword) => <li>{keyword}</li>)}
          </ol>
        </div>
      </Card>
    </div>
  );
}
