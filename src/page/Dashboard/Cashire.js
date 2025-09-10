import React, {useState} from "react";
import eyes from "../../assets/icon/eyes.svg";
import edit from "../../assets/icon/edit.svg";
import deleteicon from "../../assets/icon/deleteicon.svg";

const Cashire = () => {
    return (
        <>
            <table className="custom-table pb_20">
                <thead>
                <tr>
                    <th>Items</th>
                    <th>Token</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Payment</th>
                    <th>Source</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="item-name fs_18 fw_700"><p>Espresso 1</p></td>
                    <td className="fs_18 fw_400">010</td>
                    <td className="fs_18 fw_400">25 Aug, 2025</td>
                    <td>
                        <span className="status paid">Paid QR</span>
                    </td>
                    <td className="payment "><p>₹260</p></td>
                    <td>Restaurants</td>
                    <td className="actions">
                        <img src={eyes} alt="View"/>
                        <img src={edit} alt="Edit"/>
                        <img src={deleteicon} alt="Delete"/>
                    </td>
                </tr>

                <tr>
                    <td className="item-name fs_18 fw_700"><p>Espresso 1</p></td>
                    <td className="fs_18 fw_400">010</td>
                    <td className="fs_18 fw_400">25 Aug, 2025</td>
                    <td>
                        <span className="status paid">Paid QR</span>
                    </td>
                    <td className="payment "><p>₹260</p></td>
                    <td>Restaurants</td>
                    <td className="actions">
                        <img src={eyes} alt="View"/>
                        <img src={edit} alt="Edit"/>
                        <img src={deleteicon} alt="Delete"/>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
};

export default Cashire;
