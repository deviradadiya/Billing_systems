import React, {useState} from "react";
import rightArrow from "../../assets/icon/back-arrow.svg";
import search from "../../assets/icon/search.svg";
import SuccessIcon from "../../assets/images/success.gif";
import RightArrowIcon from "../../assets/icon/arrow-right-white.svg";
import ProductIcon from "../../assets/icon/product-name.svg";
import PlusIcon from "../../assets/icon/plus-white.svg"; // replace with your actual image path

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [carNumber, setCarNumber] = useState("");
    const [selectedCar, setSelectedCar] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null); // ✅ Track index

    // Background color array
    const bgColors = ["#FDFF3C"];

    const handleAddCar = () => {
        if (!carNumber.trim()) return;

        const color = bgColors[cars.length % bgColors.length];

        const newCar = {
            id: Date.now(),
            name: carNumber,
            color,
        };

        setCars([...cars, newCar]);
        setCarNumber("");
        setShowModal(false);
    };

    // ✅ Update to store index
    const handleCardClick = (car, index) => {
        setSelectedCar(car);
        setSelectedIndex(index); // ✅ Save index
    };

    const handleCloseSidebar = () => {
        setSelectedCar(null);
        setSelectedIndex(null); // ✅ Reset
    };

    return (
        <div className="table-grid">
            {/* ==== Left Section ==== */}
            {cars.map((car, index) => (
                <div
                    className="table-card"
                    key={car.id}
                    style={{backgroundColor: car.color}}
                    onClick={() => handleCardClick(car, index)} // ✅ Pass index
                >
                    <div className="text-white fs_18 fw_800 text-center">Car {index + 1} <br/> <span className={'fs_10 fw_400'}>{car.name}</span></div>
                    {/*<div className="text">{car.name}</div>*/}
                </div>
            ))}
            <div
                className="add-table fs_14 fw_700 add-box"
                onClick={() => setShowModal(true)}
            >
                <div className="plus fs_14 fw_800">+</div>
                <div className="text fs_14 fw_800">Add Car</div>
            </div>

            {/* ==== Right Sidebar ==== */}
            {selectedCar && (
                <div className="right-sidebar">
                    <div className="sidebar-header py_20  d-flex align-items-center">
                        <button className="back-btn" onClick={handleCloseSidebar}>
                            <img src={rightArrow} alt="Back"/>
                        </button>
                        <h2 className={'fs_32 fw_400'}>Car {selectedIndex + 1}</h2> {/* ✅ Show Table X */}
                    </div>

                    <div className="search-box">
                        <img src={search} alt="Search" className="img-fluid"/>
                        <input type="text" className="form-control w-100" placeholder="Search"/>
                    </div>

                    <div className="sidebar-content">

                        <p>
                            This is the sidebar for <strong>{selectedCar.name}</strong>.
                        </p>
                        <p>You can list beverages, items, etc. here.</p>
                    </div>
                </div>
            )}

            {/* ==== Modal Popup ==== */}
            {showModal && (
                <>
                    <div className="modal fade show d-block" tabIndex="-1" role="dialog" onClick={() => setShowModal(false)}>
                        <div className="modal-dialog modal-dialog-centered modal-md" >
                            <div className="modal-content custom-modal" onClick={(e) => e.stopPropagation()}>
                                <div className="modal-header">
                                    <h2 className="modal-title">Create Car Table</h2>
                                </div>
                                <div className="modal-body">
                                    <div className="form-action action-border mb_20">
                                        <div className="d-flex flex-column flex-grow-1">
                                            <label htmlFor="full-name" className="form-label">
                                                Enter Car number
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="full-name"
                                                name="name"
                                                placeholder="MP09 WD 0000"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button className="btn btn-border" onClick={() => setShowModal(false)}>
                                        Cancel
                                    </button>
                                    <button className="btn btn-primary my-0 me-0 ml_14" onClick={handleAddCar}>
                                        <img className="img-fluid" src={PlusIcon} alt="plus icon"/>
                                        Create Table
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cars;
