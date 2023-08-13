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
export default function CLO_evaluation() {
     
    return (
        
        <div className="m-5">
        <Card style={{padding:30}}>
            
                
            <h3 style={{textAlign: "center",marginBottom: "30px",color:"#346448",fontWeight:"bold"}}>CLO Evaluation</h3>
    
            
            <h5 style={{marginBottom:"30px",color:"#346448"}}>Muzamil Aziz (3865)</h5>


            <div
                 className="table-responsive"
                 style={{textAlign:"center"}}>

            <table className="table table-bordered">
                <thead style={{backgroundColor:"#346448",color:"white"}}>                 
                       
                        <tr>
                    <td>Sr</td>
                    <td> PLO No</td>
                    <td> PLO Name </td>
                    <td> PEO Mapping</td>
                    <td>% of Attainment</td>
                  
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>cLO 1</td>
                        <td>Knowledge</td>
                        <td>PLO 1,PLO 3</td>
                        <td>75%</td>
                        
                    </tr>

                    <tr>
                    <td>2</td>
                    <td>CLO 2</td>
                    <td>Comprehension</td>
                    <td>PLO 1</td>
                    <td>85%</td>
                    </tr>

                    <tr>
                    <td>3</td>
                    <td>CLO 3</td>
                    <td>Application</td>
                    <td>PLO 1</td>
                    <td>83%</td>
                    </tr>

                    <tr>
                    <td>4</td>
                    <td>CLO 4</td>
                    <td>Analysis</td>
                    <td>PLO 4</td>
                    <td>90%</td>
                    </tr>

                    



                </tbody>
            </table>
            </div>






        </Card>

        </div> 
           );
};