/**
* EventList component
* @author Tony Meyer <tonymeyer.dev@gmail.com>
*
*/

import React from 'react';
import {connect} from 'react-redux';
import uuid from 'node-uuid';
import {removeEvent, toggleEventList} from '../../../actions/actionCreators';
import Weather from './Weather';

/**
* Sets the panleIsOpen state
* @method selectDay
*/
const removeEventItem = (index, dispatch) => {
	dispatch(removeEvent(index));
	dispatch(toggleEventList());
	setTimeout(() => {
		dispatch(toggleEventList());
	},0)
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
* @function EventButton
* @param {function} dispatch - passed in by Redux's connect()
*/
let EventList = ({selectedDay, events, dispatch}) => {
	return (
		<div>
			<div className="centered eventList">
				<div className="weatherPanel">
					<Weather selectedDay={selectedDay} />
				</div>
				<table className="eventListTable">
					<thead>
						<tr>
							<th className="eventTableTH">Name</th>
							<th className="eventTableTH">Type</th>
							<th className="eventTableTH"></th>
						</tr>
					</thead>
					<tbody>
						{events.map((item, index) => {
							return (
								<tr key={uuid.v4()}>
									<td className="eventTableTD">{item.eventName}</td>
									<td className="eventTableTD">{item.eventType}</td>
									<td className="eventTableTD">
										<button onClick={() => removeEventItem(index, dispatch)}>
											<span>x</span>
										</button>
									</td>
								</tr>
							)
						})}
				</tbody>
			</table>
			<div className="eventCardFormDone eventCardTableDone">
				<a className="eventCardFormDoneButton button" onClick={(event) => openEventList(event, dispatch)}>
					Done
				</a>
			</div>
		</div>
		<div className="overlay"></div>
	</div>
	);
};

EventList = connect()(EventList);

export default EventList;
