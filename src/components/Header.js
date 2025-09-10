import React from "react";

import NotificationIcon from '../assets/icon/notification.svg';
import UserLogo from '../assets/images/header-logo.png';
import SearchIcon from '../assets/icon/search.svg';
import UserImage from '../assets/images/user.jpg';
import ProfileIcon from '../assets/icon/profile-icon.svg';
import SupportIcon from '../assets/icon/support.svg';
import LogoutIcon from '../assets/icon/logout.svg';

const Header = () => {
    return (
        <>
            <header className="app-header">
                <div className="header-inner d-flex align-items-center justify-content-between">

                    {/* Left */}
                    <div className="d-flex align-items-center gap-3">
                        <img src={UserLogo} alt="Logo" className="logo-img"/>
                        <p className="greeting m-0 fw_700 fs_18 ">Hi, Rahul Sharma</p>
                    </div>

                    {/* Right */}
                    <div className="d-flex align-items-center gap-3">
                        <div className="search-box">
                            <img src={SearchIcon} alt="Logo" className="img-fluid"/>
                            <input type="text" className="form-control" placeholder="Search"/>
                        </div>
                        <div className="filter-btn">
                            <img src={NotificationIcon} alt="Notification" className="notification-img"/>
                        </div>

                        <div className="dropdown profile-dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <img className={'img-fluid'} src={UserImage} alt=""/>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">
                                    <img className={'img-fluid'} src={ProfileIcon} alt=""/>
                                    Profile</a></li>
                                <li><a className="dropdown-item" href="#">
                                    <img className={'img-fluid'} src={SupportIcon} alt=""/>
                                    Support</a></li>
                                <li><a className="dropdown-item logout-button" href="#">
                                    <img className={'img-fluid'} src={LogoutIcon} alt=""/>
                                    Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
