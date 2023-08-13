
import React, { useEffect,useState } from "react";
import {
  Button,
  IconButton,
  Card,
  Box,
  TextField,
  MenuItem,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Bloom_taxonomy() {
const navigate=useNavigate();
  const [level, setLevel] = useState({
    domain: "",
    levels: [
      {
        no: 1,
        levelname: "",
        detail: "",
      keyword: [],
      },
    ],
  });

  const addLevel = () => {
    const newLevel = { ...level };
    newLevel.levels.push({
      no: newLevel.levels.length + 1,
      levelname: "",
      detail: "",
      keyword: [],
    });
    setLevel(newLevel);
  };

  const handleRemoveLevel = (levelIndex) => {
    const newLevel = { ...level };
    newLevel.levels.splice(levelIndex, 1);
    newLevel.levels.forEach((level, index) => {
      level.no = index + 1;
    });
    setLevel(newLevel);
  };

  const handleKeyDown = (e, levelIndex) => {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    const newLevel = { ...level };
    newLevel.levels[levelIndex].keyword.push(
     value
    );
    setLevel(newLevel);
    e.target.value = "";
  };

  const handleRemoveChip = (levelIndex, index) => {
    const newLevel = { ...level };
    newLevel.levels[levelIndex].keyword.splice(index, 1);
    setLevel(newLevel);
  };
async function handleAdd(e){
  e.preventDefault();
  const url='http://localhost:8081/domainlevel';
  const result=await axios.post(url,level);
  if(result.status!==200)
  {
    alert("error");
  }
  alert(result.data.message);
  if(level.domain==1){
    navigate('/Dashboard/Congnitve_domain');
  }
  else if(level.domain==2){
    navigate('/Dashboard/Psychomotor_Domain');
  }
  else if(level.domain==3){
    navigate('/Dashboard/Affective_Domain');
  }
  else{
    console.log("domain is not selected");
  }
  console.log(level);
}
const [data, setData] = useState([]);
useEffect(() => {
  const urll='http://localhost:8081/getdomain';
  axios.get(urll)
    .then(response => {
      console.log(response.data);
      setData(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}, []);
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
            Bloom Taxonomy
          </h3>
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
              Add Bloom Taxonomy Domains Level
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
                <TextField
                  fullWidth
                  variant="filled"
                  size="small"
                  select
                  placeholder="Select Domain"
                  value={level.domain}
                  onChange={(e) =>
                    setLevel({ ...level, domain: e.target.value })
                  }
                >
                   {data.map(row => (
                  <MenuItem value={row.domain_id}>{row.Name}</MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
            <div className="row">
              <div className="col mt-1 d-flex justify-content-start quizcontent">
                <p
                  style={{
                    marginTop: "10px",
                    marginLeft: "20px",
                    color: "#346648",
                    fontWeight: "bold",
                  }}
                >
                  Add Levels
                </p>
              </div>
              <div className="col d-flex justify-content-end">
                <IconButton onClick={addLevel} sx={{ marginRight: "4.5em" }}>
                  <AddCircleIcon className="plusiconbutton" sx={{ color: "#346448" }} />
                </IconButton>
              </div>
            </div>
            {level.levels.map((level, levelIndex) => (
              <React.Fragment key={level.no}>
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
                      Level No {level.no}
                    </h6>
                  </div>
                  <div className="col-md-7">
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={level.levelname}
                      // onChange={(e) =>
                      //   setLevel({
                      //     ...level,
                      //     levelname: e.target.value,
                      //   })
                      // }
                      onChange={(e) =>
                        setLevel((prevState) => ({
                          ...prevState,
                          levels: prevState.levels.map((lvl, index) =>
                            index === levelIndex ? { ...lvl, levelname: e.target.value } : lvl
                          ),
                        }))
                      }
                      sx={{ backgroundColor: "white" }}
                      placeholder="Enter Level"
                    />
                  </div>
                  <div className="col d-flex justify-content-end">
                    <IconButton sx={{ marginRight: "4.5em" }} onClick={() => handleRemoveLevel(levelIndex)}>
                      <CancelIcon className="plusiconbutton" sx={{ color: "#346448" }} />
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
                      Detail
                    </h6>
                  </div>
                  <div className="col-md-7">
                    <TextField
                      variant="outlined"
                      sx={{ backgroundColor: "white" }}
                      fullWidth
                      value={level.detail}
                      // onChange={(e) =>
                      //   setLevel({ ...level, detail: e.target.value })
                      // }
                      onChange={(e) =>
                        setLevel((prevState) => ({
                          ...prevState,
                          levels: prevState.levels.map((lvl, index) =>
                            index === levelIndex ? { ...lvl, detail: e.target.value } : lvl
                          ),
                        }))
                      }
                      placeholder="Add Detail"
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
                      Keyword
                    </h6>
                  </div>
                  <div className="col-md-7">
                    <div className="tags-input-container">
                      {level.keyword.map((chip, index) => (
                        <div key={index} className="chip">
                          {chip}
                          <button
                            className="remove-button"
                            onClick={() => handleRemoveChip(levelIndex, index)}
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                      <input
                        type="text"
                        className="tags-input"
                        onKeyDown={(e) => handleKeyDown(e, levelIndex)}
                        placeholder="Type keywords"
                      />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
            <div className="row mt-4 pb-4">
              <div className="col-md-12">
                <Button
                  style={{
                    backgroundColor: "#346448",
                    float: "right",
                    marginRight: "8.5em",
                    padding: "5px 15px 5px 15px",
                  }}
                  variant="contained"
                  size="small"
                  onClick={handleAdd}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Card>
    </div>
  );
}
