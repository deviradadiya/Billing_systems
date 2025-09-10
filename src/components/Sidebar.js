import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TechkelLogo from "../assets/images/techkel_logo.svg";
import DashboardIcon from "../assets/icon/dashboard.svg";
import ActiveDashboardIcon from "../assets/icon/dashboard-fill.svg";
import QuickBillingIcon from "../assets/icon/quick-billing.svg";
import ActiveQuickBillingIcon from "../assets/icon/quick-billing-fill.svg";
import TableAndCarIcon from "../assets/icon/table-cars.svg";
import ActiveTableAndCarIcon from "../assets/icon/table-cars-fill.svg";
import MenuIcon from "../assets/icon/menu.svg";
import ActiveMenuIcon from "../assets/icon/menu-fill.svg";
import LinkOtherAppsIcon from "../assets/icon/link-other-app.svg";
import OffersIcon from "../assets/icon/offers.svg";
import ActiveOffersIcon from "../assets/icon/offers-fill.svg";
import OrderIcon from "../assets/icon/orders.svg";
import ActiveOrderIcon from "../assets/icon/orders-fill.svg";
import CustomerIcon from "../assets/icon/customers.svg";
import ActiveCustomerIcon from "../assets/icon/customers-fill.svg";
import StaffIcon from "../assets/icon/stuf.svg";
import ActiveStaffIcon from "../assets/icon/stuf-fill.svg";
import SalesIcon from "../assets/icon/sales.svg";
import ActiveSalesIcon from "../assets/icon/sales-fill.svg";

const Sidebar = () => {
    const menuItems = [
        { name: "Dashboard", icon: DashboardIcon, activeIcon: ActiveDashboardIcon, link: "/" },
        { name: "Quick Billing", icon: QuickBillingIcon, activeIcon: ActiveQuickBillingIcon, link: "/quick-billing" },
        { name: "Table & Cars", icon: TableAndCarIcon, activeIcon: ActiveTableAndCarIcon, link: "/tables-cars" },
        { name: "Menu", icon: MenuIcon, activeIcon: ActiveMenuIcon, link: "/menu" },
        { name: "Link Other Apps", icon: LinkOtherAppsIcon, link: "/apps" },
        { name: "Create Offers", icon: OffersIcon, activeIcon: ActiveOffersIcon, link: "/create-offers" },
        { name: "Total Orders", icon: OrderIcon, activeIcon: ActiveOrderIcon, link: "/total-order" },
        { name: "Customers", icon: CustomerIcon, activeIcon: ActiveCustomerIcon, link: "/customers" },
        { name: "Staff", icon: StaffIcon, activeIcon: ActiveStaffIcon, link: "/staff" },
        { name: "Sales", icon: SalesIcon, activeIcon: ActiveSalesIcon, link: "/sales" },
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
                                            src={isActive && item.activeIcon ? item.activeIcon : item.icon}
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
