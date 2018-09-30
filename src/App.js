import React, { Component } from 'react';
import './App.css';
import FlightForm from './components/FormInput';
import FlightList from './components/FlightList';
import Filter from './components/Filter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oneSearchResult: [],
      returnSearchResult: [],
      returnStatus: false,
      filter: {
        minValue: 0,
        maxValue: 50000
      }
    };
    this.searchResults = this.searchResults.bind(this);
    this.filterItem = this.filterItem.bind(this);
  }

  filterItem(minValue, maxValue) {
    this.setState({
      filter: {
        ...this.state.filter,
        minValue,
        maxValue
      }
    });
  }

  searchResults(results1, result2 = []) {
    this.setState({
      oneSearchResult: results1,
      returnSearchResult: result2
    });
  }

  render() {
    let button;
    if (this.state.oneSearchResult.length) {
      button = (
        <FlightList
          oneResult={this.state.oneSearchResult}
          returnResult={this.state.returnSearchResult}
          filter={this.state.filter}
        />
      );
    } else {
      button = <h1>Nothing to display</h1>;
    }
    return (
      <div className="App">
        <div className="left-side-bar">
          <div className="status-btn">
            <button onClick={() => this.setState({ returnStatus: false })}>
              One Way
            </button>
            <button onClick={() => this.setState({ returnStatus: true })}>
              Return
            </button>
          </div>
          <div className="lists-scroll">
            <FlightForm
              action={this.searchResults}
              returnStatus={this.state.returnStatus}
            />
            <div className="wrapper">
              <Filter onFilter={this.filterItem} />
            </div>
          </div>
          <p>{this.state.value}</p>
        </div>
        <div className="right-side-bar">{button}</div>
      </div>
    );
  }
}

export default App;
