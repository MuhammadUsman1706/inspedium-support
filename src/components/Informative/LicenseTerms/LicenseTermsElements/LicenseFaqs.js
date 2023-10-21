import React from "react";
import textUnderline from "../../../../assets/images/features-text-underline.png";
import Faq from "react-faq-component";

import classes from "./LicenseFaqs.module.css";

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

const LicenseFaqs = () => {
  const styles = {
    titleTextColor: "blue",
    rowTitleColor: "black",
    rowContentColor: "grey",
  };

  return (
    <article className={classes["license-faqs"]}>
      <header className={classes["initial-text"]}>
        <h1>LICENSE FAQ'S</h1>
        <img className={classes.underline} src={textUnderline} alt="" />
      </header>
      <main>
        <Faq data={data} styles={styles} />
      </main>
      <footer className={classes.footer}>
        <p>
          Disclaimer : Our all items subject to themeforest and codecanyon
          licensing.
        </p>
        <p>
          Please refer to license details the above information is summary only
        </p>
      </footer>
    </article>
  );
};

export default LicenseFaqs;
