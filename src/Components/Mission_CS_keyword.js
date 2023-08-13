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
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
export default function Mission_CS_keyword() {
     
    return (
        
        <div className="m-5">
        <Card style={{padding:30}}>
            
                
            <h3 style={{textAlign: "center",marginBottom: "40px",fontWeight:"bold"}}>Mission of Computer Science Program</h3>
    
            <h5 style={{marginBottom:"30px",fontWeight:"bold"}}>Computer Science Program Mission </h5>
            <p style={{marginBottom:"30px"}}>The mission of the Bachelor of Computer Science is to provide quality education, strive to impart critical thinking and problem solving using the latest technologies adhering to a sense of social responsibility and interpersonal skills.</p>
            <h5 style={{marginBottom:"30px",fontWeight:"bold"}}>Program Mission Keywords</h5>
            <p style={{marginBottom:"30px"}}>Table 1: Mapping of University Mission with Program Mission</p>


            <div
                 className="table-responsive"
                 style={{textAlign:"center"}}>

            <table className="table table-bordered">
                <thead style={{backgroundColor:"#346448",color:"white"}}>                 
                        <tr >
                             <td colspan="6">University Mission</td>
    
                             </tr>
                        <tr>
                    <td>Program Mission</td>
                    <td> Quality Education</td>
                    <td> Relevance </td>
                    <td> Research</td>
                    <td>Critical Thinking</td>
                    <td>Social Responsibility</td>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>Quality Education</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    <tr>
                        <td>Problem Solving</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    <tr>
                        <td>Social Responsibility</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
            </div>






        </Card>

        </div> 
           );
};