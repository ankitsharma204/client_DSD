import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { Server_URL } from '../utils/config';
import { showErrorToast, showSuccessToast } from "../utils/ToastHelper";
import BreadCrumb from '../Components/BreadCrumb';

function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
  } = useForm();

  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement('script');
      script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ97zN_MClQ8BnmJJOCY165S2QEYvbIis";
      script.async = true;
      script.onload = initMap;
      document.body.appendChild(script);
    };

    const initMap = () => {
      const mapOptions = {
        zoom: 11,
        scrollwheel: false,
        center: { lat: 23.822349, lng: 90.36542 },
        styles: [
          { featureType: "water", elementType: "geometry", stylers: [{ color: "#e9e9e9" }, { lightness: 17 }] },
          { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#f5f5f5" }, { lightness: 20 }] },
          { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#ffffff" }, { lightness: 17 }] },
          { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }] },
          { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#ffffff" }, { lightness: 18 }] },
          { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#ffffff" }, { lightness: 16 }] },
          { featureType: "poi", elementType: "geometry", stylers: [{ color: "#f5f5f5" }, { lightness: 21 }] },
          { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#dedede" }, { lightness: 21 }] },
          { elementType: "labels.text.stroke", stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }] },
          { elementType: "labels.text.fill", stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }] },
          { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
          { featureType: "transit", elementType: "geometry", stylers: [{ color: "#f2f2f2" }, { lightness: 19 }] },
          { featureType: "administrative", elementType: "geometry.fill", stylers: [{ color: "#fefefe" }, { lightness: 20 }] },
          { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }] }
        ]
      };

      const mapElement = document.getElementById('map');
      new window.google.maps.Map(mapElement, mapOptions);
    };

    if (!window.google) {
      loadGoogleMaps();
    } else {
      initMap();
    }
  }, []);

  async function onSubmit(data) {
    try {
      console.log(data);
      const url = Server_URL + "add-contant-us";
      const res = await axios.post(url, data);
      const { error, message } = res.data;
      if (error) {
        showErrorToast(message);
      } else {
        reset();
        showSuccessToast(message);
      }
    } catch (error) {
      showSuccessToast(error.message);
    }
  }

  useEffect(() => {
    setFocus("email");
  }, []);

  return (
    <>
      <BreadCrumb title="Home" subTitle="Contact Us" />
      <div style={{ backgroundImage: 'url(assets/img/bg/6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '36px', color: '#fff', fontWeight: 'bold' }}>Contact Us</h2>
                <p style={{ color: '#fff', fontSize: '18px', marginTop: '10px' }}>Make your life easier with our services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '50px 0', backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <h3 style={{ fontSize: '30px', marginBottom: '30px', fontWeight: '600' }}>Leave Us a Message</h3>
                <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
                  <div className="col-lg-6">
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      placeholder="Name"
                      style={{ width: '100%', padding: '15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '16px', marginBottom: '20px' }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="Email"
                      style={{ width: '100%', padding: '15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '16px', marginBottom: '20px' }}
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      {...register('message')}
                      cols="30"
                      rows="10"
                      placeholder="Message"
                      style={{ width: '100%', padding: '15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '16px', marginBottom: '20px' }}
                    ></textarea>
                  </div>
                  <button style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '5px' }}>Send Message</button>
                </form>
                <p className="form-message"></p>
              </div>
            </div>

            <div className="col-lg-4">
              <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <h3>Contact Info</h3>
                <p>Bringing Expertise and Care Right to Your DoorStep.</p>
                <div style={{ marginBottom: '20px' }}>
                  <i className="zmdi zmdi-pin" style={{ fontSize: '24px', color: '#007bff', marginRight: '10px' }}></i>
                  <span>Location:</span>
                  <p>House no. 1805, Amritsar</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <i className="zmdi zmdi-phone" style={{ fontSize: '24px', color: '#007bff', marginRight: '10px' }}></i>
                  <span>Phone:</span>
                  <p>+91-798-(676)-7032</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <i className="zmdi zmdi-email" style={{ fontSize: '24px', color: '#007bff', marginRight: '10px' }}></i>
                  <span>Email:</span>
                  <p>InstantCare@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ paddingBottom: '120px' }}>
        <div className="container">
          <div id="map" style={{ height: '400px', width: '100%', borderRadius: '8px' }}></div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
