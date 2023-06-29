import React from "react";
import WithHeaderSidebar from "../../layouts/with-header-sidebar";
import "./index.css"

const Analytics = () => {
    return (
        <div className="analytics_container">
            <div className="analytics_inner_container">
                <span>Analytics</span>
            </div>
        </div>
    )
}

export default WithHeaderSidebar(Analytics)