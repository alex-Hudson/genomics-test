import "./App.css";
import logo from "./images/logo.svg";

function App() {
  return (
    <div className="App">
      <div className="App-border-header">
        <img src={logo} className={"acme-logo"} alt="ACME corp"></img>
        <div className={"home-btn"}>Home</div>
        <div className={"about-btn"}>About Us</div>
      </div>
    </div>
  );
}

export default App;
