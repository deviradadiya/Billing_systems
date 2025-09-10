import React, {useState} from "react";
import FilterIcon from "../../assets/icon/filter.svg";
import Order from "../Dashboard/Order";
import Cashire from "../Dashboard/Cashire";

const TotalOrder = () => {
    const [activeTab, setActiveTab] = useState('orders');
    const [currentIndex, setIndex] = useState(0);


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


    return (
        <>
            <div className="main-content">
                <div className="row">

                    <div className="col-12">
                        <div className="table-box pt_40">
                            <div className={'d-flex align-items-center justify-content-between'}>
                                <h2 className={'heading'}> Recent Orders (1)</h2>
                                <div className={'d-flex align-items-center'}>
                                    <button className="filter-btn">
                                        <img className={'img-fluid'} src={FilterIcon} alt="Filter Icon"/>
                                    </button>
                                    <button className="btn btn-primary ml_30">
                                        Share Offers
                                    </button>
                                </div>
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

export default TotalOrder;




// import React, { useState } from "react";
// // import { FaEye, FaPencilAlt, FaTrashAlt,FaFilter } from "react-icons/fa";
//
// const Orderspage = () => {
//     const [activeTab, setActiveTab] = useState("yourOrders");
//
//     return (
//         <div className="orders-page">
//             {/* Header Section */}
//             <div className="orders-header">
//                 <h4>Total Orders (1)</h4>
//                 <div className="header-actions">
//                     {/*<FaFilter className="text-fafilter" title="Filter" />*/}
//                     <button className="btn-share">Share Offers</button>
//                 </div>
//             </div>
//
//             {/* Tab Section */}
//             <div className="tab-section">
//                 <h2
//                     className={`tab-button ${activeTab === "yourOrders" ? "active" : ""}`}
//                     onClick={() => setActiveTab("yourOrders")}
//                 >
//                     Your Orders
//                 </h2>
//                 <h2
//                     className={`tab-button ${activeTab === "cashier1" ? "active" : ""}`}
//                     onClick={() => setActiveTab("cashier1")}
//                 >
//                     Cashier 1
//                 </h2>
//             </div>
//
//
//             <div className="orders-table">
//                 <div className="table-header ">
//                     <div className="fw-bold ">Items</div>
//                     <div className="fw-bold ">Token</div>
//                     <div className="fw-bold ">Date</div>
//                     <div className="fw-bold ">Status</div>
//                     <div className="fw-bold ">Payment</div>
//                     <div className="fw-bold ">Source</div>
//                     <div className="fw-bold">Action</div>
//                 </div>
//
//
//                 <div className="table-row">
//
//                     <div className="fw-bold ">Espresso 1</div>
//                     <div>010</div>
//                     <div>25 Aug, 2025</div>
//                     <div><span className="badge paid">Paid QR</span></div>
//                     <div>₹260</div>
//                     <div>Table 2</div>
//
//                     {/*<div className="action-icons">*/}
//                     {/*    <FaEye className="text-pri icon-btn" title="View" />*/}
//                     {/*    <FaPencilAlt className="text-dan icon-btn" title="Edit" />*/}
//                     {/*    <FaTrashAlt className="text-sec icon-btn" title="Delete" />*/}
//                     {/*</div>*/}
//
//
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Orderspage;


