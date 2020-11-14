import React, {Fragment} from "react";

const Footer = () => {
   return (
      <Fragment>
         <h3>Drop Me a Line, Let Me Know What You Think</h3>
         <label htmlFor="fname">First Name</label>
         <input id="fname" type="text" />
         <label htmlFor="lname">Last Name</label>
         <input id="lname" type="text" />
         <label htmlFor="email">Email *</label>
         <input id="email" type="text" />
      </Fragment>
   );
};

export default Footer;