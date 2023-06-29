import React from "react";
import "./index.css"

const Button = ({
    buttonStyle = "",
    textStyle = "",
    buttonText,
    onClick = () => { }
}) => {
    return (
        <button className={`button-container ${buttonStyle}`} onClick={onClick}>
            <span className={`button-text ${textStyle}`}>{buttonText}</span>
        </button>
    )
}

export default Button