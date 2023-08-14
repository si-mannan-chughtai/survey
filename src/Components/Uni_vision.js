import React, { useContext, useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Card } from "@mui/material";
import { AppContext } from "../context";
import Edit_Uni_vision from './Edit_Uni_vision'
import Add_Uni_Vission from "./Add_Uni_vision";

export default function Uni_vision() {
  const { university, updateUniversityById } = useContext(AppContext);
  const [vision, setVision] = useState(null);
  const [editVision, setEditVision] = useState(false)
  const [addVision, setAddVision] = useState(false)



  const updateVision = (updatedVision) => {
    setVision(updatedVision);
    university.vision = updatedVision
    console.log({ university })
    updateUniversityById(university)

  };
  useEffect(() => {
    const { vision } = university || {};
    vision && setVision(vision);
  }, [university]);

  return (
    <>
      {editVision ? <Edit_Uni_vision updateVision={updateVision} UniVision={vision.statement} keywords={vision.keywords} setEditVision={setEditVision} />
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
                <EditIcon onClick={() => setEditVision(true)} style={{ color: "#346448" }} />
                {/* </Link> */}
              </div>
            </div>

            <div style={{ paddingLeft: "20px" }}>
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
      }
    </>);
}
