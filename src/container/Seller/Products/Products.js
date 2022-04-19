import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WAA, { API_URL } from "../../../api/api";
import Product from "../../../components/Seller/Product/Product";

const Products = () => {
  const [productsState, setProductsState] = useState([]);

  const productsView = productsState.map((p) => {
    return (
      <Product
        key={p.id}
        {...p}
      />
    );
  });

  const fetchProducts = () => {
    WAA.get(API_URL.sellerProducts).then(res => {
      console.log(res.data)
      setProductsState(res.data)
    }).catch(err => console.log(err))
  }

  useEffect(fetchProducts, [])

  return (
    <div>
      <h1>List of Products</h1>
      <div className="text-end">
        <Link className="btn btn-primary" to="/seller/new-product">
          Add New
        </Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{productsView}</tbody>
      </table>
    </div>
  );
};
export default Products;
