import logo from "./logo.svg";
import "./App.css";

function Item({ img, type, str, dex, int, luk, att, matt }) {
  return (
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
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Item
          img="https://cdn.discordapp.com/attachments/331409868693176320/955863447642447932/D1123DDE-EB77-48EE-B571-E44E98861CDC.jpg"
          type="Cat"
          str="+10"
          dex="+10"
          int="+10"
          luk="+10"
          att="+10"
          matt="+10"
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
        ></Item>
      </header>
    </div>
  );
}

export default App;
