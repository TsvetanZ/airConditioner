import { Link } from 'react-router-dom'
import bestAirConditioner from './bestAirConditioner.jpeg'
export const Home = () => {
    return (
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel">
    
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src={bestAirConditioner} alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 900 }}>
                <h5 className="text-white text-uppercase animated bounceInDown">
                  Best  Services
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                  Services &amp; We give you comfort and warmth
                </h1>

                <Link to={'/service'} className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                Get Quote Air Conditionre
                </Link>
               
                <Link to={'/contact'} className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                Contact Us
                </Link>
                
              </div>
            </div>
          </div>    
        </div>      
    </div>
    );
};