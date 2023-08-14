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
  import AddCircleIcon from "@mui/icons-material/AddCircle";
  import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
  import React, { useState } from "react";
  import { Label } from "@mui/icons-material";
  import TextareaAutosize from "@mui/base/TextareaAutosize";
  import InputLabel from "@mui/material/InputLabel";
  import MenuItem from "@mui/material/MenuItem";
  import FormControl from "@mui/material/FormControl";
  import Select, { SelectChangeEvent } from "@mui/material/Select";
  
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
  
  export default function Edit_psychomotor() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleAdd = () => setOpen(false);
    const [age, setAge] = React.useState("");
  
    const handleChange = (event) => {
      setAge(event.target.value);
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
                Edit Psychomotor Domain
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
                    Domain
                  </h6>
                </div>
                <div className="col-md-8">
                  <FormControl
                    style={{ minWidth: 80, backgroundColor: "white" }}
                    size="small"
                    fullWidth
                  >
                    <InputLabel fullWidth id="demo-simple-select-autowidth-label">
                      Select
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={age}
                      onChange={handleChange}
                      autoWidth
                      color="success"
                      label="Select"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Cognitive domain</MenuItem>
                      <MenuItem value={21}>Affective domain</MenuItem>
                      <MenuItem value={21}>Psychomotor domain</MenuItem>
                    </Select>
                  </FormControl>
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
                    Category
                  </h6>
                </div>
                <div className="col-md-8">
                  <FormControl
                    style={{ minWidth: 80, backgroundColor: "white" }}
                    size="small"
                    fullWidth
                  >
                    <InputLabel fullWidth id="demo-simple-select-autowidth-label">
                      Select
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={age}
                      onChange={handleChange}
                      autoWidth
                      color="success"
                      label="Select"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Twenty</MenuItem>
                      <MenuItem value={21}>Twenty one</MenuItem>
                      <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                  </FormControl>
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
                    Detail{" "}
                  </h6>
                </div>
                <div className="col-md-8">
                  <TextareaAutosize
                    variant="outlined"
                    // aria-label="minimum height"
                    minRows={3}
                    fullWidth
                    placeholder="Add Detail"
                    style={{ color: "success", borderBlockStyle: " groove;" }}
                  />
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
                    Keyword{" "}
                  </h6>
                </div>
                <div className="col-md-8">
                  <TextareaAutosize
                    variant="outlined"
                    // aria-label="minimum height"
                    minRows={5}
                    fullWidth
                    placeholder="Add Keyword"
                    style={{ color: "success", borderBlockStyle: " groove;" }}
                  />
                </div>
              </div>
             
              <div className="row mt-4 pb-4">
                <div className="col-md-12">
                  <Button
                    style={{
                      backgroundColor: "#346448",
                      float: "right",
                      marginRight: "20px",
                    }}
                    variant="contained"
                    size="small"
                    onClick={handleAdd}
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