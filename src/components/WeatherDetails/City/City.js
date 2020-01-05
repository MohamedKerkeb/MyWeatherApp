import React from 'react'

import Classes from './City.module.css'

const City = (props) => {
    return (
        <div className={Classes.CityWrapper}>
            {props.city}
        </div>
    )
}

export default City