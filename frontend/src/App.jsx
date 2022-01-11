import logo from "./logo.svg";
import * as React from "react";
import "./App.css";

function App() {
  console.log(window.sdk)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hello World!</h3>
    We are using Node.js <span id="node-version"></span>,
    Chromium <span id="chrome-version"></span>,
    and Electron <span id="electron-version"></span>.
      </header>
    </div>
  );
}

export default App;
