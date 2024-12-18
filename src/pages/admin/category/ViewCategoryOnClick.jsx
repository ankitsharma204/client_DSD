import axios from "axios";
import { useEffect, useState } from "react";
import { Server_URL } from "../../../utils/config";
import BreadCrumb from "../../../Components/BreadCrumb";
import { utilityFuntions } from "../../../utils/module";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Server_URL2 } from "../../../utils/config";

const ViewCategoryOnClick = () => {
    const [admin, setAdmin] = useState([]);

    const Navigate = useNavigate();

    async function ViewCategory() {
        try {
            const url = Server_URL + "AddCategory";
            const response = await axios.get(url);

            const { error, message } = response.data;
            // console.log(error, message,result);
            // console.log(response.data);
             if (error) {
                alert(message);
            }
            else {
                const { result } = response.data
                // console.log(result)
                setAdmin(result)
                // alert(message);
            }
        } catch (e) {
            console.log(e.message);
        }

    }
    useEffect(() => {
        ViewCategory();
    }, [])


    async function sendSubcategoryId(id) {
        console.log(id)
        Navigate('/particular-subcategory', { state: { id } })
      }
    // async function DeleteCategory(_id) {
    //     try {
    //         const url = Server_URL + "AddCategory/" + _id;
    //         const response = await axios.delete(url);
    //         console.log(response.data)

    //         const { error, message } = response.data;
    //         if (error) {
    //             alert(message)
    //         } else {
    //             alert(message);
    //             ViewCategory();
    //         }
    //     } catch (e) {
    //         alert(message)
    //     }
    // }

    

    return (
        <>
            <BreadCrumb title="Category" subTitle="All Categories" />
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
                    {admin.map((value, index) => {
                        return (
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="additional-services-one__single">
                                    <div className="additional-services-one__img">
                                        {/* <img src="assets/images/resources/additional-services-one-img-1.jpg" alt="" /> */}
                                        <img src={`${Server_URL2}${value.photo}`} alt={value.name} />
                                    </div>
                                    <div className="additional-services-one__content">
                                        <h2 onClick={()=>sendSubcategoryId(value._id)}><Link>{value.name}</Link></h2>
                                        <h4>{value.description}</h4>
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

export default ViewCategoryOnClick;