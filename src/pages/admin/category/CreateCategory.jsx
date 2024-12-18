import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { Server_URL } from "../../../utils/config";
import BreadCrumb from "../../../Components/BreadCrumb";
import { utilityFuntions } from "../../../utils/module";


function AddCategory(){

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

    async function onSubmit(data) {
        try {
            // console.log(data)
            const url = Server_URL + "AddCategory";
            const response = await axios.post(url, data);
            const { error, message } = response.data;

            // console.log(error, message);
            // console.log(response.data);

            if (error) {
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
        <BreadCrumb title="Admin" subTitle="Add New Admin" />

            <section className="about-three">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h4>Add New Category</h4>
                                    <hr />
                                </div>

                                <div className="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div className="mb-3">
                                            <label>Category Name</label>
                                            <input {...register('name', { required: true })} className="form-control shadow" type="text" placeholder="please enter your categoryname" />
                                            {errors.name && <p className="text-danger">please enter the desired field</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label>Description</label>
                                            <input {...register('description', { required: true })} className="form-control shadow" type="text" placeholder="please enter your description" />
                                            {errors.description && <p className="text-danger">please enter the desired field</p>}
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

export default AddCategory;