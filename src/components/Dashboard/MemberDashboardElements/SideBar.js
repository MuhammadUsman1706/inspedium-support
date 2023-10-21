import React from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
// import LanguageIcon from "@mui/icons-material/Language";
// import EmailIcon from "@mui/icons-material/Email";
import CategoryIcon from "@mui/icons-material/Category";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../../assets/images/logo.png";

import classes from "./SideBar.module.css";

const SideBar = ({ dashboardMenu, setDashboardMenu }) => {
  const navigate = useNavigate();

  const logUserOutHandler = () => {
    try {
      // dispatch(logOutUser());
      navigate("/");
    } catch (err) {
      toast.error("Dear User, couldn't log you out 💔. We love you dearly!");
    }
  };

  const setDashboardMenuHandler = (event) => {
    setDashboardMenu(event.target.id);
  };

  return (
    <div
      style={{
        maxWidth: "fit-content",
        borderRadius: 0,
      }}
      className={classes["side-bar"]}
    >
      <div className={classes.logo}>
        <Link to="/">
          <img loading="lazy" src={logo} alt="Inspedium Support Logo" />
          <span>Inspedium Support</span>
        </Link>
      </div>

      <div className={classes.menu}>
        <button
          id="Product"
          onClick={(event) => setDashboardMenuHandler(event)}
          className={
            dashboardMenu === "Product" || dashboardMenu === "Add Product"
              ? classes["active-menu-button"]
              : classes["menu-button"]
          }
        >
          <CategoryIcon />
          Product
        </button>
        <button
          id="Support"
          onClick={(event) => setDashboardMenuHandler(event)}
          className={
            dashboardMenu === "Support" || dashboardMenu === "Add New Ticket"
              ? classes["active-menu-button"]
              : classes["menu-button"]
          }
        >
          <MessageIcon />
          Support
        </button>
        <button
          id="Profile"
          onClick={(event) => setDashboardMenuHandler(event)}
          className={
            dashboardMenu === "Profile"
              ? classes["active-menu-button"]
              : classes["menu-button"]
          }
        >
          <PersonIcon />
          Profile
        </button>
        <button
          id="Payment Info"
          onClick={(event) => setDashboardMenuHandler(event)}
          className={
            dashboardMenu === "Payment Info"
              ? classes["active-menu-button"]
              : classes["menu-button"]
          }
        >
          <CreditCardIcon />
          Payment Info
        </button>
        <button
          id="Invoices"
          onClick={(event) => setDashboardMenuHandler(event)}
          className={
            dashboardMenu === "Invoices"
              ? classes["active-menu-button"]
              : classes["menu-button"]
          }
        >
          <ReceiptIcon />
          Invoices
        </button>
      </div>
      <button
        onClick={logUserOutHandler}
        className={`${classes["menu-button"]} ${classes["logout-button"]}`}
      >
        <LogoutIcon />
        Logout
      </button>
    </div>
  );
};

export default SideBar;
