import axios from "axios";
import React, {Component, Fragment} from "react";

import Signup from "./Signup";

class Auth extends Component {
   // state = {userCredentials: {}};

   onFormSubmit = async (userCredentials) => {
      // this.setState({
      //    userCredentials,
      // });
      try {
         const response = await axios.post("http://localhost:5000/user/add", {userCredentials});
         console.log(userCredentials);
         console.log(`response from axios post ${response}`);
      } catch (err) {
         console.error(`Error!!! - ${err}`);
      }
   };

   async componentDidMount() {

   }

   render() {
      return (
         <Fragment>
            <Signup onSubmit={this.onFormSubmit} />
         </Fragment>
      );
   }
}

export default Auth;
