import React, { useState } from "react";
import MenuCard from "../../components/MenuCard";
import ProductIcon from "../../assets/icon/product-icon.svg";
import PlusIcon from "../../assets/icon/plus-white.svg";

const Desserts = () => {
    const [products] = useState([
        { id: 1, name: "Expresso", price: "₹229", Image: ProductIcon, Icon: PlusIcon },
        { id: 2, name: "Cappuccino", price: "₹229", Image: ProductIcon, Icon: PlusIcon },
        { id: 3, name: "Latte", price: "₹229", Image: ProductIcon, Icon: PlusIcon },
        { id: 4, name: "Americano", price: "₹229", Image: ProductIcon, Icon: PlusIcon },
    ]);

    const handleAdd = (item) => {
        alert(`${item.name} added!`);
    };


    return (
        <>
            <div className="d-flex align-items-center flex-wrap gap-4">
                {products.map((item) => (
                    <MenuCard
                        key={item.id}
                        Image={item.Image}
                        name={item.name}
                        price={item.price}
                        Icon={item.Icon}
                        onAdd={() => handleAdd(item)}
                    />
                ))}
            </div>
        </>
    );
};

export default Desserts;
