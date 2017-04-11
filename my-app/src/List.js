import React from 'react';
import { Component } from 'react';


class List extends Component {
    
    render() {
        const users = this.props.items;
        let size = 3;
        return (
            <ul>
                {users.slice(0, size).map(user =>
                    <li key={user.id}>
                        <img src={user.avatar_url} alt={user.id} height="50" width="50"/>
                            <span>{user.login}</span>
                        <button onClick={this.deleteUser.bind(this)}>x</button>
                </li>)}
            </ul>
                )
    
         }

        deleteUser(){
            
         }
    }


export default List