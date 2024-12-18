import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import { utilityFuntions } from '../../utils/module';
import { Server_URL } from '../../utils/config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminChangePass() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm();

  const [show, setShow] = useState(false);
  const navigate = useNavigate(); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function openmodel() {
    handleShow();
  }

  useEffect(() => {
    openmodel();
  }, []);

  async function onSubmit(data) {
    try {
      console.log(data)
      const token = utilityFuntions.getCookieValue('adminAuthToken');
      const url = Server_URL + "admin-change-password";
      const res = await axios.put(url, data, {
        headers: {
          Authorization: token ? `Bearer ${token}` : ""
        }
      });
      console.log(res.data);
      const { error, message } = res.data;
      if (error) {
        alert(message);
      } else {
        reset();
        alert(message);
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} centered size='lg'>
        <Modal.Header className='bg-dark text-white' closeButton>
          <Modal.Title >Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-1">
              <label>Current password</label>
              <input
                {...register("currentpassword", { required: true })}
                className="form-control"
                // autoComplete="off"
                type="text"
                placeholder="Enter your current password"
              ></input>
              <br />
              {errors.currentpassword && (
                <p className="text-danger">This field is required</p>
              )}
            </div>
            <div className="mb-2">
              <label>New Password</label>
              <input
                {...register("password", { required: true })}
                className="form-control"
                type="password"
                placeholder="Enter your new Password"
              ></input>
              <br />
              {errors.password && (
                <p className="text-danger">This field is required</p>
              )}
            </div>
            <div className="mb-2">
              <label>Confirm Password</label>
              <input
                {...register("confirmpassword", { required: true })}
                className="form-control"
                type="password"
                placeholder="Repeat your Password"
              ></input>
              <br />
              {errors.confirmpassword && (
                <p className="text-danger">This field is required</p>
              )}
            </div>
            <button className="btn btn-success mt-2">update</button><br /><br />
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
};

export default AdminChangePass;
