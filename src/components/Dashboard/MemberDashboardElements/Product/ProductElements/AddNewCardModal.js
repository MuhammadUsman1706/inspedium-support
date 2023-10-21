import React from "react";
import { Box, Modal, TextField, Typography } from "@mui/material";

import classes from "./AddNewCardModal.module.css";

const AddNewCardModal = ({ open, setOpen }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    fontFamily: "Public Sans !important",
    maxWidth: "90%",
    border: "none",
    borderRadius: "5px",
    // overflowY: "scroll !important",
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          sx={{
            margin: 0,
            background:
              "linear-gradient(91.9deg, #465EB7 0.8%, #6D40D2 99.45%)",
            padding: "0.5rem 1rem",
            color: "white",
          }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Add New Card
        </Typography>

        <form className={classes["create-modal-form"]}>
          <div className={classes.inputs}>
            <label htmlFor="cardHolderName">Card Holder Name</label>
            <TextField
              id="cardHolderName"
              name="cardHolderName"
              placeholder="Enter Card Holder Name"
              fullWidth
              variant="outlined"
            />
            <label htmlFor="name">Credit/Debit Card Number</label>
            <TextField
              id="cardNumber"
              name="cardNumber"
              placeholder="Enter 14 digit card number"
              fullWidth
              variant="outlined"
            />
            <label htmlFor="cvc">CVC</label>
            <TextField
              id="cvc"
              name="cvc"
              placeholder="CVC"
              fullWidth
              variant="outlined"
            />
            <label htmlFor="expiryDate">Expiry Date</label>
            <TextField
              id="expiryDate"
              name="expiryDate"
              placeholder="dd/mm/yy"
              fullWidth
              variant="outlined"
            />
          </div>
          <div className={classes["submit-buttons"]}>
            <button
              style={{ margin: 0 }}
              onClick={() => setOpen(false)}
              className="color-button"
            >
              Add
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default AddNewCardModal;
