import React from "react";
import { Box, Modal, Typography } from "@mui/material";

import classes from "./ViewDetailsModal.module.css";

const ViewDetailsModal = ({ open, setOpen }) => {
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
          View Details
        </Typography>

        <div className={classes["create-modal-form"]}>
          <div className={classes.rules}>
            <p>
              <span>Application Name: </span>
              Cloud Sales
            </p>
            <p>
              <span>Url: </span>
              Cloud Sales
            </p>
            <p>
              <span>Username: </span>
              Cloud Sales
            </p>
            <p>
              <span>Password: </span> Cloud Sales
            </p>
          </div>
          <div className={classes["submit-buttons"]}>
            <button
              style={{ margin: 0 }}
              onClick={() => setOpen(false)}
              className="color-button"
            >
              Close
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ViewDetailsModal;
