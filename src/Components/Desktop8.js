import React, { useState, useEffect } from "react";
import {
  Paper,
  Grid,
  Button,
  IconButton,
  Card,
  Modal,
  Box,
  TextField,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import axios from "axios";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import InputLabel from "@mui/material/InputLabel";

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

export default function Desktop8() {
  const [dept, setDept] = useState("");
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    // Fetch the departments
    const url = "http://localhost:8081/getdepartment";
    axios
      .get(url)
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching departments:", error);
      });
  }, []);

  const [keyword, setKeyword] = useState({
    mission: "",
    keywords: [{ number: 1, keyword: "" }],
  });

  const addKeyword = () => {
    setKeyword((prevKeyword) => ({
      ...prevKeyword,
      keywords: [
        ...prevKeyword.keywords,
        { number: prevKeyword.keywords.length + 1, keyword: "" },
      ],
    }));
  };

  const handleChangeMission = (event) => {
    setKeyword((prevKeyword) => ({
      ...prevKeyword,
      mission: event.target.value,
    }));
  };

  const removeLine = (index) => {
    setKeyword((prevKeyword) => {
      const newKeywords = [...prevKeyword.keywords];
      newKeywords.splice(index, 1);
      newKeywords.forEach((keyword, index) => {
        keyword.number = index + 1;
      });
      return {
        ...prevKeyword,
        keywords: newKeywords,
      };
    });
  };

  const handleKeywordsChange = (index, event) => {
    setKeyword((prevKeyword) => {
      const newKeywords = [...prevKeyword.keywords];
      newKeywords[index].keyword = event.target.value;
      return {
        ...prevKeyword,
        keywords: newKeywords,
      };
    });
  };

  async function submit(e) {
    e.preventDefault();
    console.log("keywords", keyword);
    const url = "http://localhost:8081/insertmission";
    const data = {
      keyword: keyword,
    };
    try {
      const result = await axios.post(url, data);
      if (result.status !== 200) {
        alert("error");
      }
      console.log(result.data.message);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAdd = () => setOpen(false);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [prog, setProg] = useState("");
  const [programs, setPrograms] = useState([]);
  const handleDeptChange = (event) => {
    setDept(event.target.value);
  };
  useEffect(() => {
    if (dept) {
      // Fetch the Programs based on department
      const url = `http://localhost:8081/programs/${dept}`;
      axios
        .get(url)
        .then((response) => {
          setPrograms(response.data);
        })
        .catch((error) => {
          console.error("Error fetching programs:", error);
        });
    } else {
      setPrograms([]);
    }
  }, [dept]);

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
              Add Program Mission
            </h5>

            {keyword.keywords.map((val, index) => (
              <React.Fragment key={index}>
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
                    <TextField
                      fullWidth
                      variant="filled"
                      value={dept}
                      onChange={(e) => setDept(e.target.value)}
                      size="small"
                      select
                      className="inputfield"
                      placeholder="Select department"
                    >
                      {departments.map((dept) => (
                        <MenuItem key={dept.dept_id} value={dept.dept_id}>
                          {dept.name}
                        </MenuItem>
                      ))}
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
                      Program
                    </h6>
                  </div>
                  <div className="col-md-8">
                    <TextField
                      fullWidth
                      variant="filled"
                      value={prog}
                      onChange={(e) => setProg(e.target.value)}
                      size="small"
                      select
                      className="inputfield"
                      placeholder="Select program"
                    >
                      {programs.map((program) => (
                        <MenuItem
                          key={program.program_id}
                          value={program.program_id}
                        >
                          {program.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </div>
              </React.Fragment>
            ))}

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
                  value={keyword.mission}
                  onChange={handleChangeMission}
                  style={{ backgroundColor: "white" }}
                  required
                  className="mb-4"
                  size="small"
                  color="success"
                  fullWidth
                  id="outlined-basic"
                  label="Enter Mission"
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
                  onClick={addKeyword}
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

            {keyword.keywords.map((val, index) => (
              <React.Fragment key={index}>
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
                      Program Mission Keyword {val.number}
                    </h6>
                  </div>
                  <div className="col-md-8">
                    <TextField
                      value={val.keyword}
                      onChange={(event) => handleKeywordsChange(index, event)}
                      style={{ minWidth: 80, backgroundColor: "white" }}
                      size="small"
                      fullWidth
                      label="Enter Keyboard Name"
                    />
                  </div>
                  <div className="col-md-1">
                    <IconButton
                      sx={{
                        color: "#346448",
                      }}
                      onClick={() => removeLine(index)}
                    >
                      <CancelIcon />
                    </IconButton>
                  </div>
                </div>
              </React.Fragment>
            ))}

            {keyword.keywords.map((val, index) => (
              <React.Fragment key={index}>
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
                      University Mission Keyword
                    </h6>
                  </div>
                  <div className="col-md-8">
                    <FormControl
                      value={val.keyword}
                      onChange={(event) => handleKeywordsChange(index, event)}
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
                        value={age}
                        onChange={handleChange}
                        autoWidth
                        color="success"
                        label="Select"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Computer Science</MenuItem>
                        <MenuItem value={21}>Software Engineering</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-md-1">
                    <IconButton
                      sx={{
                        color: "#346448",
                      }}
                      onClick={() => removeLine(index)}
                    >
                      <CancelIcon />
                    </IconButton>
                  </div>
                </div>
              </React.Fragment>
            ))}

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
