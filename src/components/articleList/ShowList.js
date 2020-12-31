import React from "react";

import ListCard from "./ListCard";

const List = (props) => {
   
   const list = props.data.map(data => {
      return <ListCard key={data._id} data={data} />;
   });

   return (
      <div>{list}</div>
   );
};

export default List;