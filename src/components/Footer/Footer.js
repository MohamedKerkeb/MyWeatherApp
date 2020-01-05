import React from 'react'

import Classes from './Footer.module.css'
import Logo from '../../elements/Logo/Logo'

const Footer = ( {onClickHandler} ) => {
    return (
        <footer className={Classes.Footer} >
            <Logo onClick={onClickHandler, console.log('footer')}/>
            <div className={Classes.Separator}></div>
        </footer>
    )
}

export default Footer