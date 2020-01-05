import React from 'react';
import dateformat from 'dateformat'

import Classes from './Date.module.css';

const date = ( props ) => {
    const today = new Date()
    return (
        <div className={Classes.DateWrapper}>
            {dateformat(today, "dddd, mmmm dd")}
        </div>
    )
}

export default date