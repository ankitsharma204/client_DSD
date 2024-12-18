import { Link } from "react-router-dom";
import { utilityFuntions } from "../utils/module";
import { useNavigate } from "react-router-dom";
function UserHeader() {
    const Navigate = useNavigate();
    function userlogout(e) {
        e.preventDefault();
        utilityFuntions.removeCookie('userAuthToken');
        localStorage.removeItem('userAuthToken'); // Optional if you're using cookies only
        window.dispatchEvent(new Event('storage')); // Dispatches a storage event to trigger re-render
        Navigate('/'); // Navigate to a different page, like the homepage
      }
    return (
        <>
            <header className="main-header main-header--dark">
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <a href="index.html"><img src="assets/images/resources/logo-3.png" alt="" /></a>
                                </div>
                                <div className="main-menu__main-menu-box">
                                    <div className="main-menu__main-menu-box-inner">
                                        <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                                        <ul className="main-menu__list">
                                            <li className="dropdown current">
                                                {/* <a href="index.html">Home </a> */}
                                                <Link to="/">Home</Link>
                                                {/* <ul>
                                                    <li><a href="index.html">Home One</a></li>
                                                    <li><a href="index2.html">Home Two</a></li>
                                                    <li><a href="index3.html">Home Three</a></li>
                                                    <li><a href="index-rtl.html#googtrans(en%7Car)">Home RTL</a></li>
                                                    <li><a href="index-boxed.html">Home Boxed</a></li>
                                                    <li className="dropdown">
                                                        <a href="#">Header Styles</a>
                                                        <ul>
                                                            <li><a href="index.html">Header One</a></li>
                                                            <li><a href="index2.html">Header Two</a></li>
                                                            <li><a href="index3.html">Header Three</a></li>
                                                        </ul>
                                                    </li>
                                                </ul> */}
                                            </li>

                                            <li>
                                            <Link to="user-change-pass">Change Password</Link>
                                            </li>

                                            <li>
                                            <Link to="orders">Orders</Link>
                                            </li>

                                            <li>
                                            <Link to="view-users">Profile</Link>
                                            </li>

                                            {/* <li className="dropdown">
                                                <a href="#">User Login</a>
                                                <ul>
                                                    <li><Link to="create-user">Login</Link></li>
                                                    <li><Link to="login-user">SignIn</Link></li>
                                                </ul>
                                            </li> */}

                                            <li className="dropdown">
                                                <a href="#">About Us</a>
                                                <ul>
                                                <li><Link to="about">About Us</Link></li>
                                                <li><Link to="company-history">Company History</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <Link to="services">Services</Link>
                                            </li>
                                            {/* <li className="dropdown">
                                                <a href="#">Projects</a>
                                                <ul>
                                                    <li><a href="projects.html">Projects</a></li>
                                                    <li><a href="project-details.html">Project Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Pages</a>
                                                <ul>
                                                    <li><a href="appointment.html">Appointment</a></li>
                                                    <li><a href="coupons-and-offers.html">Coupons Offer</a></li>
                                                    <li><a href="finance.html">Finance</a></li>
                                                    <li><a href="prices.html">Prices</a></li>
                                                    <li><a href="faq.html">FAQs</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Blog</a>
                                                <ul>
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-grid.html">Blog Grid</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li> */}
                                            <li>
                                                {/* <a href="contact.html">Contact Us</a> */}
                                                <Link to="contact-us">Contact Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="main-menu__search-nav-sidebar">
                                        <div className="main-menu__search-box">
                                            {/* <a href="#" className="main-menu__search search-toggler icon-magnifying-glass"></a> */}
                                        </div>
                                        <button className="ntn btn-danger btn-sm  ms-2" onClick={userlogout}>Logout</button>
                                        <div className="main-menu__side-content-icon">
                                            <a className="navSidebar-button" href="#">
                                                <span className="icon-dots-menu-1"></span>
                                                <span className="icon-dots-menu-2"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="main-menu__right">
                                <div className="main-menu__call">
                                    <div className="main-menu__call-icon">
                                        <span className="icon-telephone"></span>
                                    </div>
                                    <div className="main-menu__call-content">
                                        <p className="main-menu__call-sub-title">Need help? Talk to an expert</p>
                                        <h4 className="main-menu__call-number"><a href="tel:18003660089">+91 798 (676) 7032</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

         

        
                                            
                                        
                                                
                                            
        </>
    )
}

export default UserHeader;