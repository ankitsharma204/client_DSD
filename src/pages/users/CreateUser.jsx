import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { Server_URL } from "../../utils/config";
import { utilityFuntions } from "../../utils/module";
import BreadCrumb from "../../Components/BreadCrumb";

const CreateUser = () => {


    const [user, setUser] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);


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


    async function onSubmit(data) {
        try {
            // console.log(data)
            const url = Server_URL + "UserRegistration";
            const response = await axios.post(url, data);
            const { error, message } = response.data;

            // console.log(error, message);
            // console.log(response.data);

            if (error) {
                alert(message);
            } else {
                console.log(message);
                alert(message);
                // utilityFuntions.setCookie('UserAuthToken', token, 24);
                reset();
            }
        } catch (e) {
            console.log(e.message);
        }

    }


   
   


    return (
        <>
            <BreadCrumb title="User" subTitle="Add New User" />

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
                                            <label>Mobile</label>
                                            <input {...register('mobile', { required: true })} className="form-control shadow" type="text" placeholder="please enter your mobile" />
                                            {errors.mobile && <p className="text-danger">please enter the desired field</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label>Password</label>
                                            <input {...register('password', { required: true })} className="form-control shadow" type="text" placeholder="please enter your password" />
                                            {errors.password && <p className="text-danger">please enter the desired field</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label>Address</label>
                                            <input {...register('address', { required: true })} className="form-control shadow" type="text" placeholder="please enter your address" />
                                            {errors.address && <p className="text-danger">please enter the desired field</p>}
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

export default CreateUser;