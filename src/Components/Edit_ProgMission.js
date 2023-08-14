import {
  Paper,
  Grid,
  Button,
  IconButton,
  Card,
  Modal,
  Box,
  TextField,
} from "@mui/material";
import axios from "axios";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React, { useEffect, useState } from "react";
import { Label } from "@mui/icons-material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AppContext } from "../context";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #346446",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const defaultKeyword = {
  programMission: "",
  universityMission: "",
};

export default function Desktop8() {
  const { department, currentProgram, university, updateProgramById } =
    React.useContext(AppContext);
  const [updatedProgram, setUpdatedProgram] = useState(currentProgram);

  useEffect(() => {
    currentProgram && setUpdatedProgram(currentProgram);
  }, [currentProgram]);

  const addkeyword = () => {
    updatedProgram.keywords = [
      ...updatedProgram.keywords,
      { ...defaultKeyword },
    ];
    setUpdatedProgram({ ...updatedProgram });
  };

  const handlechangemission = (event) => {
    // const newmission = { ...keyword }; // create a new copy of the quiz object
    // newmission.mission = event.target.value; // update the marks for the first question of quiz1
    // setkeyword(newmission);
  };
  const removeLine = (index, event) => {
    updatedProgram.keywords[index][event.name] = "";
    setUpdatedProgram({ ...updatedProgram });
  };
  const handlechangekeywords = (index, event) => {
    updatedProgram.keywords[index][event.target.name] = event.target.value;
    // console.log({ index, event, updatedProgram });
    setUpdatedProgram({ ...updatedProgram });
  };
  console.log({ updatedProgram });
  return (
    <div className="m-3">
      <Card style={{ padding: 15 }}>
        <div className="m-4">
          {/* <h3
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#346448",
            }}
          >
            Program Mission
          </h3> */}
        </div>
        <Box
          className="m-5"
          style={{
            width: "auto",
            height: "auto",
            backgroundColor: "#f5f5f5",
            // '&:hover': {
            //   backgroundColor: 'primary.main',
            //   opacity: [0.9, 0.8, 0.7],
            // },
          }}
        >
          <div>
            <h5
              style={{
                textAlign: "center",
                padding: "10px",
                color: "white",
                // width: "100%",
                backgroundColor: "#346448",
              }}
            >
              Edit Program Mission
            </h5>

            <div className="row mt-4 pb-4">
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
                    Department
                  </h6>
                </div>
                <div className="col-md-8">
                  {department && (
                    <FormControl
                      style={{ minWidth: 80, backgroundColor: "white" }}
                      size="small"
                      fullWidth
                    >
                      <InputLabel
                        fullWidth
                        id="demo-simple-select-autowidth-label"
                      >
                        Select
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={department.name || ""}
                        // onChange={handleChange}
                        autoWidth
                        color="success"
                        label="Select"
                      >
                        {/* <MenuItem value="">
                      <em>None</em>
                    </MenuItem> */}
                        <MenuItem value={department.name || ""}>
                          {department.name || ""}{" "}
                        </MenuItem>
                        {/* <MenuItem value={21}>Electrical</MenuItem> */}
                        {/* <MenuItem value={21}>Life Sciences</MenuItem> */}
                      </Select>
                    </FormControl>
                  )}
                </div>
              </div>

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
                    Program
                  </h6>
                </div>
                <div className="col-md-8">
                  {currentProgram && (
                    <FormControl
                      style={{ minWidth: 80, backgroundColor: "white" }}
                      size="small"
                      fullWidth
                    >
                      <InputLabel
                        fullWidth
                        id="demo-simple-select-autowidth-label"
                      >
                        Select
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={currentProgram.name}
                        // onChange={handleChange}
                        autoWidth
                        color="success"
                        label="Select"
                      >
                        {/* <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Computer Science</MenuItem>
                    <MenuItem value={21}>Software Engineering</MenuItem> */}
                        <MenuItem value={currentProgram.name}>
                          {currentProgram.name || ""}
                        </MenuItem>
                      </Select>
                    </FormControl>
                  )}
                </div>
              </div>
            </div>

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
                  Mission{" "}
                </h6>
              </div>
              <div className="col-md-8">
                <TextField
                  // value={keyword.mission}
                  onChange={(event) =>
                    setUpdatedProgram({
                      ...updatedProgram,
                      mission: event.target.value,
                    })
                  }
                  style={{ backgroundColor: "white" }}
                  required
                  className="mb-4"
                  size="small"
                  color="success"
                  fullWidth
                  id="outlined-basic"
                  label="Enter Mission"
                  value={(updatedProgram && updatedProgram.mission) || ""}
                  variant="outlined"
                />
              </div>
            </div>
            <div className="row mt-4 pb-4">
              <div className="col-md-4">
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
              <div className="col-md-1 offset-md-6">
                <IconButton
                  onClick={addkeyword}
                  sx={{
                    marginLeft: "90px",
                    marginTop: "20px",
                    color: "#346448",
                  }}
                >
                  <AddCircleIcon />
                </IconButton>
              </div>
            </div>
            {updatedProgram &&
              updatedProgram.keywords.map((keyword, index) => {
                return (
                  <>
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
                          Program Mission Keyword{index + 1}
                        </h6>
                      </div>
                      <div className="col-md-8">
                        <TextField
                          value={keyword.programMission}
                          name="programMission"
                          onChange={(event) =>
                            handlechangekeywords(index, event)
                          }
                          style={{ minWidth: 80, backgroundColor: "white" }}
                          size="small"
                          fullWidth
                          label="Enter Keyboard Name"
                        ></TextField>
                      </div>

                      <div className="col-md-1">
                        <IconButton
                          sx={{
                            color: "#346448",
                          }}
                          onClick={() =>
                            removeLine(index, { name: "programMission" })
                          }
                        >
                          <CancelIcon />
                        </IconButton>
                      </div>
                    </div>

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
                          University Mission Keyboard
                        </h6>
                      </div>
                      <div className="col-md-8">
                        <FormControl
                          style={{ minWidth: 80, backgroundColor: "white" }}
                          size="small"
                          fullWidth
                        >
                          <InputLabel
                            fullWidth
                            id="demo-simple-select-autowidth-label"
                          >
                            Select
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={keyword && (keyword.universityMission || "")}
                            name={"universityMission"}
                            onChange={(e) => handlechangekeywords(index, e)}
                            autoWidth
                            color="success"
                            label="Select"
                          >
                            {university &&
                              university.mission.keywords.map((keyword) => {
                                return (
                                  <MenuItem value={keyword}>{keyword}</MenuItem>
                                );
                              })}
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-md-1">
                        <IconButton
                          sx={{
                            color: "#346448",
                          }}
                          onClick={() =>
                            removeLine(index, { name: "universityMission" })
                          }
                        >
                          <CancelIcon />
                        </IconButton>
                      </div>
                    </div>
                  </>
                );
              })}

            <div className="row mt-4 pb-4">
              <div className="col-md-12">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#346448",
                    float: "right",
                    marginRight: "20px",
                  }}
                  variant="contained"
                  size="small"
                  onClick={() => updateProgramById(updatedProgram)}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Card>
    </div>
  );
}
