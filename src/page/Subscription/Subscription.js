import React from "react";
import pluswhite from "../../assets/icon/plus-white.svg";
import deleteicon from "../../assets/icon/deleteicon.svg";
const Subscription = () => {
  return (
    <div className="main-content">
      <div className="row">
        <div className="col-md-12">
          <div className="subsription-wrapper d-flex align-items-center justify-content-between mb_24">
            <h2 className="heading">Subscription</h2>

            <div className="feature-btn">
              <button type="button" className="add-feature-button">
                <img src={pluswhite} alt="Add" className="icon" />
                <span>Add Features</span>
              </button>
            </div>
          </div>

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
            <tbody className="pt_22">
              <tr>
                <td>
                  <label className="checkbox-label">
                    <span className="checkbox-txt">Unlimited-user rights</span>
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
                  <img src={deleteicon} alt="Delete" />
                </td>
              </tr>

              <tr>
                <td>
                  <label className="checkbox-label">
                    <span className="checkbox-txt">
                      Unlimited cash register
                    </span>
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
                  <img src={deleteicon} alt="Delete" />
                </td>
              </tr>

              <tr>
                <td>
                  <label className="checkbox-label">
                    <span className="checkbox-txt">Quick Billing</span>
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
                  <img src={deleteicon} alt="Delete" />
                </td>
              </tr>

              <tr>
                <td>
                  <label className="checkbox-label">
                    <span className="checkbox-txt">Manage Stuff</span>
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
                  <img src={deleteicon} alt="Delete" />
                </td>
              </tr>

              <tr>
                <td>
                  <label className="checkbox-label">
                    <span className="checkbox-txt">Create Offers</span>
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
                  <img src={deleteicon} alt="Delete" />
                </td>
              </tr>

              <tr>
                <td>
                  <label className="checkbox-label">
                    <span className="checkbox-txt">Manage zomato Swiggy</span>
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
                  <img src={deleteicon} alt="Delete" />
                </td>
              </tr>

              <tr>
                <td>
                  <label className="checkbox-label">
                    <span className="checkbox-txt">Generate Digital Bill</span>
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
                  <img src={deleteicon} alt="Delete" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
