import React, {Fragment} from "react";

import "./Newsletter.css";

const Newsletter = () => {
   return (
      <Fragment>
         <hr />
         <div className="container newsletter-body">
            <h3 className="message">Never Miss a New Post.</h3>
            <div className="input">
               <label htmlFor="email">Enter your email *</label>
               <input type="email" id="email"></input>
               <button>Subscribe</button>
            </div>
         </div>
         <hr />
      </Fragment>
   );
};

export default Newsletter;