import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        fetch('https://api.github.com/users?since=135>')
        .then( (response) => response.json())
        .then(res => {this.setState({
                users: res
            })
        })
    }

    render() {
        if(!this.state.users) return <p>Loading...</p>;
        return ( 
            <ul>
                <List items={this.state.users} />
            </ul>
         );
    }
   
}

export default App;