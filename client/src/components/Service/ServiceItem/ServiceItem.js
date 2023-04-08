import { Link } from 'react-router-dom';
import styles from './ServiceItem.module.css';
export const ServiceItem = ({
  category,
height,
imageUrl,
length,
summary,
title,
width,
_id


}) => {
    return(
      <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
      <div className="position-relative border border-primary rounded">
        <div className="bg-primary text-center pt-5 pb-4">
          <h3 className="text-white">{title}</h3>
        </div>
        <div className="text-center py-5">
        <img className={styles.imageStyle} src={imageUrl} alt={title} />
          <p className="border-bottom border-light mb-2 pb-2">
            {category}
          </p>
          <p className="border-bottom border-light mb-2 pb-2">
            Height{height}
          </p>
          <p className="border-bottom border-light mb-2 pb-2">
            {length}
          </p>
          <p className="border-bottom border-light mb-2 pb-2">
            Summary{summary}
          </p>
          <p className="mb-2 pb-2">Width{width}</p>
        </div>
        <Link to={`/service/${_id}`} 
          className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
        >
          Details
        </Link>
      </div>
    </div>
    );
};