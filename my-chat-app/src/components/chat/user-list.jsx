require('../../styles/user-list.css');
import React from 'react';
import { Component } from 'react';


class List extends Component {
    
    render() {
        const users = this.props.items;
        return (
            <ul>
                {users.map(user =>
                    <li key={user.id} className="user-content">
                        <div className=" user-content__image ">
                    </div>
                    <div className="user-content__status ">
                        <p>{user.login}</p>
                         <p>{user.login}</p>
                    </div>
                        <div className="user-content__time ">
                        <p className="time">2m</p>
                    </div>
                </li>)}
            </ul>
                )
    
         }

        deleteUser(){
            
         }
    }


export default List;