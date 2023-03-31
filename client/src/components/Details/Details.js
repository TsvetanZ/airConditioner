import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as airService from '../../services/airService'


export const Details = ()=> {
  const {serviceId} = useParams();
 // console.log(serviceId);
 const [service, setServiceAsk]= useState({});


 useEffect(() => {
    airService.getOne(serviceId)
      .then(result => {
          setServiceAsk(result)
      })

 },[serviceId])

    return(
   
  <section id="game-details">
  <h1>Service Details</h1>
  <div className="info-section">
    <div className="game-header">
      <img className="game-img" src={service.imageUrl} alt={service.title}/>
      <h1>{service.title}</h1>
      <span className="levels">{service.category}</span>
      <p className="type">{service.height},{service.width},{service.length}</p>
    </div>
    <p className="text"> {service.summary}
    </p>
  </div>
</section>
    );
};