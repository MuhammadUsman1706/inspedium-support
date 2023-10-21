import React from "react";
import initialDisplayUnderline from "../../assets/images/initial-display-underline.png";
import initialDisplayBackground from "../../assets/images/initial-display-background.png";
import textUnderline from "../../assets/images/features-text-underline.png";
import supportIcon from "../../assets/images/support-icon.png";
import questionIcon from "../../assets/images/questions-icon.png";
import leftPattern from "../../assets/images/about-us-pattern-left.png";
import rightPattern from "../../assets/images/about-us-pattern-right.png";

import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={classes["about-us"]}>
      <section className={classes["initial-display"]}>
        <div className={classes["initial-text"]}>
          <h1>About Us</h1>
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

      <main className={classes["about-main"]}>
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

        <section className={classes["main-cards"]}>
          <div className={classes["main-card"]}>
            <div>
              <h1>
                Dedication, <span>Teamwork</span>, Innovative and Reliable
                Services
              </h1>
              <img style={{ width: "100px" }} src={textUnderline} alt="" />
              <p>
                Every one of our staff members is dedicated to providing the
                finest quality service possible, demonstrating a great deal of
                dedication while attempting to meet the expectations of our
                customers. Our company was founded on the idea that great
                customer service begins with excellent employees. Our clients
                benefit from synergistic teams that collaborate to deliver
                top-level performance in all areas of their business using
                Inspedium’s world-class web hosting services. The skills,
                talents, and expertise possessed by Inspedium’s employees are
                unrivaled in the industry, allowing us to successfully implement
                our solutions to your web hosting demands. Inspedium is a
                reliable business partner that provides businesses of all sizes
                with a cost-effective answer for all their IT infrastructure
                wants. Our shared cloud and reseller web hosting solutions allow
                our clients to expand their IT setup economically and discreetly
                while depending on Inspedium to deliver cutting-edge technology.
              </p>
            </div>
            <img
              className={classes.pattern}
              style={{ float: "right" }}
              src={leftPattern}
              alt=""
            />
          </div>
          <div style={{ marginTop: "2rem" }} className={classes["main-card"]}>
            <img className={classes.pattern} src={rightPattern} alt="" />
            <div>
              <h1>Commitment to Excellence</h1>
              <img style={{ width: "100px" }} src={textUnderline} alt="" />
              <p>
                Our dedication to quality includes our promise to deliver
                scalable, dependable, and adaptable web hosting services.
                Inspedium strives to provide a system that is consistently
                reliable and constantly accessible to all of its clients,
                effectively delivering mission-critical services on a 24/7
                basis. Inspedium is the one-stop shop for a wide range of IT
                needs because it offers high-value, customizable products and
                services with proactively managed solutions delivered by a team
                of certified engineers. Whether you’re looking for bespoke cage
                alternatives, unique server requirements, or total IT solutions,
                designing and implementing your IT infrastructure with your
                input and requirements can be done in a cost-effective manner.
                We provide a hands-on approach that ensures the solution you
                choose is reliable and consistent, as well as customizable and
                flexible options that are value driven with an emphasis on
                secure business continuity and exceptional customer
                satisfaction.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
