import React from 'react';
import './Input.css';

const input = (props) => {
    let inputElement = null;

    if (props.elementType === 'input') {
        inputElement = <input className="InputElement" {...props.elementConfig} defaultValue={props.value} onChange={props.changed} />;
    }
    else if (props.elementType === 'textarea')   {
        inputElement = <textarea className="InputElement" {...props.elementConfig} defaultValue={props.value} onChange={props.changed} />;
    } 
    else if (props.elementType === 'select') {
        inputElement = <select className="SelectElement" defaultValue={props.value} onChange={props.changed}>
        {props.elementConfig.options.map(option => (
            <option value={option.value}>{option.displayValue}</option>
        ))}
        </select>
    }
    else {
        inputElement = <input className="InputElement" {...props.elementConfig} defaultValue={props.value} onChange={props.changed} />;
    }
        
            return (
            <div className="Input">
                <label className="Label">{props.label}</label>
                {inputElement}
            </div>
        )
    
}

export default input;