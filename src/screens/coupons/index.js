import React, { useEffect, useState } from "react";
import WithHeaderSidebar from "../../layouts/with-header-sidebar";
import SearchBox from "../../components/search-box";
import FilterIcon from "../../assets/icons/filter.svg"
import DotsIcon from "../../assets/icons/threedots.svg"
import "./index.css"
import Switch from "../../components/switch";
import Button from "../../components/button"

const coupons = [
    {
        id: "01",
        code: "20% Off Entire Order",
        discount: "20%",
        startDate: "February 14 2021",
        endDate: "February 17 2021",
        activated: true
    },
    {
        id: "02",
        code: "10% Off Entire Item",
        discount: "10%",
        startDate: "February 14 2021",
        endDate: "February 17 2021",
        activated: false

    },
    {
        id: "03",
        code: "50% Off Entire Item",
        discount: "50%",
        startDate: "February 14 2021",
        endDate: "February 17 2021",
        activated: false
    },
    {
        id: "04",
        code: "10% Off Entire Item",
        discount: "10%",
        startDate: "February 14 2021",
        endDate: "February 17 2021",
        activated: false
    },
    {
        id: "05",
        code: "60% Off Entire Item",
        discount: "60%",
        startDate: "February 14 2021",
        endDate: "February 17 2021",
        activated: true
    },
    {
        id: "06",
        code: "70% Off Entire Item",
        discount: "70%",
        startDate: "February 14 2021",
        endDate: "February 17 2021",
        activated: true
    },
    {
        id: "07",
        code: "20% Off Entire Order",
        discount: "20%",
        startDate: "February 14 2021",
        endDate: "February 17 2021",
        activated: true
    },
    {
        id: "08",
        code: "20% Off Entire Order",
        discount: "20%",
        startDate: "February 14 2021",
        endDate: "February 17 2021",
        activated: true
    }
]

const headings = [
    {
        label: "ID",
        width: "8%"
    },
    {
        label: "Code",
        width: "15%"
    },
    {
        label: "Discount",
        width: "12%"
    },
    {
        label: "Start Date",
        width: "20%"
    },
    {
        label: "End Date",
        width: "20%"
    },
    {
        label: "Activate",
        width: "15%"
    }
]

const Coupons = () => {
    const [searchString, setSearchString] = useState("")
    const [couponsToShow, setCouponsToShow] = useState(coupons)

    const checkStringIncludes = (coupon, searchString) => {
        return Object.keys(coupon).some((key) => {
            if (typeof (coupon[key]) !== 'boolean' && coupon[key].toLowerCase().includes(searchString.toLowerCase())) {
                return true
            } else {
                return false
            }
        })
    }
    useEffect(() => {
        if (searchString !== "") {
            let filteredData = []
            coupons?.forEach((coupon) => {
                if (checkStringIncludes(coupon, searchString)) {
                    filteredData.push(coupon)
                }
            })
            setCouponsToShow(filteredData)
        } else {
            setCouponsToShow(coupons)
        }
    }, [searchString])

    return (
        <div className="coupon-container">
            <div className="top-button-container">
                <span className="coupon-label">Coupons</span>
                <div>
                    <Button buttonText={"Create New"} />
                </div>
            </div>
            <div className="coupon-inner-container">
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
                        <tr style={{ borderTop: 1, borderTopColor: "black" }}>
                            {headings?.map((heading, index) => {
                                return <th key={index} style={{ width: heading.width }} className="heading-style">{heading?.label}</th>
                            })}
                            <th className="heading-style"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {couponsToShow?.map((coupon, index) => {
                            return (
                                <tr key={index}>
                                    {Object.keys(coupon).map((key) => {
                                        return (
                                            <td key={key}>
                                                <div className="tableData">
                                                    {key === "activated" ? <Switch /> : <span>{coupon[key]}</span>}
                                                </div>
                                            </td>
                                        )
                                    })}
                                    <td align="right">
                                        <img src={DotsIcon} className="dots-icon" alt="dot-icon" />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WithHeaderSidebar(Coupons)