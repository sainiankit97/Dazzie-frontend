import React, { useRef, useState } from "react"
import Button from "../button"
import "./index.css"

const ImageUpload = ({
    className = "",
    label,
    uploadButtonText = "Browse",
    onImageUpload = () => { }
}) => {
    const inputRef = useRef(null)
    const [uploadedImage, setUploadedImage] = useState(null)

    const getFileAsBase64 = (file) => {
        return new Promise((res, rej) => {
            let reader = new FileReader();
            reader.onloadend = function () {
                const index = reader.result.indexOf("base64,");
                res(index === -1 ? "" : reader.result);
            };
            reader.onerror = () => {
                console.warn("base64 reader.onerror")
                rej();
            };
            reader.readAsDataURL(file);
        });
    };

    const onFileUpload = async (acceptedFile) => {
        if (!acceptedFile) {
            return
        }
        const imageInBase64 = await getFileAsBase64(acceptedFile)
        setUploadedImage(imageInBase64)
        onImageUpload(imageInBase64)
    }

    return (
        <div className={`image-upload-container ${className}`}>
            {uploadedImage ? <img src={uploadedImage} className="image-style" alt="uploaded-pic"/> : <div className="image-style image-placeholder" />}
            <input type="file"
                hidden={true}
                ref={inputRef}
                accept='image/png, image/jpeg, image/jpg'
                onChange={(event) => {
                    onFileUpload(event.target.files[0])
                }}
            />

            <div className="label-button-container">
                <span className="image-upload-label">{label}</span>
                <Button buttonText={uploadButtonText} onClick={() => {
                    inputRef?.current?.click()
                }} />
            </div>
        </div>
    )
}

export default ImageUpload