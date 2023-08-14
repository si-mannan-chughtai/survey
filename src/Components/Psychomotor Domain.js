import * as React from "react";
import { Link } from "react-router-dom";
import {
  Card,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
export default function Psychomotor_Domain() {
    const [levels, setLevels] = React.useState([]);
    React.useEffect(() => {
      fetchLevels();
    }, []);
    const fetchLevels = async () => {
      try {
        const url='http://localhost:8081/api/psychomotorlevels';
        const response = await axios.get(url);
        const data = await response.data;
        setLevels(data);
      } catch (error) {
        console.error("Error fetching levels: ", error);
      }
    };
    return (
        <div className="m-5">
        <Card style={{padding:30}}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>     
        <h5 style={{textAlign: "left",marginBottom: "30px",color:"#346448",fontWeight:"bold"}}>Bloom’s Revised Taxonomy—Psychomotor Domain  </h5>
        {/* <div><Link to='/Dashboard/Edit_psychomotor'><EditIcon style={{ color:"#346448"}} /></Link></div> */}
</div>  
    <p> The psychomotor domain includes physical movement, coordination, and use of the motor-skill areas. Development of these skills requires practice and is measured
in terms of speed, precision, distance, procedures, or techniques in execution. The seven major categories are listed from the simplest behavior to the most complex:
[The Simpson’s and Harrow’s psychomotor domains are especially useful for the development of children and young people, and for developing skills in adults that
take people out of their comfort zones like . The Dave’s psychomotor domain is the simplest and generally easiest to apply in the corporate development
environment. Both models offer different emotional perspectives and advantages: Check the relevance and importance of each before you implement.]  </p>
            <div
                 className="table-responsive"
                 style={{textAlign:"center"}}>
            <table className="table table-bordered">
                <thead style={{backgroundColor:"#346448",color:"white"}}>                    
                        <tr style={{fontWeight: "bold"}}>
                    <td>level</td>
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
                        <td>Perception (awareness)</td>
                        <td>The ability to use sensory cues
to guide motor activity. This ranges from sensory
stimulation, through cue selection, to translation.</td>
                        <td>Chooses, describes, detects, differentiates, distinguishes,
identifies, isolates, relates, selects. </td>

                        
                        
                    </tr>

                    <tr>
                    <td>Set</td>
                    <td>Readiness to act. It includes mental, physical, and emotional sets. These three sets are dispositions that predetermine a person's response to different situations (sometimes called mindsets). </td>
                    <td>Begins, displays, explains, moves, proceeds, reacts, shows,states, volunteers. </td>
                                 
                    </tr>

                    <tr>
                    <td>Guided Response</td>
                    <td>The early stages in learning a
complex skill that includes imitation and trial and error.
Adequacy of performance is achieved by practicing. </td>
                    <td>Copies, traces, follows, react, reproduce, responds. 
</td>
                    
                    </tr>

                    <tr>
                    <td>Mechanism (basic proficiency) </td>
                    <td>This is the intermediate
stage in learning a complex skill. Learned responses have
become habitual and the movements can be performed
with some confidence and proficiency. </td>
                    <td>Assembles, calibrates, constructs, dismantles, displays,
fastens, fixes, grinds, heats, manipulates, measures, mends,
mixes, organizes, sketches.  (a)</td>
                  
                    </tr>

                    <tr>
                    <td>Complex Overt Response (Expert)</td>
                    <td> : The skillful
performance of motor acts that involve complex
movement patterns. Proficiency is indicated by a quick,
accurate, and highly coordinated performance, requiring a
minimum of energy. This category includes performing
without hesitation, and automatic performance. For
example, players are often utter sounds of satisfaction or
expletives as soon as they hit a tennis ball or throw a
football, because they can tell by the feel of the act what
the result will produce.  </td>
                    <td>Assembles, builds, calibrates, constructs, dismantles,
displays, fastens, fixes, grinds, heats, manipulates, measures,
mends, mixes, organizes, sketches. NOTE: The Key Words
are the same as Mechanism, but will have adverbs or
adjectives that indicate that the performance is quicker,
better, more accurate, etc. 
</td>
                    
                    </tr>


                    <tr>
                    <td>Adaptation </td>
                    <td> Skills are well developed and the individual
can modify movement patterns to fit special
requirements. 
</td>
                    <td>Adapts, alters, changes, rearranges, reorganizes, revises,
varies. 
</td>
                    
                   
                    </tr>


                    <tr>
                    <td>Origination </td>
                    <td>  Creating new movement patterns to fit a
particular situation or specific problem. Learning
outcomes emphasize creativity based upon highly
developed skills. 
</td>
                    <td>Arranges, builds, combines, composes, constructs, creates,
designs, initiate, makes, originates. 
</td>
                    
                   
                    </tr>
  




                </tbody>
            </table>
            </div>
        </Card>
        </div> 
           );
};