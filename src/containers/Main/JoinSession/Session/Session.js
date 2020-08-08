import React from 'react';
import './Session.css';
import {withRouter} from 'react-router-dom';

const session = (props) => {

    console.log(props);

    return (
        <div className="Session">
            <p>{props.title}</p>
            <p>"<i>{props.body}</i>"</p>
            <p>{props.id}</p>
        </div>
    )
}

export default withRouter(session);