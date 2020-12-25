import React, {Fragment} from "react";

import "./Navbar.css";

const Navbar = () => {
   return (
      <Fragment>
         <hr />
         <div className="links">
            <a href="#" />
            <a href="www.pacman.live" className="link1">Home</a>
            <a href="www.pacman.live" className="link2">About</a>
            <a href="www.pacman.live" className="link3">Contact</a>
            <a href="www.pacman.live" className="link4">Social</a>
            <a href="www.abcd.com" className="link5">Sign-In/Up</a>
            {/* <a href="www.abcd.com" className="link6">SignUp</a> */}
         </div>
         <hr />
      </Fragment>
   );
};

export default Navbar;