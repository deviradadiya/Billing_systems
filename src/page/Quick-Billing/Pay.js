import React from "react";
import { useNavigate } from "react-router-dom";
import QRcode from "../../assets/images/QRcode.png"; // Adjust path if needed

const Pay = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Go back to previous route
  };

  return (
    <>
      {/* Backdrop */}
      <div className="custom-backdrop" onClick={handleClose} />

      {/* Modal Content */}
      <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content d-flex justify-content-between align-items-center">
          <h2>Pay Bill</h2>
          <button className="close-btn" onClick={handleClose}>
            &times;
          </button>
        </div>

        <div className="qr-body text-center">
          <img src={QRcode} alt="QR Code" className="qr-image" />
          <div className="divider">
            <span>or</span>
          </div>
          <a href="#" className="cash-link">
            Cash Payment Received?
          </a>
        </div>
      </div>
    </>
  );
};

export default Pay;
