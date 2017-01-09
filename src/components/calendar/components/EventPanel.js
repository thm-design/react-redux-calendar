/**
* EventButton component
* @author Tony Meyer <tonymeyer.dev@gmail.com>
*
*/

import React, {PropTypes} from 'react';
import uuid from 'node-uuid';
import {connect} from 'react-redux'
import {togglePanel, updateEventName, updateEventType} from '../../../actions/actionCreators';
import {eventTypes} from '../constants';
import Weather from './Weather';

/**
* Updates the form elements in the store
* @function updateEvName
*/
const updateEvName = (event, eventIndex, dispatch) => {
	const value = event.target.value;
	dispatch(updateEventName(value, eventIndex));
};

/**
* Updates the form elements in the store
* @function updateEvType
*/
const updateEvType = (event, eventIndex, dispatch) => {
	const value = event.target.value
	dispatch(updateEventType(value, eventIndex));
};

/**
* Sets the panleIsOpen state
* @method selectDay
*/
const toggleEventPanel = (event, selectedDay, eventIndex, dispatch) => {
	event.preventDefault();
	dispatch(togglePanel(selectedDay, true, eventIndex));
};

/**
* @function EventButton
* @param {function} dispatch - passed in by Redux's connect()
*/
let EventPanel = ({dayData, dispatch}) => {
	const {events, selectedDay} = dayData;
	const eventIndex = events[selectedDay.format('DD-MM-YYYY')].length - 1;
	const event = events[selectedDay.format('DD-MM-YYYY')];
	const evName = event[eventIndex].eventName || '';
	const evType = event[eventIndex].eventType || 'Select a type';
	return (
		<form>
			<div className="eventCard centered">
			  <div className="eventCardPanel">
					<div className="weatherPanel weatherPanelStatic">
						<Weather selectedDay={selectedDay} />
					</div>
			  </div>
			  <div className="eventCardForm">
					<div className="eventCardFormRow">
						<label className="eventCardFormLabel">Type:</label>
						<select
							className="eventCardFormInput"
							value={evType}
							name="type"
							onChange={(event) => updateEvType(event, eventIndex, dispatch)}>
							 	<option disabled value={"Select a type"}>Select a type</option>
								{eventTypes.map((evType) => <option key={uuid.v4()} value={evType}>{evType}</option>)}
						</select>
					</div>
					<div className="eventCardFormRow">
						<label className="eventCardFormLabel">Name:</label>
						<input className="eventCardFormInput" name="name" type="text" value={evName} onChange={(event) => updateEvName(event, eventIndex, dispatch)}/>
					</div>
					<div className="eventCardFormDone">
						<a className="eventCardFormDoneButton button" onClick={(event) => toggleEventPanel(event, selectedDay, eventIndex, dispatch)}>
							Done
						</a>
					</div>
				</div>
			</div>
			<div className="overlay"></div>
		</form>
	);
};

EventPanel.propTypes = {
	dayData: PropTypes.shape({
		eventName: PropTypes.string,
		eventType: PropTypes.string
	})
}

EventPanel = connect()(EventPanel);

export default EventPanel;
