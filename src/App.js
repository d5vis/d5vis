import portrait from "./images/standingSelfPortrait.png";
import "./App.css";
import Nav from "./Nav";

import AppRouter from "./AppRouter";

// TODO:
// move components into folders
// figure out how to center the pages
// develop the game, reupload and fix itch.io page

function App() {
  return (
    <div className="App">
      <Nav />
      <AppRouter />
    </div>
  );
}

export default App;
