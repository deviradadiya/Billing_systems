import React from "react";
import FilterIcon from "../../assets/icon/filter.svg";
import eyes from "../../assets/icon/eyes.svg";
import message from "../../assets/icon/message.svg";
import play from "../../assets/icon/play.svg";

const Shopkeeper = () => {
  return (
    <div className="main-content">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex align-items-center justify-content-between mb_24">
            <h2 className="heading">Shopkeeper(8)</h2>
            <div className={"d-flex align-items-center gap-4"}>
              <div className={"filter-tabs"}>
                <div className="time-filter">24h</div>
                <div className="time-filter active">7d</div>
                <div className="time-filter">6m</div>
                <div className="time-filter">1y</div>
              </div>

              <div className="filter-btn">
                <img className={"img-fluid"} src={FilterIcon} alt="" />
              </div>
            </div>
          </div>

          <table className="custom-table pb_20">
            <thead>
              <tr>
                <th>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="checkbox-text">Name</span>
                  </label>
                </th>

                <th>Store Name</th>
                <th>Contact No</th>
                <th>Status</th>
                <th>Joined On</th>
                <th>Total Sales</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="pt_22">
              <tr>
                <td>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="checkbox-text">Ramesh Kumar</span>
                  </label>
                </td>
                <td className="fs_18 fw_400">CafeFoodies</td>
                <td className="fs_18 fw_400">+91 9876543210</td>
                <td>
                  <span className="status paid">Active</span>
                </td>
                <td className="payment">12 Mar 2024</td>
                <td>₹1,25,800</td>
                <td className="actions">
                  <img src={eyes} alt="View" />
                  <img src={message} alt="Message" />
                  <img src={play} alt="Play" />
                </td>
              </tr>

              <tr>
                <td>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="checkbox-text">Ramesh Kumar</span>
                  </label>
                </td>
                <td className="fs_18 fw_400">CafeFoodies</td>
                <td className="fs_18 fw_400">+91 9876543210</td>
                <td>
                  <span className="status paid">Active</span>
                </td>
                <td className="payment">12 Mar 2024</td>
                <td>₹1,25,800</td>
                <td className="actions">
                  <img src={eyes} alt="View" />
                  <img src={message} alt="Message" />
                  <img src={play} alt="Play" />
                </td>
              </tr>

              <tr>
                <td>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="checkbox-text">Ramesh Kumar</span>
                  </label>
                </td>
                <td className="fs_18 fw_400">CafeFoodies</td>
                <td className="fs_18 fw_400">+91 9876543210</td>
                <td>
                  <span className="status paid">Active</span>
                </td>
                <td className="payment">12 Mar 2024</td>
                <td>₹1,25,800</td>
                <td className="actions">
                  <img src={eyes} alt="View" />
                  <img src={message} alt="Message" />
                  <img src={play} alt="Play" />
                </td>
              </tr>

              <tr>
                <td>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="checkbox-text">Ramesh Kumar</span>
                  </label>
                </td>
                <td className="fs_18 fw_400">CafeFoodies</td>
                <td className="fs_18 fw_400">+91 9876543210</td>
                <td>
                  <span className="status paid">Active</span>
                </td>
                <td className="payment">12 Mar 2024</td>
                <td>₹1,25,800</td>
                <td className="actions">
                  <img src={eyes} alt="View" />
                  <img src={message} alt="Message" />
                  <img src={play} alt="Play" />
                </td>
              </tr>

              <tr>
                <td>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="checkbox-text">Ramesh Kumar</span>
                  </label>
                </td>
                <td className="fs_18 fw_400">CafeFoodies</td>
                <td className="fs_18 fw_400">+91 9876543210</td>
                <td>
                  <span className="status paid">Active</span>
                </td>
                <td className="payment">12 Mar 2024</td>
                <td>₹1,25,800</td>
                <td className="actions">
                  <img src={eyes} alt="View" />
                  <img src={message} alt="Message" />
                  <img src={play} alt="Play" />
                </td>
              </tr>

              <tr>
                <td>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="checkbox-text">Ramesh Kumar</span>
                  </label>
                </td>
                <td className="fs_18 fw_400">CafeFoodies</td>
                <td className="fs_18 fw_400">+91 9876543210</td>
                <td>
                  <span className="status paid">Active</span>
                </td>
                <td className="payment">12 Mar 2024</td>
                <td>₹1,25,800</td>
                <td className="actions">
                  <img src={eyes} alt="View" />
                  <img src={message} alt="Message" />
                  <img src={play} alt="Play" />
                </td>
              </tr>

              <tr>
                <td>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="checkbox-text">Ramesh Kumar</span>
                  </label>
                </td>
                <td className="fs_18 fw_400">CafeFoodies</td>
                <td className="fs_18 fw_400">+91 9876543210</td>
                <td>
                  <span className="status paid">Active</span>
                </td>
                <td className="payment">12 Mar 2024</td>
                <td>₹1,25,800</td>
                <td className="actions">
                  <img src={eyes} alt="View" />
                  <img src={message} alt="Message" />
                  <img src={play} alt="Play" />
                </td>
              </tr>

              <tr>
                <td>
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="checkbox-text">Ramesh Kumar</span>
                  </label>
                </td>
                <td className="fs_18 fw_400">CafeFoodies</td>
                <td className="fs_18 fw_400">+91 9876543210</td>
                <td>
                  <span className="status paid">Active</span>
                </td>
                <td className="payment">12 Mar 2024</td>
                <td>₹1,25,800</td>
                <td className="actions">
                  <img src={eyes} alt="View" />
                  <img src={message} alt="Message" />
                  <img src={play} alt="Play" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Shopkeeper;
