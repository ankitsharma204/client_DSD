import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { utilityFuntions } from "../../utils/module";
import { Server_URL } from "../../utils/config";
import { showErrorToast, showSuccessToast } from "../../utils/ToastHelper";

function ProviderBookingDetails() {
  const { register, handleSubmit, formState: { errors }, reset, setFocus } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state?.value;

  if (!bookingData) return <div>No booking data available</div>;

  async function ChangeStatusCompleted(id) {
    try {
      const data = 'Completed';
      const token = utilityFuntions.getCookieValue('providerAuthToken');
      const url = Server_URL + "change-status-complete/" + id;
      const response = await axios.put(url, data, {
        headers: {
          Authorization: token ? `Bearer ${token}` : ""
        }
      });
      const { error, message } = response.data;
      if (error && message === "SignIn") {
        navigate('/loginprovider');
      } else if (error) {
        showErrorToast(message);
      } else {
        navigate('/provider/view-provider-bookings');
      }
    } catch (error) {
      showErrorToast(error.message);
    }
  }

  async function ChangeStatusCanceled(id) {
    try {
      const data = 'Canceled';
      const token = utilityFuntions.getCookieValue('providerAuthToken');
      const url = Server_URL + "change-status-cancle/" + id;
      const response = await axios.put(url, data, {
        headers: {
          Authorization: token ? `Bearer ${token}` : ""
        }
      });
      const { error, message } = response.data;
      if (error && message === "SignIn") {
        navigate('/loginprovider');
      } else if (error) {
        showErrorToast(message);
      } else {
        navigate('/provider/view-provider-bookings');
      }
    } catch (error) {
      showErrorToast(error.message);
    }
  }

  return (
    <div>
      <div>
        {/* Customer Details Section */}
        <h3>Customer Details</h3>
        <table>
          <tbody>
            <tr><th>Name:</th><td>{bookingData.userName}</td></tr>
            <tr><th>Email:</th><td>{bookingData.userEmail}</td></tr>
            <tr><th>Mobile:</th><td>{bookingData.userMobile}</td></tr>
            <tr><th>State:</th><td>{bookingData.state}</td></tr>
            <tr><th>City:</th><td>{bookingData.city}</td></tr>
          </tbody>
        </table>

        {/* Status Section */}
        <h3>Service Status</h3>
        <table>
          <tbody>
            <tr><th>Status:</th><td>{bookingData.status}</td></tr>
          </tbody>
        </table>

        {/* Time Slots Section */}
        <h3>Time Slots</h3>
        {bookingData.bookingdetailsInfo && bookingData.bookingdetailsInfo.length > 0 ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Start Time</th>
                  <th>End Time</th>
                </tr>
              </thead>
              <tbody>
                {bookingData.bookingdetailsInfo.map((slot, i) => (
                  <tr key={i}>
                    <td>{slot.start_time}</td>
                    <td>{slot.end_time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No time slots available</p>
        )}

        {bookingData.status === 'Confirmed' ? (
          <div>
            <button onClick={() => ChangeStatusCompleted(bookingData._id)}>Completed</button>
            <button onClick={() => ChangeStatusCanceled(bookingData._id)}>Canceled</button>
          </div>
        ) : null}
      </div>
      <br />
    </div>
  );
}

export default ProviderBookingDetails;
