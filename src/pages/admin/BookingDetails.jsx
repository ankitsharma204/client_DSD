import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { utilityFuntions } from "../../utils/module";
import { Server_URL } from "../../utils/config";
import BreadCrumb from "../../Components/BreadCrumb";

function BookingDetails() {
  const { register, handleSubmit, formState: { errors }, reset, setFocus } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state?.value;

  if (!bookingData) return <div>No booking data available</div>;

  return (
    <>
      <BreadCrumb title="Provider" subTitle="Add New Provider" />

      <div>
        <div>
          <h3>Partner Details</h3>
          <table>
            <tbody>
              <tr>
                <th>Name :</th>
                <td>{bookingData.partnerName}</td>
              </tr>
              <tr>
                <th>Email :</th>
                <td>{bookingData.partnerEmail}</td>
              </tr>
              <tr>
                <th>Mobile :</th>
                <td>{bookingData.partnerMobile}</td>
              </tr>
            </tbody>
          </table>

          <h3>Customer Details</h3>
          <table>
            <tbody>
              <tr>
                <th>Name :</th>
                <td>{bookingData.userName}</td>
              </tr>
              <tr>
                <th>Email :</th>
                <td>{bookingData.userEmail}</td>
              </tr>
              <tr>
                <th>Mobile :</th>
                <td>{bookingData.userMobile}</td>
              </tr>
              <tr>
                <th>State :</th>
                <td>{bookingData.state}</td>
              </tr>
              <tr>
                <th>City :</th>
                <td>{bookingData.city}</td>
              </tr>
            </tbody>
          </table>

          <h3>Service Status</h3>
          <table>
            <tbody>
              <tr>
                <th>Status :</th>
                <td>{bookingData.status}</td>
              </tr>
            </tbody>
          </table>

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
        </div>
      </div>
    </>
  );
}

export default BookingDetails;
