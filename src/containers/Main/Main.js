import React, { Component } from 'react';
import './Main.css';
import { Route, Switch, Link } from 'react-router-dom';
import JoinSession from './JoinSession/JoinSession';
import CreateSession from './CreateSession/CreateSession';
import Detail from './Detail/Detail';

class Main extends Component {

    render() {
        return (
            <div>
                <div className="Main-Controls">
                    <Link to={{pathname: '/'}}><button>Join Session</button></Link>
                    <Link to={{pathname: '/create-session'}}><button>Create Session</button></Link>
                </div>
                <Switch>
                    <Route path="/" exact component={JoinSession} />
                    <Route path="/create-session" component={CreateSession} />
                    <Route path="/:id" component={Detail} />
                </Switch>
            </div>
        );
    }
}

export default Main;