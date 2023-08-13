import * as React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Card,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AssessmentIcon from "@mui/icons-material/Assessment";
import "./css/styles.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import profile_user from "../assets/profile_user.jpg";
import { Assessment, Help } from "@mui/icons-material";
import ArticleIcon from "@mui/icons-material/Article";
import { Link } from "react-router-dom";

const hdStyle = {
  fontFamily: "Mplus 1p",
  fontSize: "13px",
  fontWeight: "500",
  lineheight: "12px",
  letterspacing: " 0em",
  textAlign: "left",
  padding: 0,
  margin: 0,
};

export default function STDashboard() {
  const navigate=useNavigate(); 
    return (

    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <div>
        
            <div className="row">
                <div className="col-md-8">
                    
          <Card>
            <div style={{ padding: 20 }} className="row ">
              <div className="col-md-2 ">
                <Avatar >
                  <img src={profile_user}></img>
                </Avatar>
              </div>
              <div className=" col-md-10 " style={{ textAlign: "left" }}>
                <h4
                  style={{
                    color: "#346448",
                    fontWeight: "bold",
                    font: "Mplus 1p",
                  }}
                >
                  Muzamil Aziz
                </h4>

                <p style={hdStyle}>Father’s Name: Muhammad Khalid Awan</p>
                <p style={hdStyle}>
                  Program: Bachelor of Science in Software Engineering (4 Years)
                </p>
                <p style={hdStyle}>Reg No: 3355</p>
                <p style={hdStyle}>Roll No: AUIC-19FL-BSSE-3355</p>
                <p style={hdStyle}>Campus: Islamabad Campus</p>
              </div>
            </div>
          </Card>
          <div style={{ marginTop: 20 }}>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <Card style={{ padding: 20 }}> Current CGPA</Card>
                  </div>
                  <div className="col-md-6">
                    <Card style={{ padding: 20 }}>Last GPA</Card>
                  </div>
                  <div className="col-md-12" style={{ marginTop: 10 }}>
                    <Card style={{ padding: 20 }}>
                      Credit Attempted<br></br> Credit Earned<br></br> Credit
                      Required{" "}
                    </Card>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <Card style={{ padding: 20 }}>
                  Graph <br></br>P1<br></br>P2<br></br>
                </Card>
              </div>
            </div>
            <div className="row" style={{ marginTop: 10 }}>
              <div className="col-md-12">
                <Card style={{ padding: 20 }}> PLO Graph</Card>
              </div>
            </div>

            <div className="row" style={{ marginTop: 10 }}>
              <div className="col-md-12">
                <Card style={{ padding: 20 }}>
                  <h5
                    style={{
                      fontWeight: "bold",
                      color: "#346448",
                      padding: 10,
                      font: "Inter",
                    }}
                  >
                    QEC Quick Forms{" "}
                  </h5>
                  <Table
                    component={Paper}
                    style={{
                      backgroundColor: " #F5F5F5",
                      padding: 10,
                      marginTop: 10,
                    }}
                  >
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className=" row  ">
                            <div
                              className="col-1"
                              style={{ paddingLeft: "30px" }}
                            >
                              <Avatar
                                style={{
                                  width: "120%",
                                  height: "100%",
                                  backgroundColor: "#346448",
                                }}
                              >
                                <ArticleIcon style={{ color: "white" }} />
                              </Avatar>
                            </div>
                            <div className="col-11">
                              <h6
                                style={{
                                  color: "#346448",
                                  fontWeight: "bold",
                                  font: "Inter",
                                }}
                              >
                                Course Evaluation
                              </h6>
                              <p style={{ fontSize: "13px", font: "Inter" }}>
                                Teacher can enter student's marks.
                              </p>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className=" row  ">
                            <div
                              className="col-1"
                              style={{ paddingLeft: "30px" }}
                            >
                              <Avatar
                                style={{
                                  width: "120%",
                                  height: "100%",
                                  backgroundColor: "#346448",
                                }}
                              >
                                <ArticleIcon style={{ color: "white" }} />
                              </Avatar>
                            </div>
                            <div className="col-11">
                              <h6
                                style={{
                                  color: "#346448",
                                  fontWeight: "bold",
                                  font: "Inter",
                                }}
                              >
                                Course Evaluation
                              </h6>
                              <p style={{ fontSize: "13px", font: "Inter" }}>
                                Teacher can enter student's marks.
                              </p>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className=" row  ">
                            <div
                              className="col-1"
                              style={{ paddingLeft: "30px" }}
                            >
                              <Avatar
                                style={{
                                  width: "120%",
                                  height: "100%",
                                  backgroundColor: "#346448",
                                }}
                              >
                                <ArticleIcon style={{ color: "white" }} />
                              </Avatar>
                            </div>
                            <div className="col-11">
                              <h6
                                style={{
                                  color: "#346448",
                                  fontWeight: "bold",
                                  font: "Inter",
                                }}
                              >
                                Course Evaluation
                              </h6>
                              <p style={{ fontSize: "13px", font: "Inter" }}>
                                Teacher can enter student's marks.
                              </p>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className=" row  ">
                            <div
                              className="col-1"
                              style={{ paddingLeft: "30px" }}
                            >
                              <Avatar
                                style={{
                                  width: "120%",
                                  height: "100%",
                                  backgroundColor: "#346448",
                                }}
                              >
                                <ArticleIcon style={{ color: "white" }} />
                              </Avatar>
                            </div>
                            <div className="col-11">
                              <h6
                                style={{
                                  color: "#346448",
                                  fontWeight: "bold",
                                  font: "Inter",
                                }}
                              >
                                Course Evaluation
                              </h6>
                              <p style={{ fontSize: "13px", font: "Inter" }}>
                                Teacher can enter student's marks.
                              </p>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>
              </div>
            </div>
          </div>
 
          </div>

<div className="col-md-4">

<Card>

{/* <div className="row " >
   
<div className="col">
<Button  onClick={()=>navigate('/Dashboard/Dep_Mission')} startIcon={<AssessmentIcon/>}endIcon={<AssessmentIcon sx={{marginLeft:'80px'}} />}  >CQI Conducted Process</Button>
</div>
</div> */}

{/* <div className="row " >
   
<div className="col">
<Button onClick={()=>navigate('/Dashboard/Uni_Mission')} startIcon={<AssessmentIcon/>}endIcon={<AssessmentIcon sx={{marginLeft:'80px'}} />}  >CQI Conducted Process</Button>
</div>
</div> */}

<div className="row " >
   
<div className="col">
<Button onClick={()=>('/Dashboard/Prog_Mission')} startIcon={<AssessmentIcon/>}endIcon={<AssessmentIcon sx={{marginLeft:'80px'}} />}  >CQI Conducted Process</Button>
</div>
</div>
<div className="row " >
   
<div className="col">
<Button onClick={()=>navigate('/Dashboard/Mission_CS')} startIcon={<AssessmentIcon/>}endIcon={<AssessmentIcon sx={{marginLeft:'80px'}} />}  >CQI Conducted Process</Button>
</div>
</div>
<div className="row " >
   
<div className="col">
<Button onClick={()=>navigate('/Dashboard/Mission_SE')} startIcon={<AssessmentIcon/>}endIcon={<AssessmentIcon sx={{marginLeft:'80px'}} />}  >CQI Conducted Process</Button>
</div>
</div>
<div className="row " >
   
<div className="col">
<Button  onClick={()=>navigate('/Dashboard/Mission_CS_keyword')} startIcon={<AssessmentIcon/>}endIcon={<AssessmentIcon sx={{marginLeft:'80px'}} />}  >CQI Conducted Process</Button>
</div>
</div>


<div className="row">
<div className="col">
<Button  onClick={()=>navigate('/Dashboard/Desktop8')} startIcon={<AssessmentIcon/>}endIcon={<AssessmentIcon sx={{marginLeft:'80px'}} />}  >CQI Conducted Process</Button>
</div>
</div>

<div className="row">
<div className="col">
<Button  onClick={()=>navigate('/Dashboard/Bloom_taxonomy')} startIcon={<AssessmentIcon/>}endIcon={<AssessmentIcon sx={{marginLeft:'80px'}} />}  >CQI Conducted Process</Button>
</div>
</div>


<div className="row">
<div className="col">
<Button  onClick={()=>navigate('/Dashboard/Program_Learning')} startIcon={<AssessmentIcon/>}endIcon={<AssessmentIcon sx={{marginLeft:'80px'}} />}  >CQI Conducted Process</Button>
</div>
</div>



<div className="row">
<div className="col">
<Button  onClick={()=>navigate('/Dashboard/PLO_evaluation')} startIcon={<AssessmentIcon/>}endIcon={<AssessmentIcon sx={{marginLeft:'80px'}} />}  >CQI Conducted Process</Button>
</div>
</div>



<div className="row">
<div className="col">
<Button  onClick={()=>navigate('/Dashboard/PEO_evaluation')} startIcon={<AssessmentIcon/>}endIcon={<AssessmentIcon sx={{marginLeft:'80px'}} />}  >CQI Conducted Process</Button>
</div>
</div>


<div className="row">
<div className="col">
<Button  onClick={()=>navigate('/Dashboard/Exit_survey')} startIcon={<AssessmentIcon/>}endIcon={<AssessmentIcon sx={{marginLeft:'80px'}} />}  >CQI Conducted Process</Button>
</div>
</div>


<div className="row">
<div className="col">
<Button  onClick={()=>navigate('/Dashboard/PLO_eva')} startIcon={<AssessmentIcon/>}endIcon={<AssessmentIcon sx={{marginLeft:'80px'}} />}  >CQI Conducted Process</Button>
</div>
</div>



<div className="row">
<div className="col">
<Button  onClick={()=>navigate('/Dashboard/Alumni_survey')} startIcon={<AssessmentIcon/>}endIcon={<AssessmentIcon sx={{marginLeft:'80px'}} />}  >CQI Conducted Process</Button>
</div>
</div>



<div className="row">
<div className="col">
<Button  onClick={()=>navigate('/Dashboard/Employer_survey')} startIcon={<AssessmentIcon/>}endIcon={<AssessmentIcon sx={{marginLeft:'80px'}} />}  >CQI Conducted Process</Button>
</div>
</div>



<div className="row">
<div className="col">
<Button  onClick={()=>navigate('/Dashboard/PLO_Eva_Smesters')} startIcon={<AssessmentIcon/>}endIcon={<AssessmentIcon sx={{marginLeft:'80px'}} />}  >CQI Conducted Process</Button>
</div>
</div>


</Card>
</div>

            </div>
        </div>
      </Container>
    </>
  );
}