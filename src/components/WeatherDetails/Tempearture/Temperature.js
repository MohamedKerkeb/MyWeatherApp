import React from 'react'

import Classes from './Temperature.module.css';

const Temperature = ( props ) => {
    return (
        <div className={Classes.TemperatureWrapper}>
            {Math.round(props.degrees)}<span className={Classes.TemperatureSymbol}>°</span>
        </div>
    )
}

export default Temperature;