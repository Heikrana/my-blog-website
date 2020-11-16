import React, {Component, Fragment} from "react";

import "./FeaturePost.css";

class FeaturePost extends Component {
   render() {
      return (
         <Fragment>
            <div className="container">
               <div className="heading">
                  <h2>FEATURED POST</h2>
               </div>
               <div className="card">
                  <img src="https://static.wixstatic.com/media/c22c23_89024a2cd2e943a6b89d99404958e3bb~mv2.jpg/v1/fill/w_1128,h_635,fp_0.50_0.50,q_90/c22c23_89024a2cd2e943a6b89d99404958e3bb~mv2.jpg"
                     alt="book"></img>
                  <div>
                     <p>20hr ago . 2 min</p>
                     <h3>Back to Fiction: What I'm Reading This Summer</h3>
                     <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Wel...</p>
                  </div>
               </div>
            </div>
         </Fragment>
      );
   }
}

export default FeaturePost;