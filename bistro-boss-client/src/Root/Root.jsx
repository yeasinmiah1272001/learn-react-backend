import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shareed/Navbar/Navbar";

const Root = () => {
       const location = useLocation();
       const noHeaderAndFoter =
         location.pathname.includes("/login") ||
         location.pathname.includes("/register");
       return (
              <div>
                     {noHeaderAndFoter || <Navbar></Navbar>}
                     <Outlet></Outlet>
                     
                     
              </div>
       );
};

export default Root;