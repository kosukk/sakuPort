import React from 'react';
import logo from'./sd1.jpg'
class Header extends React.Component{
    render(){
    return(
    <div>
      <p id="name" style="display: block;">
       Kosuke Sakuma
      </p>
      <img src={"logo"} style="display:inline;"/>
    </div>
    );
  }
}

export default Header;
