import React, {useState} from "react";
import graph from "../../assets/icon/graph.svg";
import food from "../../assets/icon/Food.svg";
import users from "../../assets/icon/users.svg";
import items from "../../assets/icon/items.svg";
import PlusIcon from "../../assets/icon/plus-fill.svg";
import FilterIcon from "../../assets/icon/filter.svg";
import Order from "./Order";
import Cashire from "./Cashire";
import {useNavigate} from "react-router";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('orders');
    const [currentIndex, setIndex] = useState(0);
    const navigate = useNavigate();

    const stats = [
        {
            id: 1,
            icon: graph,
            value: 260,
            prefix: "₹",
            label: "Total Sales",
        },
        {
            id: 2,
            icon: food,
            value: 1,
            label: "Total Orders",
        },
        {
            id: 3,
            icon: users,
            value: 1,
            label: "Total Outlets",
        },
        {
            id: 4,
            icon: items,
            value: 1,
            label: "Most Selling Items",
        },
    ];

    const handleChangeActiveTab = (tab) => {
        setActiveTab(tab);
        setIndex(0);
    };

    const renderActiveTab = () => {
        switch (activeTab) {
            case "orders":
                return (
                    <Order />
                );
            case "cashier":
                return (
                    <Cashire />
                );
            default:
                return null;
        }
    };

    const handleManageBillClick = () => {
        navigate('/quick-billing');
    };


    return (
        <>
            <div className="main-content">
                <div className="row">
                    <div className="col-md-8">
                        <div className="d-flex align-items-center justify-content-between mb_46">
                            <h2 className="heading">Dashboard</h2>
                              <div className="date-box position-relative ">
                                    {/*<img src={CalendarIcon} alt="Calendar"/>*/}
                                    <input type="date" className={'form-control'}/>
                                    {/*<span>26 Aug, 2025</span>*/}
                              </div>
                        </div>

                        <div className="stats-card">
                            {stats.map((stat) => (
                                <div className="stat-box" key={stat.id}>
                                    <img src={stat.icon} alt={stat.label} />
                                    <div className="pt_20">
                                        <h3>
                                            {stat.prefix && <span>{stat.prefix} </span>}
                                            <span className="fs_26 fw_700">{stat.value}</span>
                                        </h3>
                                        <p className="fs_14 fw_400">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="quick-billing-card text-center d-flex justify-content-center flex-column ">
                            <h3>Quick Billing</h3>
                            <p>
                                Add products instantly, apply offers or taxes, and finalize
                                payments in seconds with UPI, card, or cash.
                            </p>
                            <button className="btn-white w-100" onClick={handleManageBillClick}>
                                <img src={PlusIcon} className={'img-fluid'} alt=""/>
                                Create New Bill
                            </button>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="table-box pt_40">
                            <div className={'d-flex align-items-center justify-content-between'}>
                                <h2 className={'heading'}> Recent Orders (1)</h2>
                                <button className="filter-btn">
                                    <img className={'img-fluid'} src={FilterIcon} alt="Filter Icon"/>
                                </button>
                            </div>

                            <div className="tabs-section">
                                <ul className="nav nav-tabs dashboard-tabs" id="myTab" role="tablist">
                                    {[
                                        {
                                            id: "orders",
                                            label: "Your Orders",
                                        },
                                        {
                                            id: "cashier",
                                            label: "Cashier 1",
                                        },
                                    ].map((tab) => (
                                        <li
                                            className="nav-item"
                                            role="presentation"
                                            key={tab.id}
                                        >
                                            <button className={`nav-link ${ activeTab === tab.id ? "active" : "" }`}
                                                    id={tab.id} type="button" role="tab"
                                                    onClick={() => handleChangeActiveTab(tab.id)}>
                                                {tab.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tab-content">{renderActiveTab()}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
