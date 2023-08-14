import {
  Autocomplete,
  Button,
  Card,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export default function ClosedTickets() {
  return (
    <div className="p-4 m-4">
      <h2 style={{ marginBottom: 35, textAlign: "center" }}> Closed Tickets</h2>
      <div style={{ marginTop: 75 }}>
        <h4 className="mb-4 ">Closed Tickets</h4>
        <Card className="p-4">
          <p>No Data found</p>
        </Card>
      </div>
    </div>
  );
}
