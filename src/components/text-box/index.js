import React from "react";
import "./index.css"

const Textbox = ({
    className = "",
    label = "",
    placeholder = "",
    value = "",
    onChange = () => { }
}) => {
    return (
        <div className={`text-box-container ${className}`}>
            <span className="label-style">{label}</span>
            <div className="input-box-container">
                <input className="input-box" value={value} placeholder={placeholder} onChange={onChange} />
            </div>
        </div>
    )
}

export default Textbox