import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Server_URL } from "../../utils/config";
import BreadCrumb from "../../Components/BreadCrumb";
import { useNavigate } from "react-router-dom";

function ProviderForgotPass() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [otp, setOtp] = useState(null);

  // Function to generate and set OTP
  const generateOTP = () => {
    const generatedOtp = Math.floor(100000 + Math.random() * 900000);
    setOtp(generatedOtp);
  };

  // Submit form with OTP
  const onSubmit = async (data) => {
    if (!otp) {
      alert("Please generate the OTP first.");
      return;
    }

    const payload = { ...data, otp };  // Add the OTP to form data
    // console.log(payload)
    try {
      const url =`${Server_URL}provider-forgot-password`;
      const response = await axios.post(url, payload);
      const { error, message } = response.data;

      if (error) {
        alert(message);
      } else {
        localStorage.setItem('email', data.email);
        navigate("/provider-verify-otp");
        reset();
      }
    } catch (e) {
      alert(e.message);  // Corrected to show error for failed requests
    }
  };

  return (
    <>
    <BreadCrumb title="Email" subTitle="Enter Email" />
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
        <h4>Verify Email</h4>
<hr/>
            <div className="mb-3">
                <label>Email</label>
                <input {...register('email', { required: true })} className="form-control shadow" type="text" placeholder="please enter your email" />
        {errors.email && <p className="text-danger">please enter the desired field</p>}
            </div>

            <button type="submit" onClick={generateOTP} className="btn btn-primary mt-2">Verify</button>


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

export default ProviderForgotPass;

