import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  quantity: yup.number().integer().required().positive().min(1),
  cost: yup.number().required().positive().min(0.01),
});
const ProductForm = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: props.initValue,
    resolver: yupResolver(schema),
  });

  const submitHandle = (data) => {
    console.log(data)
    props.submitHandle(data);
  };

  const category = [
    "Shirt", "T-Shirt", "Pants", "Laptop", "Iphone"
  ]

  const indices = [
    "Hot", "Cool", "Cold"
  ]

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
            {...register("name", { required: true })}
          />
          <div className="error">{errors.productName?.message}</div>
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
          <div className="error">{errors.quantity?.message}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Cost
          </label>
          <input
            type="number"
            className={
              errors.cost ? "form-control is-invalid" : "form-control"
            }
            id="productPrice"
            step=".01"
            {...register("cost", { required: true })}
          />
          <div className="error">{errors.cost?.message}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="picture" className="form-label">
            Picture
          </label>
          <input
            type="text"
            className="form-control"
            id="picture"
            {...register("picture", { required: false })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            type="text"
            className="form-select"
            id="category"
            {...register("category", { required: false })}
          >
            {category.map(item => {
              return <option value={item}>{item}</option>
            })}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            {...register("tags", { required: false })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productIndex" className="form-label">
            Index
          </label>
          <select
            type="text"
            className="form-select"
            id="productIndex"
            {...register("productIndex", { required: false })}
          >
            {indices.map(item => {
              return <option value={item}>{item}</option>
            })}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="productDesc" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="productDesc"
            {...register("description", { required: false })}
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
