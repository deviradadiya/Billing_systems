import React, {useState} from 'react';
import PlusIcon from "../../assets/icon/plus-white.svg";
import TopSelling from "./TopSelling";
import CoffeeBeverages from "./CoffeeBeverages";
import SnacksSides from "./SnacksSides";
import LightMeals from "./LightMeals";
import Desserts from "./Desserts";
import GenerateBill from "./GenerateBill";

// const categories = [
//     "Top Selling's",
//     'Coffee & Beverages',
//     'Snacks & Sides',
//     'Light Meals',
//     'Desserts',
// ];


const QuickBilling = () => {
    // const [activeTab, setActiveTab] = useState('top-selling');
    // const [currentIndex, setIndex] = useState(0);
    // const [showModal, setShowModal] = useState(false);
    //
    // const handleAddClick = (product) => {
    //     console.log(`Added: ${product.name}`);
    // };
    //
    // const handleChangeActiveTab = (tab) => {
    //     setActiveTab(tab);
    //     setIndex(0);
    // };

    const [activeTab, setActiveTab] = useState("top-selling");
    const [showModal, setShowModal] = useState(false); // Modal state

    const handleAddClick = (product) => {
        console.log(`Added: ${product.name}`);
    };

    const handleChangeActiveTab = (tab) => {
        setActiveTab(tab);
    };

    const renderActiveTab = () => {
        switch (activeTab) {
            case "top-selling":
                return (
                    <TopSelling />
                );
            case "coffee-beverages":
                return (
                    <CoffeeBeverages />
                );
            case "snakes-sides":
                return (
                    <SnacksSides />
                );
            case "light-meals":
                return (
                    <LightMeals />
                );
            case "desserts":
                return (
                    <Desserts />
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className="main-section-width">
                <div className="quick-billing">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="heading">Quick Billing</h2>
                        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                            <img className={'img-fluid'} src={PlusIcon} alt="plus icon"/>
                            Generate Bill
                        </button>
                    </div>


                    <div className="tabs-section">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            {[
                                {
                                    id: "top-selling",
                                    label: "Top Selling's",
                                },
                                {
                                    id: "coffee-beverages",
                                    label: "Coffee & Beverages",
                                },
                                {
                                    id: "snakes-sides",
                                    label: "Snacks & Sides",
                                },
                                {
                                    id: "light-meals",
                                    label: "Light Meals",
                                },
                                {
                                    id: "desserts",
                                    label: "Desserts",
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

            {showModal && (
                <GenerateBill
                    onClose={() => setShowModal(false)}
                    fullName="Rahul Sharma"
                    email="rahulsharma@gmail.com"
                    phoneNumber="123-456-7890"
                    promoCode="TRYFIRST"
                    items={[]}
                    tax={60}
                    total={260}
                />
            )}

            {/* Modal backdrop */}
            {/*{showModal && <div className="modal-backdrop fade show"></div>}*/}

        </>
    );
};

export default QuickBilling;

