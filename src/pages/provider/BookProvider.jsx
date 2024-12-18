import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Server_URL } from "../../utils/config";
import BreadCrumb from "../../Components/BreadCrumb";
import { useState, useEffect } from "react";
import { utilityFuntions } from "../../utils/module";
import { useRazorpay } from "react-razorpay";


function BookProvider() {
    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const provider = location.state?.provider;
    console.log(provider)

    const hourlyRate = 100; // Set or fetch dynamically based on the provider if applicable
    const [slots, setSlots] = useState(null);
    const [minDate, setMinDate] = useState("");
    const [user, setUser] = useState([]);
    const Razorpay = useRazorpay();

    useEffect(() => {
        GetUserInfo();
    },[]);

    useEffect(() => {
        if (!provider) {
            alert("Provider information is missing.");
            navigate("/"); // Redirect if provider info is missing
            return;
        }

        const today = new Date();
        today.setDate(today.getDate() + 1);
        setMinDate(today.toISOString().split("T")[0]);
    }, [provider, navigate]);

    /* Handle Grand Total... */
    let [slotsSelectedByUser, setSlotsSelectedByUser] = useState([]);

    function calculateGrandTotal(e, index) {
        console.log(index, e.target.checked)
        if (e.target.checked) {
            setSlotsSelectedByUser((prev) => [...prev, { index: index, checked: true }]);
        } else {
            const filterSlots = slotsSelectedByUser.filter(x => x.index !== index);
            setSlotsSelectedByUser(filterSlots);
        }

    }

    ///////////////////////////////////////////////////////////
    const GetUserInfo = async () => {
        try {
            const token = utilityFuntions.getCookieValue('userAuthToken');
            const response = await axios.get(`${Server_URL}manage-user`, {
                headers: { Authorization: token ? `Bearer ${token}` : "" }
            });
            const { error, message, result } = response.data;
            if (error) {
                if (message === "SignIn") navigate('/user-login');
                else alert(message);
            } else {
                console.log(result)
                setUser(result);
            }
        } catch (error) {
            alert(error.message);
        }
    };


    const ReadSlots = async (bookingDate) => {
        try {
            const response = await axios.post(`${Server_URL}check-available-slots`, {
                bookingDate,
                serviceProviderId: provider._id
            });
            if (response.data.error) {
                alert(response.data.message);
            } else {
                setSlots(response.data.slots);
            }
        } catch (error) {
            console.error("Error fetching slots:", error);
            alert("An error occurred while fetching slots.");
        }
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setValue("date", selectedDate);
        ReadSlots(selectedDate);
    };


    const onSubmit = async (data) => {
        const slotPrice = provider.SlotAmount;

        // Filter slots to include only selected ones
        const selectedSlots = slots
            .map((slot, index) => ({
                start: slot.start,
                end: slot.end,
                selected: data[`slots${index}`] || false
            }))
            .filter(slot => slot.selected); // Only include selected slots

        if (selectedSlots.length === 0) {
            alert("Invalid or no slots selected. Please select valid slots.");
            return;
        }

        const totalPrice = selectedSlots.length * slotPrice;

        const bookingDetails = {
            providerId: provider._id,
            category: provider.categoryInfo,
            subcategory: provider.subcategoryInfo,
            name: data.name,
            email: data.email,
            date: data.date,
            address: data.address,
            mobile: data.mobile,
            state: provider?.stateInfo,
            city: provider?.cityInfo,
            slots: selectedSlots, // Only selected slots
            totalPrice
        };
console.log(provider.categoryInfo);
        try {
            // Store both `data` and `bookingDetails` in localStorage
            localStorage.setItem("bookingData", JSON.stringify(data));
            localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));

            // RAZORPAY Options
            let options = {
                key: "rzp_test_A3RM3Asww6uWvF",
                currency: "INR",
                amount: totalPrice * 100, // Convert to paise
                name: "Razorpay Demo",
                description: "Testing Payment Gateway",
                image: "https://i.pinimg.com/originals/c1/92/9d/c1929d3492c2f64ab65b43808c072043.jpg",
                handler: paymentHandler,
                prefill: {
                    name: data.name,
                    email: data.email,
                    contact: data.mobile,
                },
                theme: {
                    color: "#F46432",
                },
            };

            let rzp = new window.Razorpay(options);
            rzp.open(); // Display Razorpay

        } catch (error) {
            console.error("Error saving booking:", error);
            alert("An error occurred: " + (error.response?.data?.message || error.message));
        }
    };

    const paymentHandler = async (response) => {
        const { razorpay_payment_id } = response;

        if (!razorpay_payment_id) {
            alert("Payment Failed");
        } else {
            // Retrieve `bookingDetails` from localStorage
            const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));
            const token = utilityFuntions.getCookieValue('userAuthToken');

            try {
                const response = await axios.post(
                    `${Server_URL}add-booking-details/${provider._id}`,
                    bookingDetails,
                    {
                        headers: {
                            Authorization: token ? `Bearer ${token}` : ""
                        }
                    }
                );
                const { error, message } = response.data;
                if (error) {
                    message === "SignIn" ? navigate('/user-login') : alert(message);
                } else {
                    localStorage.removeItem("bookingData");
                    localStorage.removeItem("bookingDetails");
                    navigate("/");
                    alert(message);
                }
            } catch (error) {
                console.error("Error completing booking:", error);
                alert("An error occurred while completing booking: " + (error.response?.data?.message || error.message));
            }
        }
    };





    return (
        <>
            <BreadCrumb title="Booking" subTitle="Book Provider" />
            <section className="about-three">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="card">
                                <div className="card-body">
                                    <h2>Book {provider?.fullname}</h2>
                                    {user.map((x,index) =>(
                                    <form onSubmit={handleSubmit(onSubmit)} key={index} >
                                        <div className="mb-3">
                                            <label>Name</label>
                                            <input {...register('name', { required: true })} className="form-control shadow" type="text" defaultValue={x.fullName}  />
                                            {errors.name && <p className="text-danger">Please enter your name</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label>Email</label>
                                            <input {...register('email', { required: true })} className="form-control shadow" type="email" defaultValue={x.email} />
                                            {errors.email && <p className="text-danger">Please enter your email</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label>Mobile</label>
                                            <input {...register('mobile', { required: true })} className="form-control shadow" type="tel" defaultValue={x.mobile}  />
                                            {errors.mobile && <p className="text-danger">Please enter your mobile number</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label>Booking Date</label>
                                            <div className="input-group">
                                                <input
                                                    {...register("date", { required: true })}
                                                    type="date"
                                                    min={minDate}
                                                    className="form-control shadow"
                                                    onChange={handleDateChange}
                                                />
                                                <span className="input-group-text">
                                                    {/* <FaCalendarAlt /> */}
                                                </span>
                                            </div>
                                            {errors.date && <p className="text-danger">Please select a booking date</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label>Address</label>
                                            <input {...register('address', { required: true })} className="form-control shadow" type="text" defaultValue={x.address} />
                                            {errors.address && <p className="text-danger">Please enter your address</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label>City</label>
                                            <input {...register('city', { required: true })} className="form-control shadow" type="text" id="city"
                                                value={provider?.cityInfo || ''}
                                                readOnly />
                                        </div>

                                        <div className="mb-3">
                                            <label>State</label>
                                            <input {...register('state', { required: true })} className="form-control shadow" type="text" id="state"
                                                value={provider?.stateInfo || ''}
                                                readOnly />
                                        </div>

                                        {slots && slots.length > 0 ? (
                                            <div className="mb-3">
                                                {/* <h3 className="text-white">SlotAmount: {provider.price}</h3> */}
                                                {/* <h4 className="text-center">Available Slots for {getValues("date")}</h4> */}
                                                <h4 className="text-center">SlotAmount: {provider.SlotAmount}</h4>
                                                <hr />

                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>Start Time</th>
                                                            <th>End Time</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {slots.map((slot, index) => (
                                                            <tr key={index}>
                                                                <td className="text-center">
                                                                    {slot.available && (<input type="checkbox" {...register(`slots${index}`)} onChange={(e) => {
                                                                        calculateGrandTotal(e, index)
                                                                    }} />)}
                                                                </td>
                                                                <td>{slot.start}</td>
                                                                <td>{slot.end}</td>
                                                                <td>
                                                                    {slot.available ? (
                                                                        <span className="badge bg-success">Available</span>
                                                                    ) : (
                                                                        <span className="badge bg-danger">Not Available</span>
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                                <h3 className="text-end">
                                                    Total Amount: <span className="badge bg-primary">{provider.SlotAmount * slotsSelectedByUser.length}</span>
                                                </h3>
                                            </div>
                                        ) : (
                                            <p>No available slots for the selected date.</p>
                                        )}

                                        <button type="submit" className="btn btn-primary">Confirm Booking</button>
                                    </form>
                                    ) )} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default BookProvider;
