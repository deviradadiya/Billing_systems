import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TechkelLogo from "../assets/images/techkel_logo.svg";
import DashboardIcon from "../assets/icon/dashboard.svg";
import ActiveDashboardIcon from "../assets/icon/dashboard-fill.svg";
import QuickBillingIcon from "../assets/icon/quick-billing.svg";
import ActiveQuickBillingIcon from "../assets/icon/quick-billing-fill.svg";
import MenuIcon from "../assets/icon/menu.svg";
import ActiveMenuIcon from "../assets/icon/menu-fill.svg";
import SalesIcon from "../assets/icon/sales.svg";
import ActiveSalesIcon from "../assets/icon/sales-fill.svg";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: DashboardIcon,
      activeIcon: ActiveDashboardIcon,
      link: "/",
    },
    {
      name: "Shopkeepers",
      icon: QuickBillingIcon,
      activeIcon: ActiveQuickBillingIcon,
      link: "/shopkeeper",
    },

    {
      name: "Subscription",
      icon: MenuIcon,
      activeIcon: ActiveMenuIcon,
      link: "/subscription",
    },

    {
      name: "Support",
      icon: SalesIcon,
      activeIcon: ActiveSalesIcon,
      link: "/support",
    },
  ];

  return (
    <div className="main-content-sidebar">
      <aside className="sidebar">
        <div className="logo">
          <img className="img-fluid" src={TechkelLogo} alt="Logo" />
        </div>
        <ul className="menu">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.link}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {({ isActive }) => (
                  <>
                    <img
                      className="img-fluid"
                      src={
                        isActive && item.activeIcon
                          ? item.activeIcon
                          : item.icon
                      }
                      alt={item.name}
                    />
                    <span>{item.name}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
