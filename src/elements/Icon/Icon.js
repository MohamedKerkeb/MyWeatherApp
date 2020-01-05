import React from 'react'

import classes from './Icon.module.css'

const Icon =(props) => {
    return (
        <>
            <img 
                src={require(`../../assets/img/${props.type}.svg`)}
                alt={props.type}
                className={classes.Icon}
            />
        </>
    )
}

export default Icon;