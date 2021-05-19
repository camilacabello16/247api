import React from 'react';
import logo from '../assets/images/247logo.png';
import '../assets/styles/menu.css';

function Menu() {
    return (
        <div className="wrap-menu">
            <div className="wrap-247-logo">
                <div className="api247-logo">
                    <img src={logo} />
                </div>
                <div className="api247-txt">247API</div>
            </div>
        </div>
    );

}

export default Menu;