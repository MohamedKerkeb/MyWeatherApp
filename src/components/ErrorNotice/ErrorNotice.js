import React from 'react';

import Classes from './ErrorNotice.module.css';
import Button from '../../elements/Button/Button';

const ErrorNotice = ( props ) => {
    return (
        <div className={Classes.ErrorNoticeWrapper}>
            <h1 className={Classes.NotFound404}>404</h1>
            <div className={Classes.ErrorTextWrapper}>
                <h2 className={Classes.NotFoundHeading}>Ooops</h2>
                <p className={Classes.NotFoundDetails}>We can't find the city you are looking for</p>
                <Button name='tryAgain' type='button'  position='OnErrorNotice' clicked = {props.onClickHandler}>Try Again</Button>
            </div>
        </div>
    )
}

export default ErrorNotice