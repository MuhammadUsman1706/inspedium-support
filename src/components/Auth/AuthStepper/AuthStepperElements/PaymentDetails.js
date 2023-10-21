import React from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import classes from "./PaymentDetails.module.css";

const PaymentDetails = () => {
  return (
    <main className={classes["payment-details"]}>
      <form>
        <PaymentElement />
        <div className={classes["total-price"]}>
          <hr />
          <div>
            <h1>Total Price</h1>
            <h1>
              <span>$2.00</span>
            </h1>
          </div>
        </div>
        <div className={classes["form-buttons"]}>
          <button className="color-button">Cancel</button>
          <button type="submit" className="color-inverse-button">
            Continue
          </button>
        </div>
      </form>
    </main>
  );
};

export default PaymentDetails;
