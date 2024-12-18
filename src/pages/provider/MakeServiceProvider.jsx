import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { Server_URL } from "../../utils/config";
import BreadCrumb from "../../Components/BreadCrumb";
import { utilityFuntions } from "../../utils/module";


function MakeServiceProvider() {

    // const [provider, setProvider] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [category,setCategory] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);


    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
        reset
    } = useForm();

    async function ReadState() {
        const url = Server_URL + "AddState"
        const response = await axios.get(url);
        // console.log(response.data);

        const { error, message } = response.data
        if (error) {
            alert(message);
        } else {
            const { result } = response.data
            // console.log(result)
            setState(result)
        }
    }

    useEffect(() => {
        ReadState();
    }, []);

    async function ReadCity(stateId) {
        const url = Server_URL + "Addcity/" + stateId
        const response = await axios.get(url);
        // console.log(response.data);

        const { error, message } = response.data
        if (error) {
            alert(message);
        } else {
            const { result } = response.data
            console.log(result)
            setCity(result)
        }
    }




    async function ReadCategory() {
        const url = Server_URL + "AddCategory"
        const response = await axios.get(url);
        // console.log(response.data);

        const { error, message } = response.data
        if (error) {
            alert(message);
        } else {
            const { result } = response.data
            // console.log(result)
            setCategory(result)
        }
    }

    useEffect(() => {
        ReadCategory();
    }, []);

    async function ReadSubCategory(catId) {

        const url = Server_URL + "Addprovider/" + catId
        const response = await axios.get(url);
        // console.log(response.data);

        const { error, message } = response.data
        if (error) {
            alert(message);
        } else {
            const { result } = response.data
            console.log(result)
            setSubCategory(result)
        }
    }


   

    async function onSubmit(data) {
        try {
            // const token = utilityFuntions.getCookieValue('providerAuthToken');
            console.log(data)
            const url = Server_URL + "Addprovider";
            const response = await axios.post(url, data)
            //     headers: {
            //         Authorization: token ? `Bearer ${token}` : ""
            //     }
            // });
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






    return (

        <>
            <BreadCrumb title="Provider" subTitle="Add New Provider" />

            <section className="about-three">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    <h4>Create Service Provider</h4>
                                    <hr />
                                </div>
                                
                                <div className="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>


                                        <div className="mb-3">
                                            <label>VendorName</label>
                                            <input {...register('fullname', { required: true })} className="form-control shadow" type="text" placeholder="please enter your name" />
                                            {errors.fullname && <p className="text-danger">please enter the desired field</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label>Email</label>
                                            <input {...register('email', { required: true })} className="form-control shadow" type="email" placeholder="please enter your email" />
                                            {errors.email && <p className="text-danger">please enter the desired field</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label>Password</label>
                                            <input {...register('password', { required: true })} className="form-control shadow" type="password" placeholder="please enter your password" />
                                            {errors.password && <p className="text-danger">please enter the desired field</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label>Mobile Number</label>
                                            <input {...register('mobile', { required: true })} className="form-control shadow" type="tel" placeholder="please enter your mobile number" />
                                            {errors.mobile && <p className="text-danger">please enter the desired field</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label>Address</label>
                                            <input {...register('address', { required: true })} className="form-control shadow" type="text" placeholder="please enter your address" />
                                            {errors.address && <p className="text-danger">please enter the desired field</p>}
                                        </div>


                                        <div className="mb-3">
                                            <label>Status</label>
                                            <input {...register('status', { required: true })} className="form-control shadow" type="text" placeholder="please enter your status" />
                                            {errors.status && <p className="text-danger">please enter the desired field</p>}
                                        </div>


                                        <div className="mb-3">
                                            <label>Start-Time</label>
                                            <input {...register('start', { required: true })} className="form-control shadow" type="time" placeholder="please enter your start time" />
                                            {errors.start && <p className="text-danger">please enter the desired field</p>}
                                        </div>


                                        <div className="mb-3">
                                            <label>End-Time</label>
                                            <input {...register('end', { required: true })} className="form-control shadow" type="time" placeholder="please enter your end time" />
                                            {errors.end && <p className="text-danger">please enter the desired field</p>}
                                        </div>

                                        <div className="  mb-3">
                                            <label>SlotAmount</label>
                                            <input {...register('amount', { required: true })} className="form-control shadow" type="number" placeholder="please enter your amount" />
                                            {errors.amount && <p className="text-danger">please enter the desired field</p>}
                                        </div>

                                        
                                        <div>
                                            <select {...register('state', {required: true})} onChange={(e) => ReadCity(e.target.value)}  >
                                                <option >Please Select State</option>
                                                {state.map(x =>
                                                    <option key={x._id} value={x._id}>{x.name}</option>
                                                )}
                                            </select>
                                        </div>

                                       <div className=" mb-3">
                                            {city && <>
                                                <label></label> <br />
                                                <select {...register('city', {required:true})} >
                                                    <option value="">Please Select City</option>
                                                    {city.map(x =>
                                                        <option key={x._id} value={x._id}>
                                                            {x.city}
                                                        </option>
                                                    )}
                                                </select>
                                            </>}
                                        </div>

                                        

                                         <div>
                                            <select {...register('category', {required:true})} onChange={(e) => ReadSubCategory(e.target.value)} >
                                                <option>Please Select Category</option>
                                                {category.map(x =>
                                                    <option key={x._id} value={x._id}>{x.name}</option>
                                                )}
                                            </select>
                                        </div>

                                       <div className=" mb-3">
                                            {subCategory && <>
                                                <label></label> <br />
                                                <select {...register('subcategory', {required:true})}>
                                                    <option >Please Select SubCategory</option>
                                                    {subCategory.map(x =>
                                                        <option key={x._id} value={x._id}>
                                                            {x.subcategory}
                                                        </option>
                                                    )}
                                                </select>
                                            </>}
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

export default MakeServiceProvider;