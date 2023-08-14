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
import { Link } from "react-router-dom";
export default function PLOs_view() {
     
    return (
        
        // <div className="m-5">
        // <Card style={{padding:30}}>
        <div className="m-5">
        <Card style={{padding:30}}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
       <div><h3 style={{textAlign: "center", marginBottom: "40px",fontWeight:"bold",color:"#346448"}}> Program Learning Outcomes </h3></div>         
       <div><Link to='/Dashboard/Edit_PLOs'><EditIcon style={{ color:"#346448"}} /></Link></div>
</div>   

                  
            <p style={{marginBottom:"30px"}}>The Program Learning Outcomes (PLOs) broadly describe the skills, knowledge, and behaviors the
students acquire in their program of study. The PLOs are publicized and available on the university
website, university notice boards, posters, and prospectus. Approved PLOs state that the program
enables students to: </p>
<ol>
    <li>
    Analyze a complex computing problem and to apply principles of computing and other
relevant disciplines to identify solutions.
    </li>

    <li>
    Design, implement and evaluate a computing-based solution to meet a given set of
computing requirements in the context of the program’s discipline.
    </li>

    <li>
    Communicate effectively in a variety of professional contexts.
    </li>

    <li>
    Recognize professional responsibilities and make informed judgments in computing practice
based on legal and ethical principles.

    </li>

    <li>
    Function effectively as a member or leader of a team engaged in activities appropriate to the
program’s discipline.
    </li>

    <li>
    Apply software engineering theory and development fundamentals to produce
efficient solutions.

    </li>

</ol>

<h5 style={{fontWeight: "bold",color:"#346448"}}>Mapping of PLOs to PEOs </h5>



<p>It is important to relate/map each PLO with the Program Educational Objectives, which are intended
to promote its achievement. The PLOs, which can be measured by the time of graduation, are the
way by which the program prepares its graduates to achieve PEOs. The PLOs of BSSE are well-aligned
with the PEOs as illustrated in Table 4.</p>
            <div
                 className="table-responsive"
                 style={{textAlign:"center"}}>

            <table className="table table-bordered">
                <thead style={{backgroundColor:"#346448",color:"white",fontWeight:"bold"}}>                 
                        
                        <tr>
                    <td>PLOs</td>
                    <td> PEO 1</td>
                    <td> PEO 2 </td>
                    <td> PEO 3</td>
                    
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>Analyze a complex computing problem </td>
                        <td>X</td>
                        <td>-</td>
                        <td>-</td>
                        
                    </tr>

                    <tr>
                        <td>Design, implement and evaluate a computing-based solution </td>
                        <td>X</td>
                        <td>-</td>
                        <td>-</td>
                       
                    </tr>

                    <tr>
                        <td>Communicate effectively </td>
                        <td>-</td>
                        <td>X</td>
                        <td>-</td>
                        
                    </tr>



                    <tr>
                        <td>Recognize professional responsibilities </td>
                        <td>-</td>
                        <td>X</td>
                        <td>X</td>
                        
                    </tr>


                    <tr>
                        <td>Apply software engineering theory </td>
                        <td>X</td>
                        <td>-</td>
                        <td>X</td>
                        
                    </tr>


                    <tr>
                        <td>Leadership and team player  </td>
                        <td>-</td>
                        <td>X</td>
                        <td>-</td>
                        
                    </tr>
                </tbody>
            </table>
            </div>






        </Card>

        </div> 
           );
};