import React, { useState } from "react";
import Copyrights from "./LicenseTermsElements/Copyrights";
import LicenseDetails from "./LicenseTermsElements/LicenseDetails";
import LicenseFaqs from "./LicenseTermsElements/LicenseFaqs";
import SupportPolicy from "./LicenseTermsElements/SupportPolicy";
import DMCA from "./LicenseTermsElements/DMCA";
import initialDisplayUnderline from "../../../assets/images/initial-display-underline.png";
import initialDisplayBackground from "../../../assets/images/initial-display-background.png";

import classes from "./LicenseTerms.module.css";

const LicenseTerms = () => {
  const [tab, setTab] = useState("1");
  const setTabHandler = (event) => {
    setTab(event.target.id);
  };

  return (
    <div className={classes["license-terms"]}>
      <section className={classes["initial-display"]}>
        <div className={classes["initial-text"]}>
          <h1>IMPORTANT LICENSE TERMS</h1>
          <img src={initialDisplayUnderline} alt="" />
          <ul>
            <li>
              You cannot charge from your end product end users with a Regular
              License
            </li>
            <li>
              If you want to collect payments from end product end users then
              you must buy an Extended License.
            </li>
            <li>
              You must buy one license for one domain only.(i.e Either Regular
              or Extended)
            </li>
            <li>
              You cannot use Multi Domain,Multi Client, Multiple end Products
              with any of the licenses (i.e Either Regular or Extended).
            </li>
            <li>for more details please click license details or faq's</li>
          </ul>
          {/* <button className="color-button">Buy Now</button> */}
        </div>
        <div className={classes["initial-image"]}>
          <img src={initialDisplayBackground} alt="" />
        </div>
      </section>

      <main className={classes["main-terms"]}>
        <div className={classes["terms-tabs"]}>
          <button
            id="1"
            onClick={setTabHandler}
            className={tab === "1" ? classes.active : classes.inact}
          >
            Copyrights
          </button>
          <button
            id="2"
            className={tab === "2" ? classes.active : classes.inact}
            onClick={setTabHandler}
          >
            License Details
          </button>
          <button
            id="3"
            className={tab === "3" ? classes.active : classes.inact}
            onClick={setTabHandler}
          >
            License Faq’s
          </button>
          <button
            id="4"
            className={tab === "4" ? classes.active : classes.inact}
            onClick={setTabHandler}
          >
            Support Policy (FAQ’s)
          </button>
          <button
            id="5"
            className={tab === "5" ? classes.active : classes.inact}
            onClick={setTabHandler}
          >
            DMCA (Legal)
          </button>
        </div>

        <section className={classes["main-content"]}>
          {tab === "1" && <Copyrights />}
          {tab === "2" && <LicenseDetails />}
          {tab === "3" && <LicenseFaqs />}
          {tab === "4" && <SupportPolicy />}
          {tab === "5" && <DMCA />}
        </section>
      </main>
    </div>
  );
};

export default LicenseTerms;
