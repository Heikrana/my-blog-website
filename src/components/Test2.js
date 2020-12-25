import React from "react";

const Test2 = (props) => {

   const headingsFinal = props.headings.map(heading => {
      return <div>{heading.Heading}</div>;
   });

   // console.log(props);
   console.log(headingsFinal);

   return (
      <div>{headingsFinal}</div>
   );
};

export default Test2;