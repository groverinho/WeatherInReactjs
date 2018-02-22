/**
 * Created by girusta on 20-02-18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const strToComponent = cities =>(
  cities.map(city => (<WeatherLocation key={city} city={city}/>))
);
const LocationList = ({cities}) => (
    <div>
        {strToComponent(cities)}
    </div>
);

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;