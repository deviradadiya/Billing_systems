import React from "react";

const MenuCard = ({Image, name, price, Icon}) => {
    return (
        <div className="billing-card">
            <div className="img-wrapper">
                <img className="img-fluid" src={Image} alt="Product Icon" />
            </div>
            <div className="content">
                <div className="product-info">
                    <h6 className="product-name">{name}</h6>
                    <p className="product-price">{price}</p>
                </div>
                <button className="add-button">
                    <img className="img-fluid" src={Icon} alt="Add" />
                </button>
            </div>
        </div>
    );
};

export default MenuCard;
