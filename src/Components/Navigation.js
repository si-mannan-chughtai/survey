import React from "react";
import "./css/styles.css";
import { Link, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import LogoutIcon from "@mui/icons-material/Logout";
// import axios from "axios";

import abbasynlogo from "../assets/abbasynlogo.png";
import Dashboard from "./Dashboard";

export default function Navigation() {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#346448" }}>
        <img src={abbasynlogo} />
      </div>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav class="sb-sidenav accordion bg" id="sidenavAccordion">
            <div
              style={{
                height: "calc(100vh - 56px)",
                overflow: "auto",
                backgroundColor: "#346448",
              }}
              class="sb-sidenav-menu"
            >
              <div class="nav">
                <div
                  class="sb-sidenav-menu-heading"
                  style={{ color: "#fff", fontSize: 18, paddingBottom: 10 }}
                >
                  Muhammad Usman
                </div>

                <Link class="nav-link sidenavtext " to="Home">
                  <div class="sb-nav-link-icon"></div>
                  <HomeIcon style={{ marginRight: 15 }} />
                  Dashboard
                </Link>

                <Link class="nav-link sidenavtext " to="">
                  <div class="sb-nav-link-icon"></div>
                  <LogoutIcon style={{ marginRight: 15 }} />
                  Logout
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div
          style={{
            width: "100%",
          }}
        >
          <Outlet />
          <div>
            <Dashboard />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
