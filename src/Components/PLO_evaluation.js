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
            
                
            <h3 style={{textAlign: "center",marginBottom: "30px",color:"#346448",fontWeight:"bold"}}>PLO Evaluation</h3>
    
            
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
                        <td>PLO 1</td>
                        <td>Academic Education</td>
                        <td>PEO 1,PEO 3</td>
                        <td>75%</td>
                        
                    </tr>

                    <tr>
                    <td>2</td>
                    <td>PLO 2</td>
                    <td>Knowledge for solving computing problems</td>
                    <td>PEO 1</td>
                    <td>85%</td>
                    </tr>

                    <tr>
                    <td>3</td>
                    <td>PLO 3</td>
                    <td>Problem Analysis</td>
                    <td>PEO 1</td>
                    <td>83%</td>
                    </tr>

                    <tr>
                    <td>4</td>
                    <td>PLO 4</td>
                    <td>Design/ Development of solution</td>
                    <td>PEO 1</td>
                    <td>90%</td>
                    </tr>

                    <tr>
                    <td>5</td>
                    <td>PLO 5</td>
                    <td>Modern Tool Usage</td>
                    <td>PEO 1</td>
                    <td>85%</td>
                    </tr>


                    <tr>
                    <td>6</td>
                    <td>PLO 6</td>
                    <td>Individual and Team Work</td>
                    <td>PEO 1</td>
                    <td>95%</td>
                    </tr>

                    <tr>
                    <td>7</td>
                    <td>PLO 3</td>
                    <td>Communication</td>
                    <td>PEO 2</td>
                    <td>83%</td>
                    </tr>

                    <tr>
                    <td>8</td>
                    <td>PLO 8</td>
                    <td>Computing professionalism and society</td>
                    <td>PEO 1,PEO 2</td>
                    <td>95%</td>
                    </tr>

                    <tr>
                    <td>9</td>
                    <td>PLO 9</td>
                    <td>Ethics</td>
                    <td>PEO 1,PEO 2</td>
                    <td>95%</td>
                    </tr>

                    <tr>
                    <td>10</td>
                    <td>PLO 10</td>
                    <td>Life-long Learning</td>
                    <td>PEO 1,PEO 2,PEO 3</td>
                    <td>93%</td>
                    </tr>




                </tbody>
            </table>
            </div>






        </Card>

        </div> 
           );
};