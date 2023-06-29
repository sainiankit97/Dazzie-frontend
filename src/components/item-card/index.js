import React from "react";
import "./index.css"

const ItemCard = ({ item }) => {
    return (
        <div className="item-container">
            <div className="item-image-placeholder"/>
            <span className="item-name-label">{item.name}</span>
            <span className="item-price-label">{item.price}</span>
        </div>
    )
}

export default ItemCard