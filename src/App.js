import React from "react";
import "./App.css";
import HomePage from "./components/home";
import Projects from "./components/projects.js";
import AppBar from "@material-ui/core/AppBar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Skills from "./components/skills.js";
import Experiences from "./components/experience";
import BottomBar from "./components/BottomBar";
import JialeTomTian from "./documents/JialeTomTian.pdf";
import EmailIcon from "@material-ui/icons/Email";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#00A7F7", contrastText: "#fff" },
    secondary: { main: "#FFFFFF", contrastText: "#fff" },
    info: { main: "#0093DA", contrastText: "#fff" },
  },
  card: {
    backgroundColor: "#0098DA",
  },
  overrides: {
    Button: {
      primary: {
        color: "yellow",
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="fixed" color="primary">
          <div>
            <div style={{ float: "left", marginLeft: "1%"}}>
              <a
                href="mailto: j63tian@uwaterloo.ca"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <IconButton color="default">
                  <EmailIcon color="secondary" fontSize="large" />
                </IconButton>
              </a>
              <a
                href={JialeTomTian}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <IconButton color="default">
                  <AssignmentIndIcon color="secondary" fontSize="large" />
                </IconButton>
              </a>
            </div>
            <div style={{ float: "right", marginRight: "1%"}}>
              <a
                href="https://www.linkedin.com/in/j63tian/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <IconButton color="default">
                  <LinkedInIcon color="secondary" fontSize="large" />
                </IconButton>
              </a>
              <a
                href="https://github.com/JialeTomTian"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <IconButton color="default">
                  <GitHubIcon color="secondary" fontSize="large" />
                </IconButton>
              </a>
            </div>
          </div>
        </AppBar>
        <HomePage></HomePage>
        <Projects />
        <Skills />
        <Experiences />
        <BottomBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
