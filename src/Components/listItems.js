import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";

import Link from "@mui/material/Link";
import { CalendarMonth, Help } from "@mui/icons-material";

export const Iconstyle={
    color:"#368451"
}
export const mainListItems = (
  <React.Fragment>
    <Link underline="none" style={{ color: "#000" }} href="/Dashboard/Home">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon style={Iconstyle}/>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link
      underline="none"
      style={{ color: "#000" }}
      href="/Dashboard/Attendance"
    >
      <ListItemButton>
        <ListItemIcon>
          <CalendarMonth style={Iconstyle}/>
        </ListItemIcon>
        <ListItemText primary="Student's Attendance" />
      </ListItemButton>
    </Link>
    <Link
      underline="none"
      style={{ color: "#000" }}
      href="/Dashboard/Complaint"
    >
      <ListItemButton>
        <ListItemIcon>
          <Help style={Iconstyle} />
        </ListItemIcon>
        <ListItemText primary="Complaint Panel" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );
