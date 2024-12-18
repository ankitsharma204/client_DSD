import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { ToastContainer } from 'react-toastify';
import { useState, useEffect } from "react";
import { utilityFuntions } from "../utils/module";
import UserHeader from "../Components/UserHeader";

function PublicLayout() {
  const [token, setToken] = useState(utilityFuntions.checkCookieExists('userAuthToken'));

  useEffect(() => {
    const handleTokenChange = () => {
      setToken(utilityFuntions.checkCookieExists('userAuthToken'));
    };

    window.addEventListener('storage', handleTokenChange);

    return () => {
      window.removeEventListener('storage', handleTokenChange);
    };
  }, []);

  return (
    <>
      {token ? (
        <>
          <UserHeader />
          <Outlet />
          <Footer />
        </>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer/>
        </>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default PublicLayout;
