// import { useForm } from "react-hook-form";
// import { useEffect } from "react";
// import axios from "axios";
// import { Server_URL } from "../../utils/config";
// import { useNavigate } from "react-router-dom";
// import { utilityFuntions } from "../../utils/module"; // Not needed anymore for setting localStorage
// import BreadCrumb from "../../Components/BreadCrumb";

// const UserLogin = () => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         setFocus,
//         reset
//     } = useForm();

//     useEffect(() => {
//         setFocus('email');
//     }, [setFocus]);

//     const navigate = useNavigate();

//     async function onSubmit(data) {
//         try {
//             const url = Server_URL + "userlogin";
//             const response = await axios.post(url, data);
//             const { error, message, token } = response.data;

//             if (error) {
//                 alert(message);
//             } else {
//                 reset();
//                 // Store the token in localStorage
//                 localStorage.setItem('userAuthToken', token);
//                 navigate("/user");
//                 alert(message);
//             }
//         } catch (e) {
//             console.log(e.message);
//         }
//     }

//     return (
//         <>
//             <BreadCrumb title="User" subTitle="User Login" />

//             <section className="about-three">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-8 offset-md-2">
//                             <div className="card">
//                                 <div className="card-header bg-dark text-white">
//                                     <hr />
//                                 </div>
//                                 <div className="card-body">
//                                     <form onSubmit={handleSubmit(onSubmit)}>
//                                         <h4>Sign In</h4>
//                                         <hr />
//                                         <div className="mb-3">
//                                             <label>Email</label>
//                                             <input
//                                                 {...register('email', { required: true })}
//                                                 className="form-control shadow"
//                                                 type="text"
//                                                 placeholder="Please enter your email"
//                                             />
//                                             {errors.email && <p className="text-danger">Please enter the desired field</p>}
//                                         </div>

//                                         <div className="mb-3">
//                                             <label>Password</label>
//                                             <input
//                                                 {...register('password', { required: true })}
//                                                 className="form-control shadow"
//                                                 type="password"
//                                                 placeholder="Please enter your password"
//                                             />
//                                             {errors.password && <p className="text-danger">Please enter the desired field</p>}
//                                         </div>

//                                         <button className="btn btn-primary">Submit</button>
//                                     </form>
//                                     <div className="mt-3">
//                                         <button
//                                             className="btn btn-link"
//                                             onClick={() => navigate("/user-forgot-pass")}
//                                         >
//                                             Forgot Password?
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default UserLogin;

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";
import { Server_URL } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import { utilityFuntions } from "../../utils/module";
import BreadCrumb from "../../Components/BreadCrumb";

const UserLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
        reset
    } = useForm();

    useEffect(() => {
        setFocus('email');
    }, [setFocus]);

    const navigate = useNavigate();

    async function onSubmit(data) {
        try {
            const url = Server_URL + "userlogin";
            const response = await axios.post(url, data);
            const { error, message, token } = response.data;

            if (error) {
                alert(message);
            } else {
                reset();
                utilityFuntions.setCookie('userAuthToken', token, 24);
                //  Store the token in localStorage
                localStorage.setItem('userAuthToken', token);
                navigate("/user");
                alert(message);
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <>
            <BreadCrumb title="User" subTitle="User Login" />

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
                                        <h4>Sign In</h4>
                                        <hr />
                                        <div className="mb-3">
                                            <label>Email</label>
                                            <input
                                                {...register('email', { required: true })}
                                                className="form-control shadow"
                                                type="text"
                                                placeholder="Please enter your email"
                                            />
                                            {errors.email && <p className="text-danger">Please enter the desired field</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label>Password</label>
                                            <input
                                                {...register('password', { required: true })}
                                                className="form-control shadow"
                                                type="password" // Changed to password for security
                                                placeholder="Please enter your password"
                                            />
                                            {errors.password && <p className="text-danger">Please enter the desired field</p>}
                                        </div>

                                        <button className="btn btn-primary">Submit</button>
                                    </form>
                                    <div className="mt-3">
                                        <button
                                            className="btn btn-link"
                                            onClick={() => navigate("/user-forgot-pass")} // Replace with the actual path to your forgot password page
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
        </>
    );
};

export default UserLogin;