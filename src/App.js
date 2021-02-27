import "./App.css";
import React from "react";
import Row from "./Components/Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <h1>Netflix front-end clone</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
