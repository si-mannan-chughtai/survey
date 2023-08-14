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
import React, { useContext, useEffect, useState } from "react";
import { Label } from "@mui/icons-material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AppContext } from "../context/index";

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

const defaultKeywords = {
  detail: "",
  name: "",
  peoName: "",
};

export default function Add_Program_Learning() {
  const { department, currentProgram, currentPeo, currentPlo, addUpdatePLO } =
    useContext(AppContext);
  const [plo, setPlo] = useState(
    currentPlo || { keywords: [{ ...defaultKeywords }] }
  );

  const addkeyword = () => {
    setPlo({
      ...plo,
      keywords: [...plo.keywords, { ...defaultKeywords }],
    });
  };

  const removeLine = (index, event) => {
    plo.keywords[index][event.name] = "";
    setPlo({ ...plo });
  };

  const handlechangekeywords = (index, event) => {
    console.log({ event });
    plo.keywords[index][event.target.name] = event.target.value;
    setPlo({ ...plo });
  };

  useEffect(() => {
    if (department) {
      plo.department = department._id;
    }

    if (currentProgram) {
      plo.program = currentProgram._id;
    }
    setPlo(plo);
  }, [department, currentProgram]);

  useEffect(() => {
    currentPlo && setPlo(currentPlo);
  }, [currentPlo]);

  return (
    <div className="m-3">
      <Card style={{ padding: 15 }}>
        <div className="m-4">
          <h3
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#346448",
            }}
          >
            Program Learning Outcome
          </h3>
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
              Add PLO
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

            {plo.keywords.map((keyword, index) => {
              console.log({keyword})
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
                        PLO No {index + 1}
                      </h6>
                    </div>
                    <div className="col-md-8">
                      <TextareaAutosize
                        value={keyword.detail}
                        onChange={(event) => handlechangekeywords(index, event)}
                        name="detail"
                        variant="outlined"
                        // aria-label="minimum height"
                        minRows={2}
                        fullWidth
                        placeholder="Add Detail"
                        style={{
                          color: "success",
                          borderBlockStyle: " groove;",
                        }}
                      />
                    </div>
                    <div className="col-md-1">
                      <IconButton
                        sx={{
                          color: "#346448",
                        }}
                        onClick={() => removeLine(index, { name: "detail" })}
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
                        PLO Name{index + 1}
                      </h6>
                    </div>
                    <div className="col-md-8">
                      <TextareaAutosize
                        value={keyword.name}
                        name="name"
                        onChange={(event) => handlechangekeywords(index, event)}
                        variant="outlined"
                        // aria-label="minimum height"
                        minRows={2}
                        fullWidth
                        placeholder="Add Keyword"
                        style={{
                          color: "success",
                          borderBlockStyle: " groove;",
                        }}
                      />
                    </div>
                    <div className="col-md-1">
                      <IconButton
                        sx={{
                          color: "#346448",
                        }}
                        onClick={() => removeLine(index, { name: "name" })}
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
                        PEO Map {index + 1}
                      </h6>
                    </div>
                    <div className="col-md-8">
                      <FormControl
                        value={keyword.peoName}
                        name="peoName"
                        onChange={(event) => handlechangekeywords(index, event)}
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
                          value={keyword.peoName}
                          name="peoName"
                          onChange={(event) =>
                            handlechangekeywords(index, event)
                          }
                          autoWidth
                          color="success"
                          label="Select"
                        >
                          {currentPeo &&
                            currentPeo.keywords.map((keyword) => {
                              return (
                                <MenuItem value={keyword.name}>
                                  {keyword.name}
                                </MenuItem>
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
                        onClick={() => removeLine(index, { name: "peoName" })}
                      >
                        <CancelIcon />
                      </IconButton>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

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
                onClick={() => addUpdatePLO(plo)}
              >
                Save
              </Button>
            </div>
          </div>
        </Box>
      </Card>
    </div>
  );
}
