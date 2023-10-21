import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import cardBackground from "../../../../assets/images/cardBackground.png";
import VisaLogo from "../../../../assets/images/VisaLogo.png";
import AmExLogo from "../../../../assets/images/AmExLogo.png";
import MastercardLogo from "../../../../assets/images/MastercardLogo.png";
import otherLogo from "../../../../assets/images/otherLogo.png";

import classes from "./PaymentInfo.module.css";

const PaymentInfo = () => {
  const paymentInfo = {
    brand: "visa",
    name: "John Smith",
    last4: "8837",
    exp_month: "09",
    exp_year: "24",
  };

  return (
    <div className={classes["payment-info"]}>
      <section className={`${classes["credit-card"]} ${classes.active}`}>
        <div className={classes["card-image"]}>
          <img loading="lazy" src={cardBackground} title="Credit Card" />
        </div>
        <header className={classes["credit-card-header"]}>
          <h2>{paymentInfo ? "Credit Card" : "Loading..."}</h2>
          {paymentInfo?.brand === "visa" && (
            <img
              src={
                paymentInfo?.brand === "visa"
                  ? VisaLogo
                  : paymentInfo?.brand === "mastercard"
                  ? MastercardLogo
                  : paymentInfo?.brand === "amex"
                  ? AmExLogo
                  : otherLogo
              }
              style={{ height: "100%" }}
            />
          )}
        </header>
        <main className={classes["credit-card-details"]}>
          <h2>{paymentInfo?.name ? paymentInfo?.name : "Card Not Found"}</h2>
          <div id={classes["card-number"]}>
            <span>****</span>
            <span>****</span>
            <span>****</span>
            <span>{paymentInfo?.last4}</span>
          </div>
        </main>
        <footer className={classes["credit-card-footer"]}>
          <p>Valid Till</p>
          <p>
            {(paymentInfo?.exp_month ? paymentInfo?.exp_month : "-") +
              " / " +
              (paymentInfo?.exp_year ? paymentInfo?.exp_year : "-")}
          </p>
        </footer>
      </section>

      {/* <section className={classes["card-detail-change"]}>
        <h2>Update Card</h2>
        <hr />
        <form className={classes["change-form"]}>
          <h1>(INSERT PAYMENT ELEMENT)</h1>
          <button
            type="submit"
            style={{ marginLeft: 0 }}
            className="color-button"
          >
            Update
          </button>
        </form>
      </section> */}

      <Accordion className={classes["card-detail-change"]}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          // sx={{ marginTop: "3rem" }}
        >
          <div style={{ width: "100%" }}>
            <h2>Update Card</h2>
            <hr />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form className={classes["change-form"]}>
            <h1>(INSERT PAYMENT ELEMENT)</h1>
            <button
              type="submit"
              style={{ marginLeft: 0 }}
              className="color-button"
            >
              Update
            </button>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PaymentInfo;
