import React, { Component } from 'react';
import Calendar from './components/calendar';

class Main extends Component {
  render () {
    const {calendarData, dayData} = this.props;
    return (
      <Calendar calendarData={calendarData} dayData={dayData} />
    );
  }
}

export default Main;
