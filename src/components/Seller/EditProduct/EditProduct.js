import { forwardRef, useRef, useState } from "react"
import { useForm } from "react-hook-form";
import ProductForm from "../ProductForm/ProductForm";

const EditProduct = () => {
    const initValue = {
        id: 1,
        name: "Product 1",
        image: "http://labs.bootstrapthemes.co/demo/html/Orani/images/single-product-1.jpg",
        categories: "Pants",
        tags: "wordpress",
        quantity: 10,
        price: 10.0,
        desc: "Lorem ipsum dolor sit amet, feugiat delicata liberavisse id cum, no quo maiorum intellegebat, liber regione eu sit. Mea cu case ludus integre, vide viderer eleifend ex mea. His at soluta regione diceret, cum et atqui placerat petentium. Lorem ipsum dolor sit amet, feugiat delicata liberavisse id cum, no quo maiorum intellegebat, lie diceret, cum et atqui placerat petentium."
    }

    const submitHandle = (data) => {
        console.log(data)
    }

    return (
        <div>
            <h2>Edit Product</h2>
            <ProductForm initValue={initValue} submitHandle={submitHandle}/>
        </div>
    )
}

export default EditProduct;