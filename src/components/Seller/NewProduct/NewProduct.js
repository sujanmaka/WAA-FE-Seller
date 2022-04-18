import { useRef, useState } from "react"
import ProductForm from "../ProductForm/ProductForm";

const NewProduct = () => {
    const initValue = {
        name: "",
        image: "",
        categories: "",
        tags: "",
        quantity: 0,
        price: 0.0,
        desc: ""
    }

    const submitHandle = (data) => {
        console.log(data)
    }

    return (
        <div>
            <h2>New Product</h2>
            <ProductForm initValue={initValue} submitHandle={submitHandle}/>
        </div>
    )
}

export default NewProduct;