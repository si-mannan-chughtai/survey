import React, { useEffect, useContext, useState } from "react";

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
import Edit_DepMission from "./Edit_DepMission";

export default function Dep_Mission() {
  const { department, programs } = useContext(AppContext);
  const [editDepartment, setEditDepartment] = useState(false)
  console.log("department", department)

  return (
    <>
      {editDepartment ? <Edit_DepMission setEditDepartment = {setEditDepartment}/> :
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
                  Department Mission{" "}
                </h1>
              </div>
              <div>

                <EditIcon onClick={() => setEditDepartment(true)} style={{ color: "#346448" }} />

              </div>
            </div>

            <div style={{ paddingLeft: "20px" }}>
              <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
                Department of {department && department.name}
              </h3>
              {department && <p>{department.mission}</p>}

              {department &&
                department.keywords.map((keyword) => (
                  <h6
                    key={keyword.number} // Make sure to provide a unique key
                    style={{
                      fontWeight: "bold",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    {keyword.keyword}
                  </h6>
                ))}

              {/* {depMission &&
            depMission.keywords.map((keyword) => (
              <h6
                style={{
                  fontWeight: "bold",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                {keyword.keyword}
              </h6>
            ))} */}

              {/* <p>
            Through internationally recognized programs that produce competitive
            graduates equipped with the knowledge, leadership skills, ability to
            engage in life-long learning, and professional integrity.
          </p>
          <h6
            style={{
              fontWeight: "bold",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            5.1 Research
          </h6>
          <p>
            Through innovative research that contributes to the development of
            the national knowledge economy and the discipline.
          </p>
          <h6
            style={{
              fontWeight: "bold",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            6.1 High Sense of Social Responsibility
          </h6> */}
              {/* <p style={{ marginBottom: "30px" }}>
            Through building local and regional partnerships; providing
            expertise, resources, and services to the community; and
            contributing to the development of the IT sector nationally and
            regionally.
          </p> */}
              <h3 style={{ marginBottom: "20px" }}>
                Department of Computing Mission
              </h3>
              <p>
                The Department of Computing offers the following degree programs:
              </p>
              <ol>
                {programs && programs.map((program) => <li>{program.name}</li>)}
              </ol>
            </div>
          </Card>
        </div>
      }
    </>
  );
}