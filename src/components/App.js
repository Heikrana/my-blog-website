import React, {Fragment} from "react";

import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import FeaturePost from "./FeaturePost/FeaturePost";
import Newsletter from "./Newsletter/Newsletter";
import Footer from "./Footer";

const App = () => {
   return (
      <Fragment>
         <Header />
         <Navbar />
         <FeaturePost />
         <Newsletter />
         <Footer />
      </Fragment>
   );
};

export default App;