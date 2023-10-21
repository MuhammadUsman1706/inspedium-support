import React from "react";
import logo from "../../assets/images/logo.png";
import initialDisplayBackground from "../../assets/images/initial-display-background.png";

import classes from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const footerNavigationHandler = (event) => {
    navigate(event.target.id);
  };
  return (
    <div className={classes.footer}>
      <img src={initialDisplayBackground} alt="" />
      <span className={classes.logo}>
        <img src={logo} alt="" /> <h3>Inspedium Support</h3>
      </span>
      <p>
        Copyright © 2022 Inspedium. Designed with by Spruko All rights reserved.
      </p>
      <div>
        <button
          id="/buy-now"
          onClick={footerNavigationHandler}
          className="color-button"
        >
          Buy Now
        </button>
        <button
          id="/license-terms"
          onClick={footerNavigationHandler}
          className="color-inverse-button"
        >
          License
        </button>
      </div>
    </div>
  );
};

export default Footer;
