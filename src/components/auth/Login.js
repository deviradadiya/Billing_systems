import React from "react";
import TechkelLogo from "../../assets/images/techkel_logo.svg";
import MailIcon from "../../assets/icon/mail.svg";
import PasswordIcon from "../../assets/icon/password.svg";
import RightArrowIcon from "../../assets/icon/arrow-right-white.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // ✅ Navigation hook

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form from submitting the default way
    // Add actual authentication logic here if needed
    navigate("/dashboard"); // ✅ Navigate to dashboard
  };

  return (
    <>
      <div className="auth-section">
        <div className="auth-screen-width">
          <div className="left-screen">
            <div className="img-wrapper">
              <img className="img-fluid" src={TechkelLogo} alt="Logo" />
            </div>
            <div className="content">
              <h2>Log in to your account to continue where you left off.</h2>
            </div>
          </div>
          <div className="right-screen">
            <form className={"form"}>
              <div className="row">
                <div className="col-12">
                  <h5 className={"fs_22 fw_600 mb_20"}>
                    We’re glad to see you again
                  </h5>
                  <p className={"fs_18 fw_400 "}>
                    let’s get you signed in so you can continue doing amazing
                    things.
                  </p>
                </div>

                <div className="col-12 mb-4">
                  <div className="form-action">
                    <div className="img-wrapper">
                      <img className="img-fluid" src={MailIcon} alt="Mail" />
                    </div>
                    <div className={"d-flex flex-column flex-grow-1"}>
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="rahulsharma@gmail.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-action">
                    <div className="img-wrapper">
                      <img
                        className="img-fluid"
                        src={PasswordIcon}
                        alt="Password"
                      />
                    </div>
                    <div className={"d-flex flex-column flex-grow-1"}>
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="********"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12 pt_60">
                  <div
                    className={
                      "form-button d-flex align-items-center gap-3 justify-content-between"
                    }
                  >
                    <div className={"text-end forgot-password m-0"}>
                      <NavLink
                        className={"text-end fs_16 fw_400"}
                        to="/register"
                      >
                        Forgot Password?
                      </NavLink>
                    </div>

                    <button
                      className="btn btn-primary justify-content-center"
                      onClick={handleLogin}
                    >
                      Login
                      <img
                        className={"img-fluid"}
                        src={RightArrowIcon}
                        alt="arrow"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
