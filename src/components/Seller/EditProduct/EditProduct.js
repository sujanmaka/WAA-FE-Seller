import { forwardRef, useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import WAA, { API_URL } from "../../../api/api";
import ProductForm from "../ProductForm/ProductForm";
import AddAlertMessage from "../../../components/alert/Alert";
import Spinner from "../../../components/loader/Loader";
import { useHistory } from "react-router-dom";

const EditProduct = () => {
    let {id} = useParams();
    const history = useHistory();
    let [initValue, setInitValue] = useState(null);

    const fetchProduct = () => {
        WAA.get(API_URL.sellerProducts + `/${id}`).then(res => {
            setInitValue(res.data)
        }).catch(err => console.log(err))
    }

    const submitHandle = (data) => {
        WAA.put(API_URL.sellerProducts + `/${id}`, data).then(res => {
            AddAlertMessage({ type: "success", message: "Product Updated" });
            history.push("/seller/products")
        }).catch(err => console.log(err))
    }

    useEffect(fetchProduct, [id])

    return (
        <div>
            <h2>Edit Product</h2>
            {
                initValue 
                ? <ProductForm initValue={initValue} submitHandle={submitHandle}/>
                : <Spinner />
            }
            
        </div>
    )
}

export default EditProduct;