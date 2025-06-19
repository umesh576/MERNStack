import React from "react";

const Card = (props) => {
  console.log(props);
  console.log(props.username);
  return (
    <div>
      <h1 className="text-white">{props.username}</h1>
      <p>Umesh joshi is great person {props.username}</p>
    </div>
  );
};

export default Card;
