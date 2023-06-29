import React from "react";
import "./index.css"

const Switch = ({ checked }) => {
    return (
        <label className="switch">
            <input type="checkbox" checked={checked} />
            <span className="slider round"></span>
        </label>
    )
}

export default Switch