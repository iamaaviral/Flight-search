import React, { Component } from 'react';
import moment from 'moment';

class FlightList extends Component {
  renderList(items) {
    return (
      <div>
        <ul>
          {items.map((itemText, i) => {
            const departureTime = moment(
              itemText.departure.scheduledTime,
              'HH:mm:ss a'
            );
            const arrivalTime = moment(
              itemText.arrival.scheduledTime,
              'HH:mm:ss a'
            );
            var duration = moment.duration(arrivalTime.diff(departureTime));
            var hours = parseInt(duration.asHours());
            var minutes = parseInt(duration.asMinutes()) % 60;
            return (
              <li key={i}>
                <div className="list" role="presentation">
                  <div>{itemText.airline.name}</div>
                  <div>
                    {departureTime.format('HH:mm a')} -{' '}
                    {arrivalTime.format('HH:mm a')}
                  </div>
                  <div>{hours + 'h' + minutes + 'm'}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  render() {
    let oneallitems = this.props.oneResult;
    let returnallitems = this.props.returnResult;
    // console.log(moment(allitems[0].departure.scheduledTime).format('hh:mm'));
    return (
      <div>
        <div className="main">{this.renderList(oneallitems)}</div>
        
        <div className="main">
         
          {this.props.returnResult.length
            ? <div> <h1>Return Flights</h1>{this.renderList(returnallitems)}</div>
            : null}
        </div>
      </div>
    );
  }
}

export default FlightList;
