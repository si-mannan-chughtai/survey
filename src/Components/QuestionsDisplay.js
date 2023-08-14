import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Switch } from '@mui/material';


import { AppContext } from "../context";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function QuestionsDisplay() {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  // const [levels, setLevels] = React.useState([]);

  // React.useEffect(() => {
  //   fetchLevels();
  // }, []);

  // const fetchLevels = async () => {
  //   try {
  //     const url='http://localhost:8081/api/cognitivelevels';
  //     const response = await axios.get(url);
  //     const data = await response.data;
  //     setLevels(data);
  //   } catch (error) {
  //     console.error("Error fetching levels: ", error);
  //   }
  // };

  const { currentSurvey } = React.useContext(AppContext);
  // const [survey, setSurvey] = React.useState(currentSurvey);

  // React.useEffect(() => {
  //   currentSurvey && setSurvey(currentSurvey);
  // }, [currentSurvey]);
  // console.log(currentSurvey);
  return (
    <div className="m-5">
      {currentSurvey && (
        <Card style={{ padding: 30 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h5
              style={{
                textAlign: "left",
                marginBottom: "30px",
                color: "#346448",
                fontWeight: "bold",
              }}
            >
              Displaying {currentSurvey && (currentSurvey.name || "")} Questions{" "}
            </h5>
          </div>

          <div className="table-responsive" style={{ textAlign: "center" }}>
            <table className="table table-bordered">
              <thead style={{ backgroundColor: "#346448", color: "white" }}>
                <tr style={{ fontWeight: "bold" }}>
                  <td>Questions</td>
                  <td> PLOs</td>
                  <td> Actions</td>
                </tr>
              </thead>
              <tbody>
                {currentSurvey &&
                  currentSurvey.plos.map((plo) => {
                    return plo.questions.map((question) => {
                      return (
                        <tr>
                          <td>{question.statement}</td>
                          <td>{plo.name}</td>
                          {/* <td>{level.keywords.split(",").join(", ")}</td> */}
                          <td>
                            {/* onClick={handleOpen}u */}
                            <IconButton>
                              <EditIcon
                                sx={{ fontSize: "18px", color: "#346448" }}
                              />
                            </IconButton>
                            <IconButton>
                              <DeleteForeverIcon
                                sx={{ fontSize: "18px", color: "#346448" }}
                              />
                            </IconButton>
                            <IconButton >
                              <Switch color="success"  checked={question.show} />
                            </IconButton>
                          </td>
                        </tr>
                      );
                    });
                  })}
              </tbody>
            </table>

            {/* <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Modal> */}
          </div>
        </Card>
      )}
    </div>
  );
}
