import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import VisibilitySensor from "react-visibility-sensor";
import { experienceList } from "./websiteDetails";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// Import Swiper styles
import "swiper/swiper.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

const Experiences = () => {
  const [dialogList, setDialogList] = React.useState(
    experienceList.map((experience) => {
      return false;
    })
  );
  const [buffer, setBuffer] = React.useState(false);
  const [loadProjects, setLoadProjects] = React.useState(false);
  const link = [
    "https://carnivalcinemas.ca/wp-content/uploads/2019/11/ctrl-v-logo-01-scaled-e1575663890248.png",
    "https://media-exp1.licdn.com/dms/image/C561BAQEWrF3juxY0Ng/company-background_10000/0?e=2159024400&v=beta&t=n7DYPRgwTQjGhzlBWcSaQdhQ8jGHANi0VlYMQcVNopw",
  ];

  console.log(dialogList);

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
    <div style={{ marginTop: "2vh", marginBottom: "10vh" }}>
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
            style={{ marginBottom: "20px", marginTop: "-80px" }}
            color="primary"
          >
            Experiences
          </Typography>
          <Slide
            direction="right"
            in={loadProjects}
            timeout={{ enter: 1000, exit: 1000 }}
          >
            <Grid container spacing={4} justify="center">
              {experienceList.map((experience, index) => {
                return (
                  <Grid
                    xs={8}
                    md={4}
                    style={{ margin: "20px", textAlign: "center" }}
                  >
                    <Card>
                      <CardActionArea
                        onClick={() => {
                          openDialog(index);
                        }}
                      >
                        <CardMedia
                          component="img"
                          alt={experience.title}
                          height="250px"
                          width="300px"
                          image={link[index]}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            color="primary"
                          >
                            {experience.location} <br />
                            {experience.position}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
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
                        {experience.location} <br />
                        {experience.position}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText
                          style={{ fontSize: "20px" }}
                          id="alert-dialog-description"
                        >
                         {experience.description}
                        </DialogContentText>
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

export default Experiences;
