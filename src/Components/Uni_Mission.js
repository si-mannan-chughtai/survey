import React, { useContext, useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Card } from "@mui/material";
import { AppContext } from "../context";
import Edit_UniMission from './Edit_UniMission'

export default function Uni_vision() {
  const { university, updateUniversityById } = useContext(AppContext);
  const [mission, setMission] = useState(null);
  const [editMission, setEditMission] = useState(false)


  const updateMission = (updatedMission) => {
    setMission(updatedMission);
    university.mission = updatedMission
    console.log({ university })
    updateUniversityById(university)
  };

  useEffect(() => {
    const { mission } = university || {};
    mission && setMission(mission);
  }, [university]);
  return (
    <>
      {editMission ? <Edit_UniMission  updateMission={updateMission} UniMission={mission.statement} keywords={mission.keywords} setEditMission={setEditMission} />
        :
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
                    University Mission
                  </h1>
                </center>
              </div>
              <div>
                <EditIcon onClick={() => university && setEditMission(true)} style={{ color: "#346448" }} />
                {/* </Link> */}
              </div>
            </div>

            <div style={{ paddingLeft: "20px" }}>
              <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
                University Mission Statement
              </h3>

              <p>{mission && mission.statement}</p>

              <h3 style={{ marginBottom: "20px" }}>University Mission Keywords</h3>

              <ol>
                {mission && mission.keywords.map((keyword) => <li>{keyword}</li>)}
              </ol>
            </div>
          </Card>
        </div>
      }
    </>);
}
