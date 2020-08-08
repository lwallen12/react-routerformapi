import React, {Component} from 'react';
import Session from './Session/Session';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class JoinSession extends Component {

    state = {
        sessions: []
    }

        componentDidMount() {

            console.log(this.props);

            Axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    this.setState({sessions: response.data})
                    //console.log(response);
                });
        }

    render() {
        
        let sessions = this.state.sessions.map(session => {
            return (
            <Link key={session.id} to={'/' + session.id}>
                <Session
                    id={session.id}
                    title={session.title}
                    body={session.body}
                >
                </Session>
            </Link>)
        });
        return sessions;
    }
}

export default JoinSession;