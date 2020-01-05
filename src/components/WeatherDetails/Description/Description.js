import React from 'react'

import Classes from './Description.module.css';

const Description = (props) => {
    return (
        <div className={Classes.DescriptionWrapper}>
            {props.type}
        </div>
    )
}

export default Description