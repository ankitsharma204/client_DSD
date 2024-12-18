import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { Server_URL } from "../../../utils/config";
import BreadCrumb from "../../../Components/BreadCrumb";
import { utilityFuntions } from "../../../utils/module";


function AddSubCategory(){

    const[category,setCategory] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
        reset
    } = useForm();

    async function AddCategory() {
        try {
            // console.log(data)
            const token = utilityFuntions.getCookieValue('adminAuthToken');
            console.log(token);
    

            const url = Server_URL + "AddCategory";
            const response = await axios.get(url, {
                headers: {
                    Authorization: token ? `Bearer ${token}` : ""
                }
            });

            const { error, message } = response.data;
            // console.log(error, message,result);
            // console.log(response.data);
             if (error) {
                alert(message);
            }
            else {
                const { result } = response.data
                // console.log(result)
                setCategory(result)
                // alert(message);
            }
        } catch (e) {
            console.log(e.message);
        }

    }
    useEffect(() => {
        AddCategory();
    }, [])

    async function onSubmit(data) {
        try {
            // console.log(data)
            const url = Server_URL + "AddSubCategory";
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
                                    <h4>Sub-Category</h4>
                                    <hr />
                                </div>

                                <div className="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>


                                        <div className="mb-3">
                                            <label htmlFor="category">Select Category</label>
                                            <select className="form-select" {...register('category', { required: true })} name="category" id="category">
                                                <option value="">Please Select Category</option>
                                                {category.map(x=>
                                                    <option value={x._id} key={x._id}>{x.name}</option>
                                                )}
                                            </select>
                                            {errors.category && <p className="text-danger">please enter the desired field</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="subcategory">Sub-Category</label>
                                            <input type="text"  {...register('subcategory', { required: true })} className="form-control" placeholder="sub-category name"/>
                                            {errors.subcategory && <p className="text-danger">please enter the desired field</p>}
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

export default AddSubCategory;