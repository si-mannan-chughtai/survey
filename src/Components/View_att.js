import {Card} from "@mui/material";
import React from "react";
import "./css/styles.css";

export default function View_Att() {
  return (
    <div className="m-5">
      <Card style={{ padding: 60 }}>
        <h5 className="pb-2 ">
          <b>Departments</b>
        </h5>
        <div>
          <div className="row">
            <div className="col-md-6">
              <Card style={{ padding: 20 }}>
              <a href="/Dashboard/Students_list" style={{color:"black",textDecoration: "none"}}><b>BS Computer Science</b></a>   
              </Card>
            </div>

            <div className="col-md-6">
              <Card style={{ padding: 20 }}>
              <a href="/Dashboard/Students_SE" style={{color:"black",textDecoration: "none"}}><b>BS Software Engineering </b></a>
                
              </Card>
            </div>
          </div>
          {/* <link to="/Dashboard/Complaint"  >BS Software Engineering</link>  */}
          {/* <DataGrid
            style={{ height: 1050, width: "100%" }}
            rows={rows}
            columns={columns}
            pageSize={30}
            rowsPerPageOptions={[30]}
          /> */}
        </div>
      </Card>
    </div>
  );
}
