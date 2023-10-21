import React from "react";
import Faq from "react-faq-component";
import textUnderline from "../../../../assets/images/features-text-underline.png";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

import classes from "./SupportPolicy.module.css";

const data = {
  rows: [
    {
      title: "How do I get Support?",
      content: (
        <p>
          We have an expert team to provide you with the best support whenever
          needed on business working days. We are also trying to assist
          non-technical support on the remaining days. Our Company’s technical
          support team will provide fast and reliable support assistance within
          response time or sooner. <br />
          Please note that we do not provide support via comments these are not
          official channels for customer support.
        </p>
      ),
    },
    {
      title: "What Happens If Support Expired OR If I Do Not Renew Support?",
      content:
        "Our support team will respond to your request as long as the support purchase period is active. We will be providing our support service as per the product/item support policy.",
    },
  ],
};

const licenseDetails = [
  {
    text: "Updates to ensure the item works as described and is protected against major security concerns",
    regular: true,
    extended: true,
  },
  {
    text: "Discretionary version updates",
    regular: true,
    extended: true,
  },
  {
    text: "Availability of the author of the item to provide item support",
    regular: true,
    extended: true,
  },
  {
    text: "Technical questions about the item's built-in features, functionality and third party plugins",
    regular: false,
    extended: true,
  },
  {
    text: "Technical questions about the item's built-in features, functionality and third party plugins",
    regular: false,
    extended: true,
  },
  {
    text: "Help with included third party assets (e.g. image sliders, contact forms)",
    regular: false,
    extended: false,
  },
  {
    text: "Item Customization (See FAQ for more details)",
    regular: false,
    extended: true,
  },
  {
    text: "Installation of the Item (See FAQ for more details)",
    regular: false,
    extended: true,
  },
  {
    text: "Hosting, Server environment, or Software (See FAQ for more details)",
    regular: false,
    extended: false,
  },
  {
    text: "Help from authors of included Third party assets (See FAQ for more details)",
    regular: false,
    extended: true,
  },
];

const SupportPolicy = () => {
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
    <div className={classes["support-policy"]}>
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
                  6 months support<p>View License Details</p>
                </th>
                <th>
                  All items
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
            SUPPORT POLICY <span>(FAQS)</span>
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

export default SupportPolicy;
