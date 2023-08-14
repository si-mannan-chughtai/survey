import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import abbasynlogo from "../assets/abbasynlogo.png";
import { useNavigate } from "react-router-dom";
import { InputAdornment } from "@mui/material";
import { AccountCircle, Email, Lock } from "@mui/icons-material";

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img style={{ margin: 6 }} src={abbasynlogo} />

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              variant="outlined"
              color="success"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email style={{color:"346448"}}/>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              variant="outlined"
              fullWidth
              color="success"
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock style={{color:"346448"}}/>
                  </InputAdornment>
                ),
              }}
            />
            <Grid container>
              <Grid item xs>
                <FormControlLabel
                  control={<Checkbox value="remember"  />}
                  label="Remember me"
                />
              </Grid>
              <Grid item >
                <Link style={{ color: "#368451" }} href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => {
                navigate("/Dashboard/QEC_Dashboard");
              }}
              sx={{ mt: 3, mb: 2, backgroundColor: "#346448" }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
