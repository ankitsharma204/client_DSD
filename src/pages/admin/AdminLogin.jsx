import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";
import { Server_URL } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import { utilityFuntions } from "../../utils/module";

const AdminLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
        reset
    } = useForm();

    // Set the focus to the email input when the component mounts
    useEffect(() => {
        setFocus('email');
    }, []);  // Empty dependency array to run this effect only once after mounting

    const navigate = useNavigate();

    // Function to handle form submission
    async function onSubmit(data) {
        try {
            console.log(data);
            const url = Server_URL + "signin";
            const response = await axios.post(url, data);

            const { error, message, token } = response.data;
            console.log(token);

            if (error) {
                alert(message);
            } else {
                // If successful login, reset form and set the auth token
                reset();
                utilityFuntions.setCookie('adminAuthToken', token, 24);
                navigate("/admin/dashboard");
                alert(message);
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    // Function to handle the "Forgot Password?" link click
    const handleForgotPasswordClick = (e) => {
        e.preventDefault();  // Prevent form submission when clicking "Forgot Password?"
        navigate("/admin-forget-pass");  // Navigate to the Forgot Password page
    };

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
                                            type="password"
                                            placeholder="please enter your password"
                                        />
                                        {errors.password && <p className="text-danger">Please enter the desired field</p>}
                                    </div>

                                    <button className="btn btn-primary">Submit</button>

                                    <div className="mt-3">
                                        <button
                                            className="btn btn-link"
                                            onClick={handleForgotPasswordClick}  // Prevent form submission and navigate
                                        >
                                            Forgot Password?
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdminLogin;
