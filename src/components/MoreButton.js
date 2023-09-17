import React from "react";

function MoreButton({ addSushi }) {
  
  function handleClick(){
    addSushi(4)
  }
  
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
