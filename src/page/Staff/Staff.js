import React, { useState } from "react";
import PlusIcon from "../../assets/icon/plus-white.svg";
import eyes from "../../assets/icon/eyes.svg";
import edit from "../../assets/icon/edit.svg";
import deleteicon from "../../assets/icon/deleteicon.svg";
import UploadIcon from "../../assets/icon/upload.svg";
import PersonIcon from "../../assets/icon/person.svg";
import CallIcon from "../../assets/icon/call.svg";
import LocationIcon from "../../assets/icon/location.svg";

const Staff = () => {
    const [staffList, setStaffList] = useState([]); // staff data state
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        date: new Date().toLocaleDateString("en-GB"), // default current date
    });

    const [showModal, setShowModal] = useState(false); // modal state

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Add staff
    const handleAddStaff = () => {
        if (!formData.name || !formData.phone || !formData.address) {
            alert("Please fill all fields");
            return;
        }
        setStaffList([...staffList, formData]);
        setFormData({
            name: "",
            phone: "",
            address: "",
            date: new Date().toLocaleDateString("en-GB"),
        });

        // Close modal
        setShowModal(false);
    };

    return (
        <>
            <div className="main-content">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between pb_40">
                            <h2 className="heading">Staff ({staffList.length})</h2>
                            <button
                                className="btn btn-primary"
                                onClick={() => setShowModal(true)}
                            >
                                <img className="img-fluid" src={PlusIcon} alt="plus icon" />
                                Add Staff
                            </button>
                        </div>

                        {/* 👇 Condition check */}
                        {staffList.length === 0 ? (
                            <div className="text-center py-5 fs_24 opacity-50 text-black ">
                                No Staff available. <br/>
                                Add Staff to start Franchise orders.
                            </div>
                        ) : (
                            <div className="table-box">
                                <div className="tab-content">
                                    <table className="custom-table pb_20">
                                        <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Mobile</th>
                                            <th>Shop Address</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {staffList.map((staff, index) => (
                                            <tr key={index}>
                                                <td>{staff.name}</td>
                                                <td>{staff.phone}</td>
                                                <td>
                                                    <div className="one-line">{staff.address}</div>
                                                </td>
                                                <td>{staff.date}</td>
                                                <td className="actions">
                                                    <img src={eyes} alt="View" />
                                                    <img src={edit} alt="Edit" />
                                                    <img src={deleteicon} alt="Delete" />
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal (React controlled) */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-md">
                        <div className="modal-content custom-modal">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Staff</h5>
                                {/*<button*/}
                                {/*    type="button"*/}
                                {/*    className="btn-close"*/}
                                {/*    onClick={() => setShowModal(false)}*/}
                                {/*></button>*/}
                            </div>
                            <div className="modal-body">
                                <div className="mb_20">
                                    <div className="upload-file d-flex align-items-center justify-content-center gap-3">
                                        <img src={UploadIcon} className="img-fluid" alt="" />
                                        <span>Upload User Image</span>
                                    </div>
                                </div>

                                <div className="form-action action-border mb_20">
                                    <div className="img-wrapper">
                                        <img className="img-fluid" src={PersonIcon} alt="Logo" />
                                    </div>
                                    <div className="d-flex flex-column flex-grow-1">
                                        <label htmlFor="full-name" className="form-label">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="full-name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Rahul Sharma"
                                        />
                                    </div>
                                </div>

                                <div className="form-action action-border mb_20">
                                    <div className="img-wrapper">
                                        <img className="img-fluid" src={CallIcon} alt="Logo" />
                                    </div>
                                    <div className="d-flex flex-column flex-grow-1">
                                        <label htmlFor="phone" className="form-label">
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="123-456-7890"
                                        />
                                    </div>
                                </div>

                                <div className="form-action action-border">
                                    <div className="img-wrapper">
                                        <img className="img-fluid" src={LocationIcon} alt="Logo" />
                                    </div>
                                    <div className="d-flex flex-column flex-grow-1">
                                        <label htmlFor="address" className="form-label">
                                            Shop Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            placeholder="Akshya Nagar 1st Block 1st Cross, Bangalore"
                                        />
                                    </div>
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
                                    onClick={handleAddStaff}
                                >
                                    <img className="img-fluid" src={PlusIcon} alt="plus icon" />
                                    Add Staff
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Staff;
