

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    username: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string().required("Password is require").min(6, "Password must be at least 6 characters"),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    address: yup.string().required(),
})

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const submitHandle = (data) => {
        console.log(data)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col">
                    <h2>Registration</h2>
                    <form className="form text-start" onSubmit={handleSubmit(submitHandle)}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label" required>Email</label>
                            <input type="text" className={errors.username ? 'form-control is-invalid' : 'form-control'} id="username" {...register('username', { required: true })} />
                            <div class="error">
                                {errors.username?.message}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className={errors.quantity ? 'form-control is-invalid' : 'form-control'} id="password" {...register('password', { required: true })} />
                            <div class="error">
                                {errors.password?.message}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="passwordConfirmation" className="form-label">Password Confirmation</label>
                            <input type="password" className={errors.quantity ? 'form-control is-invalid' : 'form-control'} id="passwordConfirmation" {...register('passwordConfirmation', { required: true })} />
                            <div class="error">
                                {errors.passwordConfirmation?.message}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className={errors.price ? 'form-control is-invalid' : 'form-control'} id="address" {...register('address', { required: true })} />
                            <div class="error">
                                {errors.price?.message}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mb-3">Register</button>
                        <Link className="btn btn-default mb-3" to="/login">Already has account? Login</Link>
                    </form>
                </div>
                <div className="col-3"></div></div>
        </div >
    )
}

export default Registration;