/**
* NextMonthButton component
* @author Tony Meyer <tonymeyer.dev@gmail.com>
*
*/

import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import {nextMonth} from '../../../actions/actionCreators';

/**
* Sets next month
* @function nextMonth
*/
const gotoNextMonth = (dispatch, month) => dispatch(nextMonth(month));

/**
* @function NextMonthButton
* @author Tony Meyer <tonymeyer.dev@gmail.com>
* @param {number} month - the current month
* @param {function} dispatch - passed in by Redux's connect()
*/
let NextMonthButton = ({month, dispatch}) => {

	return (
		<button className="next" onClick={() => gotoNextMonth(dispatch, month)}>&gt;</button>
	);
};

NextMonthButton.propTypes = {
	month: PropTypes.number
}

NextMonthButton = connect()(NextMonthButton);

export default NextMonthButton;
