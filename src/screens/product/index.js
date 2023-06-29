import React, { useState } from "react";
import WithHeaderSidebar from "../../layouts/with-header-sidebar";
import "./index.css"
import Textbox from "../../components/text-box";
import Textarea from "../../components/text-area";
import Dropdown from "../../components/dropdown";
import Button from "../../components/button";
import ImageUpload from "../../components/image-upload";

const categoryOptions = [
    {
        label: "Food",
        value: "Food"
    },
    {
        label: "Drinks",
        value: "Drinks"
    },
    {
        label: "Snacks",
        value: "Snacks"
    },
    {
        label: "Packages",
        value: "Packages"
    }
]
const Product = () => {
    const [formValues, setFormValues] = useState({
        productId: "",
        productName: "",
        productPrice: "",
        productdesc: "",
        productCategory: categoryOptions[0].value
    })

    const handleChange = (key, value) => {
        setFormValues((prev) => {
            return {
                ...prev,
                [key]: value
            }
        })
    }

    return (
        <div className="product-container">
            <span className="product-label">Edit Product</span>
            <div className="product-inner-container">
                <Textbox
                    label="ID"
                    value={formValues?.productId}
                    onChange={(event) => {
                        handleChange("productId", event.target.value)
                    }}
                />
                <ImageUpload
                    className="mt-24"
                    label="Select your product picture"
                    uploadButtonText="Browse"
                    onImageUpload={(image) => {
                        handleChange("productImage", image)
                    }}
                />
                <Textbox
                    className="mt-24"
                    label="Product Name"
                    value={formValues?.productName}
                    onChange={(event) => {
                        handleChange("productName", event.target.value)
                    }}
                />
                <Dropdown
                    className="mt-24"
                    options={categoryOptions}
                    label="Category"
                    value={formValues?.productCategory}
                    onChange={(value) => {
                        handleChange("productCategory", value)
                    }}
                />
                <Textbox
                    className="mt-24"
                    label="Price"
                    value={formValues?.productPrice}
                    onChange={(event) => {
                        handleChange("productPrice", event.target.value)
                    }}
                />
                <Textarea
                    className="mt-24"
                    label="Description"
                    value={formValues?.productdesc}
                    onChange={(event) => {
                        handleChange("productdesc", event.target.value)
                    }}
                />
            </div>
            <div className="mt-24 buttons-container">
                <Button
                    buttonText="Save"
                    onClick={() => {
                        console.log("save")
                    }} />
                <div>
                    <span className="cancelLabel" onClick={() => {
                        console.log("canceled")
                    }}>Cancel</span>
                </div>
            </div>
        </div>
    )
}

export default WithHeaderSidebar(Product)