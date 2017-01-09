/**
* Calendar Component
* @author Tony Meyer <tonymeyer.dev@gmail.com>
*
*/

import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import classnames from 'classnames';
import moment from 'moment';
import uuid from 'node-uuid';
import Day from './components/Day';
import getCalendarRanges from './utils';
import NextMonthButton from './components/NextMonthButton';
import PreviousMonthButton from './components/PreviousMonthButton';
import EventButton from './components/EventButton';
import EventPanel from './components/EventPanel';
import EventList from './components/EventList';
import './calendar.css';

/**
* @function renderAddEventButton
* @param {object} selectedDay - moment.js object
* @returns {React.DOM} array of <Day /> components
*/
const renderAddEventButton = (selectedDay) => {
	return (
		<EventButton selectedDay={selectedDay} />
	);
};

/**
* @function renderEventList
* @param {array} eventsArray - event array on currently selected day
* @returns {React.DOM} <EventList /> component
*/
const renderEventList= (selectedDay, eventListIsOpen, events) => {
	const panel = eventListIsOpen ? <EventList selectedDay={selectedDay} events={events} /> : null;
	return panel;
};


/**
* @function renderAddEventButton
* @param {object} selectedDay - moment.js object
* @returns {React.DOM} array of <Day /> components
*/
const renderEventPanel = (dayData) => {
	const {eventPanelIsOpen} = dayData;
	const panel = eventPanelIsOpen ? <EventPanel dayData={dayData} /> : null;
	return panel;
};

/**
* @function renderCalendarWeeks
* @param {object} calendarRanges - object: {month: [number], and year: [number]}
* @param {object} selectedDay - moment.js object
* @param {number} month - month as a number (0 - 12)
* @returns {React.DOM} array of <Day /> components
*/
const renderCalendarWeeks = (calendarRanges, selectedDay, month, events) => calendarRanges.map((week) => {
	const dayList = [];
	week.by('days', (day) => dayList.push(day));
	return dayList.map((day) => {
		const eventsByDay = events[day.format('DD-MM-YYYY')] || [];
		const dayClasses = classnames({
			'day_muted': day.month() !== month,
			'day_selected': day.format('DD-MM-YYYY') === selectedDay.format('DD-MM-YYYY'),
			'day_today': day.format('DD-MM-YYYY') === moment().format('DD-MM-YYYY')
		});

		return (
			<Day
				dayClasses={dayClasses}
				day={day}
				key={uuid.v4()}
				events={eventsByDay} />
		);

	});
});

/**
* @function Calendar
* @param {object} calendarData - object: {month: [number], year: [number]}
* @param {object} dayData - object: {event: [number], eventPanelIsOpen: [bool], selectedDay: [moment.js object]}
*/
let Calendar = ({calendarData, dayData, dispatch}) => {
	const {month, year} = calendarData;
	const {events, selectedDay, eventListIsOpen} = dayData;
	const calendarRanges = getCalendarRanges(year, month);
	const headerText = `${moment().month(month).format("MMMM")} ${year}`;
	const eventsArray = events[selectedDay.format('DD-MM-YYYY')];

	return (
		<div className="calendar">
				<header className="header">
					<span className="headerSpan">
						{headerText}
					</span>
					<PreviousMonthButton month={month} />
					<NextMonthButton month={month} />
				</header>
				<main>
					<section className="section">
						{renderCalendarWeeks(calendarRanges, selectedDay, month, events, dayData)}
					</section>
				</main>
				{renderAddEventButton(selectedDay)}
				{renderEventPanel(dayData)}
				{renderEventList(selectedDay, eventListIsOpen, eventsArray)}
		</div>
	);
};

Calendar.propTypes = {
	calendarData: PropTypes.shape({
		month: React.PropTypes.number,
		year: React.PropTypes.number
	}),
	selectedDay: PropTypes.object
}

Calendar = connect()(Calendar);

export default Calendar;
