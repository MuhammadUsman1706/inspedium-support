import React, { useState } from "react";
import AddNewCardModal from "./AddNewCardModal";
import { TextField } from "@mui/material";

import classes from "./AddProduct.module.css";

const AddProduct = () => {
  const [addNewCard, setAddNewCard] = useState(false);

  return (
    <main className={classes["add-product"]}>
      <div>
        <div className={classes.header}>
          <h2>Add Product</h2>
          <hr />
        </div>

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
          </div>
        </div>

        <div className={classes["card"]}>
          <p>
            <input
              style={{
                margin: "0 5px 0 0 ",
              }}
              type="radio"
              id="existingCard"
              name="existingCard"
              value="existingCard"
            />
            <label for="existingCard">Pay with Exisiting Credit Card</label>
          </p>
          <p>Or</p>
          <button
            onClick={() => setAddNewCard(true)}
            style={{ margin: 0 }}
            className="color-button"
          >
            Add New Card
          </button>
        </div>
      </div>

      <div>
        <div className={classes["total-price"]}>
          <hr />
          <div>
            <h2>Total Price</h2>
            <h2>
              <span>$2.00</span>
            </h2>
          </div>
        </div>
        <div className={classes["form-buttons"]}>
          <button className="color-button">Cancel</button>
          <button type="submit" className="color-inverse-button">
            Checkout
          </button>
        </div>
      </div>

      {addNewCard && (
        <AddNewCardModal open={addNewCard} setOpen={setAddNewCard} />
      )}
    </main>
  );
};

export default AddProduct;
