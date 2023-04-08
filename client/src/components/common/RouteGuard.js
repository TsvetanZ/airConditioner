import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";


export const RouteGuard = ({
    child
}) => {

    const { isAuthenticated } = useAuthContext();
    //console.log('GUARD:',isAuthenticated)
    if (!isAuthenticated) {
       return  <Navigate to="/login" />;

    }
    return child ? child :<Outlet /> ;

}


// export const RouteGuard = ({
//     children,
// }) => {
//     const {isAuthenticated} = useAuthContext();
//     if (!isAuthenticated) {
//        return  <Navigate to='/login' />;

//     }
//     return (
//         <>
//             {children}
//         </>
//     );

// };