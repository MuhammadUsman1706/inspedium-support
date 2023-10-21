import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import StepNavbar from "./AuthStepperElements/StepNavbar";
import PurchaseDetails from "./AuthStepperElements/PurchaseDetails";
import PaymentDetails from "./AuthStepperElements/PaymentDetails";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import initialDisplayUnderline from "../../../assets/images/initial-display-underline.png";
import initialDisplayBackground from "../../../assets/images/initial-display-background.png";

import classes from "./AuthStepper.module.css";
import "animate.css";

const AuthStepper = () => {
  const [stripePromise, setStripePromise] = useState(
    loadStripe(
      "pk_test_51Kc2EhC3IsnALfcCI9kbjE60oThLuvXHGeQgyTNsnWjd5FdL68SkKRn2hx3ZOVfJuTulS8mu0qx4fJTK5hhXYZxF00UZvS6LGx"
    )
  );

  const [options, setOptions] = useState({
    clientSecret:
      "pi_3MOgnEC3IsnALfcC0MNORB1f_secret_WnMMDAy17SiSMauca6xuUdIIF",
    appearance: {
      variables: {
        colorText: "#465EB7",
        fontSizeSm: "16px",
        spacingGridRow: "2rem",
      },
    },
  });

  let custom = {
    enterRight: "animate__animated animate__backInRight",
    enterLeft: "animate__animated animate__backInLeft",
    exitRight: "animate__animated animate__fadeOut",
    exitLeft: "animate__animated animate__fadeOut",
    intro: "animate__animated animate__backInRight",
  };

  return (
    <div className={classes.auth}>
      <section className={classes["initial-display"]}>
        <div className={classes["initial-text"]}>
          <h1>Buy Now</h1>
          <img src={initialDisplayUnderline} alt="" />
        </div>
        <div className={classes["initial-image"]}>
          <img src={initialDisplayBackground} alt="" />
        </div>
      </section>
      <section className={classes["auth-stepper"]}>
        <StepWizard transitions={custom} nav={<StepNavbar />}>
          <PurchaseDetails />
          <Elements stripe={stripePromise} options={options}>
            <PaymentDetails />
          </Elements>
        </StepWizard>
      </section>
    </div>
  );
};

export default AuthStepper;
