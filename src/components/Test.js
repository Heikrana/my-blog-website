import React, {Component} from "react";
import axios from "axios";

import Test2 from "./Test2";

class Test extends Component {

   state = {headings: []};

   componentDidMount() {
      axios.get("http://localhost:5000/")
         .then(response => {
            console.log(response.data);
            this.setState({headings: response.data});
         })
         .catch(err => console.log(`error: ${err}`));
   }

   render() {
      return (
         <Test2 headings={this.state.headings} />
      );
   }
}

export default Test;