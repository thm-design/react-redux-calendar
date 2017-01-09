const SET_DAY = 'SET_DAY';
const NEXT_MONTH = 'NEXT_MONTH';
const PREVIOUS_MONTH = 'PREVIOUS_MONTH';
const TOGGLE_PANEL = 'TOGGLE_PANEL';
const UPDATE_EVENT_NAME = 'UPDATE_EVENT_NAME';
const UPDATE_EVENT_TYPE = 'UPDATE_EVENT_TYPE';
const TOGGLE_EVENT_LIST = 'TOGGLE_EVENT_LIST';
const REMOVE_EVENT = 'REMOVE_EVENT';

export const toggleEventList = (selectedDay) => {
  return {
    type: TOGGLE_EVENT_LIST,
    selectedDay
  }
};

export const setDay = (selectedDay) => {
  return {
    type: SET_DAY,
    selectedDay
  }
};

export const nextMonth = (month) => {
  return {
    type: NEXT_MONTH,
    month
  }
};

export const previousMonth = (month) => {
  return {
    type: PREVIOUS_MONTH,
    month
  }
};

export const togglePanel = (selectedDay, close, eventIndex) => {
  return {
    type: TOGGLE_PANEL,
    selectedDay,
    close,
    eventIndex
  }
};

export const updateEventName = (name, eventIndex) => {
  return {
    type: UPDATE_EVENT_NAME,
    name,
    eventIndex
  }
};

export const updateEventType = (eventType, eventIndex) => {
  return {
    type: UPDATE_EVENT_TYPE,
    eventType,
    eventIndex
  }
};

export const removeEvent = (eventIndex) => {
  return {
    type: REMOVE_EVENT,
    eventIndex
  }
};
