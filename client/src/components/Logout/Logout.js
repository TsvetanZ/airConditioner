import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

export const logout = () => {
    const { onLogout } = useContext(AuthContext);

    onLogout();

    return <Navigate to='/' />
}