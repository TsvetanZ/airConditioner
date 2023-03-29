import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import * as airService  from './services/airService'; 

import {Navigation} from './components/Navigation/Navigation';
import {Home} from './components/Home/Home';
import { Footer } from './components/Footer/Footer.js';
import { Login} from './components/Login/Login';
import {Register} from './components/Register/Register';
import { Create } from './components/Create/Create';
import { Service } from './components/Service/Service';
import { PricePlan } from './components/PricePlan/PricePlan';


function App() {

  const [serviceAsks, setServiceAsk] = useState([]);

  useEffect(() => { 
      airService.getAll()
        .then(result => {
          //console.log(result);
          setServiceAsk(result);
        })
  },[]);

  return (
  <>
  <Navigation />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/create' element={<Create />} />
    <Route path='/service' element={<Service serviceAsks={serviceAsks} />} />
    <Route path='/register' element={<Register />} />
  </Routes>
  {/* < PricePlan /> */}

   

  
    {/* Services Start */}
   
    {/* Services End */}
    {/* Pricing Plan Start */}
    
    {/* Pricing Plan End */}
    {/* Offer Start */}
 
    {/* Offer End */}
    {/* Team Start */}
   
    {/* Team End */}
    {/* Testimonial Start-comment */}
    
    {/* Testimonial End =comment */}
   
    < Footer />
   
    <a
      href="#"
      className="btn btn-lg btn-secondary btn-lg-square rounded back-to-top"
    >
      <i className="bi bi-arrow-up" />
    </a>
  

  </>

  
  );
}

export default App;
