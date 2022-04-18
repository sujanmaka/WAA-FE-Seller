import { Box} from "@mui/material"
import { useState } from "react"
import ProductForm from "../../../components/Seller/ProductForm/ProductForm"
import Product from "../../../components/Seller/Product/Product"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { sidebarActions } from "../../../store"

const Products = () => {
    const dispatch = useDispatch();
    dispatch(sidebarActions.goProductsPage())
    const [productsState, setProductsState] = useState([
        { id: 1, name: "Product 1", price: 10.0, quantity: 10, desc: "" },
        { id: 2, name: "Product 2", price: 4.0, quantity: 5, desc: "" },
        { id: 3, name: "Product 3", price: 3.0, quantity: 6, desc: "" }
    ])

    const productsView = productsState.map(p => {
        return <Product
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            quantity={p.quantity}
        />
    })

    return (
        <div>
            <h1>List of Products</h1>
            <div className="text-end">
                <Link className="btn btn-primary" to="/seller/new-product">Add New</Link>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productsView}
                </tbody>
            </table>
        </div>
    )
}
export default Products;