import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import {Navigation} from './components/Navigation/Navigation';
import {Home} from './components/Home/Home';
import { Footer } from './components/Footer/Footer.js';
import { Login} from './components/Login/Login';
import {Register} from './components/Register/Register';
import { Create } from './components/Create/Create';


function App() {

  const [airConditioners, setAirConditioner] = useState([]);

  useEffect(() => {

  },[]);

  return (
  <>
  <Navigation />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/create' element={<Create />} />
    <Route path='/register' element={<Register />} />
    <Route path='/register' element={<Register />} />
  </Routes>
   

  
    {/* Services Start */}
   
    {/* Services End */}
    {/* Pricing Plan Start */}
    <div
      className="container-fluid py-5 wow fadeInUp"
      data-wow-delay="0.1s"
      style={{ marginBottom: 75 }}
    >
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
          <h5
            className="text-primary text-uppercase"
            style={{ letterSpacing: 5 }}
          >
            Pricing Plan
          </h5>
          <h1 className="display-5 mb-0">
            Pricing Plan For CCTV Security Services
          </h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div className="position-relative border border-primary rounded">
              <div className="bg-primary text-center pt-5 pb-4">
                <h3 className="text-white">Basic Plan</h3>
                <h1 className="display-4 text-white">
                  <small
                    className="align-top"
                    style={{ fontSize: 22, lineHeight: 45 }}
                  >
                    $
                  </small>
                  49
                  <small
                    className="align-bottom"
                    style={{ fontSize: 16, lineHeight: 40 }}
                  >
                    / Mo
                  </small>
                </h1>
              </div>
              <div className="text-center py-5">
                <p className="border-bottom border-light mb-2 pb-2">
                  HTML5 &amp; CSS3
                </p>
                <p className="border-bottom border-light mb-2 pb-2">
                  Bootstrap v5
                </p>
                <p className="border-bottom border-light mb-2 pb-2">
                  Responsive Layout
                </p>
                <p className="border-bottom border-light mb-2 pb-2">
                  Browsers Compatibility
                </p>
                <p className="mb-2 pb-2">Easy to Use</p>
              </div>
              <a
                href=""
                className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
              >
                Order Now
              </a>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
            <div className="position-relative border border-secondary rounded">
              <div className="bg-secondary text-center pt-5 pb-4">
                <h3 className="text-white">Standard Plan</h3>
                <h1 className="display-4 text-white">
                  <small
                    className="align-top"
                    style={{ fontSize: 22, lineHeight: 45 }}
                  >
                    $
                  </small>
                  49
                  <small
                    className="align-bottom"
                    style={{ fontSize: 16, lineHeight: 40 }}
                  >
                    / Mo
                  </small>
                </h1>
              </div>
              <div className="text-center py-5">
                <p className="border-bottom border-light mb-2 pb-2">
                  HTML5 &amp; CSS3
                </p>
                <p className="border-bottom border-light mb-2 pb-2">
                  Bootstrap v5
                </p>
                <p className="border-bottom border-light mb-2 pb-2">
                  Responsive Layout
                </p>
                <p className="border-bottom border-light mb-2 pb-2">
                  Browsers Compatibility
                </p>
                <p className="mb-2 pb-2">Easy to Use</p>
              </div>
              <a
                href=""
                className="btn btn-secondary py-2 px-4 position-absolute top-100 start-50 translate-middle"
              >
                Order Now
              </a>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
            <div className="position-relative border border-primary rounded">
              <div className="bg-primary text-center pt-5 pb-4">
                <h3 className="text-white">Extended Plan</h3>
                <h1 className="display-4 text-white">
                  <small
                    className="align-top"
                    style={{ fontSize: 22, lineHeight: 45 }}
                  >
                    $
                  </small>
                  49
                  <small
                    className="align-bottom"
                    style={{ fontSize: 16, lineHeight: 40 }}
                  >
                    / Mo
                  </small>
                </h1>
              </div>
              <div className="text-center py-5">
                <p className="border-bottom border-light mb-2 pb-2">
                  HTML5 &amp; CSS3
                </p>
                <p className="border-bottom border-light mb-2 pb-2">
                  Bootstrap v5
                </p>
                <p className="border-bottom border-light mb-2 pb-2">
                  Responsive Layout
                </p>
                <p className="border-bottom border-light mb-2 pb-2">
                  Browsers Compatibility
                </p>
                <p className="mb-2 pb-2">Easy to Use</p>
              </div>
              <a
                href=""
                className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Pricing Plan End */}
    {/* Offer Start */}
    <div
      className="container-fluid bg-offer my-5 py-5 wow zoomIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-7 text-center">
            <div className="text-center mx-auto mb-4" style={{ maxWidth: 600 }}>
              <h5
                className="text-white text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                Special Offer
              </h5>
              <h1 className="display-5 text-white">
                Save 50% On All Items Your First Order
              </h1>
            </div>
            <p className="text-white mb-4">
              Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et
              dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos
              vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr ut
              dolores magna sit. Sea dolore sed et.
            </p>
            <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">
              Order Now
            </a>
            <a href="" className="btn btn-secondary py-md-3 px-md-5">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Offer End */}
    {/* Team Start */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
          <h5
            className="text-primary text-uppercase"
            style={{ letterSpacing: 5 }}
          >
            Team Members
          </h5>
          <h1 className="display-5 mb-0">Our Professional Team Members</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div className="position-relative rounded-top">
              <img
                className="img-fluid rounded-top w-100"
                src="img/team-1.jpg"
                alt=""
              />
              <div
                className="position-absolute bottom-0 end-0 d-flex flex-column bg-white p-1"
                style={{ marginRight: "-25px" }}
              >
                <a className="btn btn-outline-secondary btn-square m-1" href="#">
                  <i className="fab fa-twitter fw-normal" />
                </a>
                <a className="btn btn-outline-secondary btn-square m-1" href="#">
                  <i className="fab fa-facebook-f fw-normal" />
                </a>
                <a className="btn btn-outline-secondary btn-square m-1" href="#">
                  <i className="fab fa-linkedin-in fw-normal" />
                </a>
                <a className="btn btn-outline-secondary btn-square m-1" href="#">
                  <i className="fab fa-instagram fw-normal" />
                </a>
              </div>
            </div>
            <div className="bg-primary text-center rounded-bottom p-4">
              <h3 className="text-white">Full Name</h3>
              <p className="text-white m-0">Designation</p>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
            <div className="position-relative rounded-top">
              <img
                className="img-fluid rounded-top w-100"
                src="img/team-2.jpg"
                alt=""
              />
              <div
                className="position-absolute bottom-0 end-0 d-flex flex-column bg-white p-1"
                style={{ marginRight: "-25px" }}
              >
                <a className="btn btn-outline-secondary btn-square m-1" href="#">
                  <i className="fab fa-twitter fw-normal" />
                </a>
                <a className="btn btn-outline-secondary btn-square m-1" href="#">
                  <i className="fab fa-facebook-f fw-normal" />
                </a>
                <a className="btn btn-outline-secondary btn-square m-1" href="#">
                  <i className="fab fa-linkedin-in fw-normal" />
                </a>
                <a className="btn btn-outline-secondary btn-square m-1" href="#">
                  <i className="fab fa-instagram fw-normal" />
                </a>
              </div>
            </div>
            <div className="bg-primary text-center rounded-bottom p-4">
              <h3 className="text-white">Full Name</h3>
              <p className="text-white m-0">Designation</p>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
            <div className="position-relative rounded-top">
              <img
                className="img-fluid rounded-top w-100"
                src="img/team-3.jpg"
                alt=""
              />
              <div
                className="position-absolute bottom-0 end-0 d-flex flex-column bg-white p-1"
                style={{ marginRight: "-25px" }}
              >
                <a className="btn btn-outline-secondary btn-square m-1" href="#">
                  <i className="fab fa-twitter fw-normal" />
                </a>
                <a className="btn btn-outline-secondary btn-square m-1" href="#">
                  <i className="fab fa-facebook-f fw-normal" />
                </a>
                <a className="btn btn-outline-secondary btn-square m-1" href="#">
                  <i className="fab fa-linkedin-in fw-normal" />
                </a>
                <a className="btn btn-outline-secondary btn-square m-1" href="#">
                  <i className="fab fa-instagram fw-normal" />
                </a>
              </div>
            </div>
            <div className="bg-primary text-center rounded-bottom p-4">
              <h3 className="text-white">Full Name</h3>
              <p className="text-white m-0">Designation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Team End */}
    {/* Testimonial Start */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
          <h5
            className="text-primary text-uppercase"
            style={{ letterSpacing: 5 }}
          >
            Testimonial
          </h5>
          <h1 className="display-5 mb-0">What People Say About Our Services</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          <div className="text-center pb-4">
            <img
              className="img-fluid mx-auto rounded-circle"
              src="img/testimonial-1.jpg"
              style={{ width: 100, height: 100 }}
            />
            <div className="testimonial-text bg-light rounded p-4 mt-n5">
              <p className="mt-5">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <h4 className="text-truncate">Client Name</h4>
              <i>Profession</i>
            </div>
          </div>
          <div className="text-center">
            <img
              className="img-fluid mx-auto rounded-circle"
              src="img/testimonial-2.jpg"
              style={{ width: 100, height: 100 }}
            />
            <div className="testimonial-text bg-light rounded p-4 mt-n5">
              <p className="mt-5">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <h4 className="text-truncate">Client Name</h4>
              <i>Profession</i>
            </div>
          </div>
          <div className="text-center">
            <img
              className="img-fluid mx-auto rounded-circle"
              src="img/testimonial-3.jpg"
              style={{ width: 100, height: 100 }}
            />
            <div className="testimonial-text bg-light rounded p-4 mt-n5">
              <p className="mt-5">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <h4 className="text-truncate">Client Name</h4>
              <i>Profession</i>
            </div>
          </div>
          <div className="text-center">
            <img
              className="img-fluid mx-auto rounded-circle"
              src="img/testimonial-4.jpg"
              style={{ width: 100, height: 100 }}
            />
            <div className="testimonial-text bg-light rounded p-4 mt-n5">
              <p className="mt-5">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <h4 className="text-truncate">Client Name</h4>
              <i>Profession</i>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Testimonial End */}
    {/* Blog Start */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
          <h5
            className="text-primary text-uppercase"
            style={{ letterSpacing: 5 }}
          >
            Blog Post
          </h5>
          <h1 className="display-5 mb-0">Latest Articles From Our Blog Post</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
            <div className="blog-item">
              <div className="position-relative">
                <img
                  className="img-fluid w-100 rounded-top"
                  src="img/blog-1.jpg"
                  alt=""
                />
                <div className="blog-date">
                  <h5 className="text-white fw-bold mb-0">01</h5>
                  <h6 className="text-light mb-0">January</h6>
                </div>
              </div>
              <div className="bg-primary rounded-bottom p-5">
                <div className="d-flex mb-3">
                  <span className="text-light text-uppercase">Admin</span>
                  <span className="text-light px-2">|</span>
                  <span className="text-light text-uppercase">Web Design</span>
                </div>
                <a className="h3 m-0 text-white" href="">
                  Kasd dolor lorem sit justo rebum stet justo elitr dolor amet sit
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
            <div className="blog-item">
              <div className="position-relative">
                <img
                  className="img-fluid w-100 rounded-top"
                  src="img/blog-2.jpg"
                  alt=""
                />
                <div className="blog-date">
                  <h5 className="text-white fw-bold mb-0">01</h5>
                  <h6 className="text-light mb-0">January</h6>
                </div>
              </div>
              <div className="bg-primary rounded-bottom p-5">
                <div className="d-flex mb-3">
                  <span className="text-light text-uppercase">Admin</span>
                  <span className="text-light px-2">|</span>
                  <span className="text-light text-uppercase">Web Design</span>
                </div>
                <a className="h3 m-0 text-white" href="">
                  Kasd dolor lorem sit justo rebum stet justo elitr dolor amet sit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Blog End */}
    {/* Footer Start */}
    < Footer />
   
    {/* <div className="container-fluid bg-primary text-light py-4">
      <div className="container">
        <div className="row g-5">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-md-0">
              ©{" "}
              <a className="text-white border-bottom" href="#">
                Your Site Name
              </a>
              . All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">
              Designed by{" "}
              <a
                className="text-white border-bottom"
                href="https://htmlcodex.com"
              >
                HTML Codex
              </a>
            </p>
          </div>
        </div>
      </div>
    </div> */}
    {/* Footer End */}
    {/* Back to Top */}
    <a
      href="#"
      className="btn btn-lg btn-secondary btn-lg-square rounded back-to-top"
    >
      <i className="bi bi-arrow-up" />
    </a>
    {/* JavaScript Libraries */}
    {/* Template Javascript */}

  </>

  
  );
}

export default App;
