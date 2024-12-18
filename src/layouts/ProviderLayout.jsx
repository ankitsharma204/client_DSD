import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { utilityFuntions } from "../utils/module"; // Assuming you have a utility function to check cookies
import ProviderHeader from "../Components/ProviderHeader";
import Footer from "../Components/Footer";
import { ToastContainer } from 'react-toastify';

function ProviderLayout() {
  const [token, setToken] = useState(utilityFuntions.checkCookieExists('providerAuthToken'));

  useEffect(() => {
    const handleTokenChange = () => {
      setToken(utilityFuntions.checkCookieExists('providerAuthToken'));
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
          <ProviderHeader />
          <Outlet />
          <Footer />
        </>
      ) : (
        <>
          {/* This part could be for a public landing page or login page */}
          <ProviderHeader />
          <Outlet />
          <Footer />
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

export default ProviderLayout;
