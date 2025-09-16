import React from "react";
import eyes from "../../assets/icon/eyes.svg";
const Support = () => {
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
                <th>Shopkeeper</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Created On</th>
                <th>Assigned To</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="pt_22">
              <tr>
                <td className="fw-bold">#SUP-101</td>
                <td className="fs_18 fw_400">Rajesh Kumar</td>
                <td className="fs_18 fw_400">Technical Error</td>
                <td className="fs_18 fw_400">High</td>
                <td>
                  <span className="status paid">Open</span>
                </td>
                <td>20 Aug, 2025</td>
                <td>Support Agent</td>
                <td className="actions">
                  <img src={eyes} alt="View" />
                  
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Support;
