/**
* @function PreviousMonthButton
* @author Tony Meyer <tonymeyer.dev@gmail.com>
*
*/

import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import {previousMonth} from '../../../actions/actionCreators';

/**
* Goes to previous month
* @function nextMonth
* @memberof Calendar
*/
const gotoPreviousMonth = (dispatch, month) => dispatch(previousMonth(month));

/**
* @function PreviousMonthButton
* @author Tony Meyer <tonymeyer.dev@gmail.com>
* @param {number} month - the current month
* @param {function} dispatch - passed in by Redux's connect()
*/
let PreviousMonthButton = ({month, dispatch}) => {

	return (
		<button className="previous" onClick={() => gotoPreviousMonth(dispatch, month)}>&lt;</button>
	);
};

PreviousMonthButton.propTypes = {
	month: PropTypes.number
}

PreviousMonthButton = connect()(PreviousMonthButton);

export default PreviousMonthButton;
