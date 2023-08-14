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
  
  export default function Add_Program_Learning() {
    const [keyword,setkeyword]=React.useState({mission:'',keywords:[{number:1,keyword:''}]});
    const addkeyword = () => {
      const newkeyword = { ...keyword };
    newkeyword.keywords.push({
        number: newkeyword.keywords.length + 1,
       keyword:''
      });
      setkeyword(newkeyword);
      };

      const handlechangemission=(event)=>{
        const newmission = { ...keyword }; // create a new copy of the quiz object
    newmission.mission = event.target.value; // update the marks for the first question of quiz1
    setkeyword(newmission);
      }
      const removeLine = (index) => {
        const newkeyword = { ...keyword };
        newkeyword.keywords.splice(index, 1);
        newkeyword.keywords.forEach((keyword, index) => {
          keyword.number= index + 1;
        });
        setkeyword(newkeyword);
      };
  const handlechangekeywords=(index,event)=>{
const newkeyword={...keyword};
newkeyword.keywords[index].keyword=event.target.value;
setkeyword(newkeyword);
  }
  async function submit(e){
    e.preventDefault();
     console.log('keywords',keyword);
     const url='http://localhost:8081/insertmission';
     const data={
      keyword:keyword
     }
     const result=await axios.post(url,data);
     if(result.status!==200){
      alert('error');
     }
     console.log(result.data.message);
   }
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
                      <MenuItem value={10}>Computing </MenuItem>
                      <MenuItem value={21}>Electrical</MenuItem>
                      <MenuItem value={21}>Life Sciences</MenuItem>
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
                    Program
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
                      <MenuItem value={10}>Computer Science</MenuItem>
                      <MenuItem value={21}>Software Engineering</MenuItem>
                      <MenuItem value={22}>Data Sciences</MenuItem>
                    </Select>
                  </FormControl>
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




              {keyword.keywords.map((val,index)=>{
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
                    PLO No {val.number}
                  </h6>
                </div>
                <div className="col-md-8">
                  <TextareaAutosize
                  value={val.keyword}
                  onChange={(event)=>handlechangekeywords(index,event)}
                   
                    variant="outlined"
                    // aria-label="minimum height"
                    minRows={2}
                    fullWidth
                    placeholder="Add Detail"
                    style={{ color: "success", borderBlockStyle: " groove;" }}
                  />
                </div>
                <div className="col-md-1">
<IconButton
 sx={{
  color: "#346448",
}}
onClick={()=>removeLine(index)}
>
<CancelIcon/>
</IconButton>
                </div>
              </div>
              </>
              );
                  })}
              </div>




              {keyword.keywords.map((val,index)=>{
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
                    PLO Name{val.number}
                  </h6>
                </div>
                <div className="col-md-8">
                  <TextareaAutosize
                  value={val.keyword}
                  onChange={(event)=>handlechangekeywords(index,event)}
                    
                    variant="outlined"
                    // aria-label="minimum height"
                    minRows={2}
                    fullWidth
                    placeholder="Add Keyword"
                    style={{ color: "success", borderBlockStyle: " groove;" }}
                  />
                </div>
                <div className="col-md-1">
<IconButton
 sx={{
  color: "#346448",
}}
onClick={()=>removeLine(index)}
>
<CancelIcon/>
</IconButton>
                </div>
              </div>
              </>
              );
                  })}
                          
             
 {keyword.keywords.map((val,index)=>{
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
                    PEO Map {val.number}
                  </h6>
                </div>
                <div className="col-md-8">
                  <FormControl
                   value={val.keyword}
                   onChange={(event)=>handlechangekeywords(index,event)}
                     
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
                      <MenuItem value={10}>Quality Education</MenuItem>
                      <MenuItem value={21}>Problem Solving</MenuItem>
                      <MenuItem value={21}>Sense of Social Responsibility</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="col-md-1">
<IconButton
 sx={{
  color: "#346448",
}}
onClick={()=>removeLine(index)}
>
<CancelIcon/>
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
                    onClick={handleAdd}
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