import React from 'react'

import Classes from './Footer.module.css'
import Logo from '../../elements/Logo/Logo'

const Footer = (props ) => {
    console.log(props)
    return (
        <footer className={Classes.Footer} >
            <Logo colorScheme='dark' clicked={props.onClickHandler}/>
            <div className={Classes.Separator}></div>
        </footer>
    )
}

export default Footer