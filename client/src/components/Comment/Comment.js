export const Comment = () => {
    return (
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
    );
};