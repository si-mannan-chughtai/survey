import {Button,Card,Box,TextField} from "@mui/material";
import { AppContext } from "../context";
import React, { useContext, useEffect, useState } from "react";

export default function Add_Uni_Vission({UniVision , keywords , setEditVision , updateVision}) {
  const [vision, setvision] = useState(UniVision);
  const[keyword , setKeyword] = useState(keywords || []);

  const handleRemoveChip = (index) => {
    const updatedkeywords = [...keyword];
    updatedkeywords.splice(index, 1);
    setKeyword(updatedkeywords);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = e.target.value.trim();
      if (value !== '') {
        setKeyword([...keyword, value]);
        e.target.value = ''; 
      }
    }
  };

  console.log("vision Helo" , vision)
  const addvision = async () => {
    const updatedVision = {
      statement: vision,
      keywords: keyword,
    };
    updateVision(updatedVision)
    setEditVision(false);
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
                    <>
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
                    </>
                    <input
                      type="text"
                      className="tags-input"
                      onKeyDown={handleKeyDown}
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