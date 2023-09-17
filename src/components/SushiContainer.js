import React, {useEffect, useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({addCharge, bill}) {
  const [data, setData] = useState([])
  const [max, setMax] = useState(5)
  const [min, setMin] = useState(0)
  //const [charge, setCharge] = useState(0)
  
  useEffect(() => {
    fetch("http://localhost:3001/sushis")
    .then((r) => r.json())
    .then((r) => setData(r))
  }, []);
  
  function addSushi(num){
    maxSushiPlus(num)
    minSushiPlus(num)
  }
  function maxSushiPlus(num){
    setMax(max + num)
  }
  function minSushiPlus(num){
    setMin(min + num)
  }

  // function addCharge(price){
  //   setCharge(charge + price)
  // }
  // console.log(charge)

  const sushiInFours = data.filter((sushi) => sushi.id < max && sushi.id > min)

  console.log("fours", sushiInFours)
  
  const sushiPlates = sushiInFours.map((item) => (
    <Sushi key={item.id} sushi={item} addCharge={addCharge} bill={bill}/>
  ))

  return (
    <div className="belt">
      {sushiPlates}
      <MoreButton addSushi={addSushi}/>
    </div>
  );
}

export default SushiContainer;
