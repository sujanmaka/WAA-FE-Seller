import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import WAA, { API_URL } from "../../../api/api";

const Product = (props) => {
    const history = useHistory();
    const deleteProduct = () => {
        WAA.delete(API_URL.sellerProducts + "/" + props.id).then(res => {
            history.push("/seller/products")
        }).catch(err => console.log(err))
    }

    return <tr>
        <td>{props.id}</td>
        <td>{
            props.picture
            ? <img src={props.picture} />
            : ''
        }</td>
        <td>{props.name}</td>
        <td>{props.cost}</td>
        <td>{props.quantity}</td>
        <td>{props.status}</td>
        <td className="text-end">
            <Link className="badge bg-warning" to={`/seller/edit-product/${props.id}`}>Edit</Link>
            {" "}
            { props.status != "PURCHASED"
              ? <Link className="badge bg-danger" to="" onClick={deleteProduct} >Delete</Link>
              : ''}
        </td>
    </tr>
}

export default Product;