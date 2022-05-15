import React from "react";
type greetprops= {
  name: string;
  messagecount: number;
  islogged: boolean;
};

export default function Greet(props: greetprops){
  return (
    <div>
      {props.islogged
        ? ` Welcome ${props.name}! you have ${props.messagecount} messages `
        : "Not Logged "}
    </div>
  );
} 

//export default Greet;
