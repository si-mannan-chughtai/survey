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

export default function Employer_survey() {
  const[ name,setName] = useState('');
  const[ designation,setDesignation] = useState('');
  const[organaziationName,setorganizationName]=useState('');
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
              Employer Survey
              <br></br>
              <h6>The purpose of this survey is to obtain HoD/Sectional Head input on the quality of education. QEC requires assessing the quality of the academic program. The survey is with regard to university graduates employed in your section. We seek your help in completing this survey.</h6>
            </h4>

                     

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
      <div style={{ fontWeight: 'bold' }}>Name of HoD/Section Head</div>
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

    </div>

            <h6 style={{fontWeight:"bold"}}>Company Profile</h6>
            <table className="table table-bordered" 
              style={{border: "1px solid black"}}>
              {/* <thead style={{backgroundColor:"#346448",color:"white"}}>                  */}
             
                <tbody >
                <tr >
                
                  <th>
                  <FormControl>

<FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"10px",paddingLeft:"40px",color:"black",fontWeight:"bold"}}>Type of Company</FormLabel>
</FormControl>
</th>

                  <th>
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"10px",paddingLeft:"40px",color:"black",fontWeight:"bold"}}>Number of Staff</FormLabel>
                    </FormControl>
</th>
                 
                  </tr>
                  <tr>
                    <td>
                   
<RadioGroup
 row
 aria-labelledby="demo-row-radio-buttons-group-label"
 name="row-radio-buttons-group"
>

 <FormControlLabel value="1" control={<Radio /> } label="Public"  style={{marginLeft:"30px",marginRight: "220px"}} />
 
 <FormControlLabel value="2" control={<Radio />} label="Private" style={{marginLeft:"30px",marginRight: "130px"}}/>

 
 

</RadioGroup>

                    </td>
                    <td>
                    <RadioGroup
 row
 aria-labelledby="demo-row-radio-buttons-group-label"
 name="row-radio-buttons-group"
>
 <FormControlLabel value="1" control={<Radio /> } label="Fewer than 5 personnel"  style={{marginLeft:"30px",marginRight: "130px"}} />
 <FormControlLabel value="2" control={<Radio />} label="5-20 personnel" style={{marginLeft:"30px",marginRight: "130px"}}/>
 <FormControlLabel value="3" control={<Radio /> } label="20-50 personnel"  style={{marginLeft:"30px",marginRight: "130px"}} />
 <FormControlLabel value="4" control={<Radio />} label="51-150 personnel" style={{marginLeft:"30px",marginRight: "130px"}}/>
 <FormControlLabel value="5" control={<Radio /> } label="more than 150 personnel"  style={{marginLeft:"30px",marginRight: "30px"}} />

</RadioGroup>
                    </td>
                    </tr> 
                  <tr>
                                    
                  <th>
                  <FormControl>

<FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"10px",paddingLeft:"40px",color:"Black",fontWeight:"bold"}}>Type of Industry</FormLabel>
</FormControl>
</th>

                  <th>
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"10px",paddingLeft:"40px",color:"Black",fontWeight:"bold"}}>Annual Sales Turn over</FormLabel>
                    </FormControl>
</th>

                  
</tr>

<tr>
                    <td>
                   
<RadioGroup
 row
 aria-labelledby="demo-row-radio-buttons-group-label"
 name="row-radio-buttons-group"
>

 <FormControlLabel value="1" control={<Radio /> } label="Information Technology & Communication"  style={{marginLeft:"30px",marginRight: "130px"}} />
 <FormControlLabel value="2" control={<Radio />} label="Game development" style={{marginLeft:"30px",marginRight: "130px"}}/>
 <FormControlLabel value="3" control={<Radio /> } label="Software development"  style={{marginLeft:"30px",marginRight: "130px"}} />
 <FormControlLabel value="4" control={<Radio />} label="Other" style={{marginLeft:"30px",marginRight: "130px"}}/>

 
 

</RadioGroup>

                    </td>
                    <td>
                    <RadioGroup
 row
 aria-labelledby="demo-row-radio-buttons-group-label"
 name="row-radio-buttons-group"
>
 <FormControlLabel value="1" control={<Radio /> } label="less than 250,000"  style={{marginLeft:"30px",marginRight: "130px"}} />
 <FormControlLabel value="2" control={<Radio />} label="250,000-1 million" style={{marginLeft:"30px",marginRight: "130px"}}/>
 <FormControlLabel value="3" control={<Radio /> } label="1 million-5 million"  style={{marginLeft:"30px",marginRight: "130px"}} />
 <FormControlLabel value="4" control={<Radio />} label="more than 5 million" style={{marginLeft:"30px",marginRight: "130px"}}/>
 
</RadioGroup>
                    </td>
                    </tr> 
                   
                    </tbody>
                    </table>              

              <table className="table table-bordered" 
              style={{border: "1px solid black"}}>
              <thead style={{backgroundColor:"#346448",color:"white",fontWeight:"Bold",paddingLeft:"80px"}}>Achievement Scale</thead>
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