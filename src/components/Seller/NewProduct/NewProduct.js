import WAA, { API_URL } from "../../../api/api";
import ProductForm from "../ProductForm/ProductForm";
import { useHistory } from "react-router-dom";
const NewProduct = () => {
    const history = useHistory();
    const initValue = {
        name: "",
        picture: "",
        category: "",
        tags: "",
        quantity: 0,
        cost: 0.0,
        description: "",
        rating: "",
        productIndex: ""

    }

    const submitHandle = (data) => {
        WAA.post(API_URL.sellerProducts, data).then(res => {
            history.push("/seller/products")
        }).catch(err => console.log(err));
    }

    return (
        <div>
            <h2>New Product</h2>
            <ProductForm initValue={initValue} submitHandle={submitHandle}/>
        </div>
    )
}

export default NewProduct;