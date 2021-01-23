import axios from "axios";
import React, {Component} from "react";

class Article extends Component {

   constructor(){
      super();
      this.state = {data: ""};
   }

   async componentDidMount() {
      const pathname = this.getURLPathname();
      try {
         const response = await axios.post("http://localhost:5000/articles/article", {pathname});
         this.setState({data: response.data[0].Content});
      } catch (err) {
         console.error("didmount-Article", err);
      }
   }

   getURLPathname() {
      const pathname = window.location.pathname.split("/")[2];
      return pathname;
   }
   render() {
      return (
         <p className="container content">{this.state.data}</p>
      );
   }
}

export default Article;