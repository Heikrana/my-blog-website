import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import FeaturePost from "./FeaturePost/FeaturePost";
import Newsletter from "./Newsletter/Newsletter";
// import Review from "./Review/Review";
import List from "./articleList/articleList";
import Article from "./Article/Article";
import Auth from "./Authentication/Auth";
import Compose from "./Compose/Editor";

const App = () => {
   return (
      <Router>
         <Header />
         <Navbar />
         <Route path="/" exact component={FeaturePost} />
         <Route path="/" exact component={Newsletter} />
         <Route path="/" exact component={List} />
         <Route path="/article" component={Article} />
         <Route path="/signin" component={Auth} />
         <Route path="/compose" component={Compose} />
         {/* <Review /> */}
      </Router>
   );
};

export default App;