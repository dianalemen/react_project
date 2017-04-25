import '../../styles/user-list.css';
import React from 'react';
import {Component} from 'react';


class List extends Component {

    constructor(props){
        super(props);
        this.state = {selected : 1};
    }

    render() {
        const users = this.props.items;
        const filterText = this.props.filterText;
        console.log(filterText);
        return (
            <ul>
               {users.map((user) => 
            <li key={user.id} className="user-content" onClick={this.handleClick.bind(this)}>
                        <div className=" user-content__image ">
                    </div>
                    <div className="user-content__status ">
                        <p>{user.login}</p>
                         <p>{user.login}</p>
                    </div>
                        <div className="user-content__time ">
                        <p className="time">2m</p>
                    </div>
                </li>
                 )}
            </ul>
            
            )
        }

 /*getInitialState() {
    return {
    	selected: this.props.selected
    };
  }*/
   
 handleClick(index,e) {
       e.preventDefault();
            this.setState({
    	selected: index
    });
}
    }


export default List;