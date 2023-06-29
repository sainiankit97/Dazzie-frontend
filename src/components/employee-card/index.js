import React from "react";
import "./index.css"
import DotsIcon from "../../assets/icons/threedots.svg"

const EmployeeCard = ({ employee }) => {
    return (
        <div className="employee-card">
            <div className="employee-id-container">
                <div className="employee-photo" />
                <div className="employee-badge-container">
                    <span className="employee-name">{employee.name}</span>
                    <div style={{ display: 'flex', flexDirection: "row", alignItems: "center", marginTop: 11 }}>
                        <span
                            style={{
                                backgroundColor: employee.badgeColor,
                                color: employee.badgeTextColor,
                                borderWidth: employee?.badgeBorderColor ? 1 : 0,
                                borderColor: employee?.badgeBorderColor ? employee?.badgeBorderColor : ""
                            }}
                            className="employee-badge"
                        >{employee.type}</span>
                        <span className="details-label">Details</span>
                    </div>
                </div>
            </div>
            <img src={DotsIcon} className="three-dots-icon" alt="three-dots-icon"/>
        </div>
    )
}

export default EmployeeCard