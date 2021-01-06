import axios from "axios";
import React, {Component, Fragment} from "react";

import Signin from "./Signin";
import Signup from "./Signup";

import "./Auth.css";

class Auth extends Component {
   onFormSubmit = async (userCredentials) => {
      try {
         if (userCredentials.formType === "signup") {
            const response = await axios.post("http://localhost:5000/user/add", {
               userCredentials
            });
            console.log("response from axios", response.status);
            response.status === 200 ? alert("Success") : alert("Nope");
         } else if (userCredentials.formType === "signin") {
            const response = await axios.get("http://localhost:5000/user/get", {
               userCredentials
            });
            console.log("response from axios", response.status);
         }
      } catch (err) {
         console.error(`Error!!! - ${err}`);
      }
   };

   render() {
      return (
         <Fragment>
            <div className="auth">
               <div className="signin auth-child">
                  <Signin onSubmit={this.onFormSubmit} />
               </div>
               <div className="signup auth-child">
                  <Signup onSubmit={this.onFormSubmit} />
               </div>
            </div>
         </Fragment>
      );
   }
}

export default Auth;
