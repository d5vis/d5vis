import "./App.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <iframe
          frameborder="0"
          src="https://itch.io/embed-upload/7079556?color=282d3c"
          allowfullscreen=""
          width="640"
          height="380"
        >
          <a href="https://d5vis.itch.io/dormtest"></a>
        </iframe>
        <div>
          <p>current location : los angeles</p>
        </div>
      </header>
    </div>
  );
}

export default Home;
