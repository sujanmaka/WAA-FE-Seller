import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object({
  productName: yup.string().required("Name is required"),
  quantity: yup.number().integer().required().positive().min(1),
  price: yup.number().required().positive().min(0.01),
});
const ProductForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: props.initValue,
    resolver: yupResolver(schema),
  });

  const submitHandle = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <div>
      <form className="form text-start" onSubmit={handleSubmit(submitHandle)}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label" required>
            Name
          </label>
          <input
            type="text"
            className={
              errors.productName ? "form-control is-invalid" : "form-control"
            }
            id="productName"
            {...register("productName", { required: true })}
          />
          <div class="error">{errors.productName?.message}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="productQuantity" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            className={
              errors.quantity ? "form-control is-invalid" : "form-control"
            }
            id="productQuantity"
            {...register("quantity", { required: true })}
          />
          <div class="error">{errors.quantity?.message}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className={
              errors.price ? "form-control is-invalid" : "form-control"
            }
            id="productPrice"
            step=".01"
            {...register("price", { required: true })}
          />
          <div class="error">{errors.price?.message}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="image1" className="form-label">
            Image 1
          </label>
          <input
            type="text"
            className="form-control"
            id="image1"
            {...register("image1", { required: false })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image2" className="form-label">
            Image 2
          </label>
          <input
            type="text"
            className="form-control"
            id="image2"
            {...register("image2", { required: false })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image3" className="form-label">
            Image 3
          </label>
          <input
            type="text"
            className="form-control"
            id="image3"
            {...register("image3", { required: false })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDesc" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="productDesc"
            {...register("desc", { required: false })}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Save Product
        </button>
        <Link className="btn btn-default mb-3" to="/seller/products">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default ProductForm;
