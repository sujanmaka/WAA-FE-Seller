import { useState } from "react";
import Order from "../../../components/Seller/Order/Order";
import OrderDetails from "../../../components/Seller/OrderDetails/OrderDetails";

const Orders = () => {
    const [orders, setOrders] = useState(
        [
            {
                id: 1, 
                totalPrice: 100,
                createdAt: new Date().toLocaleString(),
                status: "Processing",
                updatedAt: new Date().toLocaleString()
            },
            {
                id: 2, 
                totalPrice: 100,
                createdAt: new Date().toLocaleString(),
                status: "Shipped",
                updatedAt: new Date().toLocaleString()
            },
            {
                id: 3, 
                totalPrice: 100,
                createdAt: new Date().toLocaleString(),
                status: "On The Way",
                updatedAt: new Date().toLocaleString()
            },
            {
                id: 4, 
                totalPrice: 100,
                createdAt: new Date().toLocaleString(),
                status: "Delivered",
                updatedAt: new Date().toLocaleString()
            },
        ]
    );


    const ordersView = orders.map(o => {
        return <Order
            key={o.id}
            {...o}
        />
    })

    return (
        <div>
            <h1>List of Orders</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Total Price</th>
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
    )
}

export default Orders;