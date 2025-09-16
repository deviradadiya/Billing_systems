import React, { useState } from "react";
import graph from "../../assets/icon/graph.svg";
import OrderIcon from "../../assets/icon/quick-billing-fill.svg";
import Revenue from "./Revenue";
import Payment from "./Payment";
import FilterIcon from "../../assets/icon/filter.svg";

import { useNavigate } from "react-router";
import UsersIcon from "../../assets/icon/users.svg";
import ItemsIcon from "../../assets/icon/customers-fill.svg";
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const [currentIndex, setIndex] = useState(0);
  const navigate = useNavigate();

  const stats = [
    {
      id: 1,
      icon: graph,
      value: "8,42,500",
      prefix: "₹",
      label: "Total Revenue",
    },
    {
      id: 2,
      icon: OrderIcon,
      value: "12,450",
      label: "Total Bill genrated",
    },
    {
      id: 3,
      icon: UsersIcon,
      value: 18,
      label: "Active Stores",
    },
    {
      id: 4,
      icon: ItemsIcon,
      value: 126,
      label: "Active Staff",
    },
  ];

  const handleChangeActiveTab = (tab) => {
    setActiveTab(tab);
    setIndex(0);
  };

  const handleManageBillClick = () => {
    navigate("/quick-billing");
  };

  return (
    <>
      <div className="main-content">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex align-items-center justify-content-between mb_24">
              <h2 className="heading">Dashboard</h2>
              <div className={"d-flex align-items-center gap-3"}>
                <div className={"filter-tabs"}>
                  <div className="time-filter">24h</div>
                  <div className="time-filter active">7d</div>
                  <div className="time-filter">6m</div>
                  <div className="time-filter">1y</div>
                </div>

                <div className="filter-btn">
                  <img className={"img-fluid"} src={FilterIcon} alt="" />
                </div>
              </div>
            </div>

            <div className="sales-card mb_30">
              {stats.map((stat) => (
                <div className="sales-box" key={stat.id}>
                  <img height={30} src={stat.icon} alt={stat.label} />
                  <div className="pt_22">
                    <h3>
                      {stat.prefix && <span>{stat.prefix} </span>}
                      <span className="fs_26 fw_700">{stat.value}</span>
                    </h3>
                    <p className="fs_14 fw_400 m-0 pt_12">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-12">
            <div className="graph-grid">
              <div className="graph-bg">
                <div
                  className={
                    "d-flex align-items-end justify-content-between gap-3 mb_52"
                  }
                >
                  <div className={"chart-title"}>
                    <p className={"fs"}>Revenue Trend</p>
                    <h6>4,687</h6>
                  </div>

                  <div className={"filter-tabs"}>
                    <div className="time-filter">24h</div>
                    <div className="time-filter active">7d</div>
                    <div className="time-filter">6m</div>
                    <div className="time-filter">1y</div>
                  </div>
                </div>
                <Revenue />
              </div>

              <div className="graph-bg">
                <div
                  className={
                    "d-flex align-items-end justify-content-between gap-3 mb_10"
                  }
                >
                  <div className={"chart-title"}>
                    <p className={"fs"}>Payment Method Split</p>
                  </div>

                  <div className={"filter-tabs"}>
                    <div className="time-filter">24h</div>
                    <div className="time-filter active">7d</div>
                    <div className="time-filter">6m</div>
                    <div className="time-filter">1y</div>
                  </div>
                </div>
                <Payment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
