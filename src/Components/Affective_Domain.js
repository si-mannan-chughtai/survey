import * as React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
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
import axios from "axios";
export default function Affective_domain() {
    const [levels, setLevels] = React.useState([]);

    React.useEffect(() => {
      fetchLevels();
    }, []);
  
    const fetchLevels = async () => {
      try {
        const url='http://localhost:8081/api/affectivelevels';
        const response = await axios.get(url);
        const data = await response.data;
        setLevels(data);
      } 
      catch (error) {
        console.error("Error fetching levels: ", error);
      }
    };
    return (
        <div className="m-5">
        <Card style={{padding:30}}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>        
        <h5 style={{textAlign: "left",marginBottom: "30px",color:"#346448",fontWeight:"bold"}}>Bloom’s Revised Taxonomy—Affective Domain </h5>
        {/* <div><Link to='/Dashboard/Edit_Affective'><EditIcon style={{ color:"#346448"}} /></Link></div> */}
        </div> 
       <p> The affective domain (Krathwohl, Bloom, Masia, 1973) includes the manner in which we deal with things emotionally, such as feelings, values, appreciation,
enthusiasms, motivations, and attitudes. The five major categories are listed from the simplest behavior to the most complex:
    </p>
            <div
                 className="table-responsive"
                 style={{textAlign:"center"}}>
            <table className="table table-bordered">
                <thead style={{backgroundColor:"#346448",color:"white"}}>                     
                        <tr style={{fontWeight: "bold"}}>
                    <td>Category</td>
                    <td> Detail</td>
                    <td> Keywords</td>
                    </tr>
                </thead>
                <tbody>
                {/* {levels.map((level) => (
                <tr key={level.level_id}>
                  <td>{level.level}</td>
                  <td>{level.detail}</td>
                  <td>{level.keywords.split(",").join(", ")}</td>
                </tr>
              ))} */}


<tr>
                        <td>Receiving Phenomena</td>
                        <td>Awareness, willingness to hear,
selected attention. </td>
                        <td>Asks, chooses, describes, follows, gives, holds,
identifies, locates, names, points to, selects,
sits, erects, replies, uses. </td>
                        
                        
                    </tr>

                    <tr>
                    <td>Responding to Phenomena</td>
                    <td>Active participation on the
part of the learners. Attends and reacts to a particular
phenomenon. Learning outcomes may emphasize
compliance in responding, willingness to respond, or
satisfaction in responding (motivation). </td>
                    <td>Comprehends, converts, defends, distinguishes, estimates, explains,
extends, generalizes, gives an example, infers, interprets, paraphrases,
predicts, rewrites, summarizes, translates.</td>
                                 
                    </tr>

                    <tr>
                    <td>Applying</td>
                    <td>Use a concept in a new situation or
unprompted use of an abstraction. Applies
what was learned in the classroom into novel
situations in the work place.</td>
                    <td>Answers, assists, aids, complies, conforms,
discusses, greets, helps, labels, performs,
practices, presents, reads, recites, reports,
selects, tells, writes. 
</td>
                    
                    </tr>

                    <tr>
                    <td>Valuing</td>
                    <td> The worth or value a person attaches to a
particular object, phenomenon, or behavior. This ranges
from simple acceptance to the more complex state of
commitment. Valuing is based on the internalization of
a set of specified values, while clues to these values are
expressed in the learner's overt behavior and are often
identifiable. </td>
                    <td>Completes, demonstrates, differentiates,
explains, follows, forms, initiates, invites,
joins, justifies, proposes, reads, reports, selects,
shares, studies, works. </td>
                  
                    </tr>

                    <tr>
                    <td>Organization</td>
                    <td> Organizes values into priorities by
contrasting different values, resolving conflicts between
them, and creating a unique value system. The emphasis
is on comparing, relating, and synthesizing values </td>
                    <td>Adheres, alters, arranges, combines, compares,
completes, defends, explains, formulates,
generalizes, identifies, integrates, modifies,
orders, organizes, prepares, relates, synthesizes</td>
                    
                    </tr>


                    <tr>
                    <td>Internalizing values (characterization) </td>
                    <td> Has a value
system that controls their behavior. The behavior is
pervasive, consistent, predictable, and most importantly,
characteristic of the learner. Instructional objectives are
concerned with the student's general patterns of
adjustment (personal, social, emotional). </td>
                    <td>Acts, discriminates, displays, influences,
listens, modifies, performs, practices, proposes,
qualifies, questions, revises, serves, solves,
verifies. </td>
                    
                   
                    </tr>

                   





                </tbody>
            </table>
            </div>
        </Card>
        </div> 
           );
};