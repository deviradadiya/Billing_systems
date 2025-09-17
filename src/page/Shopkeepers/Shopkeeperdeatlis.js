import React, { useState, useRef } from "react";
import graph from "../../assets/icon/graph.svg";
import { useParams } from "react-router-dom";
import OrderIcon from "../../assets/icon/quick-billing-fill.svg";
import Revenue from "../Dashboard/Revenue";
import UsersIcon from "../../assets/icon/users.svg";
import ItemsIcon from "../../assets/icon/customers-fill.svg";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router";
import close from "../../assets/icon/close.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Shopkeeperdeatlis = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("orders");
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setIndex] = useState(0);
  const navigate = useNavigate();
  const chartRef = useRef(null);

  const [formData, setFormData] = useState({
    issue: "Technical Error",
    priority: "High",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const stats = [
    {
      id: 1,
      icon: graph,
      value: "8,42,500",
      prefix: "₹",
      label: "Total Revenue",
    },
    { id: 2, icon: OrderIcon, value: "12,450", label: "Total Bill genrated" },
    { id: 3, icon: UsersIcon, value: 18, label: "Active Stores" },
    { id: 4, icon: ItemsIcon, value: 126, label: "Active Staff" },
  ];

  const data = {
    labels: ["Resturants", "Zomato", "Swigy", "Website"],
    datasets: [
      {
        data: [79, 38, 60, 32],
        backgroundColor: [
          "rgba(172, 170, 251, 0.8)",
          "rgba(255, 184, 199, 0.8)",
          "rgba(233, 203, 144, 0.8)",
          "rgba(194, 149, 237, 0.6) ",
        ],
        barThickness: 72,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    scales: {
      x: {
        grid: { color: "#D1D5DB", borderDash: [2, 2], drawBorder: false },
        ticks: { color: "#6B7280", font: { size: 12, weight: "normal" } },
      },
      y: {
        grid: { color: "#D1D5DB", borderDash: [2, 2], drawBorder: false },
        ticks: { color: "#6B7280", font: { size: 12, weight: "normal" } },
      },
    },
  };

  const handleCreateTicket = () => {
    console.log("Ticket Submitted:", formData);

    // close modal
    setShowModal(false);

    // reset form
    setFormData({
      issue: "Enter here",

      message: "Enter here",
    });
  };

  return (
    <>
      <div className="main-content">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex align-items-center justify-content-between mb_24">
              <h2 className="heading">Dashboard</h2>
              <div className="d-flex align-items-center gap-3">
                <div className="filter-tabs">
                  <div className="time-filter">24h</div>
                  <div className="time-filter active">7d</div>
                  <div className="time-filter">6m</div>
                  <div className="time-filter">1y</div>
                </div>

                <div className="shopkeeper-btn">
                  <button>Suspend Account</button>
                  <button onClick={() => setShowModal(true)}>Message</button>
                </div>
              </div>
            </div>

            {/* Stats */}
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

          {/* Charts */}
          <div className="col-md-12">
            <div className="graph-grid">
              <div className="graph-bg">
                <div className="d-flex align-items-end justify-content-between gap-3 mb_52">
                  <div className="chart-title">
                    <p className="fs">Revenue Trend</p>
                    <h6>4,687</h6>
                  </div>
                  <div className="filter-tabs">
                    <div className="time-filter">24h</div>
                    <div className="time-filter active">7d</div>
                    <div className="time-filter">6m</div>
                    <div className="time-filter">1y</div>
                  </div>
                </div>
                <Revenue />
              </div>

              <div className="graph-bg">
                <div className="d-flex align-items-end justify-content-between gap-3 mb_10">
                  <div className="chart-title">
                    <p className="fs">Sales chart for Source</p>
                  </div>
                  <div className="filter-tabs">
                    <div className="time-filter">24h</div>
                    <div className="time-filter active">7d</div>
                    <div className="time-filter">6m</div>
                    <div className="time-filter">1y</div>
                  </div>
                </div>
                <div style={{ width: "100%" }}>
                  <Bar ref={chartRef} data={data} options={options} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <>
          <div className="modal fade show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content custom-modal p-4 d-flex justify-content-between">
                <div
                  className="modal-header d-flex justify-content-between"
                  style={{ borderBottom: "none" }}
                >
                  <h5 className="modal-title fs_26 fw_500">Share Message</h5>
                  <img
                    src={close}
                    onClick={() => setShowModal(false)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                {/* Subject */}
                <div className="form-action action-border mb_20">
                  <div className="d-flex flex-column flex-grow-1">
                    <label
                      htmlFor="message"
                      className="form-label fs_12 fw_400"
                    >
                      Enter Message Subject
                    </label>

                    <input
                      id="message"
                      name="message"
                      className="form-control"
                      placeholder="Enter here"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* Message */}
                <div className="form-action action-border mb_20">
                  <div className="d-flex flex-column flex-grow-1">
                    <label
                      htmlFor="message"
                      className="form-label fs_12 fw_400"
                    >
                      Enter Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      className="form-control custom-textarea"
                      placeholder="Enter here"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-end gap-2">
                  <button
                    className="btn btn-border"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary fs_18"
                    onClick={handleCreateTicket}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </>
  );
};

export default Shopkeeperdeatlis;
