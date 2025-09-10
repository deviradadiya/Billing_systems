import React, {useState} from "react";
import Cars from "./Cars";
import Tables from "./Tables";

const TablesCars = () => {


    // New state for tab switching
    const [activeTab, setActiveTab] = useState("tables"); // default tab
    const [currentIndex, setIndex] = useState(0);

    const handleChangeActiveTab = (tab) => {
        setActiveTab(tab);
        setIndex(0);
    };

    const renderActiveTab = () => {
        switch (activeTab) {
            case "tables":
                return (
                    <Tables />
                );
            case "cars":
                return (
                    <Cars />
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className="main-section-width mt_12">
                <div>
                    <h2 className="heading">
                        Manage Tables & Cars
                    </h2>
                </div>

                <div className="tabs-section">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        {[
                            {
                                id: "tables",
                                label: "Tables",
                            },
                            {
                                id: "cars",
                                label: "Cars",
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
        </>
    );
};

export default TablesCars;
