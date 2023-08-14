import * as React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import { Card } from "@mui/material";
import "./css/styles.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import profile_user from "../assets/profile_user.jpg";
import { Help } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function DashboardContent() {
  return (
    <>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <div>
        <div className="">
          <Card>
            <div style={{ padding: 20 }} className="row ">
              <div className="col-md-2 ">
                <img src={profile_user}></img>
              </div>
              <div className=" col-md-10 " style={{ textAlign: "left" }}>
                <h5 style={{ color: "green" }}>Muhammad Usman</h5>
                <h6>Abdul Rehman</h6>
                <p style={{ padding: 0, margin: 0 }}>
                  Campus: Islamabad Campus (FEST)
                </p>
                <p style={{ padding: 0, margin: 0 }}>
                  Designation: Visiting Teachers
                </p>
                <p style={{ padding: 0, margin: 0 }}>
                  Date Of Birth: 30-JUL-92 (30 Years, 0 Months, 5 Days)
                </p>
                <p style={{ color: "gray" }}>
                  Your current Sessions = 1{" "}
                  <span style={{ color: "red" }}>
                    (To avoid unauthorized use of your account please always
                    logout after completing your work)
                  </span>
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div style={{ marginTop: 20 }}>
          <div className="row">
            <div className="col-md-6">
              <Card style={{ padding: 20 }}>
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  sx={{ flexGrow: 1, mb: 2, textTransform: "bold" }}
                >
                  Teacher Quick Links
                </Typography>
                <Divider sx={{ mb: 3, mt: 1 }} />
                <div>
                  <a
                    href="/Dashboard/Attendance"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className=" row  ">
                      <div className="col-1">
                        <CalendarMonthIcon style={{ color: "green" }} />
                      </div>

                      <div className="col-11">
                        <h6 style={{ color: "green" }}>
                          Enter Student's Attendance
                        </h6>
                        <p style={{ fontSize: 12 }}>
                          Teacher can enter student attendance according to
                          class schedule
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="/Dashboard/Complaint"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className=" row  ">
                      <div className="col-1">
                        <Help style={{ color: "green" }} />
                      </div>
                      <div className="col-11">
                        <h6 style={{ color: "green" }}>
                          My Complaint Dashboard
                        </h6>
                        <p style={{ fontSize: 12 }}>
                          Employee can manage his/her Complaints through CMS
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </Card>
            </div>

            <div className="col-md-6">
              <Card style={{ padding: 20 }}>
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  sx={{ flexGrow: 1, mb: 2, textTransform: "bold" }}
                >
                  Teacher Quick Links
                </Typography>
                <Divider sx={{ mb: 3, mt: 1 }} />
                <div>
                  <Link
                    to="Attendance"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className=" row  ">
                      <div className="col-1">
                        <CalendarMonthIcon style={{ color: "green" }} />
                      </div>

                      <div className="col-11">
                        <h6 style={{ color: "green" }}>
                          Enter Student's Attendance
                        </h6>
                        <p style={{ fontSize: 12 }}>
                          Teacher can enter student attendance according to
                          class schedule
                        </p>
                      </div>
                    </div>
                  </Link>
                  <a
                    href="/Dashboard/Complaint"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className=" row  ">
                      <div className="col-1">
                        <Help style={{ color: "green" }} />
                      </div>
                      <div className="col-11">
                        <h6 style={{ color: "green" }}>
                          My Complaint Dashboard
                        </h6>
                        <p style={{ fontSize: 12 }}>
                          Employee can manage his/her Complaints through CMS
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Container>
    </>
  );
}
