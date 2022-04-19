import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import WAA, {API_URL} from "../../../api/api";
import Address from "../Address/Address"
import "./OrderDetails.css";
const OrderDetails = () => {
  let { id } = useParams();
  const status = {
    "CREATED": "Created",
    "SHIPPED": "Shipped",
    "APPROVED": "Approved",
    "DELIVERED": "Delivered",
    "CANCEL": "Cancle"
  }
  const [modalShow, setModalShow] = useState(false);
  const [order, setOrder] = useState(null);
  const [product, setProduct] = useState(null);

  const handleChange = (e) => {
    if (order != null){
      WAA.put(API_URL.sellerProducts + `/${order.productId}/orders/${id}`, {status: e.target.value}).then(res => {
        setOrder({
          ...order,
          ...{status: res.data.status},
        });
      })
    }
  };

  const fetchOrder = () => {
    if (id)
      WAA.get(API_URL.sellerOrders + `/${id}`).then(res => {
        setOrder(res.data);
        WAA.get(API_URL.sellerProducts + `/${res.data.productId}`).then(res => {
          setProduct(res.data);
        }).catch(err => console.log(err))
      }).catch(err => console.log(err))
  }

  useEffect(() => {
    fetchOrder();
  }, [id]);

  let orderView = "";
  if (id && order)
    orderView = (
      <div>
        <div className="bg-success p-3 text-dark bg-opacity-10 mb-2">
          <h4>Order Details</h4>
          <hr/>
          <table className="text-start">
            <tbody>
              <tr>
                <th style={{width: "40%"}}>Customer Name:</th>
                <td>{order.userId}</td>
              </tr>
              <tr>
                <th>Shipping Address:</th>
                <td><Address {...order.billingAddress}/></td>
              </tr>
              <tr>
                <th>Billing Address:</th>
                <td><Address {...order.shippingAddress}/></td>
              </tr>
              <tr>
                <th>Payment:</th>
                <td>{order.payment}</td>
              </tr>
              <tr>
                <th>Ordered At:</th>
                <td>{new Date(order.createdDate).toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-start bg-success p-3 text-dark bg-opacity-10 mb-2">
          <h4 htmlFor="orderStatus" className="form-label ">
            Set Status
          </h4>
          <hr/>
          <select
            value={order.status}
            onChange={handleChange}
            className="form-select col"
          >
            {Object.keys(status).map(k => {
              return <option key={k} value={k}>
                {status[k]}
              </option>
            })}
          </select>
        </div>
        <div className="text-start bg-success p-3 text-dark bg-opacity-10 mb-2">
          <h4>List of items</h4>
          <hr/>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
              {
                product ?
                <tbody>
                  <tr key={product.id}>
                    <td>
                      <img src={product.picture} />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>${product.cost}</td>
                  </tr>
                  <tr>
                    <th colSpan="3" className="text-end">
                      Total Price:
                    </th>
                    <td>${product.cost}</td>
                  </tr>
                </tbody>
              :<tbody></tbody>}
          </table>
        </div>
        <Link className="btn btn-secondary" to="/seller/orders" >Go Back</Link>
      </div>

    );

  return orderView;
};
export default OrderDetails;
