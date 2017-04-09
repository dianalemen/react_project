import React from 'react';


class NavListComponent extends React.Component {
  render() {
    return (
      <div >
         <nav className="navigation">
           <a href="#">LOGO</a>
           <a href="#">Home</a>
           <a href="#">Chat</a>
           <a href="#">Login</a>
           <a href="#">Regeister</a>
         </nav>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;