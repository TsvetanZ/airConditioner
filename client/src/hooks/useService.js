import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


export const useService = (serviseFactory) => {

    const { token } = useContext(AuthContext);

    const service = serviseFactory(token);
    
    return service;
};