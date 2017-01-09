import React from 'react';
import './Top.css';

const Top = ({date, city, description, temp, tempMin, tempMax}) => {
  const desc = `${description.charAt(0).toUpperCase()}${description.slice(1)}`;
	return (
	  <div className="topContainer">
	    <div className="rightSide">
	      <div className="city">{city}</div>
				<div className="date">{date}</div>
	      <span className="description">{desc}</span>
	      <span className="temp">{`${temp}°C`}</span>
	      <div className="tempMinMax">{`${tempMax}°/${tempMin}°`}</div>
	    </div>
	  </div>
	);
};

Top.propTypes = {
  city: React.PropTypes.string,
  date: React.PropTypes.string,
  description: React.PropTypes.string,
  temp: React.PropTypes.number,
  tempMin: React.PropTypes.number,
  tempMax: React.PropTypes.number,
};


export default Top;
