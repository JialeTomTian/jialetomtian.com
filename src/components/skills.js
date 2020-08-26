import React from "react";
import Typography from "@material-ui/core/Typography";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// Import Swiper styles
import "swiper/swiper.scss";
import { skillsList } from "./websiteDetails";
import Slide from "@material-ui/core/Slide";
import VisibilitySensor from "react-visibility-sensor";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

const Skills = () => {
  const [loadSkills, setLoadSkills] = React.useState(false);

  return (
    <VisibilitySensor
      partialVisibility={"bottom"}
      onChange={(isVisible) => {
        console.log(isVisible);
        setTimeout(() => {
          if (isVisible) {
            setLoadSkills(true);
          }
        }, 500);
      }}
    >
      <React.Fragment>
        <Typography variant="h2" style={{ margin: "30px" }} color="primary">
          Tools
        </Typography>
        <Slide
          direction="left"
          in={loadSkills}
          timeout={{ enter: 1000, exit: 1000 }}
        >
          <div
            style={{
              marginLeft: "100px",
              marginRight: "100px",
              marginBottom: "100px",
            }}
          >
            <Swiper
              autoplay={{ delay: "2000" }}
              navigation
              breakpoints={{
                // when window width is <= 499px
                499: {
                  slidesPerView: 1,
                  spaceBetweenSlides: 50,
                },
                // when window width is <= 999px
                999: {
                  slidesPerView: 3,
                  spaceBetweenSlides: 50,
                },
                1500: {
                  slidesPerView: 5,
                  spaceBetweenSlides: 50,
                },
              }}
            >
              {skillsList.map((skill) => {
                if (skill.title !== "C/C++") {
                  return (
                    <SwiperSlide>
                      <img
                        alt={skill.title}
                        src={skill.link}
                        width="150px"
                        height="150px"
                      />
                      <Typography variant="subtitle2" color="primary">
                        {skill.title}
                      </Typography>
                    </SwiperSlide>
                  );
                } else {
                  return (
                    <SwiperSlide>
                      <img
                        alt={skill.title}
                        src={skill.link}
                        width="140px"
                        height="160px"
                      />
                      <Typography variant="subtitle2" color="primary">
                        {skill.title}
                      </Typography>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
          </div>
        </Slide>
      </React.Fragment>
    </VisibilitySensor>
  );
};

export default Skills;
