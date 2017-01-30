import moment from 'moment';

const initialState = {
	selectedDay: moment(),
	eventPanelIsOpen: false,
	eventListIsOpen: false,
	events: {}
};

const addEvent = (state, action) => {
	const eventKey = action.selectedDay.format('DD-MM-YYYY');
	const isOpen = !state.eventPanelIsOpen;
	let newState = { ...state, eventPanelIsOpen: isOpen};
	if(!newState.events[eventKey]) newState.events[eventKey] = [];

	if (action.close) {
		newState.events[eventKey] = newState.events[eventKey].filter((value, i) => Object.keys(value).length > 0);
		newState = { ...state, events: newState.events, eventPanelIsOpen: isOpen};
	}

	if (isOpen) {
		newState.events[eventKey].push({});
		newState = { ...state, events: newState.events, eventPanelIsOpen: isOpen};
	}

	return newState;
};

const updateEventName = (state, action) => {
	const eventKey = state.selectedDay.format('DD-MM-YYYY');
	const eventIndex = action.eventIndex;
	let newState = { ...state};
	if(!newState.events[eventKey][eventIndex]) newState.events[eventKey][eventIndex] = {};
	newState.events[eventKey][eventIndex].eventName = action.name;
	return { ...state, events: newState.events};
};

const updateEventType = (state, action) => {
	const eventKey = state.selectedDay.format('DD-MM-YYYY');
	const eventIndex = action.eventIndex;
	let newState = { ...state};
	if(!newState.events[eventKey][eventIndex]) newState.events[eventKey][eventIndex] = {};
	newState.events[eventKey][eventIndex].eventType = action.eventType;
	return { ...state, events: newState.events};
};

const removeEvent = (state, action) => {
	const eventKey = state.selectedDay.format('DD-MM-YYYY');
	const eventIndex = action.eventIndex;
	let newState = { ...state};
	if(eventIndex !== -1) newState.events[eventKey].splice(eventIndex, 1);
	return { ...state, events: newState.events};
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
