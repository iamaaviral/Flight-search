import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import myData from '../flights.json';

import 'react-datepicker/dist/react-datepicker.css';

class FlightForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to: '',
      departureDate: moment(),
      returnDate: moment().add(2, 'days')
    };
    this.handleChangeDeparture = this.handleChangeDeparture.bind(this);
    this.handleChangeReturn = this.handleChangeReturn.bind(this);
  }

  handleChangeDeparture(date) {
    this.setState({
      departureDate: date
    });
  }
  handleChangeReturn(date) {
    this.setState({
      returnDate: date
    });
  }

  change(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.showInputError(e.target.name);
  }

  mapFlightData(location1, location2, date) {
    console.log(location1, location2, date);
    let result = myData.filter((item, index) => {
      if (item.departure.iataCode !== location1) {
        return;
      }
      if (item.arrival.iataCode !== location2) {
        return;
      }
      if (
        moment.utc(item.departure.scheduledTime).format('MM/DD/YYYY') !== date
      ) {
        console.log("bjosdike");
        return;
      }
      console.log(item);
      return item;
    });
    return result;
  }

  search(e) {
    e.preventDefault();
    if (this.validate()) {
      let to = this.state.to.toUpperCase();
      let from = this.state.from.toUpperCase();
      let result1 = this.mapFlightData(from, to, this.state.departureDate.format('MM/DD/YYYY'));
      
      if (!this.props.returnStatus) {
        this.props.action(result1);
      } else {
        let result2 = this.mapFlightData(to, from, this.state.returnDate.format('MM/DD/YYYY'));
        this.props.action(result1, result2);
      }
    }
  }

  validate() {
    const inputs = document.getElementById('input');
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

    error.textContent = '';
    return true;
  }

  render() {
    const returnStatus = this.props.returnStatus;
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
              name="departureDate"
              selected={this.state.departureDate}
              onChange={this.handleChangeDeparture}
              minDate={moment()}
              withPortal
              maxDate={moment().add(5, 'months')}
            />
          </div>
          {returnStatus ? (
            <div className="group">
              <DatePicker
                name="returnDate"
                selected={this.state.returnDate}
                onChange={this.handleChangeReturn}
                minDate={moment()}
                withPortal
                maxDate={moment().add(5, 'months')}
              />
            </div>
          ) : null}
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
