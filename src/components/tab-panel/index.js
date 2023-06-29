import React, { useState } from "react";
import "./index.css"

const TabPanel = ({
    tabs,
    className = "",
    onTabSelect = () => { }
}) => {
    const [currentSelected, setCurrentSelected] = useState(tabs[0])

    return (
        <div className={`tab-panel-container ${className}`}>
            {tabs.map((tab) => {
                return (
                    <div className="tab-container" key={tab}>
                        <span className={`tab-label ${currentSelected === tab ? 'tab-label-selected' : ''}`} onClick={() => {
                            setCurrentSelected(tab)
                            onTabSelect(tab)
                        }}>{tab}</span>
                        <div className={`bottom-line ${currentSelected === tab ? 'bottom-line-selected' : ''}`} />
                    </div>
                )
            })}
        </div>
    )
}

export default TabPanel