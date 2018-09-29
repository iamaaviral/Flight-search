import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import myData from '../flights.json';

import "react-datepicker/dist/react-datepicker.css";

class FlightForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      departureDate: moment()
      //returnDate: moment().add(2, "days")
    };
    this.search = this.search.bind(this);
    this.change = this.change.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    const word = myData[0].departure.scheduledTime;
		console.log(word); // output 'testing'
    this.setState({
      departureDate: date
    });
  }

  change(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.showInputError(e.target.name);
  }

  search(e) {
    e.preventDefault();
    if (!this.validate()) {
    } else {
      console.log("do something");
    }
  }

  validate() {
    const inputs = document.getElementById("input");
    let isFormValid = true;

    const isInputValid = this.showInputError(inputs.name);
    if (!isInputValid) {
      isFormValid = false;
    }
    return isFormValid;
  }

  showInputError(refName) {
    const validity = this.refs[refName].validity;
    const label = document.getElementById(`${refName}Label`).textContent;
    const error = document.getElementById(`${refName}Error`);

    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`;
      }
      return false;
    }

    error.textContent = "";
    return true;
  }

  render() {
    return (
      <div className="wrapper">
        <form>
          <div className="group">
            <input
              id="input"
              type="text"
              name="from"
              ref="from"
              value={this.state.from}
              onChange={e => this.change(e)}
              required="required"
            />
            <span className="bar" />
            <label id="fromLabel">From</label>
            <div className="error" id="fromError" />
          </div>
          <div className="group">
            <input
              id="input"
              type="text"
              name="to"
              ref="to"
              value={this.state.to}
              onChange={e => this.change(e)}
              required="required"
            />
            <span className="bar" />
            <label id="toLabel">To</label>
            <div className="error" id="toError" />
          </div>
          <div className="group">
            <DatePicker
              name="date"
              selected={this.state.departureDate}
              onChange={this.handleChange}
              minDate={moment()}
              withPortal
              maxDate={moment().add(5, "months")}
              showDisabledMonthNavigation
            />
          </div>
          {/* <div className="group">
            <DatePicker
            selected={this.state.returnDate}
            onChange={this.handleChange}
            minDate={moment()}
            withPortal
            maxDate={moment().add(5, "months")}
            showDisabledMonthNavigation
            />
          </div> */}
          <div className="btn-box">
            <button
              className="button btn-submit"
              onClick={e => this.search(e)}
              type="submit"
            >
              SEARCH
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FlightForm;
