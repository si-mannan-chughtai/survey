import {
  Button,
  IconButton,
  Card,
  Box,
  TextField,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { useState, useContext, useEffect } from "react";
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
  keyword: "",
  keywordMap: ""
}

const Edit_DepMission = ({ setEditDepartment }) => {
  const { department, university, updateDepartmentById } = useContext(AppContext)
  const [updatedDepartment, setUpdatedDepartment] = useState(department)

  useEffect(() => {
    department && setUpdatedDepartment(department)
  }, [department])
 

  const addkeyword = () => {
    console.log("Add")
    setUpdatedDepartment({
      ...updatedDepartment,
      keywords: [...updatedDepartment.keywords, { ...defaultKeyword }]
    })
  };


  const removeLine = (index, event) => {
    updatedDepartment.keywords[index][event.name] = ""
    setUpdatedDepartment({ ...updatedDepartment })

  };

  const handlechangekeywords = (index, event) => {
    updatedDepartment.keywords[index][event.target.name] = event.target.value
    setUpdatedDepartment({ ...updatedDepartment })
  }


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
              Edit Department Mission
            </h5>
          
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
                    Department

                  </h6>
                </div>
                <div className="col-md-8">
                  <FormControl
                    // value={val.keyword}
                    // onChange={(event) => handlechangekeywords(index, event)}

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
                      value={department.name}
                      color="success"
                      label="Select"
                    >
                      <MenuItem value={department.name}>{department.name}</MenuItem>

                    </Select>
                  </FormControl>
                </div>
              </div>
            </>

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
                <TextareaAutosize

                  value={updatedDepartment && updatedDepartment.mission || ""}
                  onChange={(e) => setUpdatedDepartment({
                    ...updatedDepartment,
                    mission: e.target.value
                  })}

                  variant="outlined"
                  // aria-label="minimum height"
                  minRows={5}
                  fullWidth
                  placeholder="Enter Mission"
                  style={{ color: "success", borderBlockStyle: " groove;" }}
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

            {updatedDepartment && updatedDepartment.keywords.map((keyword, index) => (
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
                      Keyword {index + 1}
                    </h6>
                  </div>
                  <div className="col-md-8">
                    <TextField
                      // {...register('keyWord')}
                      value={keyword.keyword}
                      name="keyword"
                      onChange={(e) => handlechangekeywords(index, e)}
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
                      onClick={() => removeLine(index, { name: 'keyword' })}
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
                      Keyword Map
                    </h6>
                  </div>

                  <div className="col-md-8">
                    <FormControl
                      // {...register('keyWord')}

                      style={{ minWidth: 80, backgroundColor: "white" }}
                      size="small"
                      fullWidth
                    >
                      <InputLabel fullWidth id="demo-simple-select-autowidth-label">

                        Select
                      </InputLabel>
                      <Select
                        //  {...register('missionsss')}
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={keyword.keywordMap}
                        name={'keywordMap'}
                        onChange={(e) => handlechangekeywords(index, e)}
                        autoWidth
                        color="success"
                        label="Select"
                      >
                        {
                          university && university.mission.keywords.map((keyword) => {
                            return <MenuItem key={keyword} value={keyword}>{keyword}</MenuItem>

                          })
                        }
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-md-1">
                    <IconButton
                      sx={{
                        color: "#346448",
                      }}
                      onClick={() => removeLine(index, { name: 'keywordMap' })}
                    >
                      <CancelIcon />
                    </IconButton>
                  </div>
                </div>
              </>
            ))};
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
                  onClick={() => {
                    updateDepartmentById(updatedDepartment)
                    setEditDepartment(false)
                  }}
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

export default Edit_DepMission;