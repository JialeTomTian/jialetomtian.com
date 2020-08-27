import React from "react";
import "./App.css";
import HomePage from "./components/home";
import Projects from "./components/projects.js";
import AppBar from "@material-ui/core/AppBar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Skills from "./components/skills.js";
import Experiences from "./components/experience"
import BottomBar from './components/BottomBar'


const theme = createMuiTheme({
  palette: {
    primary: { main: "#00A7F7", contrastText: "#fff"},
    secondary: { main: "#FFFFFF", contrastText: "#fff" },
    info: {main:"#0093DA", contrastText: "#fff"}
  },
  card:{
    backgroundColor: "#0098DA"
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
          <div style={{ textAlign: "right" }}>
            <Button
              style={{
                width: "20%",
                maxWidth: "150px",
                height: "50px",
                borderRadius: "20px",
                margin: "10px",
                marginRight: "20px",
                backgroundColor: "#F6FCFF",
                padding: "10px",
              }}
              color="primary"
            >
              Email
            </Button>
            <Button
              style={{
                width: "20%",
                maxWidth: "150px",
                height: "50px",
                borderRadius: "20px",
                margin: "10px",
                marginRight: "40px",
                backgroundColor: "#F6FCFF",
                padding: "10px",
              }}
              color="primary"
            >
              Resume
            </Button>
          </div>
        </AppBar>
        <HomePage></HomePage>
        <Projects />
        <Skills/>
        <Experiences/>
        <BottomBar/>
      </div>
    </ThemeProvider>
  );
}

export default App;
