import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetails from "../components/Seller/ProductDetail/ProductDetail";
import Products from "../container/Seller/Products/Products";
import EditProduct from "../components/Seller/EditProduct/EditProduct"
import NewProduct from "../components/Seller/NewProduct/NewProduct"
import OrderDetails from "../components/Seller/OrderDetails/OrderDetails";
import Orders from "../container/Seller/Orders/Orders";

export default function SellerRoute (){
    return (
    <Routes>
        <Route path="/" element={<Navigate replace to="/seller/products"/>} />
        <Route path="/products" element={<Products/>}>
            <Route path=":id" element={<ProductDetails />}/>
        </Route>
        <Route path="/edit-product/:id" element={<EditProduct />}/>
        <Route path="/new-product" element={<NewProduct />}/>
        <Route path="/orders" element={<Orders/>}>
            <Route path=":id" element={<OrderDetails />}/>
        </Route>
    </Routes>)
}