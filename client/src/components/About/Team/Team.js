export const Team =() => {
    return(
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
    ); 
};