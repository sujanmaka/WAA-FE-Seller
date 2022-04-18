import { Link } from "react-router-dom"

const Order = (props) => {
    return (
        <tr>
        <td>{props.id}</td>
        <td>{props.totalPrice}</td>
        <td>{props.createdAt}</td>
        <td>{props.status}</td>
        <td>
            <Link className="badge bg-info" to={`/seller/orders/${props.id}`}>Show</Link>
            {" "}
            <Link className="badge bg-danger" to="">Delete</Link>
        </td>
    </tr>
    )
}

export default Order