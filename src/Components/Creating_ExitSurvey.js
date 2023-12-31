import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import axios from "axios";
export default function AddProgramLearning() {
  const [survey, setSurvey] = useState({
    user: "",
    survey: "",
    plo: [
      {
        plodetail: "",
        questions: [
          {
            detail: "",
          },
        ],
      },
    ],
  });


  const removePlo = (ploIndex) => {
    const updatedSurvey = { ...survey };
    updatedSurvey.plo = updatedSurvey.plo.filter(
      (_, index) => index !== ploIndex
    );
    setSurvey(updatedSurvey);
  };

  const addPlo = () => {
    const newSurvey = { ...survey };
    newSurvey.plo.push({
      plodetail: "",
      questions: [],
    });
    setSurvey(newSurvey);
  };

  const addQuestion = (ploIndex) => {
    const newSurvey = { ...survey };
    const currentQuestionObject = newSurvey.plo[ploIndex];
    currentQuestionObject.questions.push({
      detail: "",
    });
    setSurvey(newSurvey);
  };

  return (
    <div className="m-3">
      <Card style={{ padding: 15 }}>
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
              Creating Survey Forms
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
                  Survey
                </h6>
              </div>
              <div className="col-md-8">
                <TextField
                  fullWidth
                  variant="filled"
                  size="small"
                  select
                  value={survey.survey}
                  onChange={(e) =>
                    setSurvey({ ...survey, survey: e.target.value })
                  }
                >
                  <MenuItem value={0}>Alumni Survey</MenuItem>
                  <MenuItem value={1}>Employer survey</MenuItem>
                  <MenuItem value={2}>Exit survey</MenuItem>
                </TextField>
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
                  User
                </h6>
              </div>
              <div className="col-md-8">
                <TextField
                  fullWidth
                  variant="filled"
                  size="small"
                  select
                  value={survey.user}
                  onChange={(e) =>
                    setSurvey({ ...survey, user: e.target.value })
                  }
                >
                  <MenuItem value={0}>Student</MenuItem>
                  <MenuItem value={1}>Teacher</MenuItem>
                  <MenuItem value={2}>Admin</MenuItem>
                </TextField>
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
                  Add PLOs
                </h6>
              </div>
              <div className="col-md-1 offset-md-6">
                <IconButton
                  sx={{
                    marginLeft: "90px",
                    marginTop: "20px",
                    color: "#346448",
                  }}
                  onClick={addPlo}
                >
                  <AddCircleIcon />
                </IconButton>
              </div>
            </div>

            {survey.plo.map((val, ploIndex) => {
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
                        PLOs
                      </h6>
                    </div>
                    <div className="col-md-8">
                      <TextField
                        fullWidth
                        variant="filled"
                        size="small"
                        select
                        value={val.plodetail}
                        onChange={(e) => {
                          const updatedSurvey = { ...survey };
                          updatedSurvey.plo[ploIndex].plodetail =
                            e.target.value;
                          setSurvey(updatedSurvey);
                        }}
                      >
                        <MenuItem value={0}>PLO1</MenuItem>
                        <MenuItem value={1}>PLO2</MenuItem>
                        <MenuItem value={2}>PLO3</MenuItem>
                      </TextField>
                    </div>
                    <div className="col-md-1">
                    <IconButton
                      sx={{
                        color: "#346448",
                      }}
                      onClick={() => removePlo(ploIndex)}
                    >
                      <CancelIcon />
                    </IconButton>
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
                        Add Questions
                      </h6>
                    </div>
                    <div className="col-md-1 offset-md-6">
                      <IconButton
                        sx={{
                          marginLeft: "90px",
                          marginTop: "20px",
                          color: "#346448",
                        }}
                        onClick={() => addQuestion(ploIndex)}
                      >
                        <AddCircleIcon />
                      </IconButton>
                    </div>
                  </div>

                  {val.questions.map((ques, quesIndex) => {
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
                              Question No {quesIndex + 1}
                            </h6>
                          </div>
                          <div className="col-md-8">
                            <TextField
                              style={{ backgroundColor: "white" }}
                              required
                              className="mb-4"
                              value={ques.detail}
                              color="success"
                              fullWidth
                              id="outlined-basic"
                              label="Enter Questions"
                              variant="outlined"
                              onChange={(e) => {
                                const updatedSurvey = { ...survey };
                                updatedSurvey.plo[ploIndex].questions[
                                  quesIndex
                                ].detail = e.target.value;
                                setSurvey(updatedSurvey);
                              }}
                            />
                          </div>
                          <div className="col-md-1">
                            <IconButton
      sx={{
        color: "#346448",
      }}
      onClick={() => {
        const updatedSurvey = { ...survey };
        updatedSurvey.plo[ploIndex].questions.splice(quesIndex, 1);
        setSurvey(updatedSurvey);
      }}
    >
      <CancelIcon />
    </IconButton>
                          </div>
                        </div>
                      </>
                    );
                  })}
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








