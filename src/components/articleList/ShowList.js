import React, {Fragment} from "react";

import ListCard from "./ListCard";

const List = (props) => {

   const list = props.data.map(data => {
      return <ListCard key={data._id} data={data} />;
   });

   return (
      <Fragment>
         <div>{list}</div>
      </Fragment>
   );
};

export default List;