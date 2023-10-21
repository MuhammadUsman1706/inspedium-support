import React from "react";
import Faq from "react-faq-component";
import FeatureCards from "./LandingElements/FeatureCards";
import ScreenshotsCarousel from "./LandingElements/ScreenshotsCarousel";
import initialDisplayUnderline from "../../assets/images/initial-display-underline.png";
import initialDisplayBackground from "../../assets/images/initial-display-background.png";
import initialDisplayTable from "../../assets/images/initial-display-table.png";
import featuresTextUnderline from "../../assets/images/features-text-underline.png";
import carouselBackground from "../../assets/images/carousel-background.png";
import highlightsListTick from "../../assets/images/highlights-list-tick.png";
import supportIcon from "../../assets/images/support-icon.png";
import questionsIcon from "../../assets/images/questions-icon.png";
import highlight1 from "../../assets/images/landing-misc/highlight-1.png";
import highlight2 from "../../assets/images/landing-misc/highlight-2.png";
import highlight3 from "../../assets/images/landing-misc/highlight-3.png";
import highlight4 from "../../assets/images/landing-misc/highlight-4.png";
import laravel from "../../assets/images/landing-misc/laravel.png";
import npm from "../../assets/images/landing-misc/npm.png";
import laravelMix from "../../assets/images/landing-misc/laravelMix.png";
import bootstrap from "../../assets/images/landing-misc/bootstrap.png";
import html from "../../assets/images/landing-misc/html.png";
import jquery from "../../assets/images/landing-misc/jquery.png";
import sass from "../../assets/images/landing-misc/sass.png";

import classes from "./Landing.module.css";

const data = {
  // title: "FAQ (How it works)",
  rows: [
    {
      title: "How do i pay for the essentials or premium plan?",
      content:
        "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
    {
      title:
        "Can i cancel my essentials or premium plan subscription at anytime?",
      content:
        "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
    {
      title: "We need to add new users to our team. How will that be billed?",
      content:
        "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
    {
      title:
        "My teams wants to cancel it is subcription. How do we that? can we get a refund?",
      content:
        "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
    {
      title:
        "Do you offer discounts for non fropit organizations or educational institutions?",
      content:
        "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
  ],
};

const Landing = () => {
  const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "black",
    rowContentColor: "grey",
    // arrowColor: "red",
  };

  const featureApps = [
    { text: "Laravel", image: laravel },
    { text: "NPM", image: npm },
    { text: "Laravel Mix", image: laravelMix },
    { text: "BOOTSTRAP 5", image: bootstrap },
    { text: "HTML 5", image: html },
    { text: "JQUERY", image: jquery },
    { text: "SASS", image: sass },
  ];

  const highlightsList = [
    "Force SSL",
    "Rating System",
    "Email Templates",
    "Reports",
    "Infinity Scrolling",
    "Custom Pages",
    "Articles",
    "Auto Reload",
    "Language",
  ];

  return (
    <main className={classes.landing}>
      <section className={classes["initial-display"]}>
        <div className={classes["initial-text"]}>
          <h1>
            Inspedium-Support <span>Ticketing System</span>
          </h1>
          <img src={initialDisplayUnderline} alt="" />
          <p>
            The Inspedium support ticketing system is a customer support
            management application. It provides a great user experience for the
            end users by keeping track of customers' requests and solving their
            issues based on issue type, priority, and category. It allows
            customers to receive support as quickly as possible while keeping
            track of their requests. You may give your customers a consistent
            support experience by using the Inspedium-Support Ticketing System.
          </p>
          <button className="color-button">Buy Now</button>
        </div>
        <div className={classes["initial-image"]}>
          <img src={initialDisplayBackground} alt="" />
          <div>
            <img src={initialDisplayTable} alt="" />
          </div>
        </div>
      </section>

      <article className={classes.features}>
        <div className={classes["features-text"]}>
          <h1>Inspedium-Support</h1>
          <h1>
            <span>Application Features</span>
          </h1>
          <img src={featuresTextUnderline} alt="" />
          <p>
            Check out these most trending features that are used in the
            Inspedium application that shows how we improved and developed our
            application.
          </p>
        </div>
        <div className={classes["feature-apps"]}>
          {featureApps.map((app) => (
            <div>
              <img src={app.image} alt={app.text} />
              <p>{app.text}</p>
            </div>
          ))}
        </div>

        <section id="features" className={classes["main-features"]}>
          <div className={classes["side-content"]}>
            <h1>Inspedium-Support</h1>
            <h1>
              <span>Main Features</span>
            </h1>
            <img src={featuresTextUnderline} alt="" />
            <p className={classes.paragraph}>
              The Inspedium support ticketing system comes with ready-to-use
              features that are completely easy to use for any user, even a
              beginner, and it's a user-friendly application.
            </p>
          </div>
          <div className={classes["feature-cards"]}>
            <FeatureCards />
          </div>
        </section>
        <div id="pricing" className={classes["get-started-card"]}>
          <div>
            <h1>
              Lets Get <span>Started</span>
            </h1>
            <img src={featuresTextUnderline} alt="" />
            <p className={classes.paragraph}>
              Check out these most trending features that are used in the
              Inspedium application that shows how we improved and developed our
              application.
            </p>
            <button className="color-inverse-button">Buy Now</button>
          </div>
          <div>
            <h1>$ 0.99</h1>
            <hr />
            <ul>
              <li>Custom Roles</li>
              <li>Reports</li>
              <li>Projects</li>
              <li>User Groups</li>
            </ul>
          </div>
        </div>
      </article>

      <section className={classes.screenshots}>
        <img src={carouselBackground} alt="" />
        <div className={classes["screenshots-text"]}>
          <h1 className={classes.heading}>Inspedium - Support</h1>
          <h1 className={classes["color-heading"]}>
            <span>Important Screenshots</span>
          </h1>
          <img
            className={classes["heading-small-underline"]}
            src={featuresTextUnderline}
            alt="Important Screenshots"
          />
          <p className={classes.paragraph}>
            Check out the most important screenshots of the application so that
            you'll get an overview of the application.
          </p>
        </div>
        <ScreenshotsCarousel />
      </section>

      <section id="highlights" className={classes.highlights}>
        <div>
          <h1 className={classes.heading}>Application Highlights</h1>
          <img
            className={classes["heading-small-underline"]}
            src={featuresTextUnderline}
            alt=""
          />
          <p>
            The Inspedium support ticketing system is one of the modern
            applications. It comes with the most advanced and high-end features.
            Below are the highlights of the application.
          </p>
        </div>
        <div style={{ width: "100%", marginTop: "3rem" }}>
          <div className={classes["highlight-list"]}>
            <ul>
              {highlightsList.map((highlight) => (
                <li>
                  <img src={highlightsListTick} alt="" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className={classes["highlight-cards"]}>
              <div className={classes["highlight-card-list1"]}>
                <div>
                  <img src={highlight1} alt="" />
                  <h3>Customer Roles</h3>
                </div>
                <div>
                  <img src={highlight2} alt="" />
                  <h3>Customer Roles</h3>
                </div>
              </div>
              <div className={classes["highlight-card-list2"]}>
                <div>
                  <img src={highlight3} alt="" />
                  <h3>Customer Roles</h3>
                </div>
                <div>
                  <img src={highlight4} alt="" />
                  <h3>Customer Roles</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={classes["support-cards"]}>
        <div>
          <img src={supportIcon} alt="" />
          <h3>Get Support</h3>
          <p className={classes.paragraph}>
            Please visit our support website. Our dedicated team will help you
          </p>
          <p style={{ color: "#465EB7" }}>Support: support@spruko.com</p>
        </div>
        <div>
          <img src={questionsIcon} alt="" />
          <h3>Pre-Sale Questions</h3>
          <p className={classes.paragraph}>
            Please visit our support website. Our dedicated team will help you
          </p>
          <p style={{ color: "#465EB7" }}>Ask: support@spruko.com</p>
        </div>
      </div>
      <div id="faqs" className={classes.faqs}>
        <div>
          <h1 className={classes.heading}>Frequently Ask</h1>
          <h1 className={classes["color-heading"]}>Questions</h1>
          <img
            className={classes["heading-small-underline"]}
            src={featuresTextUnderline}
            alt=""
          />
          <p className={classes.paragraph}>
            Check out the frequently asked questions below to quickly set up
            your application without any delay.
          </p>
        </div>
        <div>
          <Faq data={data} styles={styles} />
        </div>
      </div>
    </main>
  );
};

export default Landing;
