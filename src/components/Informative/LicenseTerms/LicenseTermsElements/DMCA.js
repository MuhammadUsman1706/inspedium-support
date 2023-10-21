import React from "react";
import textUnderline from "../../../../assets/images/features-text-underline.png";

import classes from "./DMCA.module.css";

const DMCA = () => {
  return (
    <div className={classes.dmca}>
      <div className={classes["initial-text"]}>
        <h1>Digital Millennium Copyright Act (DMCA)</h1>
        <img className={classes.underline} src={textUnderline} alt="" />
        <p>
          Our Legal Team Always ready to send takedown notices based on DMCA Act
          (Digital Millennium Copyright Act ) in removing content from the
          internet. <br />
          Our Legal Team ready to send a DMCA takedown notice to any service
          provider associated with the infringing content anytime, without any
          notice. Including the Website Host Company, Domain Company,Server
          Company, Youtube or any online ad networks like Google's AdSense, and
          search engines showing the content in their search results. <br />
          It also criminalizes the act of circumventing an access control,
          whether or not there is actual infringement of copyright itself. In
          addition, the DMCA heightens the penalties for copyright infringement
          on the Internet.
        </p>
      </div>

      <div className={classes["initial-text"]}>
        <h1>
          WHAT HAPPENS IN CASE YOU OR YOUR CLIENT USES
          <span> UNAUTHORIZED LICENSE?</span>
        </h1>
        <img className={classes.underline} src={textUnderline} alt="" />
        <p>
          Unauthorized license usage,YOU or YOUR CLIENT, as well as unauthorized
          reproduction or redistribution of this product, software, or any of
          its components may result in severe civil and criminal penalties, and
          will be prosecuted to the fullest extent permitted by law. Our Legal
          Team is Always ready to send take down notices based on DMCA Act
          (Digital Millennium Copyright Act ) in removing content from the
          internet.. Our Legal Team is always ready to send a DMCA take down
          notice to any service provider associated with the infringing content
          anytime, without any notice. Including the Website Hosting Company,
          Domain Company,Server Company, Youtube, Payment Gateway Companies, or
          any online ad networks like Google's AdSense,Social ad networks and
          search engines showing the content in their search results. It also
          criminalizes the act of circumventing an access control, whether or
          not there is actual infringement of copyright itself. In addition, the
          DMCA heightens the penalties for copyright infringement on the
          Internet. After sending a DMCA notice to your service providers. If no
          one responds from your company. In that case your company's services
          will be suspended.
        </p>
      </div>
    </div>
  );
};

export default DMCA;
