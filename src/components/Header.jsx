import React from 'react';
import logo from './sd1.jpg';
class Header extends React.Component{
    render(){
    return(
    <div>
      <p className="name">
       Kosuke Sakuma
      </p>
<img src={logo} />
    </div>
    );
  }
}
export default Header;
