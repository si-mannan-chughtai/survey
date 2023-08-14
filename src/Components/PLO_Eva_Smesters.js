import {
    Paper,
    Grid,
    Button,
    TableCell,
    IconButton,
    TableRow,
    Table,
    TableHead,
    TableBody,
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
  import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";


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
  
  export default function PLO_eva() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleAdd = () => setOpen(false);
    const [age, setAge] = React.useState("");
  
    const handleChange = (event) => {
      setAge(event.target.value);
      };

      const handleClick = () => 
      setOpen(!open);
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
              PLO Evaluation
            </h3>
          </div>
          
            <div className="mb-4">
             

            <Box sx={{ maxWidth: { xs: 300, sm: 1100 }, bgcolor: 'background.paper',size:"small" }}>
            <Tabs
        value={age}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        
      >
        <Tab  style={{border:"solid",borderRadius: '40px', borderWidth: "thin", marginRight:"10px"}} label="All" />
        <Tab style={{border:"solid",borderRadius: '40px', borderWidth: "thin", marginRight:"10px"}} label="Computing" />
        <Tab style={{border:"solid",borderRadius: '40px', borderWidth: "thin", marginRight:"10px"}} label="Electrical Engineering" />
        <Tab style={{border:"solid",borderRadius: '40px', borderWidth: "thin", marginRight:"10px"}} label="Civil Engineering" />
        <Tab style={{border:"solid",borderRadius: '40px', borderWidth: "thin", marginRight:"10px"}} label="Managment and Social Sciences" />
        <Tab style={{border:"solid",borderRadius: '40px', borderWidth: "thin", marginRight:"10px"}} label="Pharmacy" />
        <Tab style={{border:"solid",borderRadius: '40px', borderWidth: "thin", marginRight:"10px"}} label="HN&D" />
        <Tab style={{border:"solid",borderRadius: '40px', borderWidth: "thin", marginRight:"10px"}} label="Rehabiliation & Health Sciences" />
        <Tab style={{border:"solid",borderRadius: '40px', borderWidth: "thin", marginRight:"10px"}} label="Life Sciences" />
        <Tab style={{border:"solid",borderRadius: '40px', borderWidth: "thin", marginRight:"10px"}} label="HN&D" />
      </Tabs>
      </Box>
</div>


<div className="mt-4">
          <List
            component={Paper}
            style={{ width: "100%", backgroundColor: "#F5F5F5" }}
            
          >
            <ListItemButton onClick={handleClick} sx={{borderBottom:'1px solid white',height:'35px'}}>
              <ListItemText  style={{
                    color: "#346448",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}>
                  CS100-Introduction to Computing
                {/* </p> */}
              </ListItemText>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <Table
                    style={{
                      backgroundColor: "white",
                      borderColor: "grey",
                      overflowX: "auto",
                    }}
                    className="table-bordered "
                    fixed
                  >
                    <TableHead style={{ backgroundColor: "#346448" }}>
                      <TableRow>
                        <TableCell
                          align="center"
                          style={{ color: "white" }}
                          colspan="2"
                        >
                          Content
                        </TableCell>
                        <TableCell align="left" style={{ color: "white" }}>
                          CLO 1
                        </TableCell>
                        <TableCell align="left" style={{ color: "white" }}>
                          CLO 2
                        </TableCell>
                        <TableCell align="left" style={{ color: "white" }}>
                          CLO 3
                        </TableCell>
                        <TableCell align="left" style={{ color: "white" }}>
                          CLO 4
                        </TableCell>
                        <TableCell align="left" style={{ color: "white" }}>
                          CLO 5
                        </TableCell>
                        <TableCell align="left" style={{ color: "white" }}>
                          CLO 6
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell rowSpan={4} className="Cellstyle"  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' ,textAlign:'center'}}>Assignments</TableCell>
                        <TableCell>Q0</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q1</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q2</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell rowSpan={4} className="Cellstyle"  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' ,textAlign:'center' }}>Quizzes</TableCell>
                        <TableCell>Q0</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q1</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q2</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell rowSpan={9}  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', textAlign: 'center',  }}>Mid Term</TableCell>
                        <TableCell>Q0</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q1</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q2</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell rowSpan={10}  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', textAlign: 'center',  }}>Final Terms</TableCell>
                        <TableCell>Q0</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q1</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q2</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell rowSpan={10}  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', textAlign: 'center',  }}>Lab Practicals</TableCell>
                        <TableCell>Q0</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q1</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q2</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Q3</TableCell>
                        <TableCell>5</TableCell> <TableCell>3</TableCell>{" "}
                        <TableCell>1</TableCell> <TableCell>-</TableCell>{" "}
                        <TableCell>2</TableCell> <TableCell>4</TableCell>
                      </TableRow>
 
                    </TableBody>
                  </Table>
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleClick} sx={{borderBottom:'1px solid white',height:'35px'}}>
              <ListItemText  style={{
                    color: "#346448",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}>
               
                 
                
                  CS100-Introduction to Computing
                
              </ListItemText>{" "}
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText  style={{
                        color: "#346448",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}>
                
                     
                    
                      CS100-Introduction to Computing
                   
                  </ListItemText>{" "}
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleClick} sx={{borderBottom:'1px solid white',height:'35px'}}>
              <ListItemText  style={{
                    color: "#346448",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}>
                
                 
                
                  CS100-Introduction to Computing
               
              </ListItemText>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleClick} sx={{borderBottom:'1px solid white',height:'35px'}}>
              <ListItemText style={{
                    color: "#346448",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                
                  
                  CS100-Introduction to Computing
                
              </ListItemText>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
           
          </List>
        </div>

          
        </Card>
      </div>
    );
  }