import React from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";

import classes from "./Invoices.module.css";

const Invoices = () => {
  const INVOICE_LIST = [
    { no: "01", date: "22-Jan-2020", amount: "100", status: "Paid" },
    { no: "02", date: "22-Jan-2020", amount: "100", status: "Paid" },
    { no: "03", date: "22-Jan-2020", amount: "100", status: "Paid" },
    { no: "04", date: "22-Jan-2020", amount: "100", status: "Unpaid" },
  ];

  return (
    <main className={classes.invoices}>
      <div className={classes.header}>
        <h2>Invoice List</h2>
      </div>

      <div className="table-parent">
        <table className="table">
          <thead>
            <tr>
              <th>Inv Number</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {INVOICE_LIST.map((invoice) => (
              <tr>
                <td>{invoice.no}</td>
                <td>{invoice.date}</td>
                <td>{invoice.amount}</td>
                <td>{invoice.status}</td>
                <td className="icons">
                  <FileCopyIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Invoices;
