/**
* EventButton component
* @author Tony Meyer <tonymeyer.dev@gmail.com>
*
*/

import React from 'react';
import {connect} from 'react-redux'
import {togglePanel} from '../../../actions/actionCreators';

/**
* Sets the panleIsOpen state
* @method selectDay
*/
const toggleEventPanel = (selectedDay, dispatch) => {
	dispatch(togglePanel(selectedDay, false));
};

/**
* @function EventButton
* @param {function} dispatch - passed in by Redux's connect()
*/
let EventButton = ({selectedDay, dispatch}) => {
	return (
		<div className="eventButton">
			<button className="button addEventButton" onClick={() => toggleEventPanel(selectedDay, dispatch)}>
				<span>+</span>
			</button>
		</div>
	);
};

EventButton = connect()(EventButton);

export default EventButton;
