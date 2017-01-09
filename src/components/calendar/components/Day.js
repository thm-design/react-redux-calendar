/**
* Day component
* @author Tony Meyer <tonymeyer.dev@gmail.com>
*
*/

import React, {PropTypes} from 'react';
import classnames from 'classnames';
import uuid from 'node-uuid';
import {connect} from 'react-redux'
import {toggleEventList, setDay} from '../../../actions/actionCreators';

/**
* Sets the calendar day the user clicked on
* @function selectDay
*/
const selectDay = (event, day, dispatch) => {
	event.preventDefault(event);
	dispatch(setDay(day));
};

/**
* Opens the event list
* @function openEventList
*/
const openEventList = (event, dispatch) => {
	event.preventDefault(event);
	dispatch(toggleEventList());
};

/**
* @function Day
* @param {object} day - the current day (moment.js object)
* @param {string} dayClasses - css classes for this component
* @param {function} dispatch - passed in by Redux's connect()
*/
let Day = ({day, dayClasses, events, dispatch}) => {
	const timeClasses = classnames('time', dayClasses, 'blank');

	return (
		<time dateTime={day.format('YYYY-MM-DD')} className={timeClasses}>
  		<a href="#" onClick={(event) => selectDay(event, day, dispatch)}>
				<span className="caldate">{day.format('DD')}</span>
				{events.map((event) => (<button className={`eventMarker ${event.eventType}`} key={uuid.v4()} onClick={(event) => openEventList(event, dispatch)}>{event.eventType ? `${event.eventType || ''}: ${event.eventName || ''}` : ''}</button>))}
			</a>
		</time>
	);
};

Day = connect()(Day);

Day.propTypes = {
	day: PropTypes.object,
	dayClasses: PropTypes.string,
	event: PropTypes.object
}

export default Day;


// <img src="http://thenewcode.com/assets/svg/venn.svg" />
