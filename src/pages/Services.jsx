import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
function Services(){
    return (
        <>
        <BreadCrumb title="Home" subTitle="Services"/>
    

      

<div className="page-wrapper">
    <section className="services-page">
        <div className="container">
            <div className="section-title text-left">
                <span className="section-title__tagline">our services</span>
                <h2 className="section-title__title">What We Do For Our Customers</h2>
                <p className="services-page__sec-title-text">
                At InstantCare, we connect customers with trusted and skilled service providers who specialize in a wide range of home services. Whether you need a quick repair, professional painting, expert assembly, or any other household task, we ensure that you receive high-quality services that meet your needs. Our platform offers convenience, reliability, and peace of mind by partnering with experienced professionals who are committed to delivering exceptional results. We take the hassle out of finding the right help, so you can focus on what matters most—enjoying a well-maintained, comfortable home.
                </p>
            </div>
            <ul className="list-unstyled services-page__list-box">
                <li className="services-page__list">
                    <div className="services-page__single">
                        <div className="services-page__icon">
                            <span className="icon-refrigerator"></span>
                        </div>
                        <h3 className="services-page__title"><a href="single-service.html">Refrigerator</a></h3>
                        <p className="services-page__text">Our refrigerator service ensures your appliance runs efficiently with expert repairs, maintenance, and troubleshooting. Whether it's cooling issues, leaks, or any malfunction, our skilled technicians provide reliable solutions to extend the life of your refrigerator and keep it functioning optimally.</p>
                    </div>
                </li>
                <li className="services-page__list">
                    <div className="services-page__single">
                        <div className="services-page__icon">
                            <span className="icon-washing-machine"></span>
                        </div>
                        <h3 className="services-page__title"><a href="single-service.html">Washing Machine</a></h3>
                        <p className="services-page__text">Our washing machine service covers repairs, maintenance, and troubleshooting to ensure your appliance operates smoothly. From fixing drainage issues to addressing spinning problems, our expert technicians deliver reliable solutions, helping extend the lifespan and performance of your washing machine.</p>
                    </div>
                </li>
                <li className="services-page__list">
                    <div className="services-page__single">
                        <div className="services-page__icon">
                            <span className="icon-oven"></span>
                        </div>
                        <h3 className="services-page__title"><a href="single-service.html">Microwave & Oven</a></h3>
                        <p className="services-page__text">
                        Our microwave and oven service includes expert repairs, maintenance, and troubleshooting to keep your appliances functioning perfectly. Whether it's heating issues, faulty controls, or any malfunction, our skilled technicians provide reliable solutions to ensure your microwave and oven work efficiently..</p>
                    </div>
                </li>
                <li className="services-page__list">
                    <div className="services-page__single">
                        <div className="services-page__icon">
                            <span className="icon-water-heater"></span>
                        </div>
                        <h3 className="services-page__title"><a href="single-service.html">Water Heater</a></h3>
                        <p className="services-page__text">Our water heater service provides expert repairs, maintenance, and troubleshooting to ensure a steady supply of hot water. From fixing heating issues to addressing leaks, our skilled technicians deliver reliable solutions, enhancing the efficiency and longevity of your water heater.</p>
                    </div>
                </li>
                <li className="services-page__list">
                    <div className="services-page__single">
                        <div className="services-page__icon">
                            <span className="icon-gas"></span>
                        </div>
                        <h3 className="services-page__title"><a href="single-service.html">Cookware Stove</a></h3>
                        <p className="services-page__text">Our cookware stove service offers expert repairs, maintenance, and troubleshooting to ensure your stove operates efficiently. Whether it's ignition problems, burner issues, or temperature inconsistencies, our skilled technicians provide reliable solutions to keep your stove in optimal working condition.</p>
                    </div>
                </li>
                <li className="services-page__list">
                    <div className="services-page__single">
                        <div className="services-page__icon">
                            <span className="icon-blender"></span>
                        </div>
                        <h3 className="services-page__title"><a href="single-service.html">Juicer Mixer</a></h3>
                        <p className="services-page__text">
                        Our juicer mixer service provides expert repairs, maintenance, and troubleshooting to keep your appliance running smoothly. From motor issues to faulty blades, our skilled technicians offer reliable solutions, ensuring your juicer mixer performs efficiently for all your food preparation needs.</p>
                    </div>
                </li>
                <li className="services-page__list">
                    <div className="services-page__single">
                        <div className="services-page__icon">
                            <span className="icon-ac"></span>
                        </div>
                        <h3 className="services-page__title"><a href="single-service.html">Air Conditioner</a></h3>
                        <p className="services-page__text">Our air conditioner service offers expert repairs, maintenance, and troubleshooting to ensure optimal cooling performance. From fixing cooling issues to cleaning filters and resolving leaks, our skilled technicians provide reliable solutions, helping your AC run efficiently and prolonging its lifespan.</p>
                    </div>
                </li>
                <li className="services-page__list">
                    <div className="services-page__single">
                        <div className="services-page__icon">
                            <span className="icon-plumbing"></span>
                        </div>
                        <h3 className="services-page__title"><a href="single-service.html">Plumbing</a></h3>
                        <p className="services-page__text">Our plumbing service provides expert repairs, maintenance, and troubleshooting for all your plumbing needs. From fixing leaks and clogged drains to installing new fixtures, our skilled technicians deliver reliable solutions to ensure your plumbing system functions efficiently and without hassle..</p>
                    </div>
                </li>
            </ul>

            {/* View All Services Button - Added right after Plumbing */}
            <div className="text-center" style={{ marginTop: '30px' }}>
                <Link to="all-category" className="btn" style={{
                    display: 'inline-block',
                    padding: '12px 30px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    transition: 'background-color 0.3s ease'
                }} 
                onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'} 
                onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}>
                    View All Services
                </Link>
            </div>

            <div className="services-page__bottom">
                <div className="services-page__img float-bob-x">
                    <img src="assets/images/services/services-page-img-1.png" alt=""/>
                </div>
            </div>
        </div>
    </section>

    <section className="contact-bar contact-bar-three">
        <div className="container">
            <div className="contact-bar__inne">
                <div className="contact-bar__bg" style={{backgroundImage: "url(assets/images/backgrounds/contact-bar-bg.jpg);"}}></div>
                <div className="contact-bar__left">
                    <div className="contact-bar__left-icon">
                        <span className="icon-diagnostic"></span>
                    </div>
                    <div className="contact-bar__left-content">
                        <h3 className="contact-bar__title">Do You Want Free Diagnostics ?</h3>
                        <p className="contact-bar__text">Get free diagnostics when ordering online from our website</p>
                    </div>
                </div>
                <div className="contact-bar__right">
                    <div className="contact-bar__call">
                        <div className="contact-bar__call-icon">
                            <img src="assets/images/icon/contact-bar-call-icon.png" alt=""/>
                        </div>
                        <div className="contact-bar__call-content">
                            <h4 className="contact-bar__call-number"><a href="tel:18004567890">+91 798 676 7032</a></h4>
                            <p className="contact-bar__call-time">Monday - Saturday : 9.30 am - 6.00 pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>



        </>
    )
}
export default Services;