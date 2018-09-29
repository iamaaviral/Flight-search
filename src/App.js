import React, { Component } from 'react';
import './App.css';
import FlightForm from './components/FormInput';
import FlightList from './components/FlightList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: []
    };
    this.searchResults = this.searchResults.bind(this);
  }

  searchResults(data) {
    this.setState({
      searchResult: data
    });
  }

  render() {
    let button;
    if (this.state.searchResult.length) {
      button = <FlightList result={this.state.searchResult} />;
    } else {
      button = <h1>Nothing to display</h1>;
    }
    return (
      <div className="App">
        <div className="left-side-bar">
          <div className="lists-scroll">
            <FlightForm action={this.searchResults} />
          </div>
        </div>
        <div className="right-side-bar">
          <div className="main">{button}</div>
        </div>
      </div>
    );
  }
}

export default App;
