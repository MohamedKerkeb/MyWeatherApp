import React from 'react';

import Classes from './SearchBar.module.css'
import InputFields from '../../elements/InputField/InputField';
import Button from '../../elements/Button/Button';

const SearchBar = (props) => {
    return (
        <div className={Classes.SearchBarWrapper}>
            <InputFields type='text' name='city' label='location' placeholder='Enter a city' value={props.value} handleChange={props.onChangeHandler} error={props.error}/>
            <Button name='searchSubmit' type='submit' position='onForm' clicked={props.onClickHandler} >Set</Button>
        </div>
    )
}

export default SearchBar