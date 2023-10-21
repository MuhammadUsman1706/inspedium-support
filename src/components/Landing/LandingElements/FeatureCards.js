import React, { Component } from "react";
import Slider from "react-slick";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import classes from "./FeatureCards.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class FeatureCards extends Component {
  state = {
    activeClassIndex: 1,
  };

  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      swipeToSlide: true,
      // autoplay: true,
      // speed: 2000,
      // autoplaySpeed: 2000,
      // cssEase: "linear",
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },

        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
          },
        },
      ],
      afterChange: (index) => {
        this.setState({ activeClassIndex: index + 1 });
      },
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <div
              id={this.state.activeClassIndex === 1 && classes["active-card"]}
              className={classes["feature-card"]}
            >
              <span>{<StarBorderIcon />}</span>
              <h1>Role Management</h1>
              <p>
                Roles management allows you to create custom roles and set
                access permissions for those roles. So that you can assign the
                roles to manage the employees with those roles.
              </p>
            </div>
          </div>
          <div>
            <div
              id={this.state.activeClassIndex === 2 && classes["active-card"]}
              className={classes["feature-card"]}
            >
              <span>{<StarBorderIcon />}</span>
              <h1>Create Groups</h1>
              <p>
                Roles management allows you to create custom roles and set
                access permissions for those roles. So that you can assign the
                roles to manage the employees with those roles.
              </p>
            </div>
          </div>
          <div>
            <div
              id={this.state.activeClassIndex === 3 && classes["active-card"]}
              className={classes["feature-card"]}
            >
              <span>{<StarBorderIcon />}</span>
              <h1>Custom Projects</h1>
              <p>
                Roles management allows you to create custom roles and set
                access permissions for those roles. So that you can assign the
                roles to manage the employees with those roles.
              </p>
            </div>
          </div>
          <div>
            <div
              id={this.state.activeClassIndex === 4 && classes["active-card"]}
              className={classes["feature-card"]}
            >
              <span>{<StarBorderIcon />}</span>
              <h1>Security</h1>
              <p>
                Roles management allows you to create custom roles and set
                access permissions for those roles. So that you can assign the
                roles to manage the employees with those roles.
              </p>
            </div>
          </div>
          <div>
            <div
              id={this.state.activeClassIndex === 5 && classes["active-card"]}
              className={classes["feature-card"]}
            >
              <span>{<StarBorderIcon />}</span>
              <h1>Role Management</h1>
              <p>
                Roles management allows you to create custom roles and set
                access permissions for those roles. So that you can assign the
                roles to manage the employees with those roles.
              </p>
            </div>
          </div>
          <div>
            <div
              id={this.state.activeClassIndex === 6 && classes["active-card"]}
              className={classes["feature-card"]}
            >
              <span>{<StarBorderIcon />}</span>
              <h1>Role Management</h1>
              <p>
                Roles management allows you to create custom roles and set
                access permissions for those roles. So that you can assign the
                roles to manage the employees with those roles.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
