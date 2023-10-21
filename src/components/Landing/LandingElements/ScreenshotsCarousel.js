import React from "react";
import { Carousel } from "react-responsive-carousel";
import screenShot1 from "../../../assets/images/screenshot-1.png";

import classes from "./ScreenshotsCarousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ScreenshotsCarousel = () => {
  return (
    <div className={classes["screenshots-carousel"]}>
      <Carousel showThumbs={false} emulateTouch={true}>
        <div className={classes.card}>
          <img src={screenShot1} />
          <p className="legend">Admin Dashboard</p>
        </div>
        <div className={classes.card}>
          <img src={screenShot1} />
          <p className="legend">Admin Dashboard</p>
        </div>
        <div className={classes.card}>
          <img src={screenShot1} />
          <p className="legend">Admin Dashboard</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ScreenshotsCarousel;
