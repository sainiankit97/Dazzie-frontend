import React from "react"
import SideBar from "../../components/sidebar"
import Header from "../../components/header"
import "./index.css"

const WithHeaderSidebar = (Component) => {
    function wrapper(props) {
        return (
            <div>
                <Header />
                <div className="bottom-container">
                    <SideBar />
                    <div className="child-container">
                        <Component {...props} />
                    </div>
                </div>
            </div>
        )
    }
    return wrapper
}

export default WithHeaderSidebar