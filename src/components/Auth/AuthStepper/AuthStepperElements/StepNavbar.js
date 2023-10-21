import React from "react";

import classes from "./StepNavbar.module.css";

const StepNavbar = (props) => {
  return (
    <header className={classes["stepper-navbar"]}>
      <button
        className={props.currentStep === 1 && classes.active}
        onClick={() => props.goToStep(1)}
      >
        Purchase Details
      </button>
      <span />
      <button
        className={props.currentStep === 2 && classes.active}
        onClick={() => props.goToStep(2)}
      >
        Payment Details
      </button>
    </header>
  );
};

export default StepNavbar;
