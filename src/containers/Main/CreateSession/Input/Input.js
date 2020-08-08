import React from 'react';
import './Input.css';

const input = (props) => {
    let inputElement = null;

    if (props.elementType === 'input') {
        inputElement = <input className="InputElement" {...props.elementConfig} defaultValue={props.value} />;
    }
    else if (props.elementType === 'textarea')   {
        inputElement = <textarea className="InputElement" {...props.elementConfig} defaultValue={props.value} />;
    } else {
        inputElement = <input className="InputElement" {...props.elementConfig} defaultValue={props.value} />;
    }
        
            return (
            <div className="Input">
                <label className="Label">{props.label}</label>
                {inputElement}
            </div>
        )
    
}

export default input;