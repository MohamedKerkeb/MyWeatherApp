import React from 'react';

import Classes from './Logo.module.css'

const Logo = (props) => {
    let logoWithColorScheme = [
        Classes.Logo, (props.colorScheme === 'dark') ? Classes.Dark : Classes.Light
    ]
    return(
        <h1 className={logoWithColorScheme.join(' ')} onClick={props.clicked}>My Weather App</h1>
    )
};

export default Logo;