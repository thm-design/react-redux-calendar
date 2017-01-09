import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import Calendar from './calendar';
import Day from './day';

const rootReducer = combineReducers({
	Calendar,
	Day,
	routing: routerReducer
});

export default rootReducer;
