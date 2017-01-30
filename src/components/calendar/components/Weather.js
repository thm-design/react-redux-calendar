import React from 'react';
import weatherApiData from './weatherApi';
import Top from './Top';
import getIconUrl from './GetIconUrl';
import {resolve} from 'react-resolver';
import moment from 'moment';

const getTimeOfTheDay = (time) => {
  if (time < 12) return 'morn';
  if (time >= 12 && time <= 17) return 'day';
  if (time > 17 && time <= 21) return 'eve';
  if (time > 21 && time <= 24) return 'night';
  return 'day';
};

const round = (value) => Math.round(value);
const A_WEEK_OLD = moment().clone().subtract(7, 'days').startOf('day');
const A_WEEK_FORWARD = moment().clone().add(7, 'days').startOf('day');
const isWithinAWeek = (momentDate) => momentDate.isAfter(A_WEEK_OLD) && momentDate.isBefore(A_WEEK_FORWARD);

const Weather = ({selectedDay, weatherData}) => {
	if (!isWithinAWeek(selectedDay)) return <div>7 day Weather forcast not available</div>;
	const dayOftheWeek = selectedDay.day();
	const time = moment().format('HH');
	const timeOfDay = getTimeOfTheDay(time);
  const currentWeather = weatherData.list[dayOftheWeek];
	const temp = round(currentWeather.temp[timeOfDay]);
	const min = round(currentWeather.temp.min);
	const max = round(currentWeather.temp.max);

	return (
		<Top
			city={weatherData.city.name}
			date={selectedDay.format('dddd MMMM DD YYYY')}
			description={currentWeather.weather[0].description}
			icon={getIconUrl(currentWeather.weather[0].id)}
			temp={temp}
			tempMin={min}
			tempMax={max}
		/>
	);

}

export default resolve('weatherData', () => weatherApiData())(Weather);
