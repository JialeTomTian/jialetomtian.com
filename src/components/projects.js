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

const Projects = (props) => {
  const [loadProjects, setLoadProjects] = React.useState(false);
  React.useEffect(()=>{
    console.log(projectList);
  })
  const classes=props;
  return (
    <div style={{ marginTop: "2vh" }}>
      <VisibilitySensor
        onChange={(isVisible) => {
          console.log(isVisible);
          setTimeout(() => {
            if (isVisible) {
              setLoadProjects(true);
            }
          }, 500);
        }}
      >
        <React.Fragment>
          <Typography variant="h2" style={{ marginBottom: "20px" }}>
            Projects
          </Typography>
          <Slide
            direction="up"
            in={loadProjects}
            timeout={{ enter: 1000, exit: 1000 }}
          >
            <Grid container spacing={4} justify="center">
            {projectList.map((project) => {
              return (

                  <Grid
                    xs={8}
                    md={4}
                    style={{ margin: "20px", textAlign: "center" }}
                  >
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt={project.title}
                          height="250px"
                          image={project.img}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {project.description} <br/>
                            {project.createdUsing}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Git Hub Repository
                        </Button>
                      </CardActions>
                    </Card>
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