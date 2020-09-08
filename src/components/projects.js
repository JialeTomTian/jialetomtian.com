import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import VisibilitySensor from "react-visibility-sensor";
import { projectList } from "./websiteDetails";
import EatingProject from "../images/EatingProject.PNG";
import Subletty from "../images/Subletty.PNG";
import wordDocumentWriter from "../images/wordDocumentWriter.PNG";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Projects = (props) => {
  const [loadProjects, setLoadProjects] = React.useState(false);
  const images = [
    EatingProject,
    "https://s.wsj.net/img/meta/wsj-social-share.png",
    Subletty,
    wordDocumentWriter,
  ];

  const [dialogList, setDialogList] = React.useState(
    projectList.map((project) => {
      return false;
    })
  );

  const classes = props;
  const [buffer, setBuffer] = React.useState(false);

  const openDialog = (index) => {
    let tempList = dialogList;
    tempList[index] = true;
    setDialogList(tempList);
    if (buffer) {
      setBuffer(false);
    } else {
      setBuffer(true);
    }
  };

  const closeDialog = (index) => {
    let tempList = dialogList;
    tempList[index] = false;
    setDialogList(tempList);
    if (buffer) {
      setBuffer(false);
    } else {
      setBuffer(true);
    }
  };

  return (
    <div style={{ marginTop: "2vh" }}>
      <VisibilitySensor
        partialVisibility={"bottom"}
        onChange={(isVisible) => {
          console.log(isVisible);
          setTimeout(() => {
            if (isVisible) {
              setLoadProjects(true);
            }
          }, 400);
        }}
      >
        <React.Fragment>
          <Typography
            variant="h2"
            style={{ marginBottom: "20px" }}
            color="primary"
          >
            Projects
          </Typography>
          <Slide
            direction="up"
            in={loadProjects}
            timeout={{ enter: 1000, exit: 1000 }}
          >
            <Grid container spacing={4} justify="center">
              {projectList.map((project, index) => {
                return (
                  <Grid
                    xs={8}
                    md={4}
                    style={{ margin: "20px", textAlign: "center" }}
                  >
                    <Card className={classes.card}>
                      <CardActionArea
                        onClick={() => {
                          openDialog(index);
                        }}
                      >
                        <CardMedia
                          component="img"
                          alt={project.title}
                          height="250px"
                          image={images[project.img]}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            color="primary"
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="primary"
                            component="p"
                          >
                            {project.description} <br />
                            {project.createdUsing}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <a
                          href={project.github}
                          style={{ textDecoration: "none" }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="small" color="primary">
                            Git Hub Repository
                          </Button>
                        </a>
                      </CardActions>
                    </Card>
                    <Dialog
                      open={dialogList[index]}
                      onClose={() => {
                        closeDialog(index);
                      }}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        <div style={{ fontSize: "30px" }}>
                          {project.title} <br />
                        </div>
                        {project.technologies}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText
                          style={{ fontSize: "20px" }}
                          id="alert-dialog-description"
                        >
                          {project.descriptionT}
                        </DialogContentText>
                        <center>
                          <a
                            href={project.github}
                            style={{ textDecoration: "none" }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              style={{ backgroundColor: "#0093DA" }}
                              color="secondary"
                            >
                              Github Code
                            </Button>
                          </a>
                        </center>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          color="primary"
                          autoFocus
                          onClick={() => {
                            closeDialog(index);
                          }}
                        >
                          Close
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </Grid>
                );
              })}
            </Grid>
          </Slide>
        </React.Fragment>
      </VisibilitySensor>
    </div>
  );
};

export default Projects;
