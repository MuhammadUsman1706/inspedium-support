import React from "react";
import { TextField } from "@mui/material";
import initialDisplayUnderline from "../../assets/images/initial-display-underline.png";
import initialDisplayBackground from "../../assets/images/initial-display-background.png";
import textUnderline from "../../assets/images/features-text-underline.png";
import googleMap from "../../assets/images/google-map.png";
import supportIcon from "../../assets/images/support-icon.png";
import questionIcon from "../../assets/images/questions-icon.png";
import PhoneIcon from "@mui/icons-material/Phone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";

import classes from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={classes["contact-us"]}>
      <section className={classes["initial-display"]}>
        <div className={classes["initial-text"]}>
          <h1>Contact Us</h1>
          <img src={initialDisplayUnderline} alt="" />
          <p>
            We appreciate your interest in Inspedium.Cloud. If you would like to
            contact us for any reason, please do not hesitate to do so. We would
            be happy to answer any questions or inquiries that you may have. Our
            contact information is listed below, and we look forward to hearing
            from you soon.
          </p>
          <button className="color-button">Buy Now</button>
        </div>
        <div className={classes["initial-image"]}>
          <img src={initialDisplayBackground} alt="" />
        </div>
      </section>

      <main className={classes.support}>
        <div className={classes["contact-details"]}>
          <div>
            <h1>Inspedium - Support</h1>
            <h1 className={classes.purple}>Contact Details</h1>
            <img className={classes.underline} src={textUnderline} alt="" />
            <div className={classes["info"]}>
              <div>
                <PhoneIcon />
                <h2>Phone Number</h2>
                <p>+1 (315) 554-9664</p>
              </div>
              <div>
                <FmdGoodIcon />
                <h2>Location</h2>
                <p>19 Holly Cove Ln, Dover, DE 19901, United States</p>
              </div>
              <div>
                <EmailIcon />
                <h2>Email</h2>
                <p>info@inspedium.cloud</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["formap"]}>
          <form onSubmit={(event) => event.preventDefault()} action="">
            <TextField
              id="outlined-basic"
              label="Enter Your Name"
              variant="outlined"
              type="text"
              required
            />
            <TextField
              id="outlined-basic"
              label="Enter Your Email"
              variant="outlined"
              type="email"
              required
            />
            <TextField
              placeholder="Enter Your Message"
              multiline
              rows={2}
              maxRows={4}
            />

            <button className="color-button">Message</button>
          </form>
          <img src={googleMap} alt="" />
        </div>

        <section className={classes["support-cards"]}>
          <div>
            <img src={supportIcon} alt="" />
            <h3>Get Support</h3>
            <p
              style={{
                color: "#76839A",
              }}
              className={classes.paragraph}
            >
              Please visit our support website. Our dedicated team will help you
            </p>
            <p style={{ color: "#465EB7" }}>Support : support@spruko.com</p>
          </div>
          <div>
            <img src={questionIcon} alt="" />
            <h3>Get Support</h3>
            <p className={classes.paragraph}>
              Please visit our support website. Our dedicated team will help you
            </p>
            <p style={{ color: "#465EB7" }}>Support : support@spruko.com</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
