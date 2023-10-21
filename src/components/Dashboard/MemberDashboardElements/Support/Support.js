import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

import classes from "./Support.module.css";

const Support = ({ setDashboardMenu }) => {
  const SUPPORT_LIST = [
    {
      subject:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      status: true,
      department: "abcd",
      open: "02-Jan-2022",
      lastReply: "10:15 am",
    },
    {
      subject:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      status: true,
      department: "abcd",
      open: "02-Jan-2022",
      lastReply: "10:15 am",
    },
    {
      subject:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      status: true,
      department: "abcd",
      open: "02-Jan-2022",
      lastReply: "10:15 am",
    },
    {
      subject:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      status: true,
      department: "abcd",
      open: "02-Jan-2022",
      lastReply: "10:15 am",
    },
  ];

  return (
    <main className={classes.support}>
      <div className={classes.header}>
        <h2>Support List</h2>
        <button
          onClick={() => {
            setDashboardMenu("Add New Ticket");
          }}
          className="color-button"
        >
          Add Ticket
        </button>
      </div>

      <div className="table-parent">
        <table className="table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Status</th>
              <th>Department</th>
              <th>Open</th>
              <th>Last Reply</th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {SUPPORT_LIST.map((support) => (
              <tr>
                <td>{support.subject}</td>
                <td>
                  <span>
                    <label className={classes.switch}>
                      <input type="checkbox" defaultChecked={support.status} />
                      <span
                        className={`${classes.slider} ${classes.round}`}
                      ></span>
                    </label>
                  </span>
                </td>
                <td>{support.department}</td>
                <td>{support.open}</td>
                <td>{support.lastReply}</td>
                <td className="icons">
                  <VisibilityIcon />
                </td>
                <td className="icons">
                  <DeleteIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Support;
