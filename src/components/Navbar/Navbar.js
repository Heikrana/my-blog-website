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
            <a href="www.pacman.live" className="link3">My Blog</a>
            <a href="www.pacman.live" className="link4">Contact</a>
            <a href="www.abcd.com" className="link5">Social</a>
         </div>
         <hr />
      </Fragment>
   );
};

export default Navbar;