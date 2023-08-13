

  import {
    Button,
    IconButton,
    Card,
    Box,
    TextField,
  } from "@mui/material";
  
import axios from 'axios'
  import React, { useState } from "react";
  import TextareaAutosize from "@mui/base/TextareaAutosize";
export default function Add_Uni_Mission() {
  const [mission, setmission] = useState('');
    const[keyword,setkeyword]=useState([]);
    function handlekeydown(e){
      if(e.key!=='Enter') return
      const value=e.target.value;
      if(!value.trim()) return
      setkeyword([...keyword,value]);
      e.target.value = '';
    }
    const addunimission = async () => {
        try {
          const data={
            mission:mission,
            keyword:keyword
          }
        console.log(mission,{keyword});
        const url='http://localhost:8081/insertmision';
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
                Add University Mission
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
                   University Mission
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
                      marginLeft: "20px",
                      marginTop: "10px",
                      fontWeight: "bold",
                      color: "#346448",
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
                    onClick={addunimission}
                  >
                    Insert
                  </Button>
                </div>
              </div>
          </Box>
        </Card>
      </div>
    );
  }