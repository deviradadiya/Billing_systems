import React, {useState} from "react";
import BackIcon from "../../assets/icon/back-arrow.svg";
import search from "../../assets/icon/search.svg";
import braves from "../../assets/icon/product-icon.svg";
import DeleteIcon from "../../assets/icon/deleteicon.svg";

const Tables = () => {
    const [tables, setTables] = useState([]);
    const [selectedTable, setSelectedTable] = useState(null);
    const [items, setItems] = useState([]);
    const [showBillModal, setShowBillModal] = useState(false);

    const [activeTab, setActiveTab] = useState("tables");

    const closeSidebar = () => {
        setSelectedTable(null);
        setItems([]);
        setShowBillModal(false);
    };

    const allColors = [
        "#3C9C19",
        "#CCD03F",
        "rgba(254, 0, 0, 0.5)",
        "#3c9c19",
        "#9357CC",
    ];

    const tableItems = {
        2: [
            {id: 1, name: "Espresso", price: 229, quantity: 1},
            {id: 2, name: "Mocha", price: 229, quantity: 1},
        ],
    };

    const addTable = () => {
        const index = tables.length;
        if (index >= allColors.length) return;

        const newTable = {
            id: Date.now(),
            name: `Table`,
            color: allColors[index],
            index: index + 1,
        };
        setTables([...tables, newTable]);
    };

    const openSidebar = (table) => {
        if (table.index === 2) {
            setSelectedTable(table);
            setItems(tableItems[2] || []);
        }
    };

    const changeQuantity = (id, delta) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? {...item, quantity: Math.max(1, item.quantity + delta)}
                    : item
            )
        );
    };

    const deleteItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };
    const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const discount = 58;
    const totalAfterDiscount = subtotal - discount;
    const taxes = 60;
    const totalBill = totalAfterDiscount + taxes;

    return (
        <>
            <div className="table-grid">
                {tables.map((table, index) => (
                    <div
                        key={table.id}
                        className="table-card cursor_pointer"
                        style={{
                            backgroundColor: index === 1 ? "transparent" : table.color,
                            border: index === 1 ? "2px dashed #ccc" : "none",
                            cursor: "pointer",
                        }}
                        onClick={() => openSidebar(table)}
                    >
                        <div className={'text-white fs_18 fw_800 text-center'}>{table.name} <br/> {table.index}</div>
                    </div>
                ))}

                <div className="add-table" onClick={addTable}>
                    <div className="plus fs_14 fw_800">+</div>
                    <div className="text fs_14 fw_800">Add Table</div>
                </div>
            </div>


            {activeTab === "tables" && selectedTable && (
                <div className="right-sidebar">
                    <div className="sidebar-header py_20  d-flex align-items-center">
                        <button onClick={closeSidebar} className="back-btn">
                            <img src={BackIcon} alt="Back"/>
                        </button>
                        <h2 className="fs_32 fw_400">{selectedTable.name}</h2>
                    </div>

                    <div className="search-box">
                        <img src={search} alt="Search" className="img-fluid"/>
                        <input type="text" className="form-control w-100" placeholder="Search"/>
                    </div>

                    <h3 className="sidebar-title pt_30 fs_20 fw_600 text-black mb_20">
                        Coffee & Beverages ({items.length})
                    </h3>

                    <div className="items-list">
                        {items.map((item) => (
                            <div className="item-card" key={item.id}>
                                <div className="item-left">
                                  <div className="item-icon">
                                    <img src={braves} alt="icon"/>
                                  </div>
                                    <div>
                                        <div className="fs_16 fw_400 text-black mb_4">{item.name}</div>
                                        <div className="item-price fs_14 fw_700 ">₹{item.price}</div>
                                    </div>
                                </div>
                                <div className="item-right">
                                    <button className={'plus-minus'} onClick={() => changeQuantity(item.id, -1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button className={'plus-minus'} onClick={() => changeQuantity(item.id, 1)}>+</button>
                                </div>
                                <div className={'delete-button'} onClick={() => deleteItem(item.id)}>
                                    <img className={'img-fluid'} src={DeleteIcon} width={'14'} alt="delete"/>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-end pt_24">
                        <button
                            className="btn btn-primary"
                            onClick={() => setShowBillModal(true)}
                        >
                            <span className="pr_10">+</span> Generate Bill
                        </button>
                    </div>
                </div>
            )}

            {showBillModal && (
                <div className="bill-modal" onClick={() => setShowBillModal(false)}>
                    <div className="content" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="close-btn fs_18"
                            onClick={() => setShowBillModal(false)}
                        >
                            ×
                        </button>

                        <h2 className="fs_26 fw_500 p-2  ">Bill Detail</h2>

                        <div className="promo pt_20">
                            <div className="left d-flex gap-3">
                                {/*<img src={promo}/>*/}
                                <div>
                                    <h5 className="fs_12 fw_400">Promo Code (Optional)</h5>
                                    <strong className="fs_18 fw_600">TRYFIRST</strong>
                                </div>
                            </div>

                            <div className="right">
                                {/*<img src={verify}/>*/}
                            </div>
                        </div>

                        <div className="bill-row total-items pt_20 pb_18 ">
                            <strong>Total Items ({items.length})</strong>
                        </div>

                        {items.map((item) => (
                            <div className="bill-row" key={item.id}>
                <span className="">
                  {item.name} ({item.quantity})
                </span>
                                <span>
                  <s>₹{item.price}</s> <strong>{item.price - 29}</strong>
                </span>
                            </div>
                        ))}

                        <div className="bill-row subtotal">
                            <strong>Sub Total</strong>
                            <strong>
                                <s>₹{subtotal}</s> {totalAfterDiscount}
                            </strong>
                        </div>

                        <div className="bill-row taxes align-center">
              <span>
                <strong>Taxes</strong>
              </span>
                            <div className="d-flex align-center gap-2">
                                <span>₹{taxes}</span>
                                <button className="tax-btn">+</button>
                            </div>
                        </div>

                        <button className="pay-btn fs_18 fs_700">
                            Total Bill <span className="fw_900">₹{totalBill}</span>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Tables;
