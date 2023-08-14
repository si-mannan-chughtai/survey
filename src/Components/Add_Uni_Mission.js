import { Button, Card, Box, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";

export default function Add_Uni_Mission() {
  const { university, updateUniversityById } = useContext(AppContext);

  const [mission, setMission] = useState(null);
  const [keyword, setKeyword] = useState([]);
  const [uniMission, setUniMission] = useState(null);

  const handleRemoveChip = (index) => {
    const updatedkeywords = [...keyword];
    updatedkeywords.splice(index, 1);
    setKeyword(updatedkeywords);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = e.target.value.trim();
      if (value !== '') {
        setKeyword([...keyword, value]);
        e.target.value = '';
      }
    }
  };

  const updateMission = (updatedMission) => {
    setUniMission(updatedMission);
    university.mission = updatedMission
    console.log({ university })
    updateUniversityById(university)

  };

  const addMission = async () => {
    const updatedMission = {
      statement: mission,
      keywords: keyword,
    };
    updateMission(updatedMission)
  };
  return (
    <div className="m-3">
      <Card style={{ padding: 15 }}>
        <div className="m-4">
        </div>
        <Box
          className="m-5"
          style={{
            width: "auto",
            height: "auto",
            backgroundColor: "#f5f5f5",
          }}
        >
          <div>
            <h5
              style={{
                textAlign: "center",
                padding: "10px",
                color: "white",
                backgroundColor: "#346448",
              }}
            >
              Add University Mission
            </h5>

            <div className="row mt-4 pb-4">
              <div className="col-md-3">
                <h6
                  style={{
                    marginTop: "10px",
                    marginLeft: "20px",
                    color: "#346648",
                    fontWeight: "bold",
                  }}
                >
                  Mission
                </h6>
              </div>
              <div className="col-md-8">
                <TextField
                  value={mission}
                  onChange={(e) => setMission(e.target.value)}
                  variant="outlined"
                  sx={{ backgroundColor: "white" }}
                  fullWidth
                  placeholder="Add Mission"
                />
              </div>
            </div>
            <div className="row mt-4 pb-4">
              <div className="col-md-3">
                <h6
                  style={{
                    marginLeft: "20px",
                    marginTop: "10px",
                    fontWeight: "bold",
                    color: "#346448",
                  }}
                >
                  Add Keywords
                </h6>
              </div>
              <div className="col-md-8">
                <div className="tags-input-container">
                  <>
                    {keyword && keyword.map((chip, index) => (
                      <div key={index} className="chip">
                        {chip}
                        <button
                          className="remove-button"
                          onClick={() => handleRemoveChip(index)}
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </>
                  <input
                    type="text"
                    className="tags-input"
                    onKeyDown={handleKeyDown}
                    placeholder="Type keywords"
                  />

                </div>
              </div>
            </div>
            <div className="row mt-4 pb-4">
              <div className="col-md-12">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#346448",
                    float: "right",
                    marginRight: "10em",
                    padding: '5px 10px'
                  }}
                  variant="contained"
                  onClick={addMission}
                >
                  Insert
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Card>
    </div>
  );
}