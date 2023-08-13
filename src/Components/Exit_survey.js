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

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


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

export default function Alumni_survey() {
  const [mission, setmission] = useState('');
  const[ name,setName] = useState('');
  const[ designation,setDesignation] = useState('');
  const[ graduationYear,setGraduationYear] = useState('');
  const [degree,setdegreeProgram] =useState('');
  const[organaziationName,setorganizationName]=useState('');
  const[workExperience,setworkExperience]=useState('');
  
  
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
            paddingLeft:"30px",
            paddingRight:"30px"
           
          }}
        >
          <div>
            <h4
                            style={{
                textAlign: "center",
                padding: "10px",
                color: "white",
                // width: "100%",
                backgroundColor: "#346448",
              }}
            >
              Exit Survey
              <br></br>
              <h6>Feedback regarding education at the university</h6>
            </h4>






            <div className="container">
  <div className="row">
    <div className="col">
      <div style={{ fontWeight: 'bold' }}>Name</div>
      <TextField
        style={{ backgroundColor: 'white' }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="mb-1"
        color="success"
        fullWidth
        id="outlined-basic"
        label="Enter Name"
        variant="outlined"
      />
    </div>
    <div className="col">
      <div style={{ fontWeight: 'bold' }}>Degree Program</div>
      <TextField
        style={{ backgroundColor: 'white' }}
        value={degree}
        onChange={(e) => setdegreeProgram(e.target.value)}
        className="mb-1"
        color="success"
        fullWidth
        id="outlined-basic"
        label="Enter Degree Program"
        variant="outlined"
      />
    </div>
    
    <div className="col">
      <div style={{ fontWeight: 'bold' }}>Year of Graduation</div>
      <TextField
        style={{ backgroundColor: 'white' }}
        value={graduationYear}
        onChange={(e) => setGraduationYear(e.target.value)}
        className="mb-1"
        color="success"
        fullWidth
        id="outlined-basic"
        label="Enter Year of Graduation"
        variant="outlined"
      />
    </div>
    </div>
   
    <div className="row">
      <div className="col">
      <div style={{ fontWeight: 'bold' }}>Name of Organization</div>
      <TextField
        style={{ backgroundColor: 'white' }}
        value={organaziationName}
        onChange={(e) => setorganizationName(e.target.value)}
        className="mb-1"
        color="success"
        fullWidth
        id="outlined-basic"
        label="Enter Organization Name"
        variant="outlined"
      />
    </div>




    <div className="col">
      <div style={{ fontWeight: 'bold' }}>Designation</div>
      <TextField
        style={{ backgroundColor: 'white' }}
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
        className="mb-1"
        color="success"
        fullWidth
        id="outlined-basic"
        label="Enter Designation"
        variant="outlined"
      />
    </div>

    <div className="col">
      <div style={{ fontWeight: 'bold' }}>Work Experience</div>
      <TextField
        style={{ backgroundColor: 'white' }}
        value={workExperience}
        onChange={(e) => setworkExperience(e.target.value)}
        className="mb-1"
        color="success"
        fullWidth
        id="outlined-basic"
        label="Enter Work Experience"
        variant="outlined"
      />
    </div>

  </div>
</div>

              
              <table className="table table-bordered" 
              style={{border: "1px solid black"}}>
              {/* <thead style={{backgroundColor:"#346448",color:"white"}}>                  */}
              <thead style={{backgroundColor:"#346448",color:"white"}}>Achievement Scale</thead>
                <tbody >
                 
                  <tr >
                  <td style={{paddingLeft:"20px"}}>Please provide the achievement of the alumni with reference to the following scale:
<ol style={{paddingLeft:"25px"}}>
<li>Poor </li>
<li>Fair</li>
<li> Good </li>
<li>Very good </li>
<li>Excellent </li>
</ol>
</td>
                  </tr>
                  </tbody>
                  </table>

          

<FormControl>

     <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"30px",paddingLeft:"40px",color:"#346448"}}>Classrooms or lecture halls</FormLabel>
     
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      <FormControlLabel value="1" control={<Radio /> } label="1"  style={{marginLeft:"30px",marginRight: "130px"}} />
      <FormControlLabel value="2" control={<Radio />} label="2" style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="3" control={<Radio />} label="3" style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="4" control={<Radio />} label="4" style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="4" control={<Radio />} label="5" style={{marginLeft:"30px",marginRight: "130px"}}/>
   
    </RadioGroup>
    
    <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"30px",paddingLeft:"40px",color:"#346448"}}>Campus facilities (Auditoriums, Science labs etc.)</FormLabel>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      <FormControlLabel value="1" control={<Radio /> } label="1"  style={{marginLeft:"30px",marginRight: "130px"}} />
      <FormControlLabel value="2" control={<Radio />} label="2" style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="3" control={<Radio />} label="3" style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="4" control={<Radio />} label="4 "style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="4" control={<Radio />} label="5 "style={{marginLeft:"30px",marginRight: "130px"}}/>
    </RadioGroup>


    <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"30px",paddingLeft:"40px",color:"#346448"}}>Canteen or Cafeteria</FormLabel>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      <FormControlLabel value="1" control={<Radio /> } label="1"  style={{marginLeft:"30px",marginRight: "130px"}} />
      <FormControlLabel value="2" control={<Radio />} label="2" style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="3" control={<Radio />} label="3" style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="4" control={<Radio />} label="4 "style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="4" control={<Radio />} label="5 "style={{marginLeft:"30px",marginRight: "130px"}}/>
    </RadioGroup>

    <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"30px",paddingLeft:"40px",color:"#346448"}}>Dormitories</FormLabel>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      <FormControlLabel value="1" control={<Radio /> } label="1"  style={{marginLeft:"30px",marginRight: "130px"}} />
      <FormControlLabel value="2" control={<Radio />} label="2" style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="3" control={<Radio />} label="3" style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="4" control={<Radio />} label="4 "style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="4" control={<Radio />} label="5 "style={{marginLeft:"30px",marginRight: "130px"}}/>
    </RadioGroup>



    <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"30px",paddingLeft:"40px",color:"#346448"}}>Campus facilities (Auditoriums, Science labs etc.)</FormLabel>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      <FormControlLabel value="1" control={<Radio /> } label="1"  style={{marginLeft:"30px",marginRight: "130px"}} />
      <FormControlLabel value="2" control={<Radio />} label="2" style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="3" control={<Radio />} label="3" style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="4" control={<Radio />} label="4 "style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="4" control={<Radio />} label="5 "style={{marginLeft:"30px",marginRight: "130px"}}/>
    </RadioGroup>

    <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"30px",paddingLeft:"40px",color:"#346448"}}>Campus facilities (Auditoriums, Science labs etc.)</FormLabel>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      <FormControlLabel value="1" control={<Radio /> } label="1"  style={{marginLeft:"30px",marginRight: "130px"}} />
      <FormControlLabel value="2" control={<Radio />} label="2" style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="3" control={<Radio />} label="3" style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="4" control={<Radio />} label="4 "style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="4" control={<Radio />} label="5 "style={{marginLeft:"30px",marginRight: "130px"}}/>
    </RadioGroup>

    <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"30px",paddingLeft:"40px",color:"#346448"}}>Campus facilities (Auditoriums, Science labs etc.)</FormLabel>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
     <FormControlLabel value="1" control={<Radio /> } label="1"  style={{marginLeft:"30px",marginRight: "130px"}} />
      <FormControlLabel value="2" control={<Radio />} label="2" style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="3" control={<Radio />} label="3" style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="4" control={<Radio />} label="4 "style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="4" control={<Radio />} label="5 "style={{marginLeft:"30px",marginRight: "130px"}}/>
    </RadioGroup>


    <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"30px",paddingLeft:"40px",color:"#346448"}}>Campus facilities (Auditoriums, Science labs etc.)</FormLabel>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
     <FormControlLabel value="1" control={<Radio /> } label="1"  style={{marginLeft:"30px",marginRight: "130px"}} />
      <FormControlLabel value="2" control={<Radio />} label="2" style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="3" control={<Radio />} label="3" style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="4" control={<Radio />} label="4 "style={{marginLeft:"30px",marginRight: "130px"}}/>
      <FormControlLabel value="4" control={<Radio />} label="5 "style={{marginLeft:"30px",marginRight: "130px"}}/>
    </RadioGroup>

  </FormControl>
          <br></br>
          <h4 style={{paddingLeft:"15px",fontWeight:"bold"}}>General Comments</h4>
          <p style={{paddingLeft:"15px"}}>
          Please make any additional comments or suggestions, which you think would help strengthen our programs. (New courses that you would recommend and courses that you did not gain much from)
          </p>
          <br></br>
          <div className="col-md-11" style={{marginLeft:"20px"}}>
              <TextField
              // value={mission}
              // onChange={(e)=>setmission(e.target.value)}
                    variant="outlined"
                    sx={{ backgroundColor: "white" }}
                    fullWidth
                    placeholder=""
                  />
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