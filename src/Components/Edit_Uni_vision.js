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
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";

export default function Add_Uni_Mission() {
  const [vision, setvision] = useState('');
  const[keyword,setkeyword]=useState([]);
  function handlekeydown(e){
    if(e.key!=='Enter') return
    const value=e.target.value;
    if(!value.trim()) return
    setkeyword([...keyword,value]);
    e.target.value = '';
  }
  const addvision = async () => {
    try {
      const data={
        vision:vision,
        keyword:keyword
      }
      console.log(vision,keyword);
    const url='http://localhost:8081/insertvision';
    const result= await axios.post(url, data);
    alert(result.data.message);
    //  toast(result.data.message,{
    //   position: "top-left",
    //   autoClose: 5000,
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   });
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
                backgroundColor: "#346448",
              }}
            >
              Edit University Vision
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
                  Vision
                </h6>
              </div>
              <div className="col-md-8">
                  <TextField
                  value={vision}
                  onChange={(e)=>setvision(e.target.value)}
                    variant="outlined"
                    sx={{ backgroundColor: "white" }}
                    fullWidth
                    placeholder="Add Vision"
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
            <div className="row mt-4 pb-4">
              <div className="col-md-12">
                <Button
                type="submit"
                  style={{
                    backgroundColor: "#346448",
                    float: "right",
                    marginRight: "10em",
                    padding:'5px 10px'
                  }}
                  variant="contained"
                  onClick={addvision}
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