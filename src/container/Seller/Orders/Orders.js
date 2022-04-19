import { useState, useEffect } from "react";
import WAA, { API_URL } from "../../../api/api";
import Spinner from "../../../components/loader/Loader";
import Order from "../../../components/Seller/Order/Order";
import OrderDetails from "../../../components/Seller/OrderDetails/OrderDetails";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    const ordersView = orders.map(o => {
        return <Order
            key={o.id}
            {...o}
        />
    })

    const fetchOrder = () => {
        WAA.get(API_URL.sellerOrders).then(res => {
            setOrders(res.data)
        }).catch(err => console.log(err))
    }

    useEffect(fetchOrder, [])


    return (
        orders.length > 0
            ? <div>
                <h1>List of Orders</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Ordered At</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersView}
                    </tbody>
                </table>
                <OrderDetails />
            </div>
            : <Spinner />
    )
}

export default Orders;