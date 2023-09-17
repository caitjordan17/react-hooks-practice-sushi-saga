import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [charge, setCharge] = useState(100)


  function addCharge(price){
    setCharge(charge - price)
  }
  console.log(charge)

  return (
    <div className="app">
      <SushiContainer api={API} addCharge={addCharge} bill={charge}/>
      <Table bill={charge}/>
    </div>
  );
}

export default App;
