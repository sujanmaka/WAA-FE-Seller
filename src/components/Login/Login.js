

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    username: yup.string().email("Email is invalid").required("Email is required"),
    password: yup.string().required("Password is require"),
})

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const submitHandle = (data) => {
        console.log(data)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col">
                    <h2>Login</h2>
                    <form className="form text-start" onSubmit={handleSubmit(submitHandle)}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label" required>Email</label>
                            <input type="email" className={errors.username ? 'form-control is-invalid' : 'form-control'} id="username" {...register('username', { required: true })} />
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
                        <button type="submit" className="btn btn-primary mb-3">Login</button>
                        <Link className="btn btn-default mb-3" to="/register">Have an account? Register</Link>
                    </form>
                </div>
                <div className="col-4"></div></div>
        </div >
    )
}

export default Login;