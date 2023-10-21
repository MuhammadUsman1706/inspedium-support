import React, { Fragment, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/images/logo.png";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = () => setDrawerState((prevState) => !prevState);

  const scrollPageHandler = (event) => {
    event.preventDefault();
    const target = event.currentTarget.name;
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(target);
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(target);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navbarNavigationHandler = (event) => {
    navigate(event.target.id);
  };

  const list = () => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
      id={classes["dropdown-box"]}
    >
      <div className={classes["dropdown-logo"]}>
        <img src={logo} alt="Inspedium Email" title="Inspedium Email" />
        <span style={{ color: "white" }}>
          <ClearIcon />
        </span>
      </div>
      {/* <Divider /> */}
      <List className={classes["dropdown-list"]}>
        <Link to="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>
        <a name="features" onClick={scrollPageHandler}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Features" />
            </ListItemButton>
          </ListItem>
        </a>
        <a name="pricing" onClick={scrollPageHandler}>
          <ListItem disablePadding>
            <ListItemButton>
              {/* <ListItemIcon></ListItemIcon> */}
              <ListItemText primary="Pricing" />
            </ListItemButton>
          </ListItem>
        </a>
        <a name="highlights" onClick={scrollPageHandler}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Highlights" />
            </ListItemButton>
          </ListItem>
        </a>
        <a name="faqs" onClick={scrollPageHandler}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Faqs" />
            </ListItemButton>
          </ListItem>
        </a>
        <Link to="/contact-us">
          <ListItem disablePadding>
            <ListItemButton>
              {/* <ListItemIcon></ListItemIcon> */}
              <ListItemText primary="Contact Us" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/about-us">
          <ListItem disablePadding>
            <ListItemButton>
              {/* <ListItemIcon></ListItemIcon> */}
              <ListItemText primary="About Us" />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem disablePadding>
          <ListItemButton className={classes["dropdown-buttons"]}>
            <button
              onClick={() => navigate("/buy-now")}
              className="color-button"
            >
              Buy Now
            </button>
            <button className="color-inverse-button">Log In</button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className={classes.background}>
      <header className={classes.navbar}>
        <div className={classes.logo}>
          <img src={logo} alt="" />
          <p>Inspedium Support</p>
        </div>
        <div className={classes.links}>
          <Link to="/">Home</Link>
          <a onClick={scrollPageHandler} name="features" to="/features">
            Features
          </a>
          <a onClick={scrollPageHandler} name="pricing" to="/pricing">
            Pricing
          </a>
          <a onClick={scrollPageHandler} name="highlights" to="/highlights">
            Highlights
          </a>
          <a onClick={scrollPageHandler} name="faqs" to="/faqs">
            Faqs
          </a>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/about-us">About Us</Link>
        </div>
        <div className={classes.auth}>
          <button
            id="/buy-now"
            onClick={navbarNavigationHandler}
            className="color-button"
          >
            Buy Now
          </button>
          <button
            id="/license-terms"
            onClick={navbarNavigationHandler}
            className="color-inverse-button"
          >
            License
          </button>
        </div>
        <div className={classes.dropdown}>
          <Button
            style={{
              padding: 0,
              color: "white",
            }}
            onClick={toggleDrawer}
          >
            <MenuIcon fontSize="medium" />
          </Button>
          <Drawer
            PaperProps={{
              sx: {
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              },
            }}
            anchor={"top"}
            open={drawerState}
            onClose={toggleDrawer}
          >
            {list()}
          </Drawer>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
