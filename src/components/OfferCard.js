// CreateOffers.js
import React from "react";

const CreateOffers = ({ title, discount, actionText }) => {
    return (
        <div className="offer-card">
            <h5 className="text-uppercase fw_400 fs_18 text-black">{title}</h5>
            <h6 className="fw_700 fs_14 mb_22">{discount}</h6>
            <p className="fs_14 text-decoration-underline fw_500">{actionText}</p>
        </div>
    );
};

export default CreateOffers;
