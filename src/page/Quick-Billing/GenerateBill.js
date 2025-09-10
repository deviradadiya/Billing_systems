import React from "react";
import { useNavigate, Outlet } from "react-router-dom"; // ✅ New
import success from "../../assets/icon/fill-check.svg";
import offerfill from "../../assets/icon/offers-fill.svg";
import person from "../../assets/icon/person.svg";
import call from "../../assets/icon/call.svg";
import PlusIcon from "../../assets/icon/plus-white.svg";
import Pay from "./Pay";
const GenerateBill = ({
  onClose,
  fullName = "Rahul Sharma",
  phoneNumber = "123-456-7890",
  promoCode = "TRYFIRST",
  items = [],
  tax = 60,
  total = 260,
}) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Backdrop */}
      <div className="custom-backdrop" onClick={onClose} />

      {/* Main Modal */}
      <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content d-flex justify-content-between align-items-center">
          <h2>Bill Detail</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <form>
          {/* User Info */}
          <div className="info-card">
            <div className="info-row">
              <img src={person} alt="User Icon" className="icon-img" />
              <div className="info">
                <label>Full Name</label>
                <p className="value">{fullName}</p>
              </div>
              <img src={success} alt="Check" className="check-img" />
            </div>

            <div className="info-row">
              <img src={call} alt="Phone Icon" className="icon-img" />
              <div className="info">
                <label>Phone Number</label>
                <p className="value">{phoneNumber}</p>
              </div>
              <img src={success} alt="Check" className="check-img" />
            </div>

            <div className="info-row">
              <img src={offerfill} alt="Promo Icon" className="icon-img" />
              <div className="info">
                <label>Promo Code (Optional)</label>
                <p className="value">{promoCode}</p>
              </div>
              <img src={success} alt="Check" className="check-img" />
            </div>
          </div>

          {/* Bill Summary */}
          <div className="bill-summary pt_20">
            <h5 className="summary-title pb_18 fs_20 fw_700">
              Total Items ({items.length})
            </h5>

            {items.map((item, index) => (
              <div className="summary-item" key={index}>
                <span>
                  {item.name} ({item.quantity})
                </span>
                <span>
                  {item.originalPrice && item.originalPrice !== item.price ? (
                    <>
                      <del>₹{item.originalPrice}</del>{" "}
                      <strong>₹{item.price}</strong>
                    </>
                  ) : (
                    <>₹{item.price}</>
                  )}
                </span>
              </div>
            ))}

            <div className="summary-item">
              <span className="tax-content">Taxes</span>
              <span>
                ₹{tax} <img src={PlusIcon} alt="Plus Icon" />
              </span>
            </div>

            <hr />

            <div className="total-btn-container">
              <button
                type="button"
                className="total-btn"
                onClick={() => navigate("pay")}
              >
                Total Bill ₹{total}
                <Pay />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default GenerateBill;
