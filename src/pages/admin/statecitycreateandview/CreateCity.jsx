import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { Server_URL } from "../../../utils/config";
import BreadCrumb from "../../../Components/BreadCrumb";
import { utilityFuntions } from "../../../utils/module";
import { useNavigate } from "react-router-dom";


function CreateCity(){

    const[city,setCity] = useState([]);

    const navigate= useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
        reset
    } = useForm();

    async function viewState() {
        try {
            // console.log(data)
            const token = utilityFuntions.getCookieValue('adminAuthToken');
            console.log(token);
    

            const url = Server_URL + "viewState";
            const response = await axios.get(url, {
                headers: {
                    Authorization: token ? `Bearer ${token}` : ""
                }
            });

            const { error, message } = response.data;
            if (error && message === "Please SignIn First!!") {
                navigate("/admin");
                alert(message);
            }
            // console.log(error, message,result);
            // console.log(response.data);
            else if (error) {
                alert(message);
            }
            else {
                const { result } = response.data
                // console.log(result)
                setCity(result)
                console.log(result)
                // alert(message);
            }
        } catch (e) {
            console.log(e.message);
        }

    }
    useEffect(() => {
        viewState();
    }, [])

    async function onSubmit(data) {
        try {
            const token = utilityFuntions.getCookieValue('adminAuthToken');
            console.log(token);
            // console.log(data)
            const url = Server_URL + "AddCity";
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
        <BreadCrumb title="City" subTitle="Add New City" />

            <section className="about-three">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h4>Add New City</h4>
                                    <hr />
                                </div>

                                <div className="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>


                                        <div className="mb-3">
                                            <label htmlFor="state">Select State</label>
                                            <select className="form-select" {...register('state', { required: true })} name="state" id="state">
                                                <option value="">Please Select State</option>
                                                {city.map(x=>
                                                    <option value={x._id} key={x._id}>{x.name}</option>
                                                )}
                                            </select>
                                            {errors.state && <p className="text-danger">please enter the desired field</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="city">City</label>
                                            <input type="text"  {...register('city', { required: true })} className="form-control" placeholder="city name"/>
                                            {errors.city && <p className="text-danger">please enter the desired field</p>}
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

export default CreateCity;