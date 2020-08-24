import React from "react";
import Particles from "react-particles-js";
import "./home.css";

const HomePage = () => {
  return (
    <div
      style={{
        height: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="content">
        Jiale Tom Tian <br /> 
        2B Computer Science Student <br />
        University of Waterloo
      </div>
      <Particles
        className="particles"
        height={1000}
        params={{
          particles: {
            color: {
              value: "0093DA",
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
                value: "0093DA",
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
