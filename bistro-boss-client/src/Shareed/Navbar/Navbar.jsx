
// import logo from "../../assets/icons/logo.svg";
import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../../component/Provider/AuthProvider";


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()

  }


 

  const Links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order">Order Food</NavLink>
      </li>
      <li>
        <NavLink to="/a">Contact us</NavLink>
      </li>
      <li>
        <NavLink to="/b">DashBoard</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-black text-white bg-opacity-45 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <a className="" href="">
              {Links}
            </a>
          </ul>
        </div>
        <h1 className="  normal-case">
          {/* <img className="small:w-40 lg: w-20" src={logo} alt="" /> */}
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{Links}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">{/* <img src={navPic} /> */}</div>
        </label>

        {user ? (
          <>
          <span>{user.email}</span>
              <button onClick={handleLogOut} className="btn">LogOut</button>
          </>
        ) : (
          <>
            <NavLink to="/login">
              <button className="btn">Login</button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
