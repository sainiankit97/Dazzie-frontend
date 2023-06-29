import React, { useEffect, useState } from "react";
import WithHeaderSidebar from "../../layouts/with-header-sidebar";
import SearchBox from "../../components/search-box";
import "./index.css"
import TabPanel from "../../components/tab-panel";
import ItemCard from "../../components/item-card";

const categories = ['All', 'Food', 'Drinks', 'Snacks', 'Packages']

const items = [
    {
        id: 1,
        name: "Sashimi",
        price: "$22",
        category: "Food"
    },
    {
        id: 2,
        name: "Unagi - Grilled Eel",
        price: "$22",
        category: "Food"
    },
    {
        id: 3,
        name: "Soba - Buckwheat Noodles",
        price: "$22",
        category: "Food"
    },
    {
        id: 4,
        name: "Onigiri - Rice Balls",
        price: "$22",
        category: "Food"
    },
    {
        id: 5,
        name: "Yakitori - Grilled Chicken",
        price: "$22",
        category: "Food"
    },
    {
        id: 6,
        name: "Miso Soup",
        price: "$22",
        category: "Food"
    },
    {
        id: 7,
        name: "Amazake",
        price: "$22",
        category: "Drinks"
    },
    {
        id: 8,
        name: "Royal Milk Tea",
        price: "$22",
        category: "Drinks"
    },
    {
        id: 9,
        name: "Flavored Soymilk Drinks",
        price: "$22",
        category: "Drinks"
    },
    {
        id: 10,
        name: "Mango Milk Shake",
        price: "$22",
        category: "Drinks"
    },
    {
        id: 11,
        name: "Oreo Shake",
        price: "$22",
        category: "Drinks"
    },
    {
        id: 12,
        name: "Virgin Mojito",
        price: "$22",
        category: "Drinks"
    },
    {
        id: 13,
        name: "Lays",
        price: "$22",
        category: "Snacks"
    },
    {
        id: 14,
        name: "Momos",
        price: "$22",
        category: "Snacks"
    },
    {
        id: 15,
        name: "ABC",
        price: "$22",
        category: "Packages"
    },
    {
        id: 16,
        name: "XYZ",
        price: "$22",
        category: "Packages"
    }
]

const Dashboard = () => {
    const [categorySelected, setCategorySelected] = useState("All")
    const [searchString, setSearchString] = useState("")
    const [itemsToShow, setItemsToShow] = useState({})

    useEffect(() => {
        if (searchString !== "") {
            let filteredItems = {}
            items?.forEach((item) => {
                const itemName = item?.name.toLowerCase()
                if (itemName.includes(searchString.toLowerCase())) {
                    if (filteredItems[item?.category]?.length > 0) {
                        filteredItems[item?.category].push(item)
                    }
                    else {
                        filteredItems[item?.category] = [item]
                    }
                }
            })
            setItemsToShow(filteredItems)
        } else {
            let filteredItems = {}
            items?.forEach((item) => {
                if (filteredItems[item?.category]?.length > 0) {
                    filteredItems[item?.category].push(item)
                } else {
                    filteredItems[item?.category] = [item]
                }
            })
            setItemsToShow(filteredItems)
        }
    }, [searchString])

    const renderCategoriesItems = () => {
        if (categorySelected === "All") {
            return (
                <div className="categories-container">
                    {Object.keys(itemsToShow).map((key) => {
                        const items = itemsToShow[key]
                        return (
                            <div className="catergory-items">
                                <span className="category-label">{key}</span>
                                <div className="items-container">
                                    {items?.map((item) => {
                                        return <ItemCard item={item} />
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }
        else {
            return (
                <div className="categories-container">
                    <div className="catergory-items">
                        <span className="category-label">{categorySelected}</span>
                        <div className="items-container">
                            {itemsToShow[categorySelected]?.map((item) => {
                                return <ItemCard item={item} />
                            })}
                        </div>
                    </div>
                </div>
            )
        }
    }


    return (
        <div className="dashboard_container">
            <div className="inner-container">
                <SearchBox onChange={(event) => {
                    setSearchString(event.target.value)
                }} />
                <TabPanel
                    className="tabPanel"
                    tabs={categories}
                    onTabSelect={(value) => {
                        setCategorySelected(value)
                    }}
                />
                {renderCategoriesItems()}
            </div>
        </div>
    )
}

export default WithHeaderSidebar(Dashboard)