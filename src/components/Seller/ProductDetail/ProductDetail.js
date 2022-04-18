import { useState } from "react";

const ProductDetails = () => {
    const [productState, setProductState] =  useState({
        id: 1,
        name: "Product 1",
        images: [
            "http://labs.bootstrapthemes.co/demo/html/Orani/images/single-product-1.jpg",
            "http://labs.bootstrapthemes.co/demo/html/Orani/images/single-product-2.jpg",
            "http://labs.bootstrapthemes.co/demo/html/Orani/images/single-product-3.jpg",
            "http://labs.bootstrapthemes.co/demo/html/Orani/images/single-product-4.jpg",
            "http://labs.bootstrapthemes.co/demo/html/Orani/images/single-product-5.jpg",

        ],
        categories: ["Pants", "T-Shirt", "Jama"],
        tags: ["GonShop, theme-sky, wordpress"],
        desc: "Lorem ipsum dolor sit amet, feugiat delicata liberavisse id cum, no quo maiorum intellegebat, liber regione eu sit. Mea cu case ludus integre, vide viderer eleifend ex mea. His at soluta regione diceret, cum et atqui placerat petentium. Lorem ipsum dolor sit amet, feugiat delicata liberavisse id cum, no quo maiorum intellegebat, lie diceret, cum et atqui placerat petentium."
    })

    return (
        <div>
        </div>
    )
}

export default ProductDetails;