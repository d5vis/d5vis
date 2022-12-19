import portrait from "./images/standingSelfPortrait.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Title">
          <img className="Portrait" src={portrait} alt="portrait" />
        </div>
      </header>
    </div>
  );
}

export default App;
