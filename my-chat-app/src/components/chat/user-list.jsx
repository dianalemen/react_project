import React from 'react';
import { Component } from 'react';


class List extends Component {
    
    render() {
        const users = this.props.items;
        return (
            <ul>
                {users.map(user =>
                    <li key={user.id}><span>{user.login}</span>
                </li>)}
            </ul>
                )
    
         }

        deleteUser(){
            
         }
    }


export default List;