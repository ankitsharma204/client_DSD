import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { utilityFuntions } from "../../utils/module";
import { Server_URL } from "../../utils/config";
import { showSuccessToast, showErrorToast } from "../../utils/ToastHelper";
import BreadCrumb from "../../Components/BreadCrumb";



function BookingCancel() {

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
        console.log('hi')
      const token = utilityFuntions.getCookieValue('adminAuthToken');
      const url = `${Server_URL}admin-booking-data`;
      const { data } = await axios.get(url, {
        headers: {
          Authorization: token ? `Bearer ${token}` : ""
        }
      });
      if (data.error) {
        if (data.message === "SignIn") navigate('/admin-login');
        else showErrorToast(data.message);
      } else {
        // Filter results to include only bookings with status "confirmed"
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
    navigate("/admin/view-booking-admin", { state: { value } });
  }


  return (
    <>
            <BreadCrumb title="Home" subTitle="Canceled Bookings" />

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

export default BookingCancel;
