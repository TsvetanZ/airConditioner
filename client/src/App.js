//import { useEffect, useState } from "react";
//import { Routes, Route, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// import { airServiceFactory } from "./services/airService";
//import { authServiceFactory } from "./services/authService"; // about move logic other provider
//import * as authService from "./services/authService";
//import { AuthContext } from "./contexts/AuthContext";
//import { useService } from "./hooks/userService";
import { AuthProvider } from "./contexts/AuthContext";
import { AirServiceProvider } from './contexts/AirServiceContext';

import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer.js";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Create } from "./components/Create/Create";
import { Service } from "./components/Service/Service";
import { Details } from "./components/Details/Details";
import { Edit } from "./components/Edit/Edit";
import { Comments } from "./components/Comments/Comments";
import { Logout } from "./components/Logout/Logout";
import { RouteGuard } from "./components/common/RouteGuard";

function App() {
 // const navigate = useNavigate();
  // const [serviceAsks, setServiceAsk] = useState([]);
  // //const [auth, setAuth] = useState({});
  // const airService = airServiceFactory();//(auth.accessToken);
  //const authService = authServiceFactory(auth.accessToken);

  // useEffect(() => {
  //   airService.getAll().then((result) => {
  //     //console.log(result);
  //     setServiceAsk(result);
  //   });
  // }, []);

  // const onCreateServiceSubmit = async (data) => {
  //   //console.log(data);
  //   const newAskService = await airService.create(data);

  //   setServiceAsk((state) => [...state, newAskService]);

  //   navigate("/service");
  // };

  // // const onLoginSubmit = async (data) => {
  // //   //e.preventDefault();
  // //   //console.log(Object.fromEntries(new FormData(e.target))) // async (e) по този начин виждаме на козолата паролата и потребителя.
  // //   //console.log(data);
  // //   try {
  // //     const result = await authService.login(data);
  // //     //console.log(result);
  // //     setAuth(result);
  // //     //console.log('app:',auth)
  // //     navigate("/"); //navigate('/catalog')
  // //     //console.log('app1:',auth.accessToken)
  // //   } catch (error) {
  // //     alert("Not right password or username");
  // //   }
  // // };

  // // const onRegisterSubmit = async (values) => {
  // //   const { confirmPassword, ...registerData } = values;
  // //   if (confirmPassword !== registerData.password) {
  // //     alert("The passwords do't match. ");
  // //     return;
  // //   }
  // //   try {
  // //     const result = await authService.register(registerData);
  // //     setAuth(result);

  // //     navigate("/");
  // //   } catch (error) {
  // //     alert("Error registration");
  // //   }
  // // };

  // // const onLogout = async () => {
  // //   await authService.logout(); //authorized request
  // //   //await authServiceFactory.logout(); //authorized request

  // //   setAuth({});
  // // };

  // const onServiceEditSubmit = async (values) => {
  //     const result = await airService.edit(values._id, values);

  //     setServiceAsk(state => state.map(x => x._id===values.id ? result : x));

  //     navigate(`/service/${values._id}`);
  // }

  // // const context = {
  // //   onLoginSubmit,
  // //   onRegisterSubmit,
  // //   onLogout,
  // //   userId: auth._id,
  // //   token: auth.accessToken,
  // //   userEmail: auth.email,
  // //   isAuthenticated: !!auth.accessToken,
  // // };

  return (
    <AuthProvider >
      <AirServiceProvider>
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/create" element={<Create onCreateServiceSubmit={onCreateServiceSubmit} />} /> */}
                   
          {/* <Route path="/create" element={
              <RouteGuard>
                <Create  />
             </RouteGuard>}
          /> */}
        
          {/* <Route
            path="/service"
            element={<Service />}
            // element={<Service serviceAsks={serviceAsks} />}
          /> */}
           <Route path="/service" element={<Service />} />

          <Route element={<RouteGuard />} >
                <Route path="/create" element={ <Create/> } />
                 <Route path="/service/:serviceId" element={<Details />} />
                 {/* <Route path="/service/:serviceId/edit" element={<Edit onServiceEditSubmit={onServiceEditSubmit}/>} /> */}
                 <Route path="/service/:serviceId/edit" element={<Edit />} />
          </Route>
          <Route path="/service/:serviceId/coments" element={<Comments />} />
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

        <Footer />

        {/* <a
      href="#"
      className="btn btn-lg btn-secondary btn-lg-square rounded back-to-top"
    >
      <i className="bi bi-arrow-up" />
    </a> */}
      </>
      </AirServiceProvider>
    </AuthProvider>
  );
}

export default App;
