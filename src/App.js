import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Students_list from "./Components/Students_list";
import Students_SE from "./Components/Students_SE";
import Login from "./Components/Login";
import View_Att from "./Components/View_att";
import Complaint from "./Components/Complaint";
import Add_Att from "./Components/Add_att";
import Attendance from "./Components/Attendance";
import ClosedTickets from "./Components/ClosedTIckets";
import DashboardContent from "./Components/DashboardContent";
import QEC_Dashboard from "./Components/QEC_Dashboard";
import Dep_Mission from "./Components/Dep_Mission";
import Uni_Mission from "./Components/Uni_Mission";
import Prog_Mission from "./Components/Prog_Mission";
import Mission_CS from "./Components/Mission_CS";
import Mission_SE from "./Components/Mission_SE";
import Mission_CS_keyword from "./Components/Mission_CS_keyword";
import Desktop8 from "./Components/Desktop8";
import Bloom_taxonomy from "./Components/Bloom_taxonomy";
import Add_Program_Learning from "./Components/Add_Program_Learning";
import PLO_evaluation from "./Components/PLO_evaluation";
import PEO_evaluation from "./Components/PEO_evaluation";
import Exit_survey from "./Components/Exit_survey";
import PLO_eva from "./Components/PLO_eva";
import Alumni_survey from "./Components/Alumni_survey";
import Employer_survey from "./Components/Employer_survey";
import PLO_Eva_Smesters from "./Components/PLO_Eva_Smesters";
import Qecprotectesroutes from "./Components/Qecprotectesroutes";
import Teacherdashheader from "./Components/Teacherdashheader";
import MainHeader from "./Components/MainHeader";
import Navbar from "./Components/Navbar";
import CLO_Evaluation from "./Components/CLO_Evaluation";
import ALL_PLOs from "./Components/ALL_PLOs";
import Add_Uni_Mission from "./Components/Add_Uni_Mission";
import Add_Dept_Mission from "./Components/Add_Dept_Mission";
import Edit_UniMission from "./Components/Edit_UniMission";
import Edit_DepMission from "./Components/Edit_DepMission";
import Edit_ProgMission from "./Components/Edit_ProgMission";
import Congnitve_domain from "./Components/Congnitve_domain";
import Psychomotor_Domain from "./Components/Psychomotor Domain";
import Affective_Domain from "./Components/Affective_Domain";
import Edit_Congnitive from "./Components/Edit_Congnitive";
import Edit_psychomotor from "./Components/Edit_psychomotor";
import Edit_Affective from "./Components/Edit_Affective";
import Add_CLOs from "./Components/Add_CLOs";
import PLOs_view from "./Components/PLOs_view";
import Edit_PLOs from "./Components/Edit_PLOs";
import PEOs_view from "./Components/PEOs_view";
import Add_PEOs from "./Components/Add_PEOs";
import Edit_PEOs from "./Components/Edit_PEOs";
import Add_Uni_vision from "./Components/Add_Uni_vision";
import Uni_vision from "./Components/Uni_vision";
import Edit_Uni_vision from "./Components/Edit_Uni_vision";
import Creating_ExitSurvey from "./Components/Creating_ExitSurvey";
import QuestionsDisplay from "./Components/QuestionsDisplay";
import ContextProvider from "./context";

export default function NannyRoutes() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/navs" element={<Navbar />} />
          <Route path="/header" element={<Teacherdashheader />} />
          <Route
            path="/Dashboard/QEC_Dashboard"
            element={<Qecprotectesroutes component={QEC_Dashboard} />}
          />
          <Route
            path="/Dashboard/Dep_Mission"
            element={<Qecprotectesroutes component={Dep_Mission} />}
          />
          <Route
            path="/Dashboard/Uni_Mission"
            element={<Qecprotectesroutes component={Uni_Mission} />}
          />
          <Route
            path="/Dashboard/Prog_Mission"
            element={<Qecprotectesroutes component={Prog_Mission} />}
          />
          <Route
            path="/Dashboard/Mission_CS"
            element={<Qecprotectesroutes component={Mission_CS} />}
          />
          <Route
            path="/Dashboard/Mission_SE"
            element={<Qecprotectesroutes component={Mission_SE} />}
          />
          <Route
            path="/Dashboard/Mission_CS_keyword"
            element={<Qecprotectesroutes component={Mission_CS_keyword} />}
          />
          <Route
            path="/Dashboard/Desktop8"
            element={<Qecprotectesroutes component={Desktop8} />}
          />
          <Route
            path="/Dashboard/Bloom_taxonomy"
            element={<Qecprotectesroutes component={Bloom_taxonomy} />}
          />
          <Route
            path="/Dashboard/Add_Program_Learning"
            element={<Qecprotectesroutes component={Add_Program_Learning} />}
          />
          <Route
            path="/Dashboard/PLO_evaluation"
            element={<Qecprotectesroutes component={PLO_evaluation} />}
          />
          <Route
            path="/Dashboard/PEO_evaluation"
            element={<Qecprotectesroutes component={PEO_evaluation} />}
          />
          <Route
            path="/Dashboard/Exit_survey"
            element={<Qecprotectesroutes component={Exit_survey} />}
          />
          <Route
            path="/Dashboard/PLO_eva"
            element={<Qecprotectesroutes component={PLO_eva} />}
          />
          <Route
            path="/Dashboard/Alumni_survey"
            element={<Qecprotectesroutes component={Alumni_survey} />}
          />
          <Route
            path="/Dashboard/Employer_survey"
            element={<Qecprotectesroutes component={Employer_survey} />}
          />
          <Route
            path="/Dashboard/PLO_Eva_Smesters"
            element={<Qecprotectesroutes component={PLO_Eva_Smesters} />}
          />
          <Route
            path="/Dashboard/CLO_Evaluation"
            element={<Qecprotectesroutes component={CLO_Evaluation} />}
          />
          <Route
            path="/Dashboard/ALL_PLOs"
            element={<Qecprotectesroutes component={ALL_PLOs} />}
          />
          <Route
            path="/Dashboard/Add_Uni_Mission"
            element={<Qecprotectesroutes component={Add_Uni_Mission} />}
          />
          <Route
            path="/Dashboard/Add_Dept_Mission"
            element={<Qecprotectesroutes component={Add_Dept_Mission} />}
          />
          <Route
            path="/Dashboard/Edit_UniMission"
            element={<Qecprotectesroutes component={Edit_UniMission} />}
          />
          <Route
            path="/Dashboard/Edit_DepMission"
            element={<Qecprotectesroutes component={Edit_DepMission} />}
          />
          <Route
            path="/Dashboard/Edit_ProgMission"
            element={<Qecprotectesroutes component={Edit_ProgMission} />}
          />
          <Route
            path="/Dashboard/Congnitve_domain"
            element={<Qecprotectesroutes component={Congnitve_domain} />}
          />
          <Route
            path="/Dashboard/Psychomotor_Domain"
            element={<Qecprotectesroutes component={Psychomotor_Domain} />}
          />
          <Route
            path="/Dashboard/Affective_Domain"
            element={<Qecprotectesroutes component={Affective_Domain} />}
          />
          <Route
            path="/Dashboard/Edit_psychomotor"
            element={<Qecprotectesroutes component={Edit_psychomotor} />}
          />
          <Route
            path="/Dashboard/Edit_Affective"
            element={<Qecprotectesroutes component={Edit_Affective} />}
          />
          <Route
            path="/Dashboard/PLOs_view"
            element={<Qecprotectesroutes component={PLOs_view} />}
          />
          <Route
            path="/Dashboard/Edit_PLOs"
            element={<Qecprotectesroutes component={Edit_PLOs} />}
          />
          <Route
            path="/Dashboard/PEOs_view"
            element={<Qecprotectesroutes component={PEOs_view} />}
          />
          <Route
            path="/Dashboard/Add_PEOs"
            element={<Qecprotectesroutes component={Add_PEOs} />}
          />
          <Route
            path="/Dashboard/Edit_Congnitive"
            element={<Qecprotectesroutes component={Edit_Congnitive} />}
          />
          <Route
            path="/Dashboard/Add_CLOs"
            element={<Qecprotectesroutes component={Add_CLOs} />}
          />
          <Route
            path="/Dashboard/Edit_PEOs"
            element={<Qecprotectesroutes component={Edit_PEOs} />}
          />
          <Route
            path="/Dashboard/Add_Uni_vision"
            element={<Qecprotectesroutes component={Add_Uni_vision} />}
          />
          <Route
            path="/Dashboard/Uni_vision"
            element={<Qecprotectesroutes component={Uni_vision} />}
          />
          <Route
            path="/Dashboard/Edit_Uni_vision"
            element={<Qecprotectesroutes component={Edit_Uni_vision} />}
          />
          <Route
            path="/Dashboard/Creating_ExitSurvey"
            element={<Qecprotectesroutes component={Creating_ExitSurvey} />}
          />
          <Route
            path="/Dashboard/QuestionsDisplay"
            element={<Qecprotectesroutes component={QuestionsDisplay} />}
          />
        </Routes>
      </Router>
    </ContextProvider>
  );
}
