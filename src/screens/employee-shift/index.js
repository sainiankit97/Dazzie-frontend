import React from "react";
import WithHeaderSidebar from "../../layouts/with-header-sidebar";
import Button from "../../components/button";
import "./index.css"
import PenIcon from "../../assets/icons/pen.svg"
import PlusIcon from "../../assets/icons/plus.svg"
import EmployeeCard from "../../components/employee-card";

const employeeShifts = [
    {
        label: "Shift 1 (06 AM -12 AM)",
        employees:
            [
                {
                    name: "Brooklyn Simmons",
                    type: "Admin",
                    badgeColor: "#F1F1F6",
                    badgeTextColor: "#9A9AB0"
                },
                {
                    name: "Dianne Russell",
                    type: "Cashier",
                    badgeColor: "#D9F2EC",
                    badgeTextColor: "#3CAA91"
                },
                {
                    name: "Esther Howard",
                    type: "Chef",
                    badgeColor: "#FCE7CF",
                    badgeTextColor: "#EEAF22"
                },
                {
                    name: "Jenny Wilson",
                    type: "Waitress",
                    badgeColor: "#DBD7F4",
                    badgeTextColor: "#2A23C2"
                },
                {
                    name: "Theresa Webb",
                    type: "Dishwasher",
                    badgeBorderColor: "#5541D7",
                    badgeTextColor: "#2A23C2"
                },
                {
                    name: "Ronald Richards",
                    type: "Chef",
                    badgeColor: "#FCE7CF",
                    badgeTextColor: "#EEAF22"
                }
            ]
    },
    {
        label: "Shift 2 (01 PM - 11 PM)",
        employees:
            [
                {
                    name: "Leslie Alexander",
                    type: "Admin",
                    badgeColor: "#F1F1F6",
                    badgeTextColor: "#9A9AB0"
                },
                {
                    name: "Floyd Miles",
                    type: "Cashier",
                    badgeColor: "#D9F2EC",
                    badgeTextColor: "#3CAA91"
                },
                {
                    name: "Kristin Watson",
                    type: "Chef",
                    badgeColor: "#FCE7CF",
                    badgeTextColor: "#EEAF22"
                },
                {
                    name: "Devon Lane",
                    type: "Waitress",
                    badgeColor: "#DBD7F4",
                    badgeTextColor: "#2A23C2"
                },
                {
                    name: "Marvin McKinney",
                    type: "Dishwasher",
                    badgeBorderColor: "#5541D7",
                    badgeTextColor: "#2A23C2"
                },
                {
                    name: "Jerome Bell",
                    type: "Chef",
                    badgeColor: "#FCE7CF",
                    badgeTextColor: "#EEAF22"
                }
            ]
    }
]

const EmployeeShift = () => {
    return (
        <div className="employee-container">
            <div className="top-button-container">
                <span className="employee-label">Employee Shift</span>
                <div>
                    <Button buttonText={"Create New"} />
                </div>
            </div>
            <div className="employee-inner-container">
                {
                    employeeShifts?.map((shift,index) => {
                        return (
                            <div className="employee-shift-container" key={index}>
                                <div className="icons-container">
                                    <span className="shift-label">{shift?.label}</span>
                                    <div>
                                        <img src={PenIcon} className="pen-icon" alt="pen-icon"/>
                                        <img src={PlusIcon} className="plus-icon" alt="plus-icon"/>
                                    </div>
                                </div>
                                <div className="employee-cards-container">
                                    {shift?.employees?.map((employee,index) => {
                                        return <EmployeeCard employee={employee} key={index}/>
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default WithHeaderSidebar(EmployeeShift)