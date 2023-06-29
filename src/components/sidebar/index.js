import React from "react";
import MenuIcon from "../../assets/icons/Menu.svg"
import MenuIconActive from "../../assets/icons/Menu_active.svg"
import Orders from "../../assets/icons/orders.svg"
import OrdersActive from "../../assets/icons/orders_active.svg"
import User from "../../assets/icons/user.svg"
import UserActive from "../../assets/icons/user_active.svg"
import Package from "../../assets/icons/Package.svg"
import PackageActive from "../../assets/icons/Package_active.svg"
import Coupon from "../../assets/icons/coupon_discount.svg"
import CouponActive from "../../assets/icons/coupon_active.svg"
import Customer from "../../assets/icons/customer.svg"
import CustomerActive from "../../assets/icons/customer_active.svg"
import "./index.css"
import { useLocation, useNavigate } from "react-router-dom";

const sidebarOptions = [
    {
        key: "dashboard",
        icon: MenuIcon,
        activeIcon: MenuIconActive,
        navigateTo: "/"
    },
    {
        key: "analytics",
        icon: Orders,
        activeIcon: OrdersActive,
        navigateTo: "/analytics"
    },
    {
        key: "customers",
        icon: Customer,
        activeIcon: CustomerActive,
        navigateTo: "/customers"
    },
    {
        key: "product",
        icon: Package,
        activeIcon: PackageActive,
        navigateTo: "/edit-product"
    },
    {
        key: "coupons",
        icon: Coupon,
        activeIcon: CouponActive,
        navigateTo: "/coupons"
    },
    {
        key: "user",
        icon: User,
        activeIcon: UserActive,
        navigateTo: "/user"
    }
]

const SideBar = () => {
    const location = useLocation();
    const navigate = useNavigate()

    return (
        <div className="sidebar">
            <div className="sidebar-options">
                {sidebarOptions?.map((option) => {
                    return (
                        <div key={option.key} className={`option-container ${option.navigateTo === location.pathname ? 'option-active' : ''}`}
                            onClick={() => {
                                if (option.navigateTo !== location.pathname) {
                                    navigate(option.navigateTo)
                                }
                            }}
                        >
                            <img src={option.navigateTo === location.pathname ? option.activeIcon : option.icon} alt={option.key}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SideBar