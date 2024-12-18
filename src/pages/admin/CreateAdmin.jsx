import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { Server_URL } from "../../utils/config";
import { utilityFuntions } from "../../utils/module";
import BreadCrumb from "../../Components/BreadCrumb";

const CreateAdmin = () => {


    const [admin, setAdmin] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
        reset
    } = useForm();

    useEffect(() => {
        setFocus('fullname');

    });

    const Navigate = useNavigate();

    async function onSubmit(data) {
        try {
            // console.log(data)
            const url = Server_URL + "AdminRegistration";
            const response = await axios.post(url, data);
            const { error, message } = response.data;

            // console.log(error, message);
            // console.log(response.data);

            if (error) {
                alert(message);
            } else {
                console.log(message);
                alert(message);
                utilityFuntions.setCookie('UserAuthToken', token, 24);
                reset();
            }
        } catch (e) {
            console.log(e.message);
        }

    }


   
   


    return (
        <>
            <BreadCrumb title="Admin" subTitle="Add New Admin" />

            <section className="about-three">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h4>Add New Contact</h4>
                                    <hr />
                                </div>

                                <div className="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div className="mb-3">
                                            <label>FullName</label>
                                            <input {...register('fullname', { required: true })} className="form-control shadow" type="text" placeholder="please enter your fullname" />
                                            {errors.fullname && <p className="text-danger">please enter the desired field</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label>Email</label>
                                            <input {...register('email', { required: true })} className="form-control shadow" type="text" placeholder="please enter your email" />
                                            {errors.email && <p className="text-danger">please enter the desired field</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label>Password</label>
                                            <input {...register('password', { required: true })} className="form-control shadow" type="text" placeholder="please enter your password" />
                                            {errors.password && <p className="text-danger">please enter the desired field</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label>Mobile Number</label>
                                            <input {...register('mobile', { required: true })} className="form-control shadow" type="tel" placeholder="please enter your mobile number" />
                                            {errors.mobile && <p className="text-danger">please enter the desired field</p>}
                                        </div>

                                        <div className="mb-2">
                                            <label className="form-label">Select Category</label> <br />
                                            <select className="form-control" {...register('userrole', { required: true })} name="userrole" id="userrole">
                                                {/* {errors.category && <span>First Name is required</span>} */}
                                                <option value="">Please Select Category</option>
                                                <option value="admin">Admin</option>
                                                <option value="subAdmin">Sub-Admin</option>
                                            </select>
                                        </div>
                                        <br /><hr />

                                        <button className="btn btn-primary btn-sm ">Submit</button>


                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          
        </>
    )
}

export default CreateAdmin;