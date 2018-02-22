/**
 * Created by girusta on 06-02-18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({city}) =>{

    return (
        <div className="LocationCont"> <h1>{city}</h1> </div>
    );
};


Location.propTypes = {
    city: PropTypes.string.isRequired
};

export default  Location;