import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { utilityFuntions } from "../../utils/module";
import { Server_URL } from "../../utils/config";
import { showErrorToast, showSuccessToast } from "../../utils/ToastHelper";
import BreadCrumb from "../../Components/BreadCrumb";



function ProviderCanceledBookings() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm();

  const navigate = useNavigate()

  const [booking, setBooking] = useState([])

async function getbookingdata() {
    try {
      // Retrieve the token
      const token = utilityFuntions.getCookieValue('providerAuthToken');
      console.log("Token Retrieved:", token); // Debug token value
  
      if (!token) {
        console.log("No token found. Redirecting to login.");
        navigate('/loginprovider');
        return;
      }
  
      const url = `${Server_URL}partner-booking-data`;
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (data.error) {
        if (data.message === "SignIn") {
          navigate('/loginprovider');
        } else {
          showErrorToast(data.message);
        }
      } else {
        const confirmedBookings = data.result.filter((booking) => booking.status === "Canceled");
        setBooking(confirmedBookings);
      }
    } catch (error) {
      showErrorToast(error.message);
    }
  }
  


  useEffect(() => {
    getbookingdata();
  }, [])

  async function goMoreDetails(value) {
    navigate("/provider/more-details", { state: { value } });
  }


  return (
    <>
            <BreadCrumb title=" Cancel Booking" subTitle="Check Bookings" />
      <div className="container my-5 " style={{ overflowX: "auto", whiteSpace: 'nowrap' }}>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Category</th>
              <th>Sub-category</th>
              <th>Total</th>
              <th>Date</th>
              <th>P-Name</th>
              <th>P-Email</th>
              <th>U-Name</th>
              <th>U-Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((value, index) => (
              <tr key={index}>
                <td>{value.category}</td>
                <td>{value.subcategory}</td>
                <td>{value.total}</td>
                <td>{value.date}</td>
                <td>{value.partnerName}</td>
                <td>{value.partnerEmail}</td>
                <td>{value.userName}</td>
                <td>{value.userEmail}</td>
                <td><button className="btn btn-info" onClick={() => goMoreDetails(value)}>More-Details</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProviderCanceledBookings;
