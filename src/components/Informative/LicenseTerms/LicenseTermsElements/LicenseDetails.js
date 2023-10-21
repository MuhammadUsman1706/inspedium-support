import React from "react";
import Faq from "react-faq-component";
import textUnderline from "../../../../assets/images/features-text-underline.png";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

import classes from "./LicenseDetails.module.css";

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

const LicenseDetails = () => {
  const styles = {
    titleTextColor: "blue",
    rowTitleColor: "black",
    rowContentColor: "grey",
  };

  const availableIcon = (
    <td style={{ color: "#465EB7" }}>
      <DoneIcon />
    </td>
  );

  const notAvailableIcon = (
    <td style={{ color: "#E32423" }}>
      <CloseIcon />
    </td>
  );

  const licenseDetails = [
    {
      text: "Use in a single end product",
      regular: true,
      extended: true,
    },
    {
      text: "Use in a free end product (more than one end user allowed)",
      regular: true,
      extended: true,
    },
    {
      text: "Use in an end product that's sold ( like subscription / membership … etc )",
      regular: false,
      extended: true,
    },
    {
      text: "Which license for SAAS ? (End Product Single Application)",
      regular: false,
      extended: true,
    },
    {
      text: "Use in stock items/templates (See FAQ for more details)",
      regular: false,
      extended: false,
    },
    {
      text: "I am planning to use the item in a product that I will sell.",
      regular: false,
      extended: true,
    },
    {
      text: "End product that is free, but has parts some users need to pay to access (one time payment, subscription / membership … etc)",
      regular: false,
      extended: true,
    },
    {
      text: "Do you have a developer license?",
      regular: false,
      extended: false,
    },
    {
      text: "Which license for our client want to Sell the End Product ? ( fee is paid to subscription to a Service that includes the End Product. Eg. one time payment, subscription / membership … etc )",
      regular: false,
      extended: true,
    },
    {
      text: "Does Images Are Included In the Item After purchase?",
      regular: false,
      extended: false,
    },
    {
      text: "Life Time Free Unlimited Updates are available.",
      regular: true,
      extended: true,
    },
  ];

  const featureAvailabilityHandler = () => {
    const licenseTable = licenseDetails.map((detail) => (
      <tr>
        <td className={classes.text}>{detail.text}</td>
        {detail.regular ? availableIcon : notAvailableIcon}
        {detail.extended ? availableIcon : notAvailableIcon}
      </tr>
    ));

    return licenseTable;
  };

  return (
    <div className={classes["license-details"]}>
      <div>
        <div className={classes["initial-text"]}>
          <h1>License Details</h1>
          <img className={classes.underline} src={textUnderline} alt="" />
        </div>
        <div>
          <table className={classes["detail-table"]}>
            <thead>
              <tr>
                <th>License Details</th>
                <th>
                  Regular License
                  <p>View License Details</p>
                </th>
                <th>
                  Extended License
                  <p>View License Details</p>
                </th>
              </tr>
            </thead>
            <br />
            <tbody>
              <tr>
                <td className={classes.text}>Number of end products </td>
                <td style={{ color: "#76839A" }}>01</td>
                <td style={{ color: "#76839A" }}>01</td>
              </tr>
              {featureAvailabilityHandler()}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="3">
                  <p>
                    Disclaimer : Our all items subject to themeforest and
                    codecanyon licensing.
                  </p>
                  <p>
                    Please refer to license details the above information is
                    summary only
                  </p>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div>
        <div className={classes["initial-text"]}>
          <h1>
            Frequently Asked <span>Questions</span>
          </h1>
          <img className={classes.underline} src={textUnderline} alt="" />
        </div>
        <Faq data={data} styles={styles} />
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

export default LicenseDetails;
