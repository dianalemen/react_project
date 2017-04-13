import React from 'react';
import {Component} from 'react';


require('../../styles/style_auth.css');
class HomeComponent extends Component {
  render() {
    return (
   <section className="home-component">
      <h1>Welcome in chat app!</h1>
      
  </section>
    );
  }
}

HomeComponent.defaultProps = {
};

export default HomeComponent;