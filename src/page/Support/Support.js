import React, { useState } from "react";
import eyes from "../../assets/icon/eyes.svg";
import close from "../../assets/icon/close.svg";
import headerlogo from "../../assets/images/header-logo.png";
import location from "../../assets/icon/location.svg";
const Support = () => {
  const [showModal, setShowModal] = useState(false);

  const ticketDetails = {
    id: "#SUP-101",
    shopkeeper: "Rajesh Kumar",
    issue: "Technical Error",
    priority: "High",
    status: "Open",
    createdOn: "20 Aug, 2025",
    assignedTo: "Support Agent",
  };

  return (
    <div className="main-content">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex align-items-center justify-content-between mb_24">
            <h2 className="heading">Support</h2>
          </div>

          <table className="custom-table pb_20">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Shopkeeper</th>
                <th>Issue</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Created On</th>
                <th>Assigned To</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="pt_22">
              <tr>
                <td className="fw-bold">{ticketDetails.id}</td>
                <td className="fs_18 fw_400">{ticketDetails.shopkeeper}</td>
                <td className="fs_18 fw_400">{ticketDetails.issue}</td>
                <td className="fs_18 fw_400">{ticketDetails.priority}</td>
                <td>
                  <span className="status paid">{ticketDetails.status}</span>
                </td>
                <td>{ticketDetails.createdOn}</td>
                <td>{ticketDetails.assignedTo}</td>
                <td className="actions">
                  <img
                    src={eyes}
                    alt="View"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowModal(true)}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Modal Popup */}
          {showModal && (
            <>
              <div className="modal fade show d-block ">
                <div className="modal-dialog modal-dialog-centered modal-md ">
                  <div className="modal-content p-2 support-modal border-0">
                    {/* Header */}
                    <div className="modal-header d-flex justify-content-between align-items-center border-0">
                      <h5 className="modal-title fs_26 fw_600">#SUP-101</h5>
                      <img
                        src={close}
                        alt="close"
                        onClick={() => setShowModal(false)}
                        style={{ cursor: "pointer", width: "30px" }}
                      />
                    </div>

                    {/* Body */}
                    <div className="modal-body">
                      {/* User Info */}
                      <div className="user-info mb-3">
                        <div className="d-flex align-items-center gap-3">
                          <img src={headerlogo} alt="user" width="67" />
                          <div>
                            <p className="fw_700 fs_18 mb-0">Rajesh Kumar</p>
                            <p className="text-muted mb-0 fs_18 fw_400">
                              +91 9876543210
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-4 mt-2">
                          <img src={location} alt="location" width="24" />
                          <p className="mb-0 text-truncate fs_18 fw_600">
                            Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar,
                            Bangalore
                          </p>
                        </div>
                      </div>

                      <hr />

                      {/* Ticket Details */}
                      <div className="ticket-details row">
                        <div className="col-6 mb-3">
                          <p className="label fs_18 fw_700">Issue Category</p>
                          <p className="value fs_18 fw_400 pt_10">
                            Technical Error
                          </p>
                        </div>
                        <div className="col-6 mb-3">
                          <p className="label fs_18 fw_700">Priority</p>
                          <p className="value fs_18 fw_400 pt_10">High</p>
                        </div>
                        <div className="col-6 mb-3">
                          <p className="label fs_18 fw_700">Status</p>
                          <p className="value fs_18 fw_400 pt_10">Open</p>
                        </div>
                        <div className="col-6 mb-3">
                          <p className="label  fs_18 fw_700 ">Created On</p>
                          <p className="value fs_18 fw_400 pt_10">
                            20 Aug, 2025, 10:00 AM
                          </p>
                        </div>
                        <div className="col-12">
                          <p className="label  fs_18 fw_700 ">Assigned To</p>
                          <p className="value fs_18 fw_400 pt_10">
                            Support Agent
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="modal-footer border-0 d-flex justify-content-end">
                      <button
                        className="btn btn-primary text-white"
                        onClick={() => setShowModal(false)}
                      >
                        Mark as Resolved
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-backdrop fade show"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Support;
