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
import profile_user from "../assets/profile_user.jpg";
import "./css/styles.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
};

export default function Attendance() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="p-4 m-4">
        <h2 style={{ marginBottom: 35, textAlign: "center" }}>
          {" "}
          Forms are pending
        </h2>
        <div style={{ float: "right" }}>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h5 style={{ textAlign: "center", marginBottom: 25 }}>
                Add New Complaint Ticket
              </h5>

              <InputLabel id="demo-simple-select-label" fullWidth>
                Complaint Category
              </InputLabel>
              <Select
                size="small"
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem>Exam Related</MenuItem>
              </Select>
              <TextField
                className="my-4"
                size="small"
                fullWidth
                id="outlined-basic"
                label="Complaint Type"
                variant="outlined"
                //value={name}

                // onChange={(e) => setName(e.target.value)}
              />

              <TextField
                fullWidth
                multiline={true}
                rows={3}
                name="Description"
                label="Description"
                placeholder="Description"
                autoComplete="off"
                variant="outlined"
                //   value={description}
                //   onChange={e => setDescription(e.target.value)}
              />
              <div className=" mt-4">
                <Button
                  fullWidth
                  variant="contained"
                  size="small"
                  style={{ backgroundColor: "#51BE78" }}
                  // onClick={handleAdd}
                >
                  Submit
                </Button>
              </div>
            </Box>
          </Modal>
        </div>

        <div style={{ marginTop: 75 }}>
          
          <Card className="p-4">
            <p>No Data found</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
