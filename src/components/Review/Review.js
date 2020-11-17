import React from "react";

import "./Review.css";

const Footer = () => {
   return (
      <div className="footer container">
         <h3 className="footer-heading">Drop Me a Line, Let Me Know What You Think</h3>
         <div className="form">
            <div className="input first">
               <label htmlFor="fname">First Name</label>
               <input id="fname" type="text" />
               <label htmlFor="lname">Last Name</label>
               <input id="lname" type="text" />
            </div>
            <div className="input second">
               <label htmlFor="email">Email *</label>
               <input id="email" type="email" />
               <label htmlFor="message">Message</label>
               <input id="message" type="text" />
            </div>
         </div>
      </div>
   );
};

export default Footer;