import axios from "axios";
import React, {Component, Fragment} from "react";

import Signin from "./Signin";

class Auth extends Component {
   state = {userCredentials: {}};

   onFormSubmit = (userCredentials) => {
      this.setState({
         userCredentials,
      });
   };

   async componentDidMount() {
      try {
         const response = axios.post("http:localhost:5000/addUser", {userCredentials});
         console.log(`response from axios post ${response}`);
      } catch (err) {
         console.error(`Error!!! - ${err}`);
      }
   }

   render() {
      return (
         <Fragment>
            <Signin onSubmit={this.onFormSubmit} />
         </Fragment>
      );
   }
}

export default Auth;
