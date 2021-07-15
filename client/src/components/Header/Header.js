import React, {Fragment} from "react";

import "./Header.css";

const Header = () => {
   return (
      <Fragment>
         <div className="root">
            <h3 className="small-heading">EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.</h3>
            <h1 className="big-heading">Train of Thought</h1>
         </div>
      </Fragment>
   );
};

export default Header;