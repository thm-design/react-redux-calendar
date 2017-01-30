import moment from 'moment';
import 'moment-range';

/**
* @function getCalendarRanges
* @author Tony Meyer <tonymeyer.dev@gmail.com>
* @param {number} year - the current year
* @param {number} month - the current month
*/
const getCalendarRanges = (year, month) => {
		const startDate = moment([year, month]);
		const firstDay = moment(startDate).startOf('month');
		const endDay = moment(startDate).endOf('month');
		const monthRange = moment.range(firstDay, endDay);
		const calendar = [];
		const weeks = [];

		// Generate weeks
		monthRange.by('days', (moment) => {
			let iWeek = moment.week();
			if (weeks.indexOf(iWeek) < 0) return weeks.push(moment.week());
		});

		weeks.forEach((week, i) => {
			let firstWeekDay = moment([year, month]).week(week).day(1);
			let lastWeekDay = moment([year, month]).week(week).day(7);
			if (i > 0 && week < weeks[i - 1]) {
				firstWeekDay = moment([year, month]).add(1, "year").week(week).day(1);
				lastWeekDay = moment([year, month]).add(1, "year").week(week).day(7);
			}

			const weekRange = moment.range(firstWeekDay, lastWeekDay);
			calendar.push(weekRange);
		});

		return calendar;
}

export default getCalendarRanges;
