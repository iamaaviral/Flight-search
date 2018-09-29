import React, { Component } from "react";
import "./App.css";
import FlightForm from "./components/FormInput";
import FlightList from "./components/FlightList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="left-side-bar">
          <div className="lists-scroll">
            <FlightForm />
          </div>
        </div>
        <div className="right-side-bar">
          <div className="main">
            <FlightList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
