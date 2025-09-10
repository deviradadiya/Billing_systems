import React, {useState} from "react";
import PlusIcon from "../../assets/icon/plus-white.svg";
import UploadIcon from "../../assets/icon/upload.svg";
import CoffeeBeverages from "../Quick-Billing/CoffeeBeverages";
import Desserts from "../Quick-Billing/Desserts";
import LightMeals from "../Quick-Billing/LightMeals";
import SnacksSides from "../Quick-Billing/SnacksSides";
import TopSelling from "../Quick-Billing/TopSelling";
import ProductIcon from "../../assets/icon/product-name.svg";
import PriceIcon from "../../assets/icon/price.svg";
import MenuCategoryIcon from "../../assets/icon/menu-category.svg";
import SubMenuCategoryIcon from "../../assets/icon/menu-sub-category.svg";

const Menu = () => {
    const [showModal, setShowModal] = useState(false);
    const [showMenuModal, setShowMenuModal] = useState(false);
    const [activeTab, setActiveTab] = useState('top-selling');
    const [currentIndex, setIndex] = useState(0);

    const handleChangeActiveTab = (tab) => {
        setActiveTab(tab);
        setIndex(0);
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
            case "snacks-sides":
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
            <div className="main-content">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between pb_40">
                            <h2 className="heading">Menu</h2>
                            <button
                                className="btn btn-primary"
                                onClick={() => setShowModal(true)}
                            >
                                <img className="img-fluid" src={PlusIcon} alt="plus icon"/>
                                Add Menu
                            </button>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="table-box mt_36">
                            <div className="tabs-section">
                                <ul className="nav nav-tabs dashboard-tabs" id="myTab" role="tablist">
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
                                            id: "snacks-sides",
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
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-md">
                        <div className="modal-content custom-modal">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Menu</h5>
                            </div>
                            <div className="modal-body">
                                <div className="mb_30">
                                    <div className="upload-file d-flex align-items-center justify-content-center gap-3 position-relative">
                                        <img src={UploadIcon} className="img-fluid" alt="" />
                                        <span>Upload User Image</span>
                                        <input type="file"/>
                                    </div>
                                </div>

                                <div className={'add-or'}>
                                    <h6 className={'fs_20 fw_700 text-black'}>or</h6>
                                </div>

                                <div className={'text-center'}>
                                    <p className={'text-decoration-underline fs_20 fw_700 mt_36 mb_50 add-manually'} onClick={() => setShowMenuModal(true)}>Add Menu item Manually ?</p>
                                </div>


                            </div>

                            <div className="modal-footer">
                                <button
                                    className="btn btn-border"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="btn btn-primary my-0 me-0 ml_14"
                                    // onClick={handleAddOffer}
                                >
                                    Add Menu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {showMenuModal && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-md">
                        <div className="modal-content custom-modal">
                            <div className="modal-header">
                                <h5 className="modal-title">Update Item</h5>
                            </div>
                            <div className="modal-body">
                                <div className="mb_30">
                                    <div className="upload-file d-flex align-items-center justify-content-center gap-3 position-relative">
                                        <img src={UploadIcon} className="img-fluid" alt="" />
                                        <span>Upload User Image</span>
                                        <input type="file"/>
                                    </div>
                                </div>

                                <div className="form-action action-border mb_20 z-2">
                                    <div className="img-wrapper">
                                        <img className="img-fluid" src={MenuCategoryIcon} alt="Logo" />
                                    </div>
                                    <div className="d-flex flex-column flex-grow-1 position-unset">
                                        <label htmlFor="full-name" className="form-label">
                                            Select Category
                                        </label>
                                        <div className="dropdown position-unset add-menu-dropdown">
                                            <a className="btn dropdown-toggle p-0 border-0 position-unset" href="#" role="button"
                                               id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                Beverages
                                            </a>

                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li>
                                                    <div className={'position-relative dropdown-search-box'}>
                                                        <input type="text" className={'form-control'} placeholder={'Search or Add Category'}/>
                                                        <button className={'add-button fw_500 text-decoration-underline'}>+ ADD</button>
                                                    </div>
                                                </li>
                                                <li><a className="dropdown-item" href="#">Beverages</a></li>
                                                <li><a className="dropdown-item" href="#">Bakery & Snacks</a></li>
                                                <li><a className="dropdown-item" href="#">Quick Bites</a></li>
                                                <li><a className="dropdown-item" href="#">Main Course</a></li>
                                                <li><a className="dropdown-item" href="#">Desserts</a></li>
                                                <li><a className="dropdown-item" href="#">Specials</a></li>
                                                <li><a className="dropdown-item" href="#">Combos</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-action action-border mb_20 z-2">
                                    <div className="img-wrapper">
                                        <img className="img-fluid" src={SubMenuCategoryIcon} alt="Logo" />
                                    </div>
                                    <div className="d-flex flex-column flex-grow-1 position-unset">
                                        <label htmlFor="full-name" className="form-label">
                                            Select Sub Category (Optional)
                                        </label>
                                        <div className="dropdown position-unset add-menu-dropdown">
                                            <a className="btn dropdown-toggle p-0 border-0 position-unset" href="#" role="button"
                                               id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                Hot Coffee
                                            </a>

                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li>
                                                    <div className={'position-relative dropdown-search-box'}>
                                                        <input type="text" className={'form-control'} placeholder={'Search or Add Category'}/>
                                                        <button className={'add-button fw_500 text-decoration-underline'}>+ ADD</button>
                                                    </div>
                                                </li>
                                                <li><a className="dropdown-item" href="#">Beverages</a></li>
                                                <li><a className="dropdown-item" href="#">Bakery & Snacks</a></li>
                                                <li><a className="dropdown-item" href="#">Quick Bites</a></li>
                                                <li><a className="dropdown-item" href="#">Main Course</a></li>
                                                <li><a className="dropdown-item" href="#">Desserts</a></li>
                                                <li><a className="dropdown-item" href="#">Specials</a></li>
                                                <li><a className="dropdown-item" href="#">Combos</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-action action-border mb_20">
                                    <div className="img-wrapper">
                                        <img className="img-fluid" src={ProductIcon} alt="Logo" />
                                    </div>
                                    <div className="d-flex flex-column flex-grow-1">
                                        <label htmlFor="full-name" className="form-label">
                                            Enter Product Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="full-name"
                                            name="name"
                                            placeholder="Expresso"
                                        />
                                    </div>
                                </div>

                                <div className="form-action action-border mb_20">
                                    <div className="img-wrapper">
                                        <img className="img-fluid" src={PriceIcon} alt="Logo" />
                                    </div>
                                    <div className="d-flex flex-column flex-grow-1">
                                        <label htmlFor="full-name" className="form-label">
                                            Enter Price
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="full-name"
                                            name="name"
                                            placeholder="₹229"
                                        />
                                    </div>
                                </div>


                            </div>

                            <div className="modal-footer">
                                <button
                                    className="btn btn-border"
                                    onClick={() => setShowMenuModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="btn btn-primary my-0 me-0 ml_14"
                                    // onClick={handleAddOffer}
                                >
                                    Add Menu Item
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </>
    );
};

export default Menu;
