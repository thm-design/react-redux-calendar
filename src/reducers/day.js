import moment from 'moment';
// import Immutable from 'immutable';

const initialState = {
	selectedDay: moment(),
	eventPanelIsOpen: false,
	eventListIsOpen: false,
	events: {}
};

const addEvent = (state, action) => {
	let result = { ...state, eventPanelIsOpen: !state.eventPanelIsOpen};
	const eventKey = action.selectedDay.format('DD-MM-YYYY');

	if (action.close) {
		result.events[eventKey] = result.events[eventKey].filter((value, i) => Object.keys(value).length > 0);
		return { ...state, events: result.events, eventPanelIsOpen: !state.eventPanelIsOpen};
	}

	const isOpen = !state.eventPanelIsOpen;
	if (isOpen) {
		const newState = { ...state, eventPanelIsOpen: !state.eventPanelIsOpen};
		newState.events[eventKey] = newState.events[eventKey] || [];
		newState.events[eventKey].push({});
		result = newState;
	}

	return result;
};

const updateEventName = (state, action) => {
	const eventKey = state.selectedDay.format('DD-MM-YYYY');
	const newState = Object.assign({}, state);
	const eventIndex = action.eventIndex;
	newState.events[eventKey][eventIndex] = newState.events[eventKey][eventIndex] || {};
	newState.events[eventKey][eventIndex].eventName = action.name;
	return newState;
};

const updateEventType = (state, action) => {
	const eventKey = state.selectedDay.format('DD-MM-YYYY');
	const newState = Object.assign({}, state);
	const eventIndex = action.eventIndex;
	newState.events[eventKey][eventIndex] = newState.events[eventKey][eventIndex] || {};
	newState.events[eventKey][eventIndex].eventType = action.eventType;
	return newState;
};

const removeEvent = (state, action) => {
	const eventKey = state.selectedDay.format('DD-MM-YYYY');
	const newState = Object.assign({}, state);
	const eventIndex = action.eventIndex;
	if(eventIndex !== -1) newState.events[eventKey].splice(eventIndex, 1);
	return newState;
};

const Day = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_DAY':
			return { ...state, selectedDay: action.selectedDay}
		case 'TOGGLE_EVENT_LIST':
			return { ...state, eventListIsOpen: !state.eventListIsOpen};
		case 'TOGGLE_PANEL':
			return addEvent(state, action)
		case 'UPDATE_EVENT_NAME':
			return updateEventName(state, action)
		case 'UPDATE_EVENT_TYPE':
			return updateEventType(state, action)
		case 'REMOVE_EVENT':
			return removeEvent(state, action)
	default:
		return state;
	}
};

export default Day;
