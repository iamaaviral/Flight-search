import React, { Component } from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minValue: 0,
      maxValue: 5000
    };
    this.minHandleChange = this.minHandleChange.bind(this);
    this.maxHandleChange = this.maxHandleChange.bind(this);
    this.search = this.search.bind(this);
  }
  minHandleChange(event) {
    this.setState({ minValue: event.target.value });
  }
  maxHandleChange(event) {
    this.setState({ maxValue: event.target.value });
  }

  search(e) {
    e.preventDefault();
    console.log('min: ' + this.state.minValue + 'max: ' + this.state.maxValue);
  }

  render() {
    return (
      <div>
        <div>
          <span>0</span>
          <input
            id="typeinp"
            type="range"
            min="0"
            max="50000"
            value={this.state.minValue}
            onChange={this.minHandleChange}
            step="500"
          />
          <span>50000</span>
        </div>
        <div>
          <span>{this.state.minValue}</span>
          <input
            id="typeinp"
            type="range"
            min={this.state.minValue}
            max="50000"
            value={this.state.maxValue}
            onChange={this.maxHandleChange}
            step="500"
          />
          <span>50000</span>
        </div>
        <div>
          {`min: ₹${this.state.minValue} `}
          {` max: ₹${this.state.maxValue}`}
        </div>
        <div className="btn-box">
          <button
            className="button btn-submit"
            onClick={() =>
              this.props.onFilter(this.state.minValue, this.state.maxValue)
            }
            type="filter"
          >
            FILTER
          </button>
        </div>
      </div>
    );
  }
}

export default Filter;
