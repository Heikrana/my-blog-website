import React, {Fragment} from "react";

const Newsletter = () => {
   return (
      <Fragment>
         <hr />
         <h3>Never Miss a New Post.</h3>
         <label htmlFor="email">Enter your email*</label>
         <input type="text" id="email"></input>
         <button>Subscribe</button>
         <hr />
      </Fragment>
   );
};

export default Newsletter;