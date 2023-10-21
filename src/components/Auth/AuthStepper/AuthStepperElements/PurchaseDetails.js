import React, { useState } from "react";
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import classes from "./PurchaseDetails.module.css";

const PurchaseDetails = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const setShowPasswordHandler = (event) => {
    const id = event.currentTarget.id;
    setShowPassword((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <main className={classes["purchase-details"]}>
      <form
        onSubmit={formSubmitHandler}
        className={classes["purchase-detail-form"]}
      >
        <div className={classes.inputs}>
          <div>
            <label htmlFor="applicationName">Application Name</label>
            <TextField
              id="applicationName"
              name="applicationName"
              placeholder="Enter Application Name"
              fullWidth
              variant="outlined"
            />
            <label htmlFor="name">Name</label>
            <TextField
              id="name"
              name="name"
              placeholder="Enter Your Name"
              fullWidth
              variant="outlined"
            />
            <label htmlFor="companyName">Company Name</label>
            <TextField
              id="companyName"
              name="companyName"
              placeholder="Enter Company Name"
              fullWidth
              variant="outlined"
            />
            <label htmlFor="password">Password</label>
            <OutlinedInput
              type={showPassword.password ? "text" : "password"}
              id="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    id="password"
                    onClick={setShowPasswordHandler}
                  >
                    {showPassword.password ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              variant="outlined"
            />
          </div>
          <div>
            <label htmlFor="domainName">Domain Name</label>
            <TextField
              id="domainName"
              name="domainName"
              placeholder="Enter Domain Name"
              fullWidth
              variant="outlined"
            />
            <label htmlFor="email">Email</label>
            <TextField
              id="email"
              name="email"
              placeholder="Enter Your Email Address"
              fullWidth
              variant="outlined"
            />
            <label htmlFor="phone">Phone Number</label>
            <TextField
              id="phone"
              name="phone"
              placeholder="Enter Your Phone Number"
              fullWidth
              variant="outlined"
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <OutlinedInput
              type={showPassword.confirmPassword ? "text" : "password"}
              id="confirmPassword"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    id="confirmPassword"
                    onClick={setShowPasswordHandler}
                  >
                    {showPassword.confirmPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              variant="outlined"
            />
          </div>
        </div>
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

export default PurchaseDetails;
