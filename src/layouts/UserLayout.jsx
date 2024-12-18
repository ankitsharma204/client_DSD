import { Outlet } from "react-router-dom";
import UserHeader from "../Components/UserHeader";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import { utilityFuntions } from "../utils/module";
import { useNavigate } from "react-router-dom";

function UserLayout() {
    const [render, setRender] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (utilityFuntions.checkCookieExists("userAuthToken")) {
            setRender(true);
        } else {
            navigate("/login-user");
        }
    }, []);

   

    return (
        <>
            {render ? (
                <>
            <UserHeader />
            <section className="about-three">
                <Outlet />
            </section>
            <Footer />
        </>
        ) : null}
        </>
    )
}

export default UserLayout;