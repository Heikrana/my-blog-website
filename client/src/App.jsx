import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import FeaturePost from "./components/FeaturePost/FeaturePost";
import Newsletter from "./components/Newsletter/Newsletter";
// import Review from "./Review/Review";
import List from "./components/articleList/articleList";
import Article from "./components/Article/Article";
import Auth from "./components/Authentication/Auth";
import Compose from "./components/Compose/Editor";

import Test2 from "./components/Test2";

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
			<Route path="/test" component={Test2} />
			{/* <Review /> */}
		</Router>
	);
};

export default App;
