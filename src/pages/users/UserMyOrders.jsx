import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import BreadCrumb from "../../Components/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import { utilityFuntions } from "../../utils/module";
import { Server_URL } from "../../utils/config";
import { showErrorToast, showSuccessToast } from "../../utils/ToastHelper";
import Modal from "react-bootstrap/Modal";
import { FaStar } from "react-icons/fa";



function UserMyOrders() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm();

  // const { register, handleSubmit, formState: { errors }, reset, setFocus } = useForm();
  const [show, setShow] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [reviewText, setReviewText] = useState("");
  // const [booking, setBooking] = useState([]);
  const [selectedPartnerId, setSelectedPartnerId] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  // const navigate = useNavigate();

  function handleShow(partnerId, userId) {
    setSelectedPartnerId(partnerId);
    setSelectedUserId(userId);
    setShow(true);
  }

  function handleClose() {
    setShow(false);
    setCurrentValue(0);
    setReviewText("");
  }

  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
  };


  const navigate = useNavigate()

  const [booking, setBooking] = useState([]);

  async function handleSubmitReview() {
    try {
      const payload = { currentValue, reviewText, selectedPartnerId, selectedUserId };
      // console.log(payload)
      const token = utilityFuntions.getCookieValue("userAuthToken");
      const response = await axios.post(`${Server_URL}user-add-review`, payload, {
        headers: { Authorization: token ? `Bearer ${token}` : "" }
      });
      const { error, message } = response.data;
      if (error) {
        message === "SignIn" ? navigate('/user-login') : showErrorToast(message);
      } else {
        handleClose();
        showSuccessToast(message);
      }
    } catch (error) {
      showErrorToast(error.message);
    }
  }

  async function getbookingdata() {
    try {
      const token = utilityFuntions.getCookieValue('userAuthToken');
      const url = `${Server_URL}user-booking-data`;
      const { data } = await axios.get(url, {
        headers: {
          Authorization: token ? `Bearer ${token}` : ""
        }
      });
      if (data.error) {
        if (data.message === "SignIn") navigate('/user-login');
        else showErrorToast(data.message);
      } else {
        // Filter results to include only bookings with status "confirmed"
        console.log(data.result)
        setBooking(data.result);
      }
    } catch (error) {
      showErrorToast(error.message);
    }
  }


  useEffect(() => {
    getbookingdata();
  }, [])

  async function goMoreDetails(value) {
    navigate("/user/more-details", { state: { value } });
  }


  return (
    <>
            <BreadCrumb title="Orders" subTitle="User Orders" />
      <div className="container">
        <div className="row">
          {booking.map((value, index) => {
            return (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="service-wrapper mb-30">
                  <div className="service-img">
                    {/* <img src={${Server_URL2}${value.subcategoryPhoto}} alt={value.subcategoryName} /> */}
                  </div>
                  <div className="service-text text-center">
                    <div className="service-icon-img">
                      <i className="flaticon-house-icon"></i>
                    </div>
                    <h2 >{value.subcategory}</h2>
                    <h3>Total: {value.total} </h3>
                    <h4>Status: {value.status}</h4>
                    <h3>Date: {value.date} </h3>
                    <Link
                      onClick={(event) => {
                        event.preventDefault(); // Prevent default link behavior
                        goMoreDetails(value); // Call your function
                      }}
                    >read more</Link>
                    {value.status === 'Completed' && (
                    <Link className="review-link" onClick={(e) => { e.preventDefault(); handleShow(value.partnerId, value.userId); }}>
                      Give Review
                    </Link>
                  )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Body style={styles.modalBody}>
          <div style={styles.container}>
            <h2 style={styles.heading}>Rate Our Partner</h2>
            <div style={styles.stars}>
              {Array(5).fill(0).map((_, index) => (
                <FaStar
                  key={index}
                  size={30}
                  style={styles.starIcon}
                  color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                  onClick={() => setCurrentValue(index + 1)}
                  onMouseOver={() => setHoverValue(index + 1)}
                  onMouseLeave={() => setHoverValue(undefined)}
                />
              ))}
            </div>
            <textarea
              style={styles.textarea}
              placeholder="What's your feedback?"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
            <button onClick={handleSubmitReview} style={styles.button}>Submit Review</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

const styles = {
  modalBody: {
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333",
  },
  stars: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  starIcon: {
    cursor: "pointer",
    marginRight: "8px",
    transition: "transform 0.2s ease-in-out",
  },
  textarea: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "100%",
    minHeight: "100px",
    padding: "12px",
    marginBottom: "20px",
    fontSize: "16px",
    resize: "vertical",
    boxShadow: "inset 0px 1px 4px rgba(0, 0, 0, 0.1)",
    transition: "border-color 0.3s ease",
  },
  button: {
    backgroundColor: "#FFBA5A",
    border: "none",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    boxShadow: "0px 4px 8px rgba(255, 186, 90, 0.4)",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  },
};


export default UserMyOrders;
