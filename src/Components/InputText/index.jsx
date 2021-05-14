import React, { useState } from 'react';
import appStrings from 'Utilities/StringConst';

import './style.css';

const InputText = (props) => {
    let {keyPressMethodToCall} = props;
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
        keyPressMethodToCall(event.target.value)
    };

    return (
        <div className="input-container">
            <input type="text" 
                value={inputValue}
                onChange={handleChange} 
                className="input-text" 
                placeholder={appStrings.searchPlaceholder}/>
            <span className="icon search-icon">&#9740;</span>
        </div>
    );
}

export default InputText;