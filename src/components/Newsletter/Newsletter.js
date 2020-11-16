import React, {Fragment} from "react";

import "./Newsletter.css";

const Newsletter = () => {
   return (
      <Fragment>
         <hr />
         <div className="container">
            <h3 className="message">Never Miss a New Post.</h3>
            <label htmlFor="email">Enter your email*</label>
            <input type="text" id="email"></input>
            <button>Subscribe</button>
         </div>
         <hr />
      </Fragment>
   );
};

export default Newsletter;