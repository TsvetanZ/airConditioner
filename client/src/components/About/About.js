export const About = () => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.3s"
                src="https://media.istockphoto.com/id/1404189146/photo/technician-checking-the-operation-of-the-air-conditioner.webp?s=2048x2048&w=is&k=20&c=BJEZya5FF4gsegSE4suE2Gss6OeDAdNRlBH1fRfB4YA="
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="mb-4">
              <h5
                className="text-primary text-uppercase"
                style={{ letterSpacing: 5 }}
              >
                About Us
              </h5>
              <h1 className="display-5 mb-0">
                We Offers Quality Air Conditioner Systems &amp; Services
              </h1>
            </div>
            <h4 className="text-body fst-italic mb-4">
              Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem
              sit clita duo justo magna dolore
            </h4>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet et magna
            </p>
            <div className="row g-3">
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                <div
                  className="bg-primary d-flex flex-column justify-content-center text-center border-bottom border-5 border-secondary rounded p-3"
                  style={{ height: 200 }}
                >
                  <i className="fa fa-star fa-4x text-white mb-4" />
                  <h4 className="text-white mb-0">15 Years Experience</h4>
                </div>
              </div>
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.9s">
                <div
                  className="bg-secondary d-flex flex-column justify-content-center text-center border-bottom border-5 border-primary rounded p-3"
                  style={{ height: 200 }}
                >
                  <i className="fa fa-award fa-4x text-white mb-4" />
                  <h4 className="text-white mb-0">Award Winning</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};