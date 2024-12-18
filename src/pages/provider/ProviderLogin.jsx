import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";
import { Server_URL } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import { utilityFuntions } from "../../utils/module";
import { useState } from "react";

const ProviderLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
        reset
    } = useForm();

    useEffect(() => {
        setFocus('email');
    }, []); // Dependency array added to avoid infinite loop

    const navigate = useNavigate();

    async function onSubmit(data) {
        try {
            console.log(data);
            const url = Server_URL + "providersignin";
            const response = await axios.post(url, data);

            const { error, message } = response.data;

            if (error) {
                alert(message);
            } else {
                const { token } = response.data;
                console.log(token);

                reset();
                utilityFuntions.setCookie('providerAuthToken', token, 24);
                navigate("/provider");
                alert(message);
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <section className="about-three">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="card">
                            <div className="card-header bg-dark text-white">
                                <hr />
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h4>SignIn</h4>
                                    <hr />
                                    <div className="mb-3">
                                        <label>Email</label>
                                        <input
                                            {...register('email', { required: true })}
                                            className="form-control shadow"
                                            type="text"
                                            placeholder="please enter your email"
                                        />
                                        {errors.email && <p className="text-danger">Please enter the desired field</p>}
                                    </div>

                                    <div className="mb-3">
                                        <label>Password</label>
                                        <input
                                            {...register('password', { required: true })}
                                            className="form-control shadow"
                                            type="text"
                                            placeholder="please enter your password"
                                        />
                                        {errors.password && <p className="text-danger">Please enter the desired field</p>}
                                    </div>

                                    <button className="btn btn-primary">Submit</button>
                                </form>
                                <div className="mt-3">
                                        <button
                                            className="btn btn-link"
                                            onClick={() => navigate("/provider-forgot-pass")} // Replace with the actual path to your forgot password page
                                        >
                                            Forgot Password?
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProviderLogin;
