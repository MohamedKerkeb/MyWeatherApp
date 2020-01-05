import  React from 'react';

import classes from './Preview.module.css';

const Preview = (props) => {
    return (
        <>
            <img 
                src={require('../../assets/img/Preview.svg')}
                alt='Weather App Icon'
                className={classes.Preview}
            />
        </>
    )
}

export default Preview