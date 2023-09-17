import React, {useState} from "react";

function Sushi({sushi, addCharge, bill}) {
  const [sushiGobbled, setSushiGobbled] = useState(false)

  function gobbleSushi(){
    if (sushi.price <= bill) {
      addToBill(sushi.price)
      setSushiGobbled(true)
    }
  }
  function addToBill(num){
    addCharge(num)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={gobbleSushi}>
        {sushiGobbled ? null :         
            <img src={sushi.img_url}
            alt={sushi.name}
            width="100%"/>}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
