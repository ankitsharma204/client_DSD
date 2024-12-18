import { useForm } from "react-hook-form";
import { Server_URL2 } from "../../utils/config";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { utilityFuntions } from "../../utils/module";
import { Server_URL } from "../../utils/config";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../../Components/BreadCrumb";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";


function ViewParticularProvider(){
     
    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
        reset,
        setValue,
        getValues
    } = useForm();

    const location = useLocation();
    const id = location.state?.id;
  
    const navigate = useNavigate();

    const [slots, setSlots] = useState(null);

    async function ReadSlots(bookingDate) {
        let data = {
            bookingDate,
            serviceProviderId: getValues().serviceProviderId
        }

        const url = Server_URL + "check-available-slots";
        const response = await axios.post(url, data);
        // console.log(response.data);
        // console.log(response.data.slots);

        if (response.data.error) {
            alert(response.data.message)
        } else if (!response.data.error) {
            // console.log(response.data.slots);
            setSlots(response.data.slots);
        }
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [minDate, setMinDate] = useState("");


    function ShowBookingModal(partner_id) {
        setValue("serviceProviderId", partner_id);
        handleShow();
    }

const handleFormSubmit = (data) => {
    // Transform the data to get the desired structure
    const transformedData = {
        slots: slots.map((slot, index) => ({
            start: slot.start,
            end: slot.end,
            selected: data[`slots${index}`] || false
        }))
    };
    onSubmit(transformedData);
    };

    
  

//   const handleRedirect = () => {
//     if (!particularprovider || particularprovider.length === 0) {
//         alert("Provider details are not available. Please try again.");
//         return;
//     }

//     const selectedProvider = particularprovider[0]; // Access the first provider
//     console.log('Navigating to BookProvider with:', selectedProvider); // Log to verify
//     navigate("/particular-partner/book-provider", { 
//         state: { 
//             provider: selectedProvider 
//         } 
//     });
// };
const handleRedirect = () => {
    // Check if the token exists in localStorage
    const authToken = localStorage.getItem('userAuthToken'); // or use sessionStorage if that's your preferred method

    if (!authToken) {
        // If token doesn't exist, redirect the user to the login page
        navigate("/login-user");  // Make sure you have a route for /user-login
        return; // Don't proceed further
    }

    if (!particularprovider || particularprovider.length === 0) {
        alert("Provider details are not available. Please try again.");
        return;
    }

    const selectedProvider = particularprovider[0]; // Access the first provider
    console.log('Navigating to BookProvider with:', selectedProvider); // Log to verify
    navigate("/particular-partner/book-provider", { 
        state: { 
            provider: selectedProvider 
        } 
    });
};




  

    const [particularprovider, setParticularprovider] = useState([]);

    async function getParticularprovider() {
      try {
          const url = Server_URL + "view-particular-provider/" + id;
          const response = await axios.get(url);
          const { error, message } = response.data;
          if (error) {
              alert(message);
          } else {
              const { result } = response.data;
              console.log('Retrieved Provider:', result); // Log the provider data
              setParticularprovider(result);
          }
      } catch (error) {
          alert(error.message);
      }
  }
  
    
      useEffect(() => {
        getParticularprovider();
    
      }, []);

      useEffect(() => {
        // getSubcategoryData();

        const today = new Date();
        today.setDate(today.getDate() + 1);
        const tomorrow = today.toISOString().split("T")[0];
        setMinDate(tomorrow);
    }, []);


    return(
        <>
         <BreadCrumb title="Provider" subTitle="View Provider" />
         <section className="additional-services-one">
                <div className="container">
                    <div className="section-title text-left">
                        <span className="section-title__tagline">Providers</span>
                        {/* <h2 className="section-title__title">Additional Services Rates</h2> */}
                    </div>
                    {/* <p className="additional-services-one__text">Try not to waver to ask any pipes or repairing questions by
                        means of phone, or reach through our contact structure underneath. Your message will be dispatched
                        direct to our staff who will answer when they can.</p> */}
                        <div className="row">
                    {particularprovider.map((value, index) => {
                        return (
                            <div className="col-xl-3 col-lg-6 col-md-6" key={index}>
                                <div className="additional-services-one__single">
                                    <div className="additional-services-one__img">
                                    <img src={`${Server_URL2}${value.photo}`} alt={value.name} />
                                        {/* <img src="assets/images/resources/additional-services-one-img-1.jpg" alt="" /> */}
                                    </div>
                                    <div className="additional-services-one__content">
                                    {/* <h2 onClick={() => sendSubcategoryId(value._id)}><Link>{value.subcategory}</Link></h2> */}
                                    <h2>{value.fullname}</h2>
                                    <h4>{value.subcategoryInfo}</h4>
                                    <h6>{value. SlotAmount}</h6>
                                    {/* <h4>{value.categoryInfo}</h4> */}
                                    {/* <button className="btn btn-primary btn-sm" onClick={handleRedirect}>Book Now</button> */}
                                    <button className="btn btn-primary btn-sm" onClick={() => handleRedirect(value)}>Book Now</button>
                                    {/* <button className="btn btn-primary btn-sm" onClick={() => ShowBookingModal(value?._id)}>Book Now</button> */}

                                    
                                    


                                        {/* <h3><span>$</span>49</h3> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                    </div>
                    </section>
                    <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    {/* {/<Modal.Title>Booking Form</Modal.Title>/} */}
                </Modal.Header>
                <Modal.Body>
                    <h4 className="text-center mb-4">Booking Form</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="">
                                    Select Booking Date <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="date"
                                    min={minDate}
                                    className="form-control p-3"
                                    onChange={(e) => ReadSlots(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* ------------------------------- */}

                    {slots ? <>
                        <hr/>
                        <label>Select Slots <span className="text-danger">*</span></label>
                        <form onSubmit={handleSubmit(handleFormSubmit)}>
                            <table className="table table-bordered">
                                <thead>
                                <tr className="text-capitalize">
                                    <th></th>
                                    <th>start time</th>
                                    <th>end time</th>
                                    <th>status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {slots.map((x, i) =>
                                    <tr key={x?.start}>
                                        <td className="text-center">
                                            {x.available ? <input type="checkbox" {...register(`slots${i}`)}/> : null}
                                        </td>
                                        <td>{x.start}</td>
                                        <td>{x.end}</td>
                                        <td>{x.available ?
                                            <span className="badge bg-success">Available</span> :
                                            <span className="badge bg-danger">Not Available</span>}
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>

                            <div className="text-center">
                                <button className="btn btn-primary btn-lg px-5">Submit</button>
                            </div>
                        </form>
                    </> : null
                    }
                </Modal.Body>
            </Modal>

        </>
    )
}

export default ViewParticularProvider;