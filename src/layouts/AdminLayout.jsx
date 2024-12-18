// import { Outlet } from "react-router-dom";
// import AdminHeader from "../Components/AdminHeader";
// import Footer from "../Components/Footer";
// import { useState, useEffect } from "react";
// import { utilityFuntions } from "../utils/module";
// import { useNavigate } from "react-router-dom";

// function AdminLayout() {
//     const [render, setRender] = useState(false);
//     const navigate = useNavigate();
    
//     useEffect(() => {
//         if (utilityFuntions.checkCookieExists("adminAuthToken")) {
//             setRender(true);
//         } else {
//             navigate("/signin");
//         }
//     }, []);

//     return (
//         <>
//             {render ? (
//                 <>
//                     <AdminHeader />
//                     <Outlet />
//                     <Footer />
//                 </>

//             ) : null}

//         </>
//     );
// }

// export default AdminLayout;
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { utilityFuntions } from "../utils/module"; // Assuming you have a utility function to check cookies
import AdminHeader from "../Components/AdminHeader";
import Footer from "../Components/Footer";
import { ToastContainer } from 'react-toastify';

function AdminLayout() {
  const [token, setToken] = useState(utilityFuntions.checkCookieExists('providerAuthToken'));

  useEffect(() => {
    const handleTokenChange = () => {
      setToken(utilityFuntions.checkCookieExists('adminAuthToken'));
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
          <AdminHeader />
          <Outlet />
          <Footer />
        </>
      ) : (
        <>
          {/* This part could be for a public landing page or login page */}
          <AdminHeader />
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

export default AdminLayout;
