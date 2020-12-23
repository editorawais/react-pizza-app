import React from 'react';
import Logo from './images/logo.png';

const Header = () => {
    return (
        <div style={{display:"flex", alignItems:"center", backgroundColor:"black"}}>
            <div style={{padding:"5px"}}><img src={Logo}  alt="pizzalogo" height="40px" /></div>
            
            <div style={{marginLeft: 20,
            fontSize: 30,
            color: "yellow",
            fontFamily: "Alata,sans-serif"}}>Pizza Customization</div>
        </div>
    );
}

export default Header;
