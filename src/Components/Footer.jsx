import { Link } from "react-router-dom";

function footer()  {
    return(
        <>
        
        <footer className="site-footer">
            <div className="site-footer__top">
                <div className="container">
                    <div className="site-footer__inner">
                        <div className="site-footer__contact-info">
                            <ul className="site-footer__contact-points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <img src="assets/images/icon/footer-icon-1.png" alt=""/>
                                    </div>
                                    <div className="content">
                                        <h4>1805, Model Town 5238 MS,</h4>
                                        <p>Amritsar city, IA 143006</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <img src="assets/images/icon/footer-icon-2.png" alt=""/>
                                    </div>
                                    <div className="content">
                                        <h4>Email us :</h4>
                                        {/* <a href="mailto:contact@assimox.com">contact@assimox.com</a> */}
                                        <p>ankit@gmail.com</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <img src="assets/images/icon/footer-icon-3.png" alt=""/>
                                    </div>
                                    <div className="content">
                                        <h4>Call us on :</h4>
                                        {/* <a href="tel:+18004567890">+ 1800 456 7890</a> */}
                                        <p>+91 798 (676) 032</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__middle">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget__column footer-widget__about">
                                <div className="footer-widget__logo">
                                    <a href="index.html"><img src="assets/images/resources/footer-logo.png" alt=""/></a>
                                </div>
                                <p className="site-footer__text">
                                "Transforming homes, enriching lives – one service at a time."</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget__column footer-widget__useful-links">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Useful Links</h3>
                                </div>
                                <ul className="footer-widget__useful-links-list list-unstyled">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="about-us">About Us</Link></li>
                                    {/* <li><Link to="appointment.html">Appointment</Link></li> */}
                                    <li><Link to="services">Services</Link></li>
                                    <li><Link to="contact-us">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget__column footer-widget__services">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Our Few Services</h3>
                                </div>
                                <ul className="footer-widget__useful-links-list list-unstyled">
                                    <li><Link to="services">Refregerator</Link></li>
                                    <li><Link to="services">Mircorwave</Link></li>
                                    <li><Link to="services">Washing Machine</Link></li>
                                    <li><Link to="services">Cookware Stove</Link></li>
                                    <li><Link to="services">Juicer Mixer</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="footer-widget__column footer-widget__newsletter">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Newsletter</h3>
                                </div>
                                <p className="footer-widget__newsletter-text">Get latest updates and offers.</p>
                                <form className="footer-widget__subscribe-box">
                                    <div className="footer-widget__subscribe-input-box">
                                        <input type="email" placeholder="Enter your email address" name="email"/>
                                        <button type="submit" className="footer-widget__subscribe-btn"><img
                                                src="assets/images/icon/paper-plan.png" alt=""/></button>
                                    </div>
                                </form>
                                <div className="site-footer__social">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="site-footer__bottom-inner">
                                <p className="site-footer__bottom-text">© Copyright <a href="#">Assimox</a> 2024 . All
                                    right reserved.</p>
                                <div className="site-footer__bottom-text-two">
                                    <p>Created by <a href="#">Ankit</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    
        </>
    )
}

export default footer;