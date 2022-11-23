import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./context/authContext";

const NavBar = () => {
  const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
  return (
    // <div>
    //   <ul>
    //     <li>
    //       <NavLink to="/">Home</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/about">About</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/contact">Contact</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/blog">Blog</NavLink>
    //     </li>
    //   </ul>
    // </div>
    <nav>
      <NavLink to="/" className="logo">
        Brand Logo
      </NavLink>

      <div className="nav-links">
        <NavLink className="link" to="/about">
          About Us
        </NavLink>
        <NavLink className="link" to="/contact">
          Contact
        </NavLink>
        <NavLink className="link" to="/blog">
          Blog
        </NavLink>
        <NavLink className="link" to="/admin">
          Admin
        </NavLink>
        <button onClick={() => setLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
