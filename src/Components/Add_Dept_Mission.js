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
  import axios from 'axios';
  import React, { useState,useEffect } from "react";
  import MenuItem from "@mui/material/MenuItem";
  export default function Add_Dept_Mission()
   {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
      // Fetch the departments
      const url='http://localhost:8081/getdepartment';
      axios.get(url)
        .then((response) => {
          setDepartments(response.data);
        })
        .catch((error) => {
          console.error('Error fetching departments:', error);
        });
    }, []);
    const [dept, setdept] = useState('');
    const [mission,setmission]=useState('');
    const[keyword,setkeyword]=useState([]);
    function handlekeydown(e){
      if(e.key!=='Enter') return
      const value=e.target.value;
      if(!value.trim()) return
      setkeyword([...keyword,value]);
      e.target.value = '';
    }
    const adddeptmission = async () => {
      try {
        const data={
          dept:dept,
          mission:mission,
          keyword:keyword
        }
        console.log(dept,mission,{keyword})
        const url='http://localhost:8081/insertdepartmentmission';
        const result= await axios.post(url, data);
        alert(result.data.message);
      } catch (error) {
        console.error('Error inserting keywords:', error);
      }
    };
  
    const handleRemoveChip = (index) => {
      const updatedkeywords = [...keyword];
      updatedkeywords.splice(index, 1);
      setkeyword(updatedkeywords);
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
                Add Department Mission
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
                <TextField fullWidth variant='filled' value={dept} onChange={(e)=>setdept(e.target.value)} size='small'select className='inputfield'  placeholder='Select department'>
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
                    Mission
                  </h6>
                </div>
                <div className="col-md-8">
                <TextField
                value={mission}
                onChange={(e)=>setmission(e.target.value)}
                      variant="outlined"
                      sx={{ backgroundColor: "white" }}
                      fullWidth
                      placeholder="Add Mission"
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
                 Add Keywords
                  </h6>
                </div>
                <div className="col-md-8">
                <div className="tags-input-container">
                    {keyword.map((chip, index) => (
                        <div key={index} className="chip">
                          {chip}
                          <button
                            className="remove-button"
                            onClick={() => handleRemoveChip(index)}
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                      <input
                        type="text"
                        className="tags-input"
                        onKeyDown={handlekeydown}
                        placeholder="Type keywords"
                      />
                    </div>
                </div>
              </div>
              <div className="row mt-4 pb-4">
                <div className="col-md-12">
                  <Button
                  type="submit"
                    style={{
                      backgroundColor: "#346448",
                      float: "right",
                      marginRight: "9.3em",
                      padding:'5px 10px'
                    }}
                    variant="contained"
                    onClick={adddeptmission}
                  >
                    Insert
                  </Button>
                </div>
              </div>
            </div>
          </Box>
        </Card>
      </div> 
    );
  }
