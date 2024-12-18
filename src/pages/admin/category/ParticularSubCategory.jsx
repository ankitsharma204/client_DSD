import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { utilityFuntions } from "../../../utils/module";
import { Server_URL } from "../../../utils/config";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../../../Components/BreadCrumb";
import { Link } from "react-router-dom";
import { Server_URL2 } from "../../../utils/config";


function ParticularSubCategory(){
     
    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
        reset
    } = useForm();

    const location = useLocation();
    const id = location.state?.id;
  
    const navigate = useNavigate();
    const [particularsubcategory, setParticularsubcategory] = useState([]);

    async function getParticularsubcategory() {
        try {
          const url = Server_URL + "view-particular-subcategory/" + id;
          const response = await axios.get(url);
          const { error, message } = response.data;
          if (error) {
            alert(message);
          } else {
            const { result } = response.data;
            setParticularsubcategory(result);
          }
        } catch (error) {
          alert(error.message);
        }
      }
    
      useEffect(() => {
        getParticularsubcategory();
    
      }, []);
    


  async function sendSubcategoryId(id) {
    console.log(id)
    navigate('/particular-partner', { state: { id } })
  }

    
      
    
  
  
  


    return(
        <>
         <BreadCrumb title="Category" subTitle="SubCategory" />
         <section className="additional-services-one">
                <div className="container">
                    <div className="section-title text-left">
                        <span className="section-title__tagline">Categories</span>
                        {/* <h2 className="section-title__title">Additional Services Rates</h2> */}
                    </div>
                    {/* <p className="additional-services-one__text">Try not to waver to ask any pipes or repairing questions by
                        means of phone, or reach through our contact structure underneath. Your message will be dispatched
                        direct to our staff who will answer when they can.</p> */}
                        <div className="row">
                    {particularsubcategory.map((value, index) => {
                        return (
                            <div className="col-xl-3 col-lg-6 col-md-6" key={index}>
                                <div className="additional-services-one__single">
                                    <div className="additional-services-one__img">
                                        {/* <img src="assets/images/resources/additional-services-one-img-1.jpg" alt="" /> */}
                                        <img src={`${Server_URL2}${value.photo}`} alt={value.name} />
                                    </div>
                                    <div className="additional-services-one__content">
                                    <h2 onClick={() => sendSubcategoryId(value._id)}><Link>{value.subcategory}</Link></h2>
                                    {/* <h2>{value.subcategory}</h2> */}
                                    <h4>{value.categoryInfo}</h4>
                                    
                                    


                                        {/* <h3><span>$</span>49</h3> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                    </div>
                    </section>
        </>
    )
}

export default ParticularSubCategory;