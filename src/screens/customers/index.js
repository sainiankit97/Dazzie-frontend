import React, { useEffect, useState } from "react";
import WithHeaderSidebar from "../../layouts/with-header-sidebar";
import "./index.css"
import SearchBox from "../../components/search-box";
import FilterIcon from "../../assets/icons/filter.svg"
import DotsIcon from "../../assets/icons/threedots.svg"

const customerData = [
    {
        id: "XXX1",
        name: "Arlene McCoy",
        joinDate: "1 February 2021",
        totalVisit: "2",
        purchaseItems: "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
        totalSpend: "$490.51"
    },
    {
        id: "XXX2",
        name: "Savannah Nguyen",
        joinDate: "3 February 2021",
        totalVisit: "3",
        purchaseItems: "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
        totalSpend: "$396.84"
    },
    {
        id: "XXX3",
        name: "Jacob Jones",
        joinDate: "5 February 2021",
        totalVisit: "6",
        purchaseItems: "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
        totalSpend: "$406.27"
    },
    {
        id: "XXX4",
        name: "Jerome Bell",
        joinDate: "1 February 2021",
        totalVisit: "12",
        purchaseItems: "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
        totalSpend: "$767.50"
    },
    {
        id: "XXX5",
        name: "Cody Fisher",
        joinDate: "18 February 2021",
        totalVisit: "14",
        purchaseItems: "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
        totalSpend: "$475.22"
    },
    {
        id: "XXX6",
        name: "Kathryn Murphy",
        joinDate: "12 February 2021",
        totalVisit: "53",
        purchaseItems: "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
        totalSpend: "$601.13"
    },
    {
        id: "XXX7",
        name: "Jane Cooper",
        joinDate: "1 February 2021",
        totalVisit: "21",
        purchaseItems: "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
        totalSpend: "$293.01"
    },
    {
        id: "XXX8",
        name: "Ronald Richards",
        joinDate: "15 February 2021",
        totalVisit: "31",
        purchaseItems: "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
        totalSpend: "$948.55"
    },
    {
        id: "XXX9",
        name: "Theresa Webb",
        joinDate: "21 February 2021",
        totalVisit: "41",
        purchaseItems: "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
        totalSpend: "$928.41"
    },
    {
        id: "XX10",
        name: "Annette Black",
        joinDate: "11 February 2021",
        totalVisit: "6",
        purchaseItems: "americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)",
        totalSpend: "$473.85"
    }
]

const headings = [
    {
        label: "ID",
        width: "8%"
    },
    {
        label: "Name",
        width: "17%"
    },
    {
        label: "Join Date",
        width: "17%"
    },
    {
        label: "Total Visit",
        width: "12%"
    },
    {
        label: "Purchased Items",
        width: "30%"
    },
    {
        label: "Total Spend",
        width: "16%"
    }
]

const Customers = () => {
    const [searchString, setSearchString] = useState("")
    const [customerDataToShow, setCustomerDataToShow] = useState(customerData)

    const checkStringIncludes = (customer, searchString) => {
        return Object.keys(customer).some((key) => {
            if (customer[key].toLowerCase().includes(searchString.toLowerCase())) {
                return true
            } else {
                return false
            }
        })
    }
    useEffect(() => {
        if (searchString !== "") {
            let filteredData = []
            customerData?.forEach((customer) => {
                if (checkStringIncludes(customer, searchString)) {
                    filteredData.push(customer)
                }
            })
            setCustomerDataToShow(filteredData)
        } else {
            setCustomerDataToShow(customerData)
        }
    }, [searchString])

    return (
        <div className="customer-container">
            <span className="customer-label">Customer</span>
            <div className="customer-inner-container">
                <div className="search-main">
                    <SearchBox
                        className="search-container"
                        onChange={(event) => {
                            setSearchString(event.target.value)
                        }}
                    />
                    <img src={FilterIcon} className="filter-icon" alt="filter-icon" />
                    <img src={DotsIcon} className="dots-icon" alt="dot-icon" />
                </div>
                <table style={{ marginTop: 16 }}>
                    <thead>
                        <tr>
                            {headings?.map((heading,index) => {
                                return <th key={index} style={{ width: heading.width }} className="heading-style">{heading?.label}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {customerDataToShow?.map((customer,index) => {
                            return (
                                <tr key={index}>
                                    {Object.keys(customer).map((key) => {
                                        return (
                                            <td key={key}>
                                                <div className="tableData">
                                                    <span>{customer[key]}</span>
                                                    {key === "purchaseItems" ? <span className="see-details-label">See Details</span> : null}
                                                </div>
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WithHeaderSidebar(Customers)