import React from "react";
import "./index.css"

const Textarea = ({
    className = "",
    label = "",
    placeholder = "",
    rows = 5,
    value = "",
    onChange = () => { }
}) => {
    return (
        <div className={`text-area-container ${className}`}>
            <span className="label-style">{label}</span>
            <div className="text-area-box-container">
                <textarea className="text-area-box" value={value} placeholder={placeholder} onChange={onChange} rows={rows} />
            </div>
        </div>
    )
}

export default Textarea