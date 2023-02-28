import logo from '../logo.svg';
import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
        <img src={logo} width="50px"/>
        <nav style={{display: "flex", alignItems:"center"}}>
            <ul style={{display: "flex", alignItems:"center", listStyle:"none", marginRight:"10px"}}>
                <li style={{marginRight:"10px"}}>
                    <Link style={{textDecoration:"none", color:"#fff"}} to="/">Home</Link>

                    {/* using a href will reload the enttire page.. hence defying 
                    the purpose of using react to avoid entire oage re rendering..
                    hence we use navlink, so only path will chnage  */}

                </li>
                <li style={{marginRight:"10px"}}>
                    <Link style={{textDecoration:"none", color:"#fff"}} to="/about">About</Link>
                </li>
                <li>
                    <Link style={{textDecoration:"none", color:"#fff"}} to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
  );}
export default Header;