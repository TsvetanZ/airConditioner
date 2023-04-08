import { useAirServiceContext } from "../../contexts/AirServiceContext";
import { ServiceItem } from "./ServiceItem/ServiceItem";
export const Service = () => {
// export const Service = ({serviceAsks}) => {
  const {serviceAsks} = useAirServiceContext();
    return(
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
            <h5
              className="text-primary text-uppercase"
              style={{ letterSpacing: 5 }}
            >
              Services
            </h5>
            <h1 className="display-5 mb-0">Our Excellent CCTV Security Services</h1>
          </div>
          <div className="row g-5">
             {serviceAsks.map(x => 
              <ServiceItem key={x._id} {...x} />
              )}

              {serviceAsks.length === 0 &
               <h4 >No query</h4>
              }
          </div>
        </div>
      </div>
    );
};