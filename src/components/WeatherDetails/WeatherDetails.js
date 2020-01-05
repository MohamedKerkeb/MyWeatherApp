import React from 'react';

import Classes from './WeatherDetails.module.css'
import Icon from '../../elements/Icon/Icon';
import Temperature from './Tempearture/Temperature'
import Description from './Description/Description';
import Date from './Date/Date'
import City from './City/City';

const WeatherDetails = (props) => {
    console.log(props.data.description)
    return (
        <div className={Classes.WeatherDetailsWrapper}>
            <div className={Classes.WeatherIconWrapper}>
            <Icon type={props.data.description}/>
            </div>
            <div className={Classes.WeatherDataWrapper}>
                <City city={props.data.city}/>
                <Temperature degrees={props.data.temperature}/>
                <Description type={props.data.description}/>
                <Date />
            </div>
        </div>
    )
}

export default WeatherDetails