import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { Server_URL } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../Components/BreadCrumb";


function AdminVerifyOTP() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm();

  async function onSubmit(data) {

    const email = localStorage.getItem('email');

    try {
      const payload = { ...data, email };  // Add the OTP to form data
      // console.log(payload)
      const url = Server_URL + "admin-verify-otp";
      const response = await axios.post(url, payload);
      const { error, message } = response.data;

      if (error) {
        alert(message);
      } else {
        alert(message);
        navigate("/admin-reset-pass");
      }
    } catch (e) {
      alert(e.message);
    }
  }

  useEffect(() => {
    setFocus("otp");
  }, []);

  return (
    <>
    <BreadCrumb title="Otp" subTitle="Enter Otp" />

    <section className="about-three">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card">
                        <div className="card-header bg-dark text-white">
                            <h4>Enter Otp</h4>
                            <hr />
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="mb-3">
                                    <label>Otp</label>
                                    <input {...register('otp', { required: true })} className="form-control shadow" type="text" placeholder="please enter your otp" />
                                    {errors.otp && <p className="text-danger">please enter the desired field</p>}
                                </div>

                                <button className="btn btn-primary btn-sm ">Submit</button>


                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  
</>
  );
}
export default AdminVerifyOTP;
