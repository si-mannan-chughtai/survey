import * as React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Box,
  Card,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button
} from "@mui/material";
import AssessmentIcon from "@mui/icons-material/Assessment";
import "./css/styles.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import profile_user from "../assets/profile_user.jpg";
import { AddBox, Assessment, Help } from "@mui/icons-material";
import ArticleIcon from "@mui/icons-material/Article";
import { Link } from "react-router-dom";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";

export default function Prog_Mission() {
    return (
        <Box >

        <Paper elevation={5} style={{margin: "40px",padding: "20px"}}>
        <div className="row">
            <div className="col-md-10">
                <h3 style={{fontWeight:"bold",marginTop: "10px",marginBottom: "50px"}}>Program Mission</h3>
            <Button endIcon={<AssessmentIcon sx={{marginLeft:'350px'}}/>}  >Blooms Revised Taxonomy—Cognitive Domain</Button>
            <Button endIcon={<AssessmentIcon sx={{marginLeft:'348px'}}/>}  >Bloom’s Revised Taxonomy—Affective Domain</Button>
            <Button endIcon={<AssessmentIcon sx={{marginLeft:'380px'}}/>}  >Bloom’s  Taxonomy—Psychomotor Domain</Button>
            
            </div>

        
        </div> 
        </Paper>
        </Box>
           );
};