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
export default function PLO_evaluation() {
     
    return (
        
        <div className="m-5">
        <Card style={{padding:30}}>
            
                
            <h3 style={{textAlign: "center",marginBottom: "30px",color:"#346448",fontWeight:"bold"}}>PEO Evaluation</h3>
    
            
            <h5 style={{marginBottom:"30px",color:"#346448"}}>Muzamil Aziz (3865)</h5>


            <div
                 className="table-responsive"
                 style={{textAlign:"center"}}>

            <table className="table table-bordered">
                <thead style={{backgroundColor:"#346448",color:"white"}}>                 
                       
                        <tr>
                    <td>Sr</td>
                    <td> PEOs</td>
                    <td> Measurment Tool</td>
                    <td>% of Attainment</td>
                  
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>PEO 1</td>
                        <td>Alumni Survey</td>
                        <td>75%</td>
                        
                    </tr>

                    <tr>
                    <td>2</td>
                    <td>PEO 1</td>
                    <td>Employer Survey</td>
                    <td>84%</td>             
                    </tr>

                    <tr>
                    <td>3</td>
                    <td>PEO 1</td>
                    <td>Alumni Survey</td>
                    <td>94%</td>
                    </tr>

                    <tr>
                    <td>4</td>
                    <td>PEO 2</td>
                    <td>Employer Survey (a)</td>
                    <td>98%</td>
                    </tr>

                    <tr>
                    <td>5</td>
                    <td>PEO 2</td>
                    <td>Employer Survey (b)</td>
                    <td>87%</td>
                    </tr>


                    <tr>
                    <td>6</td>
                    <td>PEO 3</td>
                    <td>Alumni Survey</td>
                    
                    <td>95%</td>
                    </tr>

                    




                </tbody>
            </table>
            </div>






        </Card>

        </div> 
           );
};