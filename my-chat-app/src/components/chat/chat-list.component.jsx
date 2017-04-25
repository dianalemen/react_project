import '../../styles/chat-list.css';
import React from 'react';
import {Component} from 'react';

import List from './user-list';

class ChatListComponent extends Component {

     constructor(){
        super();
        this.state = {
            isClose: false,
            class:'',
            filterText: ''
        };
    }
    isClose(){
         if(this.state.isClose){
             return this.setState({isClose: false, class:''})
         } else {
             return this.setState({isClose: true, class: 'close'})
         }
    }

    componentDidMount(){
        this.setState({
                users: [{id: 1, login: 'user1'},
                        {id: 2, login: 'user2'}
                        ]
            })
        }

        handleFilterTextInput(e) {
                    this.setState({
                    filterText: e.target.value.toLowerCase()
            });
        }

  render() {
        let classes = `chat-left-side ${this.state.class}`;
        if(!this.state.users) return <p>Loading...</p>;
    return (
    <div className={classes}>
            <ul className="chat-users-panel">
                <li className="left-nav">
                    <div className="left-nav__button" onClick={this.isClose.bind(this)}>
                        <input type="checkbox" className="left-nav__input"/>
                    </div>
                    <div className="left-nav__serch">
                        <form>
                            <input type="search" className="left-nav__type-search"
                                    onChange={this.handleFilterTextInput.bind(this)}/>
                            <input type="button" className="left-nav__button"/>
                        </form>
                    </div>
                    <div className="left-nav__menu">
                        <button>
                        <div className="burger"></div>
                        <div className="burger"></div>
                        <div className="burger"></div>
                    </button>
                    </div>
                </li>
                </ul>
            <ul>
                <List items={this.state.users}
                      filterText={this.state.filterText}/>
            </ul>
    </div>
    );
  }

}


ChatListComponent.defaultProps = {
};

export default ChatListComponent;