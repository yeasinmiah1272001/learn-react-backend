import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
       const {user, loading} = useContext(AuthContext);
       const location = useLocation()
       if(user){
              return children;
       }

       if(loading){
              return <span className="loading"></span>
       }


       // return <Navigate state={location.pathname} to="/login"></Navigate>
       return (
         <Navigate to="/login" state={{ from: location }} replace></Navigate>
       );
};

export default PrivateRoute;