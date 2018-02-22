/**
 * Created by girusta on 07-02-18.
 */

import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) =>(
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText">{'Humidity '+ humidity + ' %'}</span>
        <span className="extraInfoText">{'Wind '+ wind}</span>
    </div>

);


WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
};

export default WeatherExtraInfo;