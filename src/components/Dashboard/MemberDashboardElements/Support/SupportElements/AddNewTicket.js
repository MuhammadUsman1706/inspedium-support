import React from "react";
import { TextField } from "@mui/material";
import AttachmentIcon from "@mui/icons-material/Attachment";

import classes from "./AddNewTicket.module.css";

const AddNewTicket = () => {
  return (
    <main className={classes["new-ticket"]}>
      <div className={classes.header}>
        <h2>Add New Ticket</h2>
        <hr />
      </div>

      <form className={classes["new-ticket-form"]}>
        <div className={classes.inputs}>
          <div className={classes.inline}>
            <div>
              <label htmlFor="subject">Subject</label>
              <TextField
                id="subject"
                name="subject"
                placeholder="Enter Subject"
                variant="outlined"
                fullWidth
              />
            </div>
            <div>
              <label htmlFor="department">Department</label>
              <TextField
                id="department"
                name="department"
                placeholder="Select Department"
                variant="outlined"
                fullWidth
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="message">Message</label>
              <TextField
                id="message"
                name="message"
                placeholder="Select Department"
                variant="outlined"
                multiline
                rows={4}
                maxRows={10}
                fullWidth
              />
            </div>

            <label className={classes["att-label"]} htmlFor="attachment">
              <span>
                <AttachmentIcon /> Attachments
              </span>
            </label>
            <input
              id="attachment"
              className={classes["att-input"]}
              type="file"
            />
          </div>
        </div>

        <button
          style={{ margin: "2rem 0 0 0" }}
          type="submit"
          className="color-button"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default AddNewTicket;
