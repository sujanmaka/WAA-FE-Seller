import { useState } from "react";
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import WAA, { API_URL } from "../../../api/api";

const Order = (props) => {
    const history = useHistory();
    const [status, setStatus] = useState(props.status)

    const cancleOrder = () => {
        WAA.put(API_URL.sellerProducts + `/${props.productId}/orders/${props.id}`, {"status": "CANCEL"}).then(res => {
           setStatus(res.data.status)
        }).catch(err => console.log(err))
    }

    return (
        <tr>
        <td>{props.id}</td>
        <td>{props.userId}</td>
        <td>{new Date(props.createdDate).toLocaleString()}</td>
        <td>{status}</td>
        <td className="text-end">
            <Link className="badge bg-info" to={`/seller/orders/${props.id}`}>Show</Link>
            {" "}
            {status != "CANCEL" ?
            <Link className="badge bg-danger" to="#" onClick={cancleOrder}>Cancle</Link>
            : ""}
        </td>
    </tr>
    )
}

export default Order