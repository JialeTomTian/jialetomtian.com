import React from "react";
import Particles from "react-particles-js";
import "./home.css";
import Typography from '@material-ui/core/Typography'
import { withStyles } from "@material-ui/core/styles";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

const HomePage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="content">
       <WhiteTextTypography variant="h1">
        Jiale Tom Tian
       </WhiteTextTypography>
       <WhiteTextTypography variant="h4">
        2B CS @ University of Waterloo
       </WhiteTextTypography>
      </div>
      <Particles
        className="particles"
        height={"100vh"}
        params={{
          background: {
            color: "15b3fe"
          }, 
          particles: {
            color: {
              value: "#ffffff",
            },
            number: {
              value: 80,
              density: {
                enable: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: true,
              color: {
                value: "#ffffff",
              },
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default HomePage;
