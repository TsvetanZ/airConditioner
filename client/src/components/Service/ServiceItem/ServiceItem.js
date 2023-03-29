export const ServiceItem = ({
    name,
    imgUrl,
    genres

}) => {
    return(
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item bg-light border-bottom border-5 border-primary rounded">
                <div className="position-relative p-5">
                    <img className="d-block display-1 fw-normal text-secondary mb-3" src={imgUrl} alt={name} />
                  <h5 className="text-primary mb-0">{genres}</h5>
                  <h3 className="mb-3">Ehoo</h3>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                    elitr dolor amet sit
                  </p>
                  <a href="">
                    Read More
                    <i className="bi bi-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
    );
};