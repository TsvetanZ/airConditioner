import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { authServiceFactory } from "../services/authService";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext(); 


export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useLocalStorage('auth', {});// change with const [auth, setAuth] = useState({});

    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (data) => {
        try {
          const result = await authService.login(data);

          setAuth(result);

          navigate("/service"); 

        } catch (error) {
          alert("Not right password or username");
        }
      };


    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== registerData.password) {
          alert("The passwords do't match. ");
          return;
        }
        try {
          const result = await authService.register(registerData);
          setAuth(result);
    
          navigate("/service");
        } catch (error) {
          alert("Error registration");
        }
      };
    

    const onLogout = async () => {
        await authService.logout(); //authorized request
        //await authServiceFactory.logout(); //authorized request
        setAuth({});

      };

    const contextValue = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
      };
    return (
        <>
            <AuthContext.Provider value={contextValue}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
};
