import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

import classes from "./Product.module.css";
import ViewDetailsModal from "./ProductElements/ViewDetailsModal";

const Product = ({ setDashboardMenu }) => {
  const [viewDetails, setViewDetails] = useState();

  const PRODUCT_LIST = [
    {
      name: "abcd",
      url: "www.abc.com",
      username: "sarim ali",
      password: "********",
    },
    {
      name: "abcd",
      url: "www.abc.com",
      username: "sarim ali",
      password: "********",
    },
    {
      name: "abcd",
      url: "www.abc.com",
      username: "sarim ali",
      password: "********",
    },
    {
      name: "abcd",
      url: "www.abc.com",
      username: "sarim ali",
      password: "********",
    },
  ];

  return (
    <main className={classes.product}>
      <div className={classes.header}>
        <h2>Product List</h2>
        <button
          onClick={() => {
            setDashboardMenu("Add Product");
          }}
          className="color-button"
        >
          Add Product
        </button>
      </div>

      <div className="table-parent">
        <table className="table">
          <thead>
            <tr>
              <th>Application Name</th>
              <th>Url</th>
              <th>Username</th>
              <th>Password</th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {PRODUCT_LIST.map((product) => (
              <tr>
                <td>{product.name}</td>
                <td>{product.url}</td>
                <td>{product.username}</td>
                <td>{product.password}</td>
                <td onClick={() => setViewDetails(true)} className="icons">
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

      {viewDetails && (
        <ViewDetailsModal open={viewDetails} setOpen={setViewDetails} />
      )}
    </main>
  );
};

export default Product;
