import React, { Component } from 'react';
import Axios from 'axios';
import './Detail.css';

class Detail extends Component {

    state = {
        session: []
    }

    componentDidMount() {

        console.log(this.props);

        Axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
            .then(response => {
                this.setState({session: response.data})
                console.log(response);
            });
    }

    render() {
        return (
        <div>
        <div className="Detail">
            <small>UserId: {this.state.session.userId}</small>
            <h1>{this.state.session.title}</h1>
            <p>{this.state.session.body}</p>
        </div>
        </div>
        );
    }

}

export default Detail;