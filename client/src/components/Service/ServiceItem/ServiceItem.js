import styles from './ServiceItem.module.css';
export const ServiceItem = ({
    name,
    imgUrl,
    genres

}) => {
    return(
      <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
      <div className="position-relative border border-primary rounded">
        <div className="bg-primary text-center pt-5 pb-4">
          <h3 className="text-white">{name}</h3>
        </div>
        <div className="text-center py-5">
        <img className={styles.imageStyle} src={imgUrl} alt="" />
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
    );
};