import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { Server_URL } from "../../../utils/config";
import BreadCrumb from "../../../Components/BreadCrumb";
import { utilityFuntions } from "../../../utils/module";
import { useNavigate } from "react-router-dom";


function CreateState(){

    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
        reset
    } = useForm();

    useEffect(() => {
        setFocus('name');

    });
    
    const navigate = useNavigate();

    async function onSubmit(data) {
        try {
            // console.log(data)
            const token = utilityFuntions.getCookieValue('adminAuthToken');
            const url = Server_URL + "Addstate";
            // const response = await axios.post(url, data);
            const response = await axios.post(url, data, {
                headers: {
                    Authorization: token ? `Bearer ${token}` : ""
                }
            });
            const { error, message } = response.data;

            if (error && message === "Please SignIn First!!") {
                navigate("/admin");
                alert(message);
            }

           else if (error) {
                alert(message);
            } else {
                console.log(message);
                alert(message);
                reset();
            }
        } catch (e) {
            console.log(e.message);
        }

    }


    return(
        <>
        <BreadCrumb title="State" subTitle="Add New State" />

            <section className="about-three">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h4>Add New State</h4>
                                    <hr />
                                </div>

                                <div className="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div className="mb-3">
                                            <label>State Name</label>
                                            <input {...register('name', { required: true })} className="form-control shadow" type="text" placeholder="please enter your state" />
                                            {errors.name && <p className="text-danger">please enter the desired field</p>}
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

export default CreateState;