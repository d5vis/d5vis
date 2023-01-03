import "./App.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <iframe
          title="dorm"
          frameborder="0"
          src="https://itch.io/embed-upload/7100736?color=282d3c"
          allowfullscreen=""
          width="640"
          height="380"
        >
          <a href="https://d5vis.itch.io/dorm">Play DORM on itch.io</a>
        </iframe>
        <div>
          <p>current location : los angeles</p>
        </div>
        <p></p>
      </header>
    </div>
  );
}

export default Home;
