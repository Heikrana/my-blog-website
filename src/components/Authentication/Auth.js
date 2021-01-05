import React, {Component, Fragment} from "react";

import Signin from "./Signin";

class Auth extends Component {
   onFormSubmit = (userId, userPassword) => {
      console.log(`ID: ${userId} Pass: ${userPassword}`);
   };

   render() {
      return (
         <Fragment>
            <Signin onSubmit={this.onFormSubmit} />
         </Fragment>
      );
   }
}

export default Auth;
