import { Link } from "react-router-dom";

const Product = (props) => {
    return <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td>{props.quantity}</td>
        <td className="text-end">
            <Link className="badge bg-info" to="">Show</Link>
            {" "}
            <Link className="badge bg-warning" to={`/seller/edit-product/${props.id}`}>Edit</Link>
            {" "}
            <Link className="badge bg-danger" to="">Delete</Link>
        </td>
    </tr>
}

export default Product;