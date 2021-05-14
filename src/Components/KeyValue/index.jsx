import React from 'react';
import './style.css';

const KeyValue = (props) => {
    let {keyToDisplay, value, separator} = props;
    return (
        <React.Fragment>
            <div className="attributes">
                {!!keyToDisplay && (<div className="key">{keyToDisplay} :</div>)}
                <div className="vaue">{value}</div>
                {separator && (<div className="separator">{separator}</div>)}
            </div>
        </React.Fragment>
    );
}

export default KeyValue;