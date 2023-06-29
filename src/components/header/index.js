import React from "react";
import "./index.css"
import NotificationIcon from "../../assets/icons/notification_bell.svg"

const Header = () => {
    return (
        <div className="container">
            <div className="left-container">
                <div className="logo"/>
                <span className="title">Dazzie</span>
            </div>
            <div className="right-container">
                <img className="notification-icon" src={NotificationIcon} alt="notification" />
                <div className="profile-photo"></div>
                <div className="user-container">
                    <span className="user-name">Sumanto</span>
                    <span className="user-designation">Cashier</span>
                </div>
            </div>
        </div>
    )
}

export default Header