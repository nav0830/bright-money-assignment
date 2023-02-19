import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./Style.css";

class NavBar extends Component {
    
    render () {
        return (
            <div className="container">
            <nav className="navbar navbar-dark bg-dark">
              <div id="navbarTogglerDemo02">
                <ul>
                  <li className="nav-item"><Link className="link" to="/">Bills</Link></li>
                  <li className="nav-item"><Link className="link" to="/add">Add a Bill</Link></li>
                  <li className="nav-item"><Link className="link" to="/chart">Series Chart</Link></li>
                </ul>
              </div>
            </nav>
            </div>  
        );
    }  
}

export default NavBar;