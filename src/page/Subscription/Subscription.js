import React, { useState } from "react";
import pluswhite from "../../assets/icon/plus-white.svg";
import deleteicon from "../../assets/icon/deleteicon.svg";
import close from "../../assets/icon/close.svg";

const Subscription = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleDeleteClick = (featureName) => {
    setSelectedFeature(featureName);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    console.log("Deleting:", selectedFeature);
    setShowDeleteModal(false);
    setSelectedFeature(null);
    // TODO: Add actual delete logic here
  };

  return (
    <div className="main-content">
      <div className="row">
        <div className="col-md-12">
          <div className="subsription-wrapper d-flex align-items-center justify-content-between mb_24">
            <h2 className="heading">Subscription</h2>
            <div className="feature-btn">
              <button
                type="button"
                className="add-feature-button"
                onClick={() => setShowModal(true)}
              >
                <img src={pluswhite} alt="Add" className="icon" />
                <span>Add Features</span>
              </button>
            </div>
          </div>

          {showModal && (
            <>
              <div
                className="modal fade show d-block"
                tabIndex="-1"
                role="dialog"
              >
                <div className="modal-dialog modal-dialog-centered modal-md">
                  <div className="modal-content bill-modal-content ">
                    <div
                      className="modal-header d-flex justify-content-between"
                      style={{ borderBottom: "none" }}
                    >
                      <h5 className="modal-title fs_26 fw_500">Add Feature</h5>
                      <img
                        src={close}
                        onClick={() => setShowModal(false)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <div className="modal-body">
                      <div className="bill-section">
                        <div className="bill-card d-flex align-items-center justify-content-between">
                          <div className="flex-grow-1">
                            <p className="label mb-0">Feature Name</p>
                            <p className="value mb-0">Enter here</p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-4">
                        <div className="d-flex align-items-center justify-content-start mb-3">
                          <p className="mb-0 pr_80 fs_18 fw_500">Core</p>
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                          </label>
                        </div>
                        <div className="d-flex align-items-center justify-content-start  mb-3">
                          <p className="mb-0 pr_62 fs_18 fw_500">Growth</p>
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                          </label>
                        </div>
                        <div className="d-flex align-items-center justify-content-st mb-3">
                          <p className="mb-0 pr_78 fs_18 fw_500">Scale</p>
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </div>
                      <div
                        className="modal-footer d-flex justify-content-end gap-2"
                        style={{ borderTop: "none" }}
                      >
                        <button
                          className="btn rounded-pill fs_18 fw_600"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                        <button
                          className="feature-btn btn-primary"
                          onClick={() => {
                            setShowModal(false);
                          }}
                        >
                          Add Feature
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-backdrop fade show"></div>
            </>
          )}

          <table className="custom-table pb_20">
            <thead>
              <tr>
                <th>Features</th>
                <th>Core</th>
                <th>Growth</th>
                <th>Scale</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="pt_22 text-bold ">
              {[
                "Unlimited-user rights",
                "Unlimited cash register",
                "Quick Billing",
                "Manage Stuff",
                "Create Offers",
                "Manage zomato Swiggy",
                "Generate Digital Bill",
              ].map((feature, idx) => (
                <tr key={idx}>
                  <td>
                    <label className="checkbox-label">
                      <span className="checkbox-txt">{feature}</span>
                    </label>
                  </td>
                  <td>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider" />
                    </label>
                  </td>
                  <td>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider" />
                    </label>
                  </td>
                  <td>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider" />
                    </label>
                  </td>
                  <td className="actions">
                    <img
                      src={deleteicon}
                      alt="Delete"
                      onClick={() => handleDeleteClick(feature)}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {showDeleteModal && (
            <>
              <div className="modal fade show d-block">
                <div className="modal-dialog modal-dialog-centered delete-modal-dialog">
                  <div className="modal-content delete-modal-content">
                    <div className="modal-header  delete-modal-header p-30">
                      {/* Centered Icon */}
                      <div className="delete-icon-wrapper">
                        <img src={deleteicon} alt="Delete Icon" />
                      </div>
                    </div>

                    <div className="modal-body text-center py-3 ">
                      <h3 className="fs_25 fw_600">
                        Are you sure you want to delete this item?
                      </h3>

                      <p className="pt_22 fs_14 fw_400">
                        Are you sure you want to delete this item? Once deleted,
                        it cannot be recovered. Please confirm if you wish to
                        proceed with this action.
                      </p>
                    </div>

                    <div className="modal-footer d-flex justify-content-center gap-2 pt_50">
                      <button
                        className="btn-cancel"
                        onClick={() => setShowDeleteModal(false)}
                      >
                        Cancel
                      </button>
                      <button className="btn-delete" onClick={confirmDelete}>
                        Delete
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

export default Subscription;
