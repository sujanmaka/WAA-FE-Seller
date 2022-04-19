import {
  Navigate,
  Route,
  Routes,
  Redirect,
  useNavigate,
} from "react-router-dom";
import ProductDetails from "../components/Seller/ProductDetail/ProductDetail";
import Products from "../container/Seller/Products/Products";
import EditProduct from "../components/Seller/EditProduct/EditProduct";
import NewProduct from "../components/Seller/NewProduct/NewProduct";
import OrderDetails from "../components/Seller/OrderDetails/OrderDetails";
import Orders from "../container/Seller/Orders/Orders";
import { Cookies } from "../utils/storage/cookies";
import { AUTH_TOKEN, USER_ROLE } from "../utils/constants";
import React from "react";

export default function SellerRoute() {
  const navigate = useNavigate();
  return (
    <>
      {!Cookies.readCookie(AUTH_TOKEN) &&
      Cookies.readCookie(USER_ROLE).includes("SELLER") ? (
        navigate("/")
      ) : (
        <>
          <Route
            path="/"
            element={<Redirect to="/seller/products" />}
          />
          <Route path="/products" element={<Products />}>
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/new-product" element={<NewProduct />} />
          <Route exact path="/orders" element={<Orders />}>
            <Route path=":id" element={<OrderDetails />} />
          </Route>
        </>
      )}
    </>
  );
}
