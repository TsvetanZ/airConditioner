import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { airServiceFactory } from '../services/airService';


export const AirServiceContext = createContext();

export const AirServiceProvider = ({
      children
    }) => {
        const navigate= useNavigate();
        const [serviceAsks, setServiceAsk] = useState([]);
        const airService = airServiceFactory();

        useEffect(() => {
            airService.getAll().then((result) => {
              //console.log(result);
              setServiceAsk(result);
              console.log(serviceAsks);
            });
          }, []);


        const onCreateServiceSubmit = async (data) => {
            const newAskService = await airService.create(data);
        
            setServiceAsk((state) => [...state, newAskService]);
        
            navigate("/service");
          };
                
          const onServiceEditSubmit = async (values) => {
              const result = await airService.edit(values._id, values);
        
              setServiceAsk(state => state.map(x => x._id===values.id ? result : x));
        
              navigate(`/service/${values._id}`);
          }

          const deleteAirService = async (serviceId) => {
         setServiceAsk(state => state.filter(serviceAsks => serviceAsks._id !== serviceId ));

          };

          const contextValues = {
            serviceAsks,
            onCreateServiceSubmit,
            onServiceEditSubmit,
            deleteAirService,
          }

    return (
        <AirServiceContext.Provider value={contextValues}>
            {children}
        </AirServiceContext.Provider>
    )
}

export const useAirServiceContext = () => {
    const context = useContext(AirServiceContext);

    return context;
}