import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

    state = {
        username: "Gofmannir"
    }

    eventHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
        <div className="App">
            <UserInput currentUsername={this.state.username} event_handler={this.eventHandler} />
            <UserOutput username={this.state.username} />
            <UserOutput username={this.state.username} />
            <UserOutput username={this.state.username} />
        </div>
        );
    }
}

export default App;
