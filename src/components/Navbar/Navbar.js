import React, {Fragment} from "react";
import {Link} from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
   return (
      <Fragment>
         <hr />
         <ul className="links">
            <Link to="/" className="link">
               <li href="www.pacman.live" className="linkChild link1">Home</li>
            </Link>
            <Link to="/test" className="link">
               <li href="www.pacman.live" className="linkChild link2">About</li>
            </Link>
            <li href="www.pacman.live" className="linkChild link3">Contact</li>
            <li href="www.pacman.live" className="linkChild link4">Social</li>
            <li href="www.abcd.com" className="linkChild link5">SignIn</li>
            <li href="www.abcd.com" className="linkChild link6">SignUp</li>
         </ul>
         <hr />
      </Fragment>
   );
};

export default Navbar;