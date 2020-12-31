import React, {Component, Fragment} from "react";

import "./articleList.css";

class ListCard extends Component {

   getNormalDate(isoDate) {
      const normalDate = new Date(isoDate);
      return normalDate;
   }

   render() {
      const {Heading, Content, Date} = this.props.data;
      const ContentShort = Content.substring(0, 300) + " ...";
      const normalDate = this.getNormalDate(Date);
      // console.log(today.toString());

      return (
         <Fragment>
            <div className="container posts">
               <div className="card-secondary">
                  <div className="card-text-list">
                     <p>{normalDate} . 5 min read</p>
                     <h3>{Heading}</h3>
                     <p className="content">{ContentShort}</p>
                     <p className="views">0 views</p>
                  </div>
               </div>
            </div>
         </Fragment>
      );
   }
}

export default ListCard;