import moment from 'moment';

const month = moment().month();
const year = moment().year();
const date = moment();

const initialState = {
	date,
	month,
	year
};

const Calendar = (state = initialState, action) => {
	switch(action.type) {

		case 'NEXT_MONTH':
			let nextMonth = action.month + 1;
			let nextYear = state.year;
			if (action.month === 11) {
				nextMonth = 0;
				nextYear += 1;
			}
			return { ...state, month: nextMonth, year: nextYear};

		case 'PREVIOUS_MONTH':
			let previousMonth = action.month - 1;
			let previousYear = state.year;
			if (action.month === 0) {
				previousMonth = 11;
				previousYear -= 1;
			}
			return { ...state, month: previousMonth, year: previousYear};

		default:
			return state;
	}
};

export default Calendar;
