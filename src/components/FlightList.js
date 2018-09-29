import React, { Component } from 'react';

import 'react-datepicker/dist/react-datepicker.css';

class FlightList extends Component {
  render() {
    // const createItem = function item(itemText, i) {
    return (
      // <TodoItem dispatch={this.props.dispatch} key={i} value={i}>{itemText}</TodoItem>

      <li>
        <span role="presentation" className="completed">
          {this.props.result[0].airline.name}
        </span>
        <div className="btn">
          <button className="imp">
            {' '}
            <i className="fa fa-star-o" />
          </button>
          <button className="del">
            {' '}
            <i className="fa fa-trash-o" />
          </button>
        </div>
        {/* <i className="fa fa-trash" aria-hidden="true" onClick={this.handleDelete.bind(this) > */}
      </li>
    );
    // };
    // let allitems = this.props.todos;
    // // Here is the filter function
    // const status = this.props.filter[0].Status;
    // switch (status) {
    //   case 'false':
    //     allitems = allitems.filter(t => t.important);
    //     break;
    //   case 'true':
    //     allitems = allitems.filter(t => t.completed);
    //     break;
    //   default:
    //     break;
    // }
    // return <ul>{createItem}</ul>;
  }
}

export default FlightList;
