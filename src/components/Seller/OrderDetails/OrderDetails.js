import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./OrderDetails.css"
const OrderDetails = () => {
    const params = useParams();
    const [modalShow, setModalShow] = useState(true);
    console.log(modalShow)
    const [order, setOrder] = useState({
        customerName: "Hoang Nguyen",
        shippingAddress: "1732 E Dartmouth St, Mesa, Arizona, 85203",
        billingAddress: "1000N 4th St, Fairfield, Iowa, 52557",
        payment: "0123456789 Visa",
        createdAt: "Today",
        items: [
            { id: 1, name: "Product 1", image: "http://labs.bootstrapthemes.co/demo/html/Orani/images/single-product-1.jpg", quantity: 1, price: 10 },
            { id: 2, name: "Product 2", image: "http://labs.bootstrapthemes.co/demo/html/Orani/images/single-product-2.jpg", quantity: 1, price: 10 },
        ],
        totalPrice: 20,
        status: "Shipped"
    })

    const handleChange = (e) => {
        setOrder({
            ...order,
            ...{ status: e.target.value }
        })
    }

    useEffect(() => {
        setModalShow(true)
    }, [params.id])

    const closeModal = () => {
        setModalShow(false)
    }

    let orderView = '';
    if (params.id)
        orderView = <div>
            <div className={`modal fade ${modalShow ? 'show' : ''}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display: modalShow ? "block" : "none"}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <table className="text-start">
                            <tbody>
                                <tr>
                                    <th>Customer Name:</th>
                                    <td>{order.customerName}</td>
                                </tr>
                                <tr>
                                    <th>Shipping Address:</th>
                                    <td>{order.billingAddress}</td>
                                </tr>
                                <tr>
                                    <th>Billing Address:</th>
                                    <td>{order.shippingAddress}</td>
                                </tr>
                                <tr>
                                    <th>Payment:</th>
                                    <td>{order.payment}</td>
                                </tr>
                                <tr>
                                    <th>Ordered At:</th>
                                    <td>{order.createdAt}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    order.items.map(item => {
                                        return <tr key={item.id}>
                                            <td><img src={item.image} /></td>
                                            <td>{item.name}</td>
                                            <td>{item.quantity}</td>
                                            <td>${item.price}</td>
                                        </tr>
                                    })
                                }
                                <tr>
                                    <th colSpan="3" className="text-end">Total Price:</th>
                                    <td>$1000</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="mb-3 text-start">
                            <label htmlFor="orderStatus" className="form-label ">Set Status</label>
                            <select value={order.status} onChange={handleChange} className="form-select col">
                                <option value="Processing">Processing</option>
                                <option value="Shipped">Shipped</option>
                                <option value="On The Way">On The Way</option>
                                <option value="Delivered">Delivered</option>
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    return (
        orderView
    )
}
export default OrderDetails;