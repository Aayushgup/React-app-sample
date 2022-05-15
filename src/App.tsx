import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Greet name="Aayush" messagecount={30} islogged={true} />
    </div>
  );
}

export default App;
