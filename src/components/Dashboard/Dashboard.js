import React, { useState, useEffect } from "react";
import SideBar from "./MemberDashboardElements/SideBar";
import TopBar from "./MemberDashboardElements/TopBar";
import Product from "./MemberDashboardElements/Product/Product";
import AddProduct from "./MemberDashboardElements/Product/ProductElements/AddProduct";
import Support from "./MemberDashboardElements/Support/Support";
import AddNewTicket from "./MemberDashboardElements/Support/SupportElements/AddNewTicket";
import Profile from "./MemberDashboardElements/Profile/Profile";
import PaymentInfo from "./MemberDashboardElements/PaymentInfo/PaymentInfo";
import Invoices from "./MemberDashboardElements/Invoices/Invoices";
import { Box, Drawer } from "@mui/material";

import classes from "./Dashboard.module.css";

const Dashboard = () => {
  const [dashboardMenu, setDashboardMenu] = useState("Product");
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = () => setDrawerState((prevState) => !prevState);

  useEffect(() => {
    const lastTabVisited = localStorage.getItem("lastTabVisited");
    if (lastTabVisited) {
      setDashboardMenu(lastTabVisited);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lastTabVisited", dashboardMenu);
  }, [dashboardMenu]);

  return (
    <div className={classes.dashboard}>
      {window.innerWidth > 900 ? (
        <SideBar
          dashboardMenu={dashboardMenu}
          setDashboardMenu={setDashboardMenu}
        />
      ) : (
        <Drawer anchor={"left"} open={drawerState} onClose={toggleDrawer}>
          <Box
            sx={{
              width: "fit-content",
              overflow: "hidden",
            }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <SideBar
              dashboardMenu={dashboardMenu}
              setDashboardMenu={setDashboardMenu}
            />
          </Box>
        </Drawer>
      )}

      <div className={classes["dashboard-display"]}>
        <TopBar
          dashboardMenu={dashboardMenu}
          setDashboardMenu={setDashboardMenu}
          toggleDrawer={toggleDrawer}
        />

        {dashboardMenu === "Product" && (
          <Product setDashboardMenu={setDashboardMenu} />
        )}
        {dashboardMenu === "Add Product" && <AddProduct />}

        {dashboardMenu === "Support" && (
          <Support setDashboardMenu={setDashboardMenu} />
        )}

        {dashboardMenu === "Add New Ticket" && <AddNewTicket />}

        {dashboardMenu === "Profile" && <Profile />}

        {dashboardMenu === "Payment Info" && <PaymentInfo />}

        {dashboardMenu === "Invoices" && <Invoices />}
      </div>
    </div>
  );
};

export default Dashboard;
