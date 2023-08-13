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
export default function Mission_CS() {
     
    return (
        
        <div className="m-5">
        <Card style={{padding:30}}>
            <div className="row">
                <div className="col-md-1"> </div>
                <div className="col-md-10">
            <h3 style={{textAlign: "center",marginBottom: "40px"}}>Mission of Computer Science Program</h3>
            </div>
            <div className="col-md-1">
                <EditIcon></EditIcon>
            </div>
            </div>
            <h5 style={{marginBottom:"30px",fontWeight:"bold"}}>Bloom’s Revised Taxonomy—Cognitive Domain </h5>
            <p style={{marginBottom:"30px"}}>Lorin Anderson, a former student of Bloom, revisited the cognitive domain in the learning taxonomy in the mid-nineties and made some changes, with perhaps  the two most prominent ones being, 1) changing the names in the six categories from noun to verb forms, and 2) slightly rearranging them (Anderson,  Krathwohl, Airasian, Cruikshank, Mayer, Pintrich, Raths, Wittrock, 2000; Pohl, 2000). This new taxonomy reflects a more active form of thinking and is  perhaps more accurate:</p>
            <div
                 className="table-responsive"
                 style={{textAlign:"center"}}>

            <table className="table table-bordered">
                <thead style={{backgroundColor:"green",color:"white"}}>
                    <tr>  
                    <td>Category</td>
                    <td> Examples</td>
                    <td> Key Words [Verbs]</td>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>Quality Education</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    <tr>
                        <td>Problem Solving</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    <tr>
                        <td>Social Responsibility</td>
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