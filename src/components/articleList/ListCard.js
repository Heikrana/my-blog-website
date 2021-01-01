import React, {Component, Fragment} from "react";

import "./articleList.css";

class ListCard extends Component {

   getNormalDate(isoDate) {
      const date = new Date(isoDate).toLocaleDateString();
      // const month = new Date(isoDate).getMonth();
      // const normalDate = `${date} ${month}`;
      // const normalDate = new Date(isoDate);
      return date;
   }

   countWords(str, len) {
      return str.split(' ').splice(0, len).join(" ");
   }

   render() {
      const {Heading, Content, Date, img, alt} = this.props.data;
      const length = Content.length;   // number of letters in body
      const readTime = Math.round(length / 450); // average college student reading pace
      const ContentShort = this.countWords(Content, 50) + "...";
      const normalDate = (this.getNormalDate(Date));
      return (
         <Fragment>
            {/* <div className="grid-container"></div> */}
            <div className="posts">
               <div className="card-secondary grid-item">
                  <div className="img-list">
                     <img src={img} alt={alt} ></img>
                  </div>
                  <div className="card-text-list">
                     <p>{normalDate} . {readTime} min read</p>
                     <h3>{Heading}</h3>
                     <p className="content">{ContentShort}</p>
                     <p className="views">0 likes</p>
                  </div>
               </div>
            </div>
         </Fragment>
      );
   }
}

export default ListCard;