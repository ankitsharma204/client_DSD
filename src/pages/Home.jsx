import axios from "axios";
import { useEffect, useState } from "react";
import { Server_URL, Server_URL2 } from "../utils/config";
import { utilityFuntions } from "../utils/module";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../utils/ToastHelper";

function Home() {


    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
        reset
    } = useForm();



    const [category, setCategory] = useState([]);

    const Navigate = useNavigate();


    async function getCategory() {
        try {
            const url = Server_URL + "AddCategory";
            const response = await axios.get(url);
            // console.log(headers);
            const { error, message } = response.data;
            if (error) {
                alert(message);
            } else {
                const { result } = response.data;
                setCategory(result);
            }
            // }
        } catch (error) {
            alert(error.message);
        }
    }

    useEffect(() => {
        getCategory();

    });

    async function sendCategoryId(id) {
        Navigate("particular-subcategory", { state: { id } });
    }


    const onSubmit = async (data) => {
        try {
            const url = `${Server_URL}add-question-us`;
            const res = await axios.post(url, data);
            const { error, message } = res.data;
            if (error) {
                showErrorToast(message);
            } else {
                reset();
                showSuccessToast(message);
            }
        } catch (error) {
            showErrorToast(error.message);
        }
    };


    return (
        <>
            <section className="main-slider">
                <div className="swiper-container thm-swiper__slider" data-swiper-options='{"slidesPerView": 1, "loop": true,
                "effect": "fade",
                "pagination": {
                "el": "#main-slider-pagination",
                "type": "bullets",
                "clickable": true
                },
                "navigation": {
                "nextEl": "#main-slider__swiper-button-next",
                "prevEl": "#main-slider__swiper-button-prev"
                },
                "autoplay": {
                "delay": 5000
                }}'>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            {/* <div className="main-slider__image" style="background-image: url(assets/images/backgrounds/main-slider-bg.jpg);"></div> */}
                            <div className="main-slider__image" style={{ backgroundImage: 'url(assets/images/backgrounds/main-slider-bg.jpg)' }}></div>
                            {/* <!-- /.image-layer --> */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-9">
                                        <div className="main-slider__content">
                                            <p className="main-slider__sub-title">We Provide ...</p>
                                            <h2 className="main-slider__title">Home Appliances <br />Repair Service</h2>
                                            <h4 className="main-slider__text">Same day service Guaranteed Or It’s Free!</h4>
                                            <p className="main-slider__text-two">
                                                * Call before 12 Noon, Monday - Friday <br />And we will be there <span>Today</span>, or our labour is <span>Free</span>
                                            </p>
                                            <div className="main-slider__btn-box">
                                                <a href="about.html" className="thm-btn main-slider__btn">Hire us now</a>
                                            </div>
                                            <div className="main-slider__badge">
                                                <img src="assets/images/resources/main-slider-badge.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            {/* <div className="main-slider__image" style="background-image: url(assets/images/backgrounds/main-slider-bg.jpg);"></div> */}
                            <div className="main-slider__image" style={{ backgroundImage: 'url(assets/images/backgrounds/main-slider-bg.jpg)' }}></div>
                            {/* <!-- /.image-layer --> */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-9">
                                        <div className="main-slider__content">
                                            <p className="main-slider__sub-title">We Provide ...</p>
                                            <h2 className="main-slider__title">Home Appliances <br />Repair Service</h2>
                                            <h4 className="main-slider__text">Same day service Guaranteed Or It’s Free!</h4>
                                            <p className="main-slider__text-two">
                                                * Call before 12 Noon, Monday - Friday <br />And we will be there <span>Today</span>, or our labour is <span>Free</span>
                                            </p>
                                            <div className="main-slider__btn-box">
                                                <a href="about.html" className="thm-btn main-slider__btn">Hire us now</a>
                                            </div>
                                            <div className="main-slider__badge">
                                                <img src="assets/images/resources/main-slider-badge.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="main-slider__nav">
                        <div className="swiper-button-prev" id="main-slider__swiper-button-next">
                            <i className="icon-left-arrow"></i>
                        </div>
                        <div className="swiper-button-next" id="main-slider__swiper-button-prev">
                            <i className="icon-right-arrow"></i>
                        </div>
                    </div> */}
                </div>
            </section>

            {/* experience and rating */}
            <section className="experience-and-rating">
                <div className="experience-and-rating__wrapper">
                    <div className="experience-and-rating__left">
                        <div className="experience-and-rating__left-content">
                            <div className="experience-and-rating__experience">
                                <div className="experience-and-rating__experience-shape-1"
                                    style={{ backgroundImage: "url(assets/images/shapes/experience-and-rating-experience-shape-1.jpg)" }}>
                                </div>
                                <div className="experience-and-rating__experience-year">
                                    <h2>20</h2>
                                    <h5>year of experience</h5>
                                </div>
                                <div className="experience-and-rating__experience-text-box">
                                    <p>Many years of experience in the repair of home equipment of various complexity.</p>
                                </div>
                            </div>
                            <div className="experience-and-rating__video">
                                <div className="experience-and-rating__video-bg"
                                    style={{ backgroundImage: "url(assets/images/backgrounds/experience-and-rating-video-bg.jpg)" }}>
                                </div>
                                <div className="experience-and-rating__video-link">
                                    <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                        <div className="experience-and-rating__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="experience-and-rating__right">
                        <div className="experience-and-rating__right-content">
                            <div className="experience-and-rating__rating-box">
                                <div className="experience-and-rating__rating-icon">
                                    <span className="icon-review"></span>
                                </div>
                                <p className="experience-and-rating__rating-text">Customers Trust and Love us. We’re rated 5/5
                                    out of 300 customer reviews.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* /////////////////////////////// */}
            <section className="additional-services-one">
                <div className="container">
                    <div className="section-title text-left">
                        <span className="section-title__tagline">Categories</span>
                        {/* <h2 className="section-title__title">Additional Services Rates</h2> */}
                    </div>
                    {/* <p className="additional-services-one__text">Try not to waver to ask any pipes or repairing questions by
                        means of phone, or reach through our contact structure underneath. Your message will be dispatched
                        direct to our staff who will answer when they can.</p> */}
                    <div className="row">
                        {category.slice(0, 4).map((value, index) => {
                            return (
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <div className="additional-services-one__single">
                                        <div className="additional-services-one__img">
                                            <img src={`${Server_URL2}${value.photo}`} alt={value.name} />
                                        </div>
                                        <div className="additional-services-one__content">
                                            <h2 onClick={() => sendCategoryId(value._id)}><Link>{value.name}</Link></h2>
                                            <h4>{value.description}</h4>
                                            {/* <h3><span>$</span>49</h3> */}
                                        </div>
                                    </div>
                                </div>

                            )

                        })}
                    </div>



                    {/* <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="additional-services-one__single">
                            <div className="additional-services-one__img">
                                <img src="assets/images/resources/additional-services-one-img-2.jpg" alt=""/>
                            </div>
                            <div className="additional-services-one__content">
                                <h4>Kitchen Hoob</h4>
                                <h3><span>$</span>79</h3>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="additional-services-one__single">
                            <div className="additional-services-one__img">
                                <img src="assets/images/resources/additional-services-one-img-3.jpg" alt=""/>
                            </div>
                            <div className="additional-services-one__content">
                                <h4>Microoven Repairing</h4>
                                <h3><span>$</span>37</h3>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="additional-services-one__single">
                            <div className="additional-services-one__img">
                                <img src="assets/images/resources/additional-services-one-img-4.jpg" alt=""/>
                            </div>
                            <div className="additional-services-one__content">
                                <h4>Water heater</h4>
                                <h3><span>$</span>29</h3>
                            </div>
                        </div>
                    </div> */}

                </div>
                <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
                    <Link className="btn btn-primary btn-lg fw-bold px-4 py-2 shadow-sm rounded" to="/all-category">
                        View All
                    </Link>
                </div>
            </section>



            {/* about*/}
            <section className="about-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5">
                            <div className="about-one__left">
                                <div className="about-one__img-box wow slideInLeft" data-wow-delay="100ms"
                                    data-wow-duration="2500ms">
                                    <div className="about-one__img">
                                        <img src="assets/images/resources/about-one-img-1.jpg" alt="" />
                                    </div>
                                    <div className="about-one__satisfaction">
                                        <div className="about-one__satisfaction-count-box">
                                            <h3>
                                                <span className="odometer" data-count="2.8">00</span>
                                                <span className="about-one__satisfaction-letter">k</span>
                                                <span className="about-one__satisfaction-plus">+</span>
                                            </h3>
                                        </div>
                                        <p className="about-one__satisfaction-text">Satisfied Clients <br /> In Our Locality</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="about-one__right">
                                <div className="section-title text-left">
                                    <span className="section-title__tagline">about our company</span>
                                    <h2 className="section-title__title">Complete Solution for all Your Home Appliance Problems
                                    </h2>
                                </div>
                                <p className="about-one__text-1">Provides you with the services that you need the most </p>
                                <p className="about-one__text-2">InstantCare is a versatile service provider company that connects customers with expert professionals for a wide range of household tasks. Whether you need AC repairs, plumbing, electrical work, painting, or general home maintenance, HomeFix Solutions offers reliable, skilled technicians for all your needs. The company prides itself on delivering high-quality services quickly and efficiently, ensuring customer satisfaction with every job. By working with a network of trusted providers, HomeFix Solutions makes it easy for homeowners to find the right professionals for any household task, all through one convenient platform.</p>
                                <div className="about-one__points-box">
                                    <ul className="about-one__points-list list-unstyled">
                                        <li>
                                            <div className="about-one__points-icon">
                                                <span className="icon-comment"></span>
                                            </div>
                                            <div className="about-one__points-text">
                                                <p>Highly Professional Staff</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="about-one__points-icon">
                                                <span className="icon-comment"></span>
                                            </div>
                                            <div className="about-one__points-text">
                                                <p>100% Satisfaction Guarantee</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="about-one__points-icon">
                                                <span className="icon-comment"></span>
                                            </div>
                                            <div className="about-one__points-text">
                                                <p>Quality Control System</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="about-one__points-list list-unstyled">
                                        <li>
                                            <div className="about-one__points-icon">
                                                <span className="icon-comment"></span>
                                            </div>
                                            <div className="about-one__points-text">
                                                <p>Accourate Testing Process</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="about-one__points-icon">
                                                <span className="icon-comment"></span>
                                            </div>
                                            <div className="about-one__points-text">
                                                <p>Unrivalle Workmanship</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="about-one__points-icon">
                                                <span className="icon-comment"></span>
                                            </div>
                                            <div className="about-one__points-text">
                                                <p>Timely Delivery</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* why choose start */}
            <section className="why-choose-one">
                <div className="why-choose-one__img-1">
                    <img src="assets/images/resources/why-choose-one-img-1.jpg" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9">
                            <div className="why-choose-one__content">
                                <div className="section-title text-left">
                                    <span className="section-title__tagline">why choose us</span>
                                    <h2 className="section-title__title">Our Advantages</h2>
                                </div>
                                <p className="why-choose-one__text">InstantCare offers several key advantages to homeowners. First, it provides a one-stop platform for accessing a variety of expert services, saving time and effort in finding multiple providers for different tasks. Customers can trust the professionals connected by InstantCare, as they are vetted for their experience and reliability, ensuring quality work. The company offers flexibility in scheduling, making it easy to book services at convenient times. Additionally, with competitive pricing and transparent cost estimates, customers can manage their budgets effectively. Whether it's urgent repairs or routine maintenance, InstantCare ensures prompt and efficient service, enhancing the overall convenience and peace of mind for homeowners.</p>
                                <div className="why-choose-one__points-box">
                                    <ul className="list-unstyled why-choose-one__points">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-clock"></span>
                                            </div>
                                            <div className="text">
                                                <p>We Perform All <br /> Work On Time</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-home"></span>
                                            </div>
                                            <div className="text">
                                                <p>Professional <br /> Standard</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="list-unstyled why-choose-one__points why-choose-one__points-two">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-guarantee"></span>
                                            </div>
                                            <div className="text">
                                                <p>We Guarantee <br /> Spare Parts</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-worker"></span>
                                            </div>
                                            <div className="text">
                                                <p>Over 18 Year <br /> Of Experience</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* process start */}
            <section className="process">
                <div className="container">
                    <div className="section-title text-left">
                        <span className="section-title__tagline">Our Process</span>
                        <h2 className="section-title__title">Get Our Service In 4 Steps</h2>
                    </div>
                    <div className="row">

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="process__single">
                                <div className="process__count"></div>
                                <div className="process__icon">
                                    <span className="icon-contact"></span>
                                </div>
                                <div className="process__title-box">
                                    <h4 className="process__title">Contact Us</h4>
                                    <p className="process__sub-title">First Step of Process</p>
                                </div>
                                {/* <p className="process__text">Perspiciatis unde omnis iste natus error voluptatem</p> */}
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="process__single">
                                <div className="process__count"></div>
                                <div className="process__icon">
                                    <span className="icon-conversation"></span>
                                </div>
                                <div className="process__title-box">
                                    <h4 className="process__title">Breakdown Analysis</h4>
                                    <p className="process__sub-title">Second Step of Process</p>
                                </div>
                                {/* <p className="process__text">Perspiciatis unde omnis iste natus error voluptatem</p> */}
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="process__single">
                                <div className="process__count"></div>
                                <div className="process__icon">
                                    <span className="icon-repair"></span>
                                </div>
                                <div className="process__title-box">
                                    <h4 className="process__title">Performing Repairs</h4>
                                    <p className="process__sub-title">Third Step of Process</p>
                                </div>
                                {/* <p className="process__text">Perspiciatis unde omnis iste natus error voluptatem</p> */}
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="process__single">
                                <div className="process__count"></div>
                                <div className="process__icon">
                                    <span className="icon-fixed"></span>
                                </div>
                                <div className="process__title-box">
                                    <h4 className="process__title">Fix the Problem</h4>
                                    <p className="process__sub-title">Fourth Step of Process</p>
                                </div>
                                {/* <p className="process__text">Perspiciatis unde omnis iste natus error voluptatem</p> */}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* contact bar start */}
            <section className="contact-bar">
                <div className="container">
                    <div className="contact-bar__inne">
                        <div className="contact-bar__bg"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/contact-bar-bg.jpg)' }}></div>
                        <div className="contact-bar__left">
                            <div className="contact-bar__left-icon">
                                <span className="icon-diagnostic"></span>
                            </div>
                            <div className="contact-bar__left-content">
                                <h3 className="contact-bar__title">Do You Want Free Diagnostics ?</h3>
                                <p className="contact-bar__text">Get free diagnostics when ording online from our website</p>
                            </div>
                        </div>
                        <div className="contact-bar__right">
                            <div className="contact-bar__call">
                                <div className="contact-bar__call-icon">
                                    <img src="assets/images/icon/contact-bar-call-icon.png" alt="" />
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

            {/* team start */}
            <section className="team-one">
                <div className="container">
                    <div className="section-title text-left">
                        <span className="section-title__tagline">Our Professionals</span>
                        <h2 className="section-title__title">Our Dedicated Team</h2>
                    </div>
                    <div className="row">

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms;">
                            <div className="team-one__single">
                                <div className="team-one__img-box">
                                    <div className="team-one__img">
                                        <img src="assets/images/team/team-1-1.jpg" alt="" />
                                        <div className="team-one__shape-1">
                                            <img src="assets/images/shapes/team-one-shape-1.png" alt="" />
                                        </div>
                                        <div className="team-one__icon">
                                            <a href="#"><span className="fas fa-share-alt"></span></a>
                                            <div className="team-one__social-box">
                                                <ul className="list-unstyled team-one__social">
                                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-one__content">
                                        <h3 className="team-one__name"><a href="team.html">Robert Joe</a></h3>
                                        <p className="team-one__subtitle">Ceo of company</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="team-one__single">
                                <div className="team-one__img-box">
                                    <div className="team-one__img">
                                        <img src="assets/images/team/team-1-2.jpg" alt="" />
                                        <div className="team-one__shape-1">
                                            <img src="assets/images/shapes/team-one-shape-1.png" alt="" />
                                        </div>
                                        <div className="team-one__icon">
                                            <a href="#"><span className="fas fa-share-alt"></span></a>
                                            <div className="team-one__social-box">
                                                <ul className="list-unstyled team-one__social">
                                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-one__content">
                                        <h3 className="team-one__name"><a href="team.html">Robert Mick</a></h3>
                                        <p className="team-one__subtitle">Founder</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="team-one__single">
                                <div className="team-one__img-box">
                                    <div className="team-one__img">
                                        <img src="assets/images/team/team-1-3.jpg" alt="" />
                                        <div className="team-one__shape-1">
                                            <img src="assets/images/shapes/team-one-shape-1.png" alt="" />
                                        </div>
                                        <div className="team-one__icon">
                                            <a href="#"><span className="fas fa-share-alt"></span></a>
                                            <div className="team-one__social-box">
                                                <ul className="list-unstyled team-one__social">
                                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-one__content">
                                        <h3 className="team-one__name"><a href="team.html">Mike Hardson</a></h3>
                                        <p className="team-one__subtitle">Funder</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="team-one__single">
                                <div className="team-one__img-box">
                                    <div className="team-one__img">
                                        <img src="assets/images/team/team-1-4.jpg" alt="" />
                                        <div className="team-one__shape-1">
                                            <img src="assets/images/shapes/team-one-shape-1.png" alt="" />
                                        </div>
                                        <div className="team-one__icon">
                                            <a href="#"><span className="fas fa-share-alt"></span></a>
                                            <div className="team-one__social-box">
                                                <ul className="list-unstyled team-one__social">
                                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-one__content">
                                        <h3 className="team-one__name"><a href="team.html">Kevin Martin</a></h3>
                                        <p className="team-one__subtitle">Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* tetimonial start */}
            <section className="testimonial-one">
                <div className="testimonial-one__bg"
                    style={{ backgroundImage: "url(assets/images/backgrounds/testimonial-one-bg.jpg)" }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="testimonial-one__content-box">
                                <div className="testimonial-one__title-box">
                                    <h5>testimonials</h5>
                                </div>
                                <div className="testimonial-one__carousel thm-owl__carousel owl-theme owl-carousel"
                                    data-owl-options='{
                                "items": 3,
                                "margin": 30,
                                "smartSpeed": 700,
                                "loop":true,
                                "autoplay": 6000,
                                "nav":false,
                                "dots":true,
                                "navText": ["<span className=\"fa fa-angle-left\"></span>","<span className=\"fa fa-angle-right\"></span>"],
                                "responsive":{
                                    "0":{
                                        "items":1
                                    },
                                    "768":{
                                        "items":1
                                    },
                                    "992":{
                                        "items": 1
                                    }
                                }
                            }'>

                                    <div className="item">
                                        <div className="testimonial-one__single">
                                            <div className="testimonial-one__content">
                                                <div className="testimonial-one__shape-1">
                                                    <img src="assets/images/shapes/testimonial-one-shape-1.png" alt="" />
                                                </div>
                                                <div className="testimonial-one__shape-2">
                                                    <img src="assets/images/shapes/testimonial-one-shape-2.png" alt="" />
                                                </div>
                                                <div className="testimonial-one__quote">
                                                    <i className="fas fa-quote-left"></i>
                                                </div>
                                                <p className="testimonial-one__text"> "I’ve used InstantCare several times for different services around my house, from plumbing to painting. Every time, the technicians have been professional, efficient, and friendly. They always complete the work on time and do an excellent job. I love how easy it is to book services through their platform!"</p>
                                            </div>
                                            <div className="testimonial-one__client-info">
                                                <div className="testimonial-one__client-img">
                                                    <img src="assets/images/testimonial/testimonial-1-1.jpg" alt="" />
                                                </div>
                                                <div className="testimonial-one__client-content">
                                                    <p className="testimonial-one__client-name">- Michale John</p>
                                                    {/* <h5 className="testimonial-one__client-title">Ceo of Minda</h5> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="testimonial-one__single">
                                            <div className="testimonial-one__content">
                                                <div className="testimonial-one__shape-1">
                                                    <img src="assets/images/shapes/testimonial-one-shape-1.png" alt="" />
                                                </div>
                                                <div className="testimonial-one__shape-2">
                                                    <img src="assets/images/shapes/testimonial-one-shape-2.png" alt="" />
                                                </div>
                                                <div className="testimonial-one__quote">
                                                    <i className="fas fa-quote-left"></i>
                                                </div>
                                                <p className="testimonial-one__text">"My AC stopped working during a heatwave, and I needed repairs fast. InstantCare sent a technician within hours, and they had it fixed in no time. The service was affordable, and the technician was knowledgeable and courteous. Highly recommend!"</p>
                                            </div>
                                            <div className="testimonial-one__client-info">
                                                <div className="testimonial-one__client-img">
                                                    {/* <img src="assets/images/testimonial/testimonial-1-2.jpg" alt="" /> */}
                                    <img src="assets/images/team/team-1-7.jpg" alt=""/>

                                                </div>
                                                <div className="testimonial-one__client-content">
                                                    <p className="testimonial-one__client-name">- Michale Golf</p>
                                                    {/* <h5 className="testimonial-one__client-title">Ceo of Minda</h5> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="testimonial-one__single">
                                            <div className="testimonial-one__content">
                                                <div className="testimonial-one__shape-1">
                                                    <img src="assets/images/shapes/testimonial-one-shape-1.png" alt="" />
                                                </div>
                                                <div className="testimonial-one__shape-2">
                                                    <img src="assets/images/shapes/testimonial-one-shape-2.png" alt="" />
                                                </div>
                                                <div className="testimonial-one__quote">
                                                    <i className="fas fa-quote-left"></i>
                                                </div>
                                                <p className="testimonial-one__text">"I had a leaky pipe and wasn’t sure who to call. A friend recommended InstantCare, and I couldn’t be happier with the experience. The plumber who came was punctual, professional, and fixed the issue quickly. The whole process was seamless and stress-free."</p>
                                            </div>
                                            <div className="testimonial-one__client-info">
                                                <div className="testimonial-one__client-img">
                                                    {/* <img src="assets/images/testimonial/testimonial-1-1.jpg" alt="" /> */}
                                                    {/* <img src="assets/images/team/team-1-4.jpg" alt="" /> */}
                                                    <img src="assets/images/team/team-1-6.jpg" alt=""/>


                                                </div>
                                                <div className="testimonial-one__client-content">
                                                    <p className="testimonial-one__client-name">- Michale Pole</p>
                                                    {/* <h5 className="testimonial-one__client-title">Ceo of Minda</h5> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="testimonial-one__single">
                                            <div className="testimonial-one__content">
                                                <div className="testimonial-one__shape-1">
                                                    <img src="assets/images/shapes/testimonial-one-shape-1.png" alt="" />
                                                </div>
                                                <div className="testimonial-one__shape-2">
                                                    <img src="assets/images/shapes/testimonial-one-shape-2.png" alt="" />
                                                </div>
                                                <div className="testimonial-one__quote">
                                                    <i className="fas fa-quote-left"></i>
                                                </div>
                                                <p className="testimonial-one__text"> "I wanted to repaint my living room, and InstantCare connected me with a fantastic painter who transformed the space. The work was high-quality, and the pricing was fair. I’m so glad I found a reliable service provider for all my home needs!"</p>
                                            </div>
                                            <div className="testimonial-one__client-info">
                                                <div className="testimonial-one__client-img">
                                                    <img src="assets/images/blog/blog-1-3.jpg" alt="" />
                                                    {/* <img src="assets/images/testimonial/testimonial-1-2.jpg" alt="" /> */}
                                                </div>
                                                <div className="testimonial-one__client-content">
                                                    <p className="testimonial-one__client-name">- Adam Milne</p>
                                                    {/* <h5 className="testimonial-one__client-title">Ceo of Minda</h5> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* faq start */}
            <section className="faq-one">
                <div className="faq-one__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/faq-one-bg.jpg)' }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="faq-one__left">
                                <div className="section-title text-left">
                                    <span className="section-title__tagline">Get Answers</span>
                                    <h2 className="section-title__title">Do You Have Questions Appliance Repairs</h2>
                                </div>
                                <div className="faq-one__faq-box">
                                    <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                                        <div className="accrodion active">
                                            <div className="accrodion-title">
                                                <h4>01. Do you have any questions about our services?</h4>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p><b>We’re here to assist you! Whether you’re unsure about which service to choose, have questions about pricing, or need more information about the professionals we work with, feel free to ask. Our team will answer all your queries and can also arrange a call to discuss your specific needs in detail.</b></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accrodion">
                                            <div className="accrodion-title">
                                                <h4>02. How do I book a service with HomeFix Solutions?</h4>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p><b>Booking a service is simple and hassle-free. You can easily schedule a professional through our website or app. Just select the service you need, choose a time that works best for you, and we’ll take care of the rest. Our team will ensure the right expert is assigned to your task.</b></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accrodion">
                                            <div className="accrodion-title">
                                                <h4>03. Are your technicians qualified and vetted?</h4>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p><b>Yes, all our technicians are carefully vetted for their expertise and reliability. We only work with professionals who have proven experience in their respective fields, ensuring that your home receives the highest standard of service.</b></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accrodion">
                                            <div className="accrodion-title">
                                                <h4>04. What types of services do you offer?</h4>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p><b>InstantCare offers a broad range of household services, including AC repairs, plumbing, electrical work, painting, general maintenance, and more. Whether you need minor repairs or major installations, our network of skilled professionals is equipped to handle a variety of tasks to keep your home in top condition.</b></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="faq-one__right">
                                <div className="faq-one__form-box wow slideInRight" data-wow-delay="100ms"
                                    data-wow-duration="2500ms">
                                    <h2>Send Your Message to Us</h2>
                                    <p>Please feel free to get in touch using the form below. We’d love to hear for you..
                                    </p>
                                    {/* <form action="https://bracketweb.com/assimox-html/assets/inc/sendemail.php" className="faq-one__form comment-form-2-validated"
                                        novalidate="novalidate"> */}
                                    <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="faq-one__form-input-box">
                                                    <input {...register('fullname', { required: true })} className="form-control shadow" type="text" placeholder="please enter your fullname" />
                                                    {errors.fullname && <p className="text-danger">please enter the desired field</p>}
                                                </div>
                                            </div>

                                            <div className="col-xl-12">
                                                <div className="faq-one__form-input-box">
                                                    {/* <input type="text" placeholder="Phone No." name="Phone" /> */}
                                                    <input {...register('phone', { required: true })} className="form-control shadow" type="text" placeholder="please enter your number" />
                                                    {errors.phone && <p className="text-danger">please enter the desired field</p>}
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="faq-one__form-input-box">
                                                    {/* <input type="email" placeholder="Email Address" name="email" /> */}
                                                    <input {...register('email', { required: true })} className="form-control shadow" type="email" placeholder="please enter your email" />
                                                    {errors.email && <p className="text-danger">please enter the desired field</p>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="faq-one__form-input-box text-message-box">
                                                    {/* <textarea name="message" placeholder="Message"></textarea> */}
                                                    <textarea {...register('message')} cols="30" rows="10" placeholder="message" id="message"></textarea>
                                                </div>
                                                <div className="faq-one__form-btn-box">
                                                    <button type="submit" className=" thm-btn faq-one__form-btn">send
                                                        request</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* blog start */}
            {/* <section className="blog-one">
                <div className="container">
                    <div className="blog-one__top">
                        <div className="row">
                            <div className="col-xl-7 col-lg-6">
                                <div className="blog-one__top-left">
                                    <div className="section-title text-left">
                                        <span className="section-title__tagline">our blogs</span>
                                        <h2 className="section-title__title">News & Articles</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="blog-one__top-right">
                                    <p className="blog-one__top-text-1">At the end of the day, going forward, a new normal that
                                        has evolved from generation X is on the runway heading towards a streamlined cloud
                                        solution.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-one__bottom">
                        <div className="row">

                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <img src="assets/images/blog/blog-1-1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="blog-one__content-box">
                                        <div className="blog-one__date">
                                            <p><span>Admin</span>17 March 2022</p>
                                        </div>
                                        <h3 className="blog-one__title"><a href="blog-details.html">How we can fix any problem
                                            in household
                                            things.</a></h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                                <div className="blog-one__single active">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <img src="assets/images/blog/blog-1-2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="blog-one__content-box">
                                        <div className="blog-one__date">
                                            <p><span>Admin</span>17 March 2022</p>
                                        </div>
                                        <h3 className="blog-one__title"><a href="blog-details.html">Lorem ipsum dolor sit amet,
                                            consectetur
                                            adipiscing</a></h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <img src="assets/images/blog/blog-1-3.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="blog-one__content-box">
                                        <div className="blog-one__date">
                                            <p><span>Admin</span>17 March 2022</p>
                                        </div>
                                        <h3 className="blog-one__title"><a href="blog-details.html">Nulla tristique elit turpis,
                                            quis tempus
                                            metus ipsum text</a></h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section> */}
        </>


    )
}
export default Home;