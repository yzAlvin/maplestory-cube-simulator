import "./App.css";
import { useState } from "react";

function Item({ img, type, str, dex, int, luk, att, matt, potential }) {
  const [potentialStats, setPotentialStats] = useState(potential)
  function cubeItem() {
    setPotentialStats(
          {
            line1: "All Stat +13%",
            line2: "All Stat +13%",
            line3: "All Stat +13%"
          }
    )
  }

  return (
    <>
    <div className="cube-box">
      <img
        className="cube-image"
        src={img}
        width="400"
        height="400"
        alt="picture of item to cube"
      ></img>
      <div>
        <ul className="item-list">
          <li>Type: {type}</li>
          <li>STR: {str}</li>
          <li>DEX: {dex}</li>
          <li>INT: {int}</li>
          <li>LUK: {luk}</li>
          <li>Attack Power: {att}</li>
          <li>Magic Attack: {matt}</li>
        </ul>
      <Potential potential={potentialStats}/>
      </div>
    </div>
    <div>
      <button onClick={() => cubeItem()}>Cube</button>
    </div>
  </>
  );
}

function Potential({potential}) {
  return (
        <ul className="potential-list">
          <li className="potential-tier"><span className="potential-tier-box">R</span> Potential</li>
          <li>{potential.line1}</li>
          <li>{potential.line2}</li>
          <li>{potential.line3}</li>
        </ul>
  )
}

function App() {
  return (
    <div className="App">
        <Item
          img="https://cdn.discordapp.com/attachments/331409868693176320/955863447642447932/D1123DDE-EB77-48EE-B571-E44E98861CDC.jpg"
          type="Cat"
          str="+10"
          dex="+10"
          int="+10"
          luk="+10"
          att="+10"
          matt="+10"
          potential={{
            line1: "Critical Rate +4%",
            line2: "Critical Rate +4%",
            line3: "Critical Rate +4%"
          }}
        ></Item>
        <Item
          img="fangblade.png"
          type="Fangblade"
          str="+15"
          dex="+15"
          int="+15"
          luk="+15"
          att="+15"
          matt="+15"
          potential={{
            line1: "Critical Rate +4%",
            line2: "Critical Rate +4%",
            line3: "Critical Rate +4%"
          }}
        ></Item>
    </div>
  );
}

export default App;
