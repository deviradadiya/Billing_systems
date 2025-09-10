import React, { useState } from "react";
import TechkelLogo from "../../assets/images/techkel_logo.svg";
import UserIcon from "../../assets/icon/users.svg";
import MailIcon from "../../assets/icon/mail.svg";
import CallIcon from "../../assets/icon/call.svg";
import RightArrowIcon from "../../assets/icon/arrow-right-white.svg";
import LocationIcon from "../../assets/icon/location.svg";
import ShopIcon from "../../assets/icon/shop.svg";
import GSTIcon from "../../assets/icon/GST.svg";
import CheckFillIcon from "../../assets/icon/fill-check.svg";
import PasswordIcon from "../../assets/icon/password.svg";
import SuccessIcon from "../../assets/images/success.gif";
import { NavLink } from "react-router-dom";
import OfferNameIcon from "../../assets/icon/offers-fill.svg";
import PercentageIcon from "../../assets/icon/percentage.svg";
import PlusIcon from "../../assets/icon/plus-white.svg";

function Register() {

    const [step, setStep] = useState(1);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleNext = () => setStep((prev) => prev + 1);
    const handleBack = () => setStep((prev) => prev - 1);

    return (
        <>
            <div className="auth-section">
                <div className="auth-screen-width">
                    <div className="left-screen">
                        <div className="img-wrapper">
                            <img className="img-fluid" src={TechkelLogo} alt="Logo"/>
                        </div>
                        <div className="content">
                            <h2>Register today and take control of your shop with modern tools.</h2>
                        </div>
                    </div>
                    <div className="right-screen">
                        <form className={'form'}>
                            <div className="row">
                                {step === 1 && (
                                    <>
                                        <div className="col-12">
                                            <h5 className={'fs_22 fw_600 mb_20'}>Create Your Shopkeeper Account</h5>
                                            <p className={'fs_18 fw_400 '}>Enter your details to get started with
                                                Techkel and manage your shop with ease.</p>
                                        </div>

                                        <div className="col-12 mb-4">
                                            <div className="form-action">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" src={UserIcon} alt="Logo"/>
                                                </div>
                                                <div className={'d-flex flex-column flex-grow-1'}>
                                                    <label htmlFor="FullName" className="form-label">Full Name</label>
                                                    <input type="FullName" className="form-control" id="FullName"
                                                           placeholder="Rahul Sharma"/>
                                                </div>
                                                <div className="img-wrapper">
                                                    <img className={'img-fluid'} src={CheckFillIcon} alt="check-fill"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 mb-4">
                                            <div className="form-action">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" src={MailIcon} alt="Logo"/>
                                                </div>
                                                <div className={'d-flex flex-column flex-grow-1'}>
                                                    <label htmlFor="email" className="form-label">Email Address</label>
                                                    <input type="email" className="form-control" id="email"
                                                           placeholder="rahulsharma@gmail.com"/>
                                                </div>
                                                <div className="img-wrapper">
                                                    <img className={'img-fluid'} src={CheckFillIcon} alt="check-fill"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 mb-4">
                                            <div className="form-action">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" src={CallIcon} alt="Logo"/>
                                                </div>
                                                <div className={'d-flex flex-column flex-grow-1'}>
                                                    <label htmlFor="email" className="form-label">Phone Number</label>
                                                    <input type="text" className="form-control" id="email"
                                                           placeholder="123-456-7890"/>
                                                </div>
                                                <div className="img-wrapper">
                                                    <img className={'img-fluid'} src={CheckFillIcon} alt="check-fill"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={'form-button d-flex align-items-center gap-4 justify-content-end border-0'}>
                                            <div className={'text-end forgot-password m-0 cursor_pointer'}>
                                                <NavLink className={'text-end fs_16 fw_400'} href="/login">Back to Login</NavLink>
                                            </div>

                                            <button className="btn btn-primary justify-content-center" onClick={handleNext}>
                                                Next
                                                <img className={'img-fluid'} src={RightArrowIcon} alt="plus icon"/>
                                            </button>
                                        </div>
                                    </>
                                )}

                                {step === 2 && (
                                    <>
                                        <div className="col-12">
                                            <h5 className={'fs_22 fw_600 mb_20'}>Secure your account</h5>
                                            <p className={'fs_18 fw_400 '}>We’ve sent verification codes to your registered email and phone.</p>
                                        </div>

                                        <div className="col-12 mb-4">
                                            <div className="form-action">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" src={MailIcon} alt="Logo"/>
                                                </div>
                                                <div className={'d-flex flex-column flex-grow-1'}>
                                                    <label htmlFor="email" className="form-label">Email OTP</label>
                                                    <input type="text" className="form-control" id="email"
                                                           placeholder="0000"/>
                                                </div>
                                                <div className="img-wrapper">
                                                    <img className={'img-fluid'} src={CheckFillIcon} alt="check-fill"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 mb-4">
                                            <div className="form-action">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" src={CallIcon} alt="Logo"/>
                                                </div>
                                                <div className={'d-flex flex-column flex-grow-1'}>
                                                    <label htmlFor="email" className="form-label">Phone OTP</label>
                                                    <input type="text" className="form-control" id="email"
                                                           placeholder="1111"/>
                                                </div>
                                                <div className="img-wrapper">
                                                    <img className={'img-fluid'} src={CheckFillIcon} alt="check-fill"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={'form-button d-flex align-items-center gap-4 justify-content-end border-0'}>
                                            <div className={'text-end forgot-password m-0 cursor_pointer'} onClick={handleBack}>
                                                <p className={'text-end fs_16 fw_400 m-0'}>Previous</p>
                                            </div>

                                            <button className="btn btn-primary justify-content-center" onClick={handleNext}>
                                                Next
                                                <img className={'img-fluid'} src={RightArrowIcon} alt="plus icon"/>
                                            </button>
                                        </div>
                                    </>
                                )}

                                {step === 3 && (
                                    <>
                                        <div className="col-12">
                                            <h5 className={'fs_22 fw_600 mb_20'}>Set up your business profile</h5>
                                            <p className={'fs_18 fw_400 '}>Add your shop details to personalize your account.</p>
                                        </div>

                                        <div className="col-12 mb-4">
                                            <div className="form-action">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" src={ShopIcon} alt="Logo"/>
                                                </div>
                                                <div className={'d-flex flex-column flex-grow-1'}>
                                                    <label htmlFor="email" className="form-label">Shop Name</label>
                                                    <input type="text" className="form-control" id="email"
                                                           placeholder="Fodies Cafe"/>
                                                </div>
                                                <div className="img-wrapper">
                                                    <img className={'img-fluid'} src={CheckFillIcon} alt="check-fill"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 mb-4">
                                            <div className="form-action z-2">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" src={ShopIcon} alt="Logo"/>
                                                </div>
                                                <div className={'d-flex flex-column flex-grow-1 position-unset'}>
                                                    <label htmlFor="email" className="form-label">Select Business</label>
                                                    <div className="dropdown position-unset add-menu-dropdown">
                                                        <a className="btn dropdown-toggle p-0 border-0 position-unset" href="#" role="button"
                                                           id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Cafe
                                                        </a>

                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                            <li>
                                                                <div className={'position-relative dropdown-search-box'}>
                                                                    <input type="text" className={'form-control'} placeholder={'Search or Add Category'}/>
                                                                    <button className={'add-button fw_500 text-decoration-underline'}>+ ADD</button>
                                                                </div>
                                                            </li>
                                                            <li><a className="dropdown-item" href="#">Beverages</a></li>
                                                            <li><a className="dropdown-item" href="#">Bakery & Snacks</a></li>
                                                            <li><a className="dropdown-item" href="#">Quick Bites</a></li>
                                                            <li><a className="dropdown-item" href="#">Main Course</a></li>
                                                            <li><a className="dropdown-item" href="#">Desserts</a></li>
                                                            <li><a className="dropdown-item" href="#">Specials</a></li>
                                                            <li><a className="dropdown-item" href="#">Combos</a></li>
                                                        </ul>
                                                    </div>
                                                    {/*<input type="text" className="form-control" id="email"*/}
                                                    {/*       placeholder="Fodies Cafe"/>*/}
                                                </div>
                                                {/*<div className="img-wrapper">*/}
                                                {/*    <img className={'img-fluid'} src={CheckFillIcon} alt="check-fill"/>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>

                                        <div className="col-12 mb-4">
                                            <div className="form-action">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" src={GSTIcon} alt="Logo"/>
                                                </div>
                                                <div className={'d-flex flex-column flex-grow-1'}>
                                                    <label htmlFor="email" className="form-label">GST Number</label>
                                                    <input type="text" className="form-control" id="email"
                                                           placeholder="09AAACH7409R1ZZ"/>
                                                </div>
                                                <div className="img-wrapper">
                                                    <img className={'img-fluid'} src={CheckFillIcon} alt="check-fill"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 mb-4">
                                            <div className="form-action">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" src={LocationIcon} alt="Logo"/>
                                                </div>
                                                <div className={'d-flex flex-column flex-grow-1'}>
                                                    <label htmlFor="email" className="form-label">Shop Address</label>
                                                    <input type="text" className="form-control" id="email"
                                                           placeholder="Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016"/>
                                                </div>
                                                <div className="img-wrapper">
                                                    <img className={'img-fluid'} src={CheckFillIcon} alt="check-fill"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={'form-button d-flex align-items-center gap-4 justify-content-end border-0'}>
                                            <div className={'text-end forgot-password m-0 cursor_pointer'} onClick={handleBack}>
                                                <p className={'text-end fs_16 fw_400 m-0'}>Previous</p>
                                            </div>

                                            <button className="btn btn-primary justify-content-center" onClick={handleNext}>
                                                Next
                                                <img className={'img-fluid'} src={RightArrowIcon} alt="plus icon"/>
                                            </button>
                                        </div>
                                    </>
                                )}

                                {step === 4 && (
                                    <>
                                        <div className="col-12">
                                            <h5 className={'fs_22 fw_600 mb_20'}>Secure Your Account</h5>
                                            <p className={'fs_18 fw_400 '}>Create a strong password to keep your account safe and ready for use.</p>
                                        </div>

                                        <div className="col-12 mb-4">
                                            <div className="form-action">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" src={PasswordIcon} alt="Logo"/>
                                                </div>
                                                <div className={'d-flex flex-column flex-grow-1'}>
                                                    <label htmlFor="email" className="form-label">Password</label>
                                                    <input type="password" className="form-control" id="email"
                                                           placeholder="********"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 mb-4">
                                            <div className="form-action">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" src={PasswordIcon} alt="Logo"/>
                                                </div>
                                                <div className={'d-flex flex-column flex-grow-1'}>
                                                    <label htmlFor="email" className="form-label">Confirm Password</label>
                                                    <input type="password" className="form-control" id="email"
                                                           placeholder="********"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={'form-button d-flex align-items-center gap-4 justify-content-end border-0'}>
                                            <div className={'text-end forgot-password m-0 cursor_pointer'} onClick={handleBack}>
                                                <p className={'text-end fs_16 fw_400 m-0'}>Previous</p>
                                            </div>

                                            <button className="btn btn-primary justify-content-center" onClick={() => setShowSuccessModal(true)}>
                                                Submit
                                                <img className={'img-fluid'} src={RightArrowIcon} alt="plus icon"/>
                                            </button>
                                        </div>
                                    </>
                                )}

                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {showSuccessModal && (
                <>
                    <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                        <div className="modal-dialog modal-dialog-centered modal-md">
                            <div className="modal-content custom-modal">
                                <div className="modal-header">

                                </div>
                                <div className="modal-body text-center">
                                    <div className="img-wrapper ">
                                        <img src={SuccessIcon} className={'imf-fluid'} alt={'GIF'} />
                                    </div>

                                    <h2 className={'title'}>You’re All Set</h2>

                                    <p>You’ve successfully created your account and added your shop.</p>

                                </div>

                                <div className="modal-footer justify-content-center">
                                    <button className="btn btn-primary" >
                                        Go To Dashboard
                                        <img className="img-fluid" src={RightArrowIcon} alt="plus icon"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            )}
        </>
    );
}

export default Register;
