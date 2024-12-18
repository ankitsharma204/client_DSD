import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { utilityFuntions } from "../../../utils/module";
import { Server_URL } from "../../../utils/config";
import { Server_URL2 } from "../../../utils/config";
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';


function  UpdateSubCategory() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm();

  const navigate = useNavigate();

  const location = useLocation();
  const id = location.state?.id;
  // console.log(id)

  const [subcategory, setSubcategory] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  async function getSingleSubCategory() {
    try {
      const token = utilityFuntions.getCookieValue('adminAuthToken');
      const url = Server_URL + "view-single-subcategory/" + id;
      const response = await axios.get(url, {
        headers: {
          Authorization: token ? `Bearer ${token}` : ""
        }
      });
      const { error, message } = response.data;
      if (error && message === "SignIn") {
        navigate('/admin-login')
      }
      else if (error) {
        alert(message);
      } else {
        const { result } = response.data;
        // console.log(result[0])
        setSubcategory(result[0])
        //console.log(category)
      }
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    getSingleSubCategory();
  }, []);


  async function onSubmit(data) {
    try {
      console.log(data)
      const formData = new FormData();
      formData.append("photo", data.photo[0]);

      const token = utilityFuntions.getCookieValue('adminAuthToken');
      const url = Server_URL + "sub-category-photo-update/" + id;
      const res = await axios.post(url, formData, {
        headers: {
          Authorization: token ? `Bearer ${token}` : ""
        }
      });
      const { error, message } = res.data;
      if (error && message === "SignIn") {
        navigate('/admin-login');
      } else if (error) {
        showErrorToast(message);
      } else {
        getSingleSubCategory();
        reset();
        handleClose();
      }
    } catch (error) {
      showErrorToast(error.message)
    }
  }


  return (
    <>
      <Container fluid className="d-flex justify-content-center align-items-center min-vh-100" style={styles.background}>
        <Row className="w-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} className="d-flex justify-content-center align-items-center">
            {/* <div style={styles.formContainer}> */}
            <div className="col-md-9">
              {subcategory &&
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <h3 style={{ color: 'blue' }}><b>SubCategory Info</b></h3>
                      </td>
                      <td className="text-end">
                        <button className="btn btn-primary">Edit<span>     </span><FaUserEdit /></button>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="text-center">
                        <img src={subcategory.photo ? (Server_URL2 + subcategory.photo) : '/photo.png'} alt="" style={{ height: 100, borderRadius: 10 }} />
                        <br /><br />
                        <button type="button" className=" btn btn-warning" onClick={handleShow}>Upload <span>   </span> <FiUpload /></button>
                      </td>
                    </tr>
                    <tr>
                      <th className="text-end" style={{ color: 'blue' }}>SubCategory :</th>
                      <td style={{ color: 'blue' }}>{subcategory.subcategory}</td>
                    </tr>
                    {/* <tr>
                      <th className="text-end" style={{ color: 'blue' }}>Description :</th>
                      <td style={{ color: 'blue' }}>{category.description}</td>
                    </tr> */}
                  </tbody>
                </table>
              }
            </div>
            {/* </div> */}
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} centered >
        <Modal.Header closeButton>
          <Modal.Title>Upload Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="photo">photo</label>
              <input type="file" {...register('photo')} className="form-control" />
            </div>
            <button className="btn btn-primary">Upload</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

const styles = {
  background: {
    background: 'linear-gradient(135deg, #193e40, #132e4f)', // Gradient background
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(0, 40, 72)', // Translucent background
    borderRadius: '10px',
    padding: '60px 40px', // Increased padding for larger form
    width: '100%',
    maxWidth: '500px', // Increased max width for larger form
    backdropFilter: 'blur(10px)', // Blurring the background for effect
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  },
  headerText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: '28px', // Increased font size for more prominence
  },
  iconContainer: {
    backgroundColor: '#FFFFFF',
    border: 'none',
  },
  input: {
    border: 'none',
    paddingLeft: '10px',
    fontSize: '16px', // Slightly larger text for better readability
  },
  button: {
    background: 'linear-gradient(135deg, #4E54C8, #132e4f)',
    color: '#FFFFFF',
    border: 'none',
    padding: '12px',
    fontSize: '18px', // Larger button size
  }
}

export default  UpdateSubCategory;
