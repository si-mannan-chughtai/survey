import React from 'react'
import { Link } from 'react-router-dom';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
const Navbar = () => {
  return (
    <div>
       <div class="container-fluid">
    <div className='row tophead'>
      <div class=" col-md-2 Block">
  <button type="button" class="btn  rounded-0 text-white" data-bs-toggle="dropdown">
    Mission<KeyboardArrowDownIcon/>
  </button>
  <ul class="dropdown-menu ">
  <li><Link to="/Dashboard/Uni_vision" className="dropdown-item"><AutoStoriesIcon sx={{fontSize:'18px'}}/> University Vision</Link>
  <ul class="dropdown-menu dropdown-submenu">
             <li>
             <Link to="/Dashboard/Add_Uni_vision" className="dropdown-item"><ViewTimelineIcon style={{ fontSize: '18px' }} /> Add University Vision</Link>
            </li>
            </ul>
            </li>  
    <li><Link to ="/Dashboard/Uni_Mission" className="dropdown-item"><AutoStoriesIcon sx={{fontSize:'18px'}}/> University Mission</Link>
     <ul class="dropdown-menu dropdown-submenu">
            {/* <li>
              <a class="dropdown-item" href="/Dashboard/Mission_SE"><ViewTimelineIcon sx={{fontSize:'18px'}}/> University Mission Mapping Program Mission</a>
            </li> */}
            <li>
              <Link to="/Dashboard/Add_Uni_Mission" className="dropdown-item"><ViewTimelineIcon sx={{fontSize:'18px'}}/> Add University Mission</Link>
            </li>

          </ul> 
    </li>
    <li><Link to="/Dashboard/Dep_Mission" className="dropdown-item"><AutoStoriesIcon sx={{fontSize:'18px'}}/> Department Mission</Link>
     <ul class="dropdown-menu dropdown-submenu">
            <li>
              <Link to="/Dashboard/Add_Dept_Mission" className="dropdown-item" ><ViewTimelineIcon sx={{fontSize:'18px'}}/> Add Department Mission</Link>
            </li>
            
          </ul> 
    </li>
    <li><Link to="/Dashboard/Mission_SE" className="dropdown-item"><AutoStoriesIcon sx={{fontSize:'18px'}}/> Program Mission</Link>
   <ul class="dropdown-menu dropdown-submenu">
            <li>
              <Link to= "/Dashboard/Desktop8" className="dropdown-item" ><ViewTimelineIcon sx={{fontSize:'18px'}}/> Add Program Mission</Link>
            </li>
          </ul> 
    </li>
  </ul>
</div>
      <div class="col-md-2 Block">
  <button type="button" class="btn rounded-0 text-white" data-bs-toggle="dropdown">
    Bloom Taxonomy<KeyboardArrowDownIcon/>
  </button>
  <ul class="dropdown-menu ">
  <li><Link to ="/Dashboard/Congnitve_domain" className="dropdown-item"><AutoStoriesIcon sx={{fontSize:'18px'}}/> Cognitive Domains</Link>
  </li>
    <li><Link to ="/Dashboard/Psychomotor_Domain" className="dropdown-item" ><AutoStoriesIcon sx={{fontSize:'18px'}}/> Psychomotor Domain</Link>     
     </li>
     
     <li><Link to ="/Dashboard/Affective_Domain" class="dropdown-item"><AutoStoriesIcon sx={{fontSize:'18px'}}/> Affective Domain</Link>     
     </li>

    </ul>


     
     
     
     
      </div>
      <div class="col-md-2 Block">
  <button type="button" class="btn rounded-0 text-white" data-bs-toggle="dropdown">
    CQI<KeyboardArrowDownIcon/>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">CQI Document</a></li>
    {/* <li><a class="dropdown-item" href="#">Link 2</a></li>
    <li><a class="dropdown-item" href="#">Link 3</a></li> */}
  </ul>
</div>
      <div class="col-md-2 Block">
  <button type="button" class="btn rounded-0 text-white" data-bs-toggle="dropdown">
    Survey Forms <KeyboardArrowDownIcon/>
  </button>
  <ul class="dropdown-menu">
    <li><Link to ="/Dashboard/Employer_survey" className="dropdown-item">Employer Survey</Link></li>
    <li><Link to ="/Dashboard/Exit_survey" className="dropdown-item">Exit Survey</Link></li>
    <li><Link to ="/Dashboard/Alumni_Survey" className="dropdown-item">Alumni Survey</Link></li>
    <li><Link to="/Dashboard/Creating_ExitSurvey" className="dropdown-item">Creating Survey Form</Link></li>
  </ul>
</div>
      <div class="col-md-2 Block">
  <button type="button" class="btn rounded-0 text-white" data-bs-toggle="dropdown">
    OBE<KeyboardArrowDownIcon/>
  </button>
 

  <ul class="dropdown-menu ">
  <li><Link to="/Dashboard/PEOs_view" class="dropdown-item"><AutoStoriesIcon sx={{fontSize:'18px'}}/> PEO's</Link>
  <ul class="dropdown-menu dropdown-submenu">
            <li>
              <Link to="/Dashboard/Add_PEOs" className="dropdown-item"><ViewTimelineIcon sx={{fontSize:'18px'}}/> Add PEO's</Link>
            </li>

            </ul>
  </li>
    <li><Link to="/Dashboard/PLOs_view" className="dropdown-item"><AutoStoriesIcon sx={{fontSize:'18px'}}/> PLO's</Link>
     <ul class="dropdown-menu dropdown-submenu">
            <li>
              <Link to="/Dashboard/Add_Program_Learning" className="dropdown-item"><ViewTimelineIcon sx={{fontSize:'18px'}}/> Add PLO's</Link>
            </li>

            </ul>
            </li>
            <li><a class="dropdown-item" href="#"><AutoStoriesIcon sx={{fontSize:'18px'}}/> CLO's</a>
            <ul class="dropdown-menu dropdown-submenu">
            <li>
              <Link to="/Dashboard/Add_CLOs"  className="dropdown-item"><ViewTimelineIcon sx={{fontSize:'18px'}}/> Add CLO's</Link>
            </li>

            </ul>
  </li>
            </ul>
 

</div>
     



<div class=" col-md-2 Block">
  <button type="button" class="btn  rounded-0 text-white" data-bs-toggle="dropdown">
    OBE Evaluation<KeyboardArrowDownIcon/>
  </button>
  <ul class="dropdown-menu ">
    <li><Link to="/Dashboard/PEO_evaluation"  className="dropdown-item"><AutoStoriesIcon sx={{fontSize:'18px'}}/> PEO's Evaluation</Link>
     
    </li>
    <li><Link to="/Dashboard/PLO_evaluation"  className="dropdown-item"><AutoStoriesIcon sx={{fontSize:'18px'}}/> PLO's Evaluation</Link>
      
    </li>
    <li><Link to="/Dashboard/CLO_Evaluation"  className="dropdown-item"><AutoStoriesIcon sx={{fontSize:'18px'}}/> CLO's Evaluation</Link>
    
    </li>
  </ul>
</div>


</div>
</div>
</div>

  )
}

export default Navbar;