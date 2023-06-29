import React from "react";
import SearchIcon from "../../assets/icons/SEARCH.svg"
import "./index.css"

const SearchBox = ({
    className="",
    placeholder,
    value,
    onChange = () => { }
}) => {
    return (
        <div className={`search-box-container ${className}`}>
            <img src={SearchIcon} className="search-icon" alt="search icon" />
            <input className="search-box" placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}

export default SearchBox